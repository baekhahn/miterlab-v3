export const site = {
  brand: 'Miterlab',
  navLeft: [
    { label: 'About', href: '/profile' },
    { label: 'Project', href: '/project' },
  ],
  navRight: [
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' },
  ],
  about:
    'We connect distinct pieces with care, crafting experiences that feel whole and deeply human. Like a precisely mitered joint locked at 45 degrees, different ideas and technologies join seamlessly to create solid, lasting value.',
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'Twitter', href: '#' },
  ],
}

// Homepage scattered grid: 6 columns x 3 rows, sparse placement (matches original).
// `cell` = desktop grid position; cards flow in source order on tablet/phone.
export const collections = [
  { slug: 'fields', title: 'Fields', year: '2024', image: '/images/fields.jpg', cell: 'desktop:col-start-1 desktop:row-start-1' },
  { slug: 'plates-palettes', title: 'Plates & Palettes', year: '2023', image: '/images/plates-palettes.jpg', cell: 'desktop:col-start-2 desktop:row-start-1' },
  { slug: 'net-play', title: 'Net Play', year: '2022', image: '/images/net-play.jpg', cell: 'desktop:col-start-6 desktop:row-start-1' },
  { slug: 'celestial', title: 'Celestial', year: '2019', image: '/images/celestial.jpeg', cell: 'desktop:col-start-3 desktop:row-start-2' },
  { slug: 'quiet-forms', title: 'Quiet Forms', year: '2022', image: '/images/quiet-forms.jpg', cell: 'desktop:col-start-4 desktop:row-start-2' },
  { slug: 'prime', title: 'Prime', year: '2021', image: '/images/prime.jpeg', cell: 'desktop:col-start-6 desktop:row-start-2' },
  { slug: 'st-petersburg', title: 'St Petersburg', year: '2021', image: '/images/st-petersburg.jpg', cell: 'desktop:col-start-1 desktop:row-start-3' },
  { slug: 'melody', title: 'Melody', year: '2019', image: '/images/melody.png', cell: 'desktop:col-start-2 desktop:row-start-3' },
  { slug: 'alfresco', title: 'Alfresco', year: '2019', image: '/images/alfresco.png', cell: 'desktop:col-start-4 desktop:row-start-3' },
  { slug: 'outliers', title: 'Outliers', year: '2019', image: '/images/outliers.jpeg', cell: 'desktop:col-start-5 desktop:row-start-3' },
]

export const collectionBySlug = (slug) => collections.find((c) => c.slug === slug)

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
