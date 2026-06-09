import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    // On a project detail page, scroll just past the header so the menu is
    // hidden and the content/image sits flush at the top.
    if (/^\/project\//.test(pathname)) {
      const header = document.querySelector('header')
      const top = header ? header.offsetHeight : 0
      window.scrollTo(0, top)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])
  return null
}
