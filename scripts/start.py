from PIL import Image, ImageDraw, ImageFont
import ctypes, time, os

SPI_SETDESKWALLPAPER = 20

def set_wallpaper(path):
    ctypes.windll.user32.SystemParametersInfoW(SPI_SETDESKWALLPAPER, 0, path, 3)

def make_clock_image(path, size=(1920,1080)):
    img = Image.new("RGB", size, "black")
    draw = ImageDraw.Draw(img)
    now = time.strftime("%H:%M:%S")
    font = ImageFont.truetype("arial.ttf", 120)
    w,h = draw.textsize(now, font=font)
    draw.text(((size[0]-w)/2,(size[1]-h)/2), now, font=font, fill="white")
    img.save(path)

def main():
    dest = os.path.abspath("clock.jpg")
    while True:
        make_clock_image(dest)
        set_wallpaper(dest)
        time.sleep(1)          # update every second