import sharp from "sharp";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(root, "public", "favicon.svg"));

const sizes = [
  { name: "apple-touch-icon.png", size: 180 },
  { name: "pwa-192.png", size: 192 },
  { name: "pwa-512.png", size: 512 },
];

for (const { name, size } of sizes) {
  await sharp(svg).resize(size, size).png().toFile(join(root, "public", name));
  console.log(`Wrote public/${name} (${size}x${size})`);
}
