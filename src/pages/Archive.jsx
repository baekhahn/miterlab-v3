import { useState } from 'react'
import { Link } from 'react-router-dom'
import { collections } from '../data/site'
import { fullBySlug } from '../data/collections'
import { asset } from '../lib/asset'

export default function Archive() {
  const rows = [...collections].sort((a, b) => Number(b.year) - Number(a.year))
  const [hovered, setHovered] = useState(null) // collection
  const [pos, setPos] = useState({ x: 0, y: 0 })

  return (
    <section
      className="relative px-8 pb-24"
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      {/* Column header */}
      <div className="grid grid-cols-12 border-b border-paper/15 pb-3 text-[13px] text-muted">
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
                className="grid grid-cols-12 items-baseline py-3 text-lg transition-opacity hover:opacity-60"
              >
                <span className="col-span-6">{c.title}</span>
                <span className="col-span-4 text-muted">{cat}</span>
                <span className="col-span-2 text-right text-muted">{c.year}</span>
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Cursor-following hover thumbnail (desktop pointers only) */}
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
          <img
            src={asset(hovered.image)}
            alt=""
            className="aspect-[3/4] w-full object-cover"
          />
        )}
      </div>
    </section>
  )
}
