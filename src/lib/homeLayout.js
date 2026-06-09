import { shuffle } from './shuffle'

// Literal classes so Tailwind's JIT can see them (no dynamic concatenation).
const SPACER = {
  2: 'desktop:col-span-2',
  4: 'desktop:col-span-4',
  6: 'desktop:col-span-6',
  8: 'desktop:col-span-8',
  10: 'desktop:col-span-10',
}

// Build a RANDOM sparse layout each call: a 12-col grid where each card spans 2
// cols and empty `spacer` cells of random even widths scatter them. The grid
// system (12-col, card span 2, 3:4) stays fixed; only the arrangement changes.
export function generateHomeLayout(projects) {
  const cards = shuffle(projects)
  const items = []
  let i = 0

  while (i < cards.length) {
    const left = cards.length - i
    // 2–4 cards per row, but avoid leaving a lonely single card for the next row
    let n = left <= 4 ? left : 2 + Math.floor(Math.random() * 3)
    if (left - n === 1) n = Math.min(left, n + 1)

    const rowCards = cards.slice(i, i + n)
    i += n

    // Remaining columns (in 2-col units) become spacers, distributed randomly
    // into the slots before / between / after the cards.
    const units = 6 - n // (12 - 2n) / 2
    const slotCount = n + 1
    const dist = new Array(slotCount).fill(0)
    for (let u = 0; u < units; u++) dist[Math.floor(Math.random() * slotCount)]++

    for (let k = 0; k < n; k++) {
      if (dist[k] > 0) items.push({ type: 'spacer', span: SPACER[dist[k] * 2] })
      items.push({ type: 'card', project: rowCards[k] })
    }
    if (dist[n] > 0) items.push({ type: 'spacer', span: SPACER[dist[n] * 2] })
  }

  return items
}
