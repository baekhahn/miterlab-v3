// Auto-discovered projects. To add/edit a project, just manage its folder:
//   src/projects/<slug>/
//     meta.js   -> export default { title, year, projectType, for, description }
//     cover.jpg -> grid/list/cover image
//     1.jpg 2.jpg 3.jpg ... -> detail gallery (shown in numeric order)
// Vite bundles these images with correct (base-aware) URLs automatically.

const metaModules = import.meta.glob('./*/meta.js', { eager: true, import: 'default' })
const coverModules = import.meta.glob('./*/cover.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
})
const galleryModules = import.meta.glob('./*/[0-9]*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
})

const slugOf = (path) => path.split('/')[1]
const numOf = (path) => {
  const m = path.match(/\/(\d+)\.[^/]+$/)
  return m ? parseInt(m[1], 10) : 0
}
const group = (modules) => {
  const out = {}
  for (const [path, url] of Object.entries(modules)) {
    const slug = slugOf(path)
    ;(out[slug] = out[slug] || []).push([path, url])
  }
  return out
}

const covers = group(coverModules)
const galleries = group(galleryModules)

export const projects = Object.entries(metaModules)
  .map(([path, meta]) => {
    const slug = slugOf(path)
    const cover = covers[slug]?.[0]?.[1] || galleries[slug]?.[0]?.[1] || ''
    const gallery = (galleries[slug] || [])
      .slice()
      .sort((a, b) => numOf(a[0]) - numOf(b[0]))
      .map(([, url]) => url)
    return { slug, image: cover, gallery, ...meta }
  })
  // newest first, then alphabetical
  .sort((a, b) => Number(b.year) - Number(a.year) || a.title.localeCompare(b.title))

export const projectBySlug = (slug) => projects.find((p) => p.slug === slug)
