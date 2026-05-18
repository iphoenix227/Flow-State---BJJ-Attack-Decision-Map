"""Create an animated GIF from a supplied background image and copy to Lively folder.

Usage:
  python scripts/make_gif_from_image.py

The script defaults to the image path you provided and will copy the generated GIF
into your Lively Wallpaper folder so it appears in the app.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from datetime import datetime
import shutil

# --- User-supplied paths (adjust if needed) ---
DEFAULT_IMAGE = Path(r"C:\Users\mason\OneDrive\Pictures\565797-1920x1080-desktop-full-hd-the-return-of-the-king-background.jpg")
LIVELY_FOLDER = Path(r"C:\Users\mason\AppData\Local\Packages\12030rocksdanister.LivelyWallpaper_97hta09mmv6hy\LocalCache\Local\Lively Wallpaper")

OUT_LOCAL = Path(__file__).resolve().parent.parent / "wallpapers" / "from_image_clock.gif"
OUT_LOCAL.parent.mkdir(parents=True, exist_ok=True)

WIDTH, HEIGHT = 1280, 720
FRAMES = 30
FPS = 12
DURATION_MS = int(1000 / FPS)

# load font (fall back to default)
try:
    font = ImageFont.truetype("arial.ttf", 64)
except Exception:
    font = ImageFont.load_default()

img_path = DEFAULT_IMAGE
if not img_path.exists():
    print(f"Input image not found: {img_path}")
    raise SystemExit(1)

# load background and ensure size
bg = Image.open(img_path).convert("RGBA")
bg = bg.resize((WIDTH, HEIGHT), Image.LANCZOS)

frames = []
for i in range(FRAMES):
    # subtle zoom effect
    scale = 1.0 + 0.02 * (i / FRAMES)
    w = int(WIDTH * scale)
    h = int(HEIGHT * scale)
    # create scaled image then crop center to target size
    tmp = bg.resize((w, h), Image.LANCZOS)
    left = (w - WIDTH) // 2
    top = (h - HEIGHT) // 2
    frame = tmp.crop((left, top, left + WIDTH, top + HEIGHT)).copy()

    draw = ImageDraw.Draw(frame)
    now = datetime.now().strftime("%H:%M:%S")
    bbox = draw.textbbox((0, 0), now, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x = (WIDTH - tw) // 2
    y = int(HEIGHT * 0.85) - th // 2

    # draw semi-transparent rectangle behind text for readability
    pad_x = 20
    pad_y = 8
    rect = (x - pad_x, y - pad_y, x + tw + pad_x, y + th + pad_y)
    draw.rectangle(rect, fill=(0, 0, 0, 120))
    draw.text((x, y), now, font=font, fill=(255, 255, 255, 255))

    frames.append(frame.convert("P", palette=Image.ADAPTIVE))

frames[0].save(OUT_LOCAL, save_all=True, append_images=frames[1:], duration=DURATION_MS, loop=0, disposal=2)
print(f"Generated GIF: {OUT_LOCAL}")

# copy to Lively folder so Lively can use it
if LIVELY_FOLDER.exists() and LIVELY_FOLDER.is_dir():
    dest = LIVELY_FOLDER / OUT_LOCAL.name
    shutil.copy2(OUT_LOCAL, dest)
    print(f"Copied GIF to Lively folder: {dest}")
else:
    print(f"Lively folder not found: {LIVELY_FOLDER}. Copy skipped.")
