import { shuffle } from './shuffle'

// Literal classes so Tailwind's JIT can see them (no dynamic concatenation).
const SPACER = {
  2: 'desktop:col-span-2',
  4: 'desktop:col-span-4',
  6: 'desktop:col-span-6',
  8: 'desktop:col-span-8',
  10: 'desktop:col-span-10',
}

const rand = (n) => Math.floor(Math.random() * n)

// Move all units out of dist[slot] into other allowed slots (keeps the row's
// total width = 12 cols, so it just shifts the empty space elsewhere).
function clearSlot(dist, slot, targets) {
  const units = dist[slot]
  if (units === 0 || targets.length === 0) {
    dist[slot] = 0
    return
  }
  dist[slot] = 0
  for (let u = 0; u < units; u++) dist[targets[rand(targets.length)]]++
}

// Build a RANDOM sparse layout each call: a 12-col grid where each card spans 2
// cols and empty `spacer` cells of random even widths scatter them.
// Guarantee (desktop): at least one card touches the left edge (col 1) and at
// least one touches the right edge (col 12), so the outer columns never look empty.
export function generateHomeLayout(projects) {
  const cards = shuffle(projects)

  // 1) Split into rows of 2–4 cards.
  const rows = []
  let i = 0
  while (i < cards.length) {
    const left = cards.length - i
    let n = left <= 4 ? left : 2 + rand(3)
    if (left - n === 1) n = Math.min(left, n + 1)
    rows.push({ cards: cards.slice(i, i + n), n })
    i += n
  }

  // 2) Random spacer distribution per row (n+1 slots: before / between / after).
  rows.forEach((row) => {
    const units = 6 - row.n // (12 - 2n) / 2
    const dist = new Array(row.n + 1).fill(0)
    for (let u = 0; u < units; u++) dist[rand(row.n + 1)]++
    row.dist = dist
  })

  // 3) Enforce edges on two distinct rows.
  const leftRow = rand(rows.length)
  let rightRow = rows.length > 1 ? rand(rows.length) : leftRow
  if (rows.length > 1) while (rightRow === leftRow) rightRow = rand(rows.length)

  // left edge: no leading spacer -> first card sits in column 1
  {
    const d = rows[leftRow].dist
    clearSlot(d, 0, d.map((_, idx) => idx).slice(1))
  }
  // right edge: no trailing spacer -> last card ends in column 12
  {
    const d = rows[rightRow].dist
    const last = d.length - 1
    clearSlot(d, last, d.map((_, idx) => idx).slice(0, last))
  }

  // 4) Flatten to a render sequence.
  const items = []
  rows.forEach((row) => {
    const d = row.dist
    for (let k = 0; k < row.n; k++) {
      if (d[k] > 0) items.push({ type: 'spacer', span: SPACER[d[k] * 2] })
      items.push({ type: 'card', project: row.cards[k] })
    }
    if (d[row.n] > 0) items.push({ type: 'spacer', span: SPACER[d[row.n] * 2] })
  })

  return items
}
