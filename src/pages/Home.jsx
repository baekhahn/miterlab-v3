import { Link } from 'react-router-dom'
import { homeLayout, collectionBySlug, site } from '../data/site'
import { asset } from '../lib/asset'
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
        <div className="mt-2.5 flex items-baseline justify-between text-[15px] font-medium">
          <span>{c.title}</span>
          <span className="text-muted">{c.year}</span>
        </div>
      </Link>
    </Reveal>
  )
}

export default function Home() {
  return (
    <>
      {/* Scattered collection grid — 12-col auto-flow with desktop-only spacers */}
      <section className="px-8">
        <div className="grid grid-cols-12 gap-x-8 gap-y-10 desktop:gap-x-9">
          {homeLayout.map((item, i) =>
            item.type === 'spacer' ? (
              <div key={`s${i}`} className={`hidden desktop:block ${item.span}`} aria-hidden />
            ) : (
              <Card key={item.slug} c={collectionBySlug(item.slug)} />
            ),
          )}
        </div>
      </section>

      {/* About statement */}
      <section className="px-8 pt-28 desktop:pt-40">
        <div className="mb-4 text-[15px] text-muted">About</div>
        <Reveal>
          <p className="max-w-6xl text-3xl font-medium leading-[1.15] tracking-tight desktop:text-[35px]">
            {site.about}
          </p>
        </Reveal>
      </section>
    </>
  )
}
