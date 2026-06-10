import { projectBySlug } from '../projects'

// Project description now lives in each project's meta.js (src/projects/<slug>/meta.js).
export const descriptionFor = (slug) =>
  projectBySlug(slug)?.description ||
  'A selected series exploring light, form, and a sense of place.'
