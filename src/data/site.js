export const site = {
  brand: 'Miterlab',
  navLeft: [
    { label: 'About', href: '/about' },
    { label: 'Project', href: '/project' },
  ],
  navRight: [
    // Journal hidden for now — uncomment to restore.
    // { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' },
  ],
  about:
    'We craft cohesive, thoughtful, and deeply human experiences. Like a mitered joint set at 45 degrees, we bring ideas and technologies together with care to create lasting value.',
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'Twitter', href: '#' },
  ],
}

// Projects are auto-discovered from src/projects/<slug>/ (see src/projects/index.js).
export { projects as collections, projectBySlug as collectionBySlug } from '../projects'

// Homepage flow layout — mirrors the reference exactly:
// a 12-column auto-flow grid where cards span 2 cols and empty `spacer`
// items (desktop only) create the scattered rhythm.
export const homeLayout = [
  { type: 'card', slug: 'fields' },
  { type: 'card', slug: 'plates-palettes' },
  { type: 'spacer', span: 'desktop:col-span-6' },
  { type: 'card', slug: 'net-play' },
  { type: 'spacer', span: 'desktop:col-span-4' },
  { type: 'card', slug: 'celestial' },
  { type: 'card', slug: 'quiet-forms' },
  { type: 'spacer', span: 'desktop:col-span-2' },
  { type: 'card', slug: 'prime' },
  { type: 'card', slug: 'st-petersburg' },
  { type: 'card', slug: 'melody' },
  { type: 'spacer', span: 'desktop:col-span-2' },
  { type: 'card', slug: 'alfresco' },
  { type: 'card', slug: 'outliers' },
]
