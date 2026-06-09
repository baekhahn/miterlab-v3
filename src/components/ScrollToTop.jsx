import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    const scroll = () => {
      // On a project detail page, scroll just past the header so the menu is
      // hidden and the content/image sits flush at the top.
      let top = 0
      if (/^\/project\//.test(pathname)) {
        const header = document.querySelector('header')
        top = header ? header.offsetHeight : 0
      }
      // behavior:'instant' overrides the CSS `scroll-behavior: smooth`.
      window.scrollTo({ top, left: 0, behavior: 'instant' })
    }
    scroll()
    // Re-apply after layout settles (covers uncached pages whose height grows).
    const raf = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(raf)
  }, [pathname])
  return null
}
