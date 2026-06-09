import { Link, useParams, Navigate } from 'react-router-dom'
import { fullBySlug } from '../data/collections'
import { collections } from '../data/site'
import { asset } from '../lib/asset'
import Reveal from '../components/Reveal'

export default function CollectionDetail() {
  const { slug } = useParams()
  const c = fullBySlug(slug)
  if (!c) return <Navigate to="/collection" replace />

  const idx = collections.findIndex((x) => x.slug === slug)
  const next = collections[(idx + 1) % collections.length]

  const meta = [
    { label: 'Project Type', value: c.projectType },
    { label: 'For', value: c.for },
    { label: 'Year', value: c.year },
  ]

  return (
    <article className="px-8 pb-24">
      <div className="grid grid-cols-1 gap-y-10 desktop:grid-cols-2 desktop:gap-x-8">
        {/* Left: sticky meta + title */}
        <div className="desktop:sticky desktop:top-8 desktop:h-fit desktop:self-start">
          <Link
            to="/collection"
            className="text-[12px] text-muted transition-colors hover:text-paper"
          >
            ← Back
          </Link>

          <dl className="mt-10 max-w-sm space-y-5 text-[12px] desktop:mt-16">
            {meta.map((m) => (
              <div key={m.label} className="flex justify-between gap-6 border-b border-paper/15 pb-3">
                <dt className="text-muted">{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>

          <h1 className="mt-16 text-6xl font-medium tracking-tight desktop:mt-24 desktop:text-7xl">
            {c.title}
          </h1>
        </div>

        {/* Right: gallery stack at natural aspect ratios */}
        <div className="space-y-8">
          {c.gallery.map((src, i) => (
            <Reveal key={i}>
              <img
                src={asset(src)}
                alt={`${c.title} — ${i + 1}`}
                loading="lazy"
                className="w-full"
              />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20 border-t border-paper/15 pt-8">
        <div className="text-[12px] text-muted">Next Collection</div>
        <Link
          to={`/collection/${next.slug}`}
          className="mt-2 inline-block text-4xl font-medium tracking-tight transition-opacity hover:opacity-60 desktop:text-6xl"
        >
          {next.title} →
        </Link>
      </div>
    </article>
  )
}
