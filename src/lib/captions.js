// Placeholder per-image caption paragraphs (left-aligned prose).
// Replace with real descriptions when available — e.g. a `captions` array per
// collection in content.json, keyed by image index.
const LINES = [
  'A quiet study in light and texture, captured on location and left largely untouched.',
  'Composed to let the subject breathe within its surroundings, with room for the eye to wander.',
  'Detail and atmosphere given equal weight, holding the moment a beat longer than expected.',
  'Natural light shapes the form here, lending the frame its mood and sense of place.',
  'An unhurried moment, framed with intent and restraint rather than spectacle.',
  'Structure and softness balanced across the composition, steady but never static.',
  'Shot close, trusting small gestures and surfaces to carry the story.',
  'A wider view that sets the scene and lets the light do most of the talking.',
]

export const captionFor = (i) => LINES[i % LINES.length]
