import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// Convert every rem value in the generated CSS to px (root = 16px).
// Visual result is identical; units are just expressed in px.
const remToPx = () => ({
  postcssPlugin: 'rem-to-px',
  Once(root) {
    root.walkDecls((decl) => {
      if (decl.value.includes('rem')) {
        decl.value = decl.value.replace(
          /(-?[\d.]+)rem/g,
          (_, n) => `${parseFloat(n) * 16}px`,
        )
      }
    })
  },
})
remToPx.postcss = true

export default {
  plugins: [tailwindcss(), autoprefixer(), remToPx()],
}
