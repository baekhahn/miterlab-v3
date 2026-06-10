# Projects

Each project = one folder. To **add or edit a project**, just manage its folder here —
no other files to touch. New folders are picked up automatically.

```
src/projects/<slug>/
  meta.js     # title, year, projectType, for, description
  cover.jpg   # cover image (grid / list / archive)
  1.jpg       # detail gallery images, shown in numeric order
  2.jpg
  3.jpg
  ...
```

- `<slug>` becomes the URL: `/#/project/<slug>` (use lowercase, hyphens).
- Cover and gallery images may be `.jpg`, `.jpeg`, `.png`, `.webp`, or `.avif`.
- Gallery order follows the number prefix (`1`, `2`, `3`, …).
- `meta.js` example:

```js
export default {
  title: 'Daum Cafe',
  year: '2024',
  projectType: 'Commercial',
  for: 'Daum',
  description: 'One or two sentences about the project.',
}
```

To add **Daum Cafe** images: drop `cover.jpg` and `1.jpg … 5.jpg` into
`src/projects/daum-cafe/`.
