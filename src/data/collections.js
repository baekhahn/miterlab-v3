import content from './content.json'
import { collections as covers, collectionBySlug } from './site'

// Merge homepage cover/meta with scraped detail galleries.
export const collectionsFull = covers.map((c) => ({
  ...c,
  gallery: content.collections[c.slug]?.gallery || [c.image],
}))

export const fullBySlug = (slug) => {
  const cover = collectionBySlug(slug)
  if (!cover) return null
  const detail = content.collections[slug] || {}
  return {
    ...cover,
    projectType: detail.projectType || 'Personal',
    for: detail.for || '',
    gallery: detail.gallery || [cover.image],
  }
}

export const profile = content.profile
export const contact = content.contact
export const journal = content.journal || []
export const journalBySlug = (slug) => journal.find((p) => p.slug === slug)
