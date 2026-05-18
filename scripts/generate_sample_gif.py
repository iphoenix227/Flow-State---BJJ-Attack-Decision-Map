"""Generate a sample animated GIF to use as wallpaper.

This script will try to install Pillow if it's missing.
"""
import sys
import subprocess
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
except Exception:
    print("Pillow not found, attempting to install...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "--user", "Pillow"]) 
    from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parent.parent / "wallpapers" / "sample_clock.gif"
OUT.parent.mkdir(parents=True, exist_ok=True)

WIDTH, HEIGHT = 1280, 720
FRAMES = 60
FPS = 12

font = None
try:
    font = ImageFont.truetype("seguiemj.ttf", 48)
except Exception:
    try:
        font = ImageFont.truetype("arial.ttf", 48)
    except Exception:
        font = ImageFont.load_default()

frames = []
for i in range(FRAMES):
    im = Image.new("RGBA", (WIDTH, HEIGHT), (12, 12, 30, 255))
    draw = ImageDraw.Draw(im)
    # moving glow circle
    cx = int(WIDTH * (0.2 + 0.6 * (i / FRAMES)))
    cy = HEIGHT // 2
    r = 140
    for a in range(8, 0, -1):
        alpha = int(20 * a)
        draw.ellipse((cx - r - a*6, cy - r - a*6, cx + r + a*6, cy + r + a*6), fill=(60,80,180, alpha))
    # time text
    from datetime import datetime, timedelta
    t = (datetime.utcnow() + timedelta(seconds=i)).strftime("%H:%M:%S")
    # compute text size using textbbox for modern Pillow
    bbox = draw.textbbox((0, 0), t, font=font)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    draw.text(((WIDTH - w) / 2, (HEIGHT - h) / 2), t, font=font, fill=(255,255,255,255))
    frames.append(im.convert("P", palette=Image.ADAPTIVE))

frames[0].save(OUT, save_all=True, append_images=frames[1:], duration=int(1000/FPS), loop=0, disposal=2)
print(f"Generated sample GIF: {OUT}")
