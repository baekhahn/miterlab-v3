import { Link, useParams, Navigate } from 'react-router-dom'
import { fullBySlug } from '../data/collections'
import { collections } from '../data/site'
import { captionFor } from '../lib/captions'
import { descriptionFor } from '../lib/descriptions'
import Reveal from '../components/Reveal'
import Img from '../components/Img'

export default function CollectionDetail() {
  const { slug } = useParams()
  const c = fullBySlug(slug)
  if (!c) return <Navigate to="/project" replace />

  const idx = collections.findIndex((x) => x.slug === slug)
  const next = collections[(idx + 1) % collections.length]

  const meta = [
    { label: 'Project Type', value: c.projectType },
    { label: 'For', value: c.for },
    { label: 'Year', value: c.year },
  ]

  return (
    <article className="px-8 pb-24">
      {/* PC: 12 columns — [text x3] [image x6] [caption x3].
          >=1920px: the info column takes the same width as the caption
          column, so the image sits exactly centered in the viewport. */}
      <div className="grid grid-cols-1 gap-10 desktop:grid-cols-12 desktop:gap-8 min-[1920px]:grid-cols-[clamp(446px,30vw_-_130px,620px)_minmax(0,1fr)]">
        {/* Cols 1–3 — sticky info / text */}
        <div className="desktop:col-span-3 desktop:sticky desktop:top-8 desktop:h-fit desktop:self-start min-[1920px]:col-span-1">
          <Link
            to="/project"
            className="text-[14px] uppercase text-muted transition-colors hover:text-paper"
          >
            {'<- Back'}
          </Link>

          <h1 className="mt-8 text-4xl font-medium tracking-tight">{c.title}</h1>
          <div className="mt-6 space-y-4 text-left text-[16px] leading-relaxed text-paper/80">
            {descriptionFor(c.slug)
              .split(/\n\n+/)
              .map((para, i) => (
                <p key={i} className={/[가-힣]/.test(para) ? 'kr' : ''}>
                  {para}
                </p>
              ))}
          </div>

          {/* meta — below the description */}
          <dl className="mt-12 space-y-5 text-[12px]">
            {meta.map((m) => (
              <div key={m.label} className="flex justify-between gap-6 border-b border-paper/15 pb-3">
                <dt className="text-muted">{m.label}</dt>
                <dd className="text-right">{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Cols 4–12 — gallery: each image (6 cols, centered) + caption (3 cols, bottom-right) */}
        <div className="space-y-12 desktop:col-span-9 desktop:space-y-16 min-[1920px]:col-span-1">
          {c.gallery.map((src, i) => (
            <Reveal
              key={i}
              className="grid grid-cols-1 items-end gap-4 min-[1440px]:grid-cols-[minmax(0,1fr)_clamp(200px,min(57.5vw_-_625px,30vw_-_130px),620px)] min-[1440px]:gap-8"
            >
              {/* image — below 1440px the caption stacks underneath (hybrid:
                  PC info column + mobile-style gallery) so the photo fills the
                  gallery width; above, the image takes whatever the fluid
                  caption column leaves over */}
              <div className="flex justify-center">
                <Img src={src} alt={`${c.title} — ${i + 1}`} className="w-full" />
              </div>

              {/* caption — fluid side column above 1440px: grows smoothly from
                  200px (at 1440) onward — ~58% of viewport growth until 1800px, then a gentler 30% (caps at 620px) so it never gets too wide */}
              <div>
                <p className="max-w-xs text-left text-[12px] leading-relaxed text-paper/80">
                  {captionFor(i)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Next collection */}
      <div className="mt-20 border-t border-paper/15 pt-8">
        <div className="text-[12px] text-muted">Next Project</div>
        <Link
          to={`/project/${next.slug}`}
          className="mt-2 inline-block text-4xl font-medium tracking-tight transition-opacity hover:opacity-60"
        >
          {next.title} {'->'}
        </Link>
      </div>
    </article>
  )
}
