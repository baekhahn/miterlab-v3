import { contact } from '../data/collections'
import { site } from '../data/site'

export default function Contact() {
  const heading = contact.paras[0] || 'Get in Touch'
  const address = contact.paras[1] || ''

  return (
    <section className="px-8 pb-24">
      <h1 className="max-w-5xl text-4xl font-medium leading-tight tracking-tight desktop:text-6xl">
        {heading}
      </h1>

      <div className="mt-16 grid grid-cols-1 gap-12 desktop:grid-cols-12">
        <div className="space-y-8 text-[15px] desktop:col-span-5">
          <div>
            <div className="text-muted">Studio</div>
            <p className="mt-1 whitespace-pre-line text-lg leading-relaxed">{address}</p>
          </div>
          <div>
            <div className="text-muted">Social</div>
            <div className="mt-1 text-lg">
              {site.socials.map((s, i) => (
                <span key={s.label}>
                  <a href={s.href} className="transition-opacity hover:opacity-60">
                    {s.label}
                  </a>
                  {i < site.socials.length - 1 && ', '}
                </span>
              ))}
            </div>
          </div>
        </div>

        <form className="space-y-8 desktop:col-span-7" onSubmit={(e) => e.preventDefault()}>
          {[
            { id: 'name', label: 'Name', type: 'text' },
            { id: 'email', label: 'Email', type: 'email' },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="text-[15px] text-muted">{f.label}</label>
              <input
                id={f.id}
                type={f.type}
                className="mt-2 w-full border-b border-paper/30 bg-transparent pb-2 text-lg outline-none transition-colors focus:border-paper"
              />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="text-[15px] text-muted">Message</label>
            <textarea
              id="message"
              rows={4}
              className="mt-2 w-full resize-none border-b border-paper/30 bg-transparent pb-2 text-lg outline-none transition-colors focus:border-paper"
            />
          </div>
          <button
            type="submit"
            className="rounded-full border border-paper px-6 py-3 text-[15px] transition-colors hover:bg-paper hover:text-ink"
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
  )
}
