// Convert a project's source images to high-quality WebP (UI-friendly).
// Usage: node scripts/optimize-images.mjs <slug> [maxPx] [quality]
// - Put originals (png/jpg/...) into src/projects/<slug>/ (any names; processed in sort order).
// - Outputs 01.webp, 02.webp, ... ; moves originals into src/projects/<slug>/_originals/.
import sharp from 'sharp'
import { readdirSync, mkdirSync, renameSync, rmSync } from 'fs'
import path from 'path'

const slug = process.argv[2]
const MAX = Number(process.argv[3] || 2560)
const Q = Number(process.argv[4] || 90)
if (!slug) { console.error('slug required'); process.exit(1) }

const dir = path.join('src/projects', slug)
const isSource = (f) => /\.(png|jpe?g|tiff?|heic|heif)$/i.test(f)
const sources = readdirSync(dir).filter(isSource).sort((a, b) =>
  a.localeCompare(b, undefined, { numeric: true })
)
if (!sources.length) { console.error(`No source images in ${dir}`); process.exit(1) }

// remove any stale numeric webp outputs first
readdirSync(dir).filter((f) => /^\d+\.webp$/i.test(f)).forEach((f) => rmSync(path.join(dir, f)))
mkdirSync(path.join(dir, '_originals'), { recursive: true })

const pad = (n) => String(n).padStart(2, '0')
for (let i = 0; i < sources.length; i++) {
  const src = path.join(dir, sources[i])
  const out = path.join(dir, `${pad(i + 1)}.webp`)
  const meta = await sharp(src).metadata()
  const w = await sharp(src)
    .rotate() // apply EXIF orientation so portrait shots stay upright
    .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: Q, effort: 6 })
    .toFile(out)
  console.log(`${sources[i]} (${meta.width}x${meta.height}) -> ${pad(i + 1)}.webp ${(w.width)}x${w.height} ${(w.size/1024).toFixed(0)}KB`)
  renameSync(src, path.join(dir, '_originals', sources[i]))
}
console.log('done. originals preserved in _originals/')
