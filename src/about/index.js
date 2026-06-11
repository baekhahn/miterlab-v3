// Auto-discovered About content. To edit the About page, manage this folder:
//   src/about/
//     content.js   -> export default { paras: [...] }
//     cover.webp   -> top hero image
//     1.webp 2.webp ... -> gallery below the text (shown in numeric order)
// Vite bundles these images with correct (base-aware) URLs automatically.
import content from './content.js'

const coverModules = import.meta.glob('./cover.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
})
const galleryModules = import.meta.glob('./[0-9]*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
})
// Editorial figures for the About body (baseform-style gallery), in numeric order.
const figureModules = import.meta.glob('./figures/[0-9]*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
})

const numOf = (path) => {
  const m = path.match(/\/(\d+)\.[^/]+$/)
  return m ? parseInt(m[1], 10) : 0
}

const cover = Object.values(coverModules)[0] || ''
const gallery = Object.entries(galleryModules)
  .sort((a, b) => numOf(a[0]) - numOf(b[0]))
  .map(([, url]) => url)

// Aspect ratios (w/h) per figure number — lets the ticker lay out exact-size
// skeleton boxes before the images load. Update if a figure is replaced.
const figureRatios = {
  1: 1200 / 840,
  2: 900 / 1200,
  3: 960 / 1200,
  4: 1200 / 655,
  5: 840 / 1200,
}

const figures = Object.entries(figureModules)
  .sort((a, b) => numOf(a[0]) - numOf(b[0]))
  .map(([path, url]) => ({ src: url, ratio: figureRatios[numOf(path)] || 4 / 3 }))

export const about = { ...content, cover, gallery, figures }
