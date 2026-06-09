import { useState } from 'react'
import { Link } from 'react-router-dom'
import { collections } from '../data/site'
import { fullBySlug } from '../data/collections'
import { asset } from '../lib/asset'
import Reveal from '../components/Reveal'
import PageTitle from '../components/PageTitle'
import Img from '../components/Img'

function ThumbnailView() {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-12 tablet:grid-cols-3 desktop:grid-cols-4">
      {collections.map((c, i) => (
        <Reveal key={c.slug} delay={(i % 4) * 60} className="group">
          <Link to={`/collection/${c.slug}`} className="block">
            <Img src={asset(c.image)} alt={c.title} aspect="aspect-[3/4]" imgClassName="img-hover" />
            <div className="mt-3 flex items-baseline justify-between text-[12px] font-medium">
              <span>{c.title}</span>
              <span className="text-muted">{c.year}</span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}

function ListView() {
  const rows = [...collections].sort((a, b) => Number(b.year) - Number(a.year))
  const [hovered, setHovered] = useState(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  return (
    <div className="relative" onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
      <div className="grid grid-cols-12 border-b border-paper/15 pb-3 text-[12px] text-muted">
        <div className="col-span-6">Project</div>
        <div className="col-span-4">Category</div>
        <div className="col-span-2 text-right">Year</div>
      </div>

      <ul>
        {rows.map((c) => {
          const cat = fullBySlug(c.slug)?.projectType || '—'
          return (
            <li key={c.slug} className="border-b border-paper/15">
              <Link
                to={`/collection/${c.slug}`}
                onMouseEnter={() => setHovered(c)}
                onMouseLeave={() => setHovered((h) => (h === c ? null : h))}
                className="grid grid-cols-12 items-baseline py-3 text-[14px] transition-opacity hover:opacity-60"
              >
                <span className="col-span-6">{c.title}</span>
                <span className="col-span-4 text-muted">{cat}</span>
                <span className="col-span-2 text-right text-muted">{c.year}</span>
              </Link>
            </li>
          )
        })}
      </ul>

      <div
        aria-hidden
        className="pointer-events-none fixed z-50 hidden w-40 overflow-hidden tablet:block"
        style={{
          left: pos.x + 24,
          top: pos.y - 96,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'scale(1)' : 'scale(0.96)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}
      >
        {hovered && (
          <Img key={hovered.slug} src={asset(hovered.image)} alt="" aspect="aspect-[3/4]" />
        )}
      </div>
    </div>
  )
}

export default function Archive() {
  const [view, setView] = useState('grid') // 'grid' | 'list'

  return (
    <section className="px-8 pb-6">
      <PageTitle
        actions={
          <div className="flex gap-4 text-[14px]">
            <button
              type="button"
              onClick={() => setView('grid')}
              className={`uppercase transition-opacity hover:opacity-60 ${
                view === 'grid' ? 'text-paper' : 'text-muted'
              }`}
            >
              Grid
            </button>
            <button
              type="button"
              onClick={() => setView('list')}
              className={`uppercase transition-opacity hover:opacity-60 ${
                view === 'list' ? 'text-paper' : 'text-muted'
              }`}
            >
              List
            </button>
          </div>
        }
      >
        Project
      </PageTitle>

      {view === 'grid' ? <ThumbnailView /> : <ListView />}
    </section>
  )
}
