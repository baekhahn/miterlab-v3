import { Link } from 'react-router-dom'
import { journal } from '../data/collections'
import { asset } from '../lib/asset'
import Reveal from '../components/Reveal'
import PageTitle from '../components/PageTitle'
import Img from '../components/Img'

export default function JournalList() {
  return (
    <section className="px-8 pb-24">
      <PageTitle>Journal</PageTitle>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 tablet:grid-cols-2 desktop:grid-cols-3">
        {journal.map((post, i) => (
          <Reveal key={post.slug} delay={(i % 3) * 60} className="group">
            <Link to={`/journal/${post.slug}`} className="block">
              <Img src={asset(post.image)} alt={post.title} aspect="aspect-[4/3]" imgClassName="img-hover" />
              <div className="mt-3 text-[12px] font-medium leading-snug">{post.title}</div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
