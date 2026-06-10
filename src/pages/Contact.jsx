import { site } from '../data/site'

export default function Contact() {
  const heading = "Let's make the pieces fit — get in touch with Miterlab."
  const address = '5F, 818, Seolleung-ro, Gangnam-gu, Seoul, 06014, Republic of Korea'

  return (
    <section className="px-8 pb-24">
      {/* 6-column grid. Row 1: heading. Row 2: info (cols 1-2) + form (cols 3-5),
          so the Address label and the Name field start at the same height. */}
      <div className="grid grid-cols-1 gap-y-12 desktop:grid-cols-6 desktop:gap-x-5">
        {/* Heading — row 1, columns 1-2 */}
        <h1 className="text-4xl font-medium leading-tight tracking-tight desktop:col-span-2 desktop:row-start-1">
          {heading}
        </h1>

        {/* Address + Social — row 2, columns 1-2 */}
        <div className="space-y-8 text-[12px] desktop:col-start-1 desktop:col-span-2 desktop:row-start-2">
          <div>
            <div className="text-muted">Address</div>
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

        {/* Message form — row 2, columns 3-5 */}
        <form
          className="space-y-8 desktop:col-start-3 desktop:col-span-3 desktop:row-start-2"
          onSubmit={(e) => e.preventDefault()}
        >
          {[
            { id: 'name', label: 'Name', type: 'text' },
            { id: 'email', label: 'Email', type: 'email' },
          ].map((f) => (
            <div key={f.id}>
              <label htmlFor={f.id} className="text-[12px] text-muted">{f.label}</label>
              <input
                id={f.id}
                type={f.type}
                className="mt-2 w-full border-b border-paper/30 bg-transparent pb-2 text-lg outline-none transition-colors focus:border-paper"
              />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="text-[12px] text-muted">Message</label>
            <textarea
              id="message"
              rows={4}
              className="mt-2 w-full resize-none border-b border-paper/30 bg-transparent pb-2 text-lg outline-none transition-colors focus:border-paper"
            />
          </div>
          <button
            type="submit"
            className="rounded-full border border-paper px-6 py-3 text-[12px] transition-colors hover:bg-paper hover:text-ink"
          >
            {'Send Message ->'}
          </button>
        </form>
      </div>
    </section>
  )
}
