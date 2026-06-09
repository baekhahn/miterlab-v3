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
  const total = c.gallery.length

  const meta = [
    { label: 'Project Type', value: c.projectType },
    { label: 'For', value: c.for },
    { label: 'Year', value: c.year },
  ]

  return (
    <article className="px-8 pb-24">
      {/* PC: 4 columns — [info] [image image] [caption] */}
      <div className="grid grid-cols-1 gap-10 desktop:grid-cols-4 desktop:gap-8">
        {/* Col 1 — sticky info */}
        <div className="desktop:sticky desktop:top-8 desktop:h-fit desktop:self-start">
          <Link
            to="/collection"
            className="text-[12px] text-muted transition-colors hover:text-paper"
          >
            ← Back
          </Link>

          <dl className="mt-10 space-y-5 text-[12px] desktop:mt-16">
            {meta.map((m) => (
              <div key={m.label} className="flex justify-between gap-6 border-b border-paper/15 pb-3">
                <dt className="text-muted">{m.label}</dt>
                <dd className="text-right">{m.value}</dd>
              </div>
            ))}
          </dl>

          <h1 className="mt-16 text-4xl font-medium tracking-tight desktop:mt-24">{c.title}</h1>
        </div>

        {/* Cols 2–4 — gallery: each image (centered, 2 cols) + caption (1 col, bottom-right) */}
        <div className="space-y-12 desktop:col-span-3 desktop:space-y-16">
          {c.gallery.map((src, i) => (
            <Reveal
              key={i}
              className="grid grid-cols-1 items-end gap-4 desktop:grid-cols-3 desktop:gap-8"
            >
              {/* image — middle two columns, centered */}
              <div className="flex justify-center desktop:col-span-2">
                <img
                  src={asset(src)}
                  alt={`${c.title} — ${i + 1}`}
                  loading="lazy"
                  className="w-full"
                />
              </div>

              {/* caption — last column, aligned to the image bottom-right */}
              <div className="desktop:col-span-1">
                <div className="text-[13px] leading-relaxed">
                  <div className="text-muted">
                    {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                  </div>
                  <div className="mt-1">{c.title}</div>
                  <div className="text-muted">
                    {c.projectType} · {c.year}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Next collection */}
      <div className="mt-20 border-t border-paper/15 pt-8">
        <div className="text-[12px] text-muted">Next Collection</div>
        <Link
          to={`/collection/${next.slug}`}
          className="mt-2 inline-block text-4xl font-medium tracking-tight transition-opacity hover:opacity-60"
        >
          {next.title} →
        </Link>
      </div>
    </article>
  )
}
