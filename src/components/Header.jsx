import { useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site'
import Logo from './Logo'

export default function Header() {
  const [open, setOpen] = useState(false)
  const navAll = [...site.navLeft, ...site.navRight]

  return (
    <>
      {/* Desktop: left nav · centered logo · right nav.
          Below desktop: logo (left) + Menu button (right). */}
      <header className="flex items-center justify-between px-8 py-5 text-[12px] desktop:grid desktop:grid-cols-3">
        {/* Left nav (desktop only) */}
        <nav className="hidden gap-6 desktop:flex desktop:justify-self-start">
          {site.navLeft.map((item) => (
            <Link key={item.label} to={item.href} className="transition-opacity hover:opacity-60">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Brand */}
        <Link to="/" className="desktop:justify-self-center" aria-label={site.brand}>
          <Logo className="h-5 w-auto" />
        </Link>

        {/* Right nav (desktop only) */}
        <nav className="hidden gap-6 desktop:flex desktop:justify-self-end">
          {site.navRight.map((item) => (
            <Link key={item.label} to={item.href} className="transition-opacity hover:opacity-60">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Menu button (below desktop) */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-[12px] transition-opacity hover:opacity-60 desktop:hidden"
        >
          Menu
        </button>
      </header>

      {/* Fullscreen overlay menu (below desktop) */}
      <div
        className={`fixed inset-0 z-[60] bg-ink text-paper transition-opacity duration-500 desktop:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex items-center justify-between px-8 py-5 text-[12px]">
          <Link to="/" onClick={() => setOpen(false)} aria-label={site.brand}>
            <Logo className="h-5 w-auto" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="transition-opacity hover:opacity-60"
          >
            Close
          </button>
        </div>

        <nav className="flex flex-col gap-3 px-8 pt-12">
          {navAll.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setOpen(false)}
              className="text-4xl font-medium tracking-tight transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-8 pb-8 text-[12px] text-muted">
          <span>© {site.brand}</span>
          <span>
            {site.socials.map((s, i) => (
              <span key={s.label}>
                <a href={s.href} className="transition-colors hover:text-paper">
                  {s.label}
                </a>
                {i < site.socials.length - 1 && ' · '}
              </span>
            ))}
          </span>
        </div>
      </div>
    </>
  )
}
