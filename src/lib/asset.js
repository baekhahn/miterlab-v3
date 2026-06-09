// Resolve a public asset path against Vite's base URL so images work both at
// local root ("/") and under the GitHub Pages subpath ("/miterlab-v3/").
export const asset = (p) => {
  if (!p) return p
  if (/^https?:\/\//.test(p)) return p
  return import.meta.env.BASE_URL + String(p).replace(/^\//, '')
}
