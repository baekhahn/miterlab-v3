// Placeholder per-project description paragraphs (shown under the title on the
// detail page). Replace with real copy when available.
const DESCRIPTIONS = {
  fields:
    'A personal series shot across open country, following the quiet relationship between figure, garment, and light.',
  'plates-palettes':
    'A commercial study of food as still life — texture, colour, and composition treated with the same care as a portrait.',
  'net-play':
    'Movement and energy on court, captured for Ace Athletics with an emphasis on rhythm and form.',
  celestial:
    'A commercial collaboration exploring scale and atmosphere, where the sky becomes both subject and backdrop.',
  'quiet-forms':
    'An interiors series for Serene Interiors, finding calm in negative space, soft light, and considered objects.',
  prime:
    'A personal body of work distilled to essentials — clean structure, restraint, and a single clear idea per frame.',
  'st-petersburg':
    'A commercial commission documenting the city’s architecture and public sculpture with a measured, classical eye.',
  melody:
    'A commercial portrait series built around tone and gesture, letting mood carry each composition.',
  alfresco:
    'A personal series made outdoors, trusting daylight and place to shape the story without intervention.',
  outliers:
    'A commercial series on the things that sit apart — subjects framed to celebrate difference rather than blend in.',
}

export const descriptionFor = (slug) =>
  DESCRIPTIONS[slug] ||
  'A selected series of photographs exploring light, form, and a sense of place.'
