import { Link } from 'react-router-dom'
import { site } from '../data/site'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="px-8 pb-8 pt-24 desktop:pt-32">
      <div className="grid grid-cols-1 gap-10 tablet:grid-cols-3">
        <Link to="/" className="block" aria-label={site.brand}>
          <Logo className="h-8 w-auto desktop:h-10" />
        </Link>

        <div className="text-[12px]">
          <div className="mb-3 text-muted">Menu</div>
          <ul className="space-y-1">
            <li><Link to="/profile" className="transition-opacity hover:opacity-60">About</Link></li>
            <li><Link to="/archive" className="transition-opacity hover:opacity-60">Project</Link></li>
            <li><Link to="/contact" className="transition-opacity hover:opacity-60">Contact</Link></li>
          </ul>
        </div>

        <div className="text-[12px] tablet:justify-self-end">
          <div className="mb-3 text-muted">Social</div>
          <ul className="space-y-1">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="transition-opacity hover:opacity-60">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 text-xs text-muted">© {site.brand} — All rights reserved.</div>
    </footer>
  )
}
