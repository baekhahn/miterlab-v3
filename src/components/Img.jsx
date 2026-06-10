import { useState } from 'react'

// Image with skeleton-loading placeholder. Shows a shimmer box until the
// image loads, then fades it in.
// - aspect: a Tailwind aspect class (e.g. 'aspect-[3/4]') -> fixed-ratio box.
// - no aspect -> natural height (w-full); skeleton just fades the image in.
// - eager: start as already-loaded (no skeleton) — use for images known to be cached.
// - onReady: called once the image has loaded.
export default function Img({
  src,
  alt = '',
  aspect = '',
  className = '',
  imgClassName = '',
  eager = false,
  onReady,
}) {
  const [loaded, setLoaded] = useState(eager)
  const fixed = Boolean(aspect)

  const handleLoad = () => {
    setLoaded(true)
    if (onReady) onReady()
  }

  return (
    <div
      className={`skeleton relative overflow-hidden ${aspect} ${
        loaded ? 'is-loaded' : ''
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={handleLoad}
        className={`${
          fixed ? 'absolute inset-0 h-full w-full object-cover' : 'block w-full'
        } transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
      />
    </div>
  )
}
