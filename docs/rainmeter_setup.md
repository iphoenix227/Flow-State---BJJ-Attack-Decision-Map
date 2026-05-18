# Rainmeter + Animated GIF wallpaper setup

This guide shows how to run a Rainmeter clock skin and set an animated GIF as wallpaper using Lively (recommended) or another wallpaper tool.

## Rainmeter skin (Clock)

1. Install Rainmeter from https://www.rainmeter.net/ and run it.
2. Copy the `rainmeter/Clock` folder from this repo into `%USERPROFILE%\Documents\Rainmeter\Skins\`.
3. In Rainmeter, click `Refresh All`, then load the `Clock` skin.

The provided skin (`rainmeter/Clock/skin.ini`) displays an updating digital clock and date. You can edit the `FontSize` and `FontFace` in the file for customization.

## Animated GIF wallpaper

Windows does not natively support animated GIF wallpapers. Recommended options:

- Lively Wallpaper (free, open-source): https://github.com/rocksdanister/lively
  - Install Lively, then `Add Wallpaper` → choose the GIF file and set it.
- Wallpaper Engine (Steam, paid): supports GIFs/videos.
- BioniX Wallpaper (has an Animator utility).

## Generating a sample GIF

A helper script `scripts/generate_sample_gif.py` creates `wallpapers/sample_clock.gif` for testing. Run:

```powershell
python .\scripts\generate_sample_gif.py
```

If `Pillow` is missing the script will try to install it for the current user.

## Using a Final Fantasy VII wallpaper

Final Fantasy VII artwork is copyrighted. If you want an FFVII wallpaper you must either:

- Use an image you already own or have permission to use, or
- Purchase/obtain it from a licensed source, or
- Use fan art only when you have explicit permission from the artist.

I cannot provide copyrighted FFVII images. Instead, use the sample GIF or provide a non-copyrighted image and I can help integrate it.

## Next steps

- Generate the sample GIF and set it in Lively to test. 
- I can help convert a supplied image into an animated GIF or create an FFVII-styled original (no copyrighted characters or assets).
