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
const COLS = 6 // 6 columns per row (each card spans 2 of the 12 grid columns)

// Pick `count` distinct column slots (0..5), sorted.
function pickSlots(count) {
  return shuffle([0, 1, 2, 3, 4, 5])
    .slice(0, count)
    .sort((a, b) => a - b)
}

// Ensure `slot` is filled in this row, keeping the card count the same.
function forceSlot(set, slot) {
  if (set.has(slot)) return
  const arr = [...set]
  set.delete(arr[rand(arr.length)])
  set.add(slot)
}

// 6 random projects on a fixed 6-col × 2-row grid (12 cells, 6 filled at random).
// Layout (which cells fill) AND content are random each visit; the grid system
// stays fixed. Guarantee: the left (col 1) and right (col 6) edges are filled.
export function generateHomeLayout(projects) {
  const picked = shuffle(projects).slice(0, 6)

  // split 6 cards across 2 rows: 2–4 per row
  const r1 = 2 + rand(3) // 2,3,4
  const counts = [r1, 6 - r1]
  const rows = counts.map((count) => ({ count, filled: new Set(pickSlots(count)) }))

  // edges on the two distinct rows
  const lr = rand(2)
  forceSlot(rows[lr].filled, 0)
  forceSlot(rows[1 - lr].filled, COLS - 1)

  // assign cards in order across rows, build render items with spacers for gaps
  const items = []
  let p = 0
  rows.forEach((row) => {
    let gap = 0
    for (let s = 0; s < COLS; s++) {
      if (row.filled.has(s)) {
        if (gap > 0) {
          items.push({ type: 'spacer', span: SPACER[gap * 2] })
          gap = 0
        }
        items.push({ type: 'card', project: picked[p++] })
      } else {
        gap++
      }
    }
    if (gap > 0) items.push({ type: 'spacer', span: SPACER[gap * 2] })
  })

  return items
}
