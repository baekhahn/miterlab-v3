import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scroll to top on route change (smooth motion comes from CSS scroll-behavior).
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
