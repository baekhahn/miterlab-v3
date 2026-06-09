import { Link } from 'react-router-dom'
import { site } from '../data/site'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="grid grid-cols-3 items-center px-8 py-5 text-[13px]">
      {/* Left nav */}
      <nav className="flex gap-6 justify-self-start">
        {site.navLeft.map((item) => (
          <Link key={item.label} to={item.href} className="transition-opacity hover:opacity-60">
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Brand */}
      <Link to="/" className="justify-self-center" aria-label={site.brand}>
        <Logo className="h-5 w-auto" />
      </Link>

      {/* Right nav */}
      <nav className="flex gap-6 justify-self-end">
        {site.navRight.map((item) => (
          <Link key={item.label} to={item.href} className="transition-opacity hover:opacity-60">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
