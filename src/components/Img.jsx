import { useState } from 'react'

// Image with skeleton-loading placeholder. Shows a shimmer box until the
// image loads, then fades it in.
// - aspect: a Tailwind aspect class (e.g. 'aspect-[3/4]') -> fixed-ratio box.
// - no aspect -> natural height (w-full); skeleton just fades the image in.
export default function Img({ src, alt = '', aspect = '', className = '', imgClassName = '' }) {
  const [loaded, setLoaded] = useState(false)
  const fixed = Boolean(aspect)

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
        onLoad={() => setLoaded(true)}
        className={`${
          fixed ? 'absolute inset-0 h-full w-full object-cover' : 'block w-full'
        } transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
      />
    </div>
  )
}
