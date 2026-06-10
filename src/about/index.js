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

const numOf = (path) => {
  const m = path.match(/\/(\d+)\.[^/]+$/)
  return m ? parseInt(m[1], 10) : 0
}

const cover = Object.values(coverModules)[0] || ''
const gallery = Object.entries(galleryModules)
  .sort((a, b) => numOf(a[0]) - numOf(b[0]))
  .map(([, url]) => url)

export const about = { ...content, cover, gallery }
