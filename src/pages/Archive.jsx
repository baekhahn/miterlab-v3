import { Link } from 'react-router-dom'
import { collections } from '../data/site'
import { fullBySlug } from '../data/collections'

export default function Archive() {
  // Newest first
  const rows = [...collections].sort((a, b) => Number(b.year) - Number(a.year))

  return (
    <section className="px-8 pb-24">
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
    </section>
  )
}
