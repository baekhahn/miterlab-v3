import { about } from '../about'
import { site } from '../data/site'
import Reveal from '../components/Reveal'

// 6-column grid row (20px gutters): label on column 2, content on columns 3-4.
// wide: content stretches to columns 3-6 (for long two-column lists).
function Row({ label, children, wide = false, className = '' }) {
  return (
    <div className={`grid grid-cols-1 gap-y-5 desktop:grid-cols-6 desktop:gap-x-5 ${className}`}>
      <h2 className="text-[16px] text-muted desktop:col-start-2 desktop:col-span-1">{label}</h2>
      <div className={`desktop:col-start-3 ${wide ? 'desktop:col-span-4' : 'desktop:col-span-2'}`}>
        {children}
      </div>
    </div>
  )
}

// Full-bleed infinite rolling image strip (Framer Ticker equivalent).
function Ticker({ images }) {
  const strip = [...images, ...images] // two halves -> seamless -50% loop
  return (
    <div className="-mx-8 overflow-hidden">
      <div className="ticker-track flex w-max">
        {strip.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden={i >= images.length}
            decoding="async"
            className="mr-3 h-[260px] w-auto object-cover tablet:h-[380px] desktop:h-[480px]"
          />
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section className="px-8 pb-24">
      {/* Intro statement — 48px desktop, columns 1-3 of the 6-grid */}
      <Reveal>
        <div className="grid grid-cols-1 desktop:grid-cols-6 desktop:gap-x-5">
          <h1 className="mt-[100px] text-[32px] leading-[1.1] tracking-tight tablet:text-[40px] desktop:col-span-4 desktop:text-[48px]">
            {site.about}
          </h1>
        </div>
      </Reveal>

      {/* Who We Are — 17px label + paragraphs */}
      <Reveal className="mt-32 desktop:mt-44">
        <Row label="Who We Are">
          <div className="space-y-5">
            {about.intro.map((para, i) => (
              <p
                key={i}
                className={`text-[16px] text-paper/85 ${
                  /[가-힣]/.test(para) ? 'kr leading-relaxed' : 'leading-[1.3]'
                }`}
              >
                {para}
              </p>
            ))}
          </div>
        </Row>
      </Reveal>

      {/* Rolling image ticker */}
      <div className="mt-24 desktop:mt-32">
        <Ticker images={about.figures} />
      </div>

      {/* Services — 17px, two columns (first half / second half) */}
      <Reveal className="mt-32 desktop:mt-44">
        <Row label="Services" wide>
          <div className="grid grid-cols-1 gap-x-5 tablet:grid-cols-2">
            {[
              about.services.slice(0, Math.ceil(about.services.length / 2)),
              about.services.slice(Math.ceil(about.services.length / 2)),
            ].map((col, ci) => (
              <div key={ci}>
                {col.map((s) => (
                  <p key={s} className="py-1 text-[16px] leading-[1.3]">
                    {s}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Row>
      </Reveal>

      {/* Clients + Partners — label col 2, 20px uppercase list on cols 3-4 */}
      <Reveal className="mt-32 desktop:mt-44">
        <Row label="Clients + Partners">
          <div>
            {about.clients.map((c) => (
              <p key={c} className="py-1 text-[16px] uppercase leading-[1.3]">
                {c}
              </p>
            ))}
          </div>
        </Row>
      </Reveal>

    </section>
  )
}
