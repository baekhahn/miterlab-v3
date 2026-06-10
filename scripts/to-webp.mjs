// Convert every non-WebP image in project folders to WebP, keeping the base
// name (cover.jpg -> cover.webp, 1.png -> 1.webp). Originals are moved to
// <project>/_originals/. WebP files are left untouched.
// Usage:
//   node scripts/to-webp.mjs            # all projects
//   node scripts/to-webp.mjs <slug>     # one project
import sharp from 'sharp'
import { readdirSync, statSync, mkdirSync, renameSync, rmSync } from 'fs'
import path from 'path'

const ROOT = 'src/projects'
const MAX = 2560
const Q = 90
const isRaster = (f) => /\.(png|jpe?g|tiff?|heic|heif)$/i.test(f)

const only = process.argv[2]
const slugs = only
  ? [only]
  : readdirSync(ROOT).filter((d) => statSync(path.join(ROOT, d)).isDirectory())

for (const slug of slugs) {
  const dir = path.join(ROOT, slug)
  // drop junk
  for (const f of readdirSync(dir)) {
    if (f === '.DS_Store') rmSync(path.join(dir, f))
  }
  const sources = readdirSync(dir).filter((f) => isRaster(f))
  if (!sources.length) continue
  mkdirSync(path.join(dir, '_originals'), { recursive: true })

  for (const f of sources) {
    const base = f.replace(/\.[^.]+$/, '')
    const out = path.join(dir, `${base}.webp`)
    const w = await sharp(path.join(dir, f))
      .rotate()
      .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: Q, effort: 6 })
      .toFile(out)
    renameSync(path.join(dir, f), path.join(dir, '_originals', f))
    console.log(`${slug}/${f} -> ${base}.webp ${w.width}x${w.height} ${(w.size / 1024).toFixed(0)}KB`)
  }
}
console.log('done.')
