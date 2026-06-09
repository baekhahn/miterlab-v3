import { Link, useParams, Navigate } from 'react-router-dom'
import { journal, journalBySlug } from '../data/collections'
import { asset } from '../lib/asset'
import Reveal from '../components/Reveal'

export default function JournalDetail() {
  const { slug } = useParams()
  const post = journalBySlug(slug)
  if (!post) return <Navigate to="/journal" replace />

  const idx = journal.findIndex((p) => p.slug === slug)
  const next = journal[(idx + 1) % journal.length]

  return (
    <article className="px-8 pb-24">
      <Link to="/journal" className="text-[12px] text-muted transition-colors hover:text-paper">
        ← Back
      </Link>

      <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-tight tracking-tight desktop:text-6xl">
        {post.title}
      </h1>

      <Reveal className="mt-10 desktop:mt-14">
        <img src={asset(post.image)} alt={post.title} className="w-full" />
      </Reveal>

      <div className="mx-auto mt-12 max-w-3xl space-y-6 text-lg font-medium leading-relaxed text-paper/85 desktop:mt-16 desktop:text-xl">
        {(post.body || []).map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="mx-auto mt-20 max-w-3xl border-t border-paper/15 pt-8">
        <div className="text-[12px] text-muted">Next Post</div>
        <Link
          to={`/journal/${next.slug}`}
          className="mt-2 inline-block text-2xl font-medium tracking-tight transition-opacity hover:opacity-60 desktop:text-4xl"
        >
          {next.title} →
        </Link>
      </div>
    </article>
  )
}
