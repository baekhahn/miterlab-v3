import { Link } from 'react-router-dom'
import { collections } from '../data/site'
import { asset } from '../lib/asset'
import Reveal from '../components/Reveal'

export default function CollectionList() {
  return (
    <section className="px-8 pb-24">
      <h1 className="mb-12 text-4xl font-medium tracking-tight desktop:mb-16 desktop:text-6xl">
        Collection
      </h1>

      <div className="grid grid-cols-2 gap-x-8 gap-y-12 tablet:grid-cols-3 desktop:grid-cols-4">
        {collections.map((c, i) => (
          <Reveal key={c.slug} delay={(i % 4) * 60} className="group">
            <Link to={`/collection/${c.slug}`} className="block">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={asset(c.image)}
                  alt={c.title}
                  loading="lazy"
                  className="img-hover absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between text-[13px] font-medium">
                <span>{c.title}</span>
                <span className="text-muted">{c.year}</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
