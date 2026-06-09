import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { collections, site } from '../data/site'
import { asset } from '../lib/asset'
import { generateHomeLayout } from '../lib/homeLayout'
import Reveal from '../components/Reveal'

function Card({ c }) {
  return (
    <Reveal className="group col-span-6 tablet:col-span-4 desktop:col-span-2">
      <Link to={`/collection/${c.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={asset(c.image)}
            alt={c.title}
            loading="lazy"
            className="img-hover absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="mt-2.5 flex items-baseline justify-between text-[12px] font-medium">
          <span>{c.title}</span>
          <span className="text-muted">{c.year}</span>
        </div>
      </Link>
    </Reveal>
  )
}

export default function Home() {
  // Generate a fresh RANDOM layout (positions + content) on every visit.
  const layout = useMemo(() => generateHomeLayout(collections), [])

  return (
    <>
      {/* Scattered collection grid — random 12-col layout with desktop-only spacers */}
      <section className="px-8">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10 desktop:gap-x-9">
          {layout.map((item, i) =>
            item.type === 'spacer' ? (
              <div key={`s${i}`} className={`hidden desktop:block ${item.span}`} aria-hidden />
            ) : (
              <Card key={i} c={item.project} />
            ),
          )}
        </div>
      </section>

      {/* About statement */}
      <section className="px-8 pt-28 desktop:pt-40">
        <div className="mb-4 text-[12px] text-muted">About</div>
        <Reveal>
          <p className="max-w-6xl text-[24px] font-medium leading-[1.15] tracking-tight desktop:text-[32px]">
            {site.about}
          </p>
        </Reveal>
      </section>
    </>
  )
}
