import { profile } from '../data/collections'
import { site } from '../data/site'
import { asset } from '../lib/asset'
import Reveal from '../components/Reveal'
import Img from '../components/Img'

export default function Profile() {
  return (
    <section className="px-8 pb-24">
      <h1 className="mb-6 max-w-5xl text-4xl font-medium leading-tight tracking-tight desktop:text-6xl">
        {site.about}
      </h1>

      {profile.images[0] && (
        <Reveal className="mb-16">
          <Img src={asset(profile.images[0])} alt="Miterlab" />
        </Reveal>
      )}

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 desktop:grid-cols-2">
        {profile.paras.map((para, i) => (
          <Reveal key={i} delay={(i % 2) * 80}>
            <p className="text-lg font-medium leading-relaxed text-paper/85 desktop:text-xl">
              {para}
            </p>
          </Reveal>
        ))}
      </div>

      {profile.images.length > 1 && (
        <div className="mt-16 grid grid-cols-2 gap-6 tablet:grid-cols-3">
          {profile.images.slice(1).map((src, i) => (
            <Reveal key={i}>
              <Img src={asset(src)} alt={`Miterlab — ${i + 1}`} aspect="aspect-[3/4]" />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  )
}
