import content from './content.json'
import { projects, projectBySlug } from '../projects'

// Projects (covers + galleries + meta) come from src/projects/<slug>/.
export const collectionsFull = projects
export const fullBySlug = projectBySlug

// Journal / contact content still lives in content.json.
// (About content moved to its own folder: src/about/)
export const contact = content.contact
export const journal = content.journal || []
export const journalBySlug = (slug) => journal.find((p) => p.slug === slug)
