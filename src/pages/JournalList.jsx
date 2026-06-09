import { Link } from 'react-router-dom'
import { journal } from '../data/collections'
import { asset } from '../lib/asset'
import Reveal from '../components/Reveal'

export default function JournalList() {
  return (
    <section className="px-8 pb-24">
      <h1 className="mb-12 text-4xl font-medium tracking-tight desktop:mb-16 desktop:text-6xl">
        Journal
      </h1>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 tablet:grid-cols-2 desktop:grid-cols-3">
        {journal.map((post, i) => (
          <Reveal key={post.slug} delay={(i % 3) * 60} className="group">
            <Link to={`/journal/${post.slug}`} className="block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={asset(post.image)}
                  alt={post.title}
                  loading="lazy"
                  className="img-hover absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="mt-3 text-[12px] font-medium leading-snug">{post.title}</div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
