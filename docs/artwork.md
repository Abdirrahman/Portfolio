# Portfolio background artwork

## Canopy photograph — 10 October 2026

The homepage uses an original grayscale photograph looking up into a tree
canopy, inspired by the quiet woodland atmosphere of
[Manuel Moreale’s opening](https://manuelmoreale.dev/). The image was generated
with the built-in `image_gen` tool; Manuel’s photograph/video was not reused.

Source: [`src/assets/canopy-study.webp`](../src/assets/canopy-study.webp),
1672 × 941 pixels, RGB, 247,776 bytes. WebP encoding used quality 83 without
changing the image content. Astro generates 640, 1280, and 1672 pixel versions
at quality 80. The built output sizes were approximately 45, 140, and 229 KiB.

The canopy occupies the right side of the image, leaving open sky on the left.
CSS applies grayscale, intersecting horizontal/vertical masks and 12% desktop
opacity, 9% on tablets and 5.5% on phones. It is decorative, hidden from
assistive technology, and cannot intercept input. The existing 500ms one-shot
fade is retained and runs only when reduced motion is not requested.

### Final generation prompt

Use case: photorealistic-natural
Asset type: original grayscale background photograph for an ultra-minimal personal website.
Primary request: A deeply atmospheric, finely detailed silver-gelatin photograph looking almost vertically upward beneath the edge of a mature deciduous tree canopy on an overcast day. Landscape composition, approximately 16:9. The principal trunk is mostly outside the frame at the lower right; slender natural branches reach diagonally from the right edge and upper-right toward the top center. Irregular small leaves, countless hairline twigs, and softly layered foliage occupy primarily the RIGHT HALF and the TOP RIGHT. The LEFT HALF and LOWER LEFT contain broad quiet open gray sky with very little detail, suitable as background beneath a narrow text column.
Style: authentic understated fine-art analog black-and-white photography, realistic natural branch structure, crisp small twigs, gentle film texture, softly diffused gray daylight, no dramatized bloom. The image should look like a photograph taken under a tree, not a drawing or isolated tree portrait. Palette entirely neutral black, charcoal, silver, pale gray; no color tint. Preserve midtone branch and leaf detail so the website can darken it with CSS. Calm contemplative atmosphere, no high-contrast sun or sky highlights.
Composition: organic asymmetrical crop, the canopy extends past the image edges. A few graceful branches can reach into the upper left, but most of the left side should remain spacious. No horizon, ground, grass, buildings, people, animals, roots, entire freestanding tree, illustration, engraving, graphic patterns, typography, text, watermark, or borders.

The previous engraving is retained for the unpublished local concept previews.

## Previous engraving — 8 October 2026

Generated with the built-in `image_gen` tool on 8 October 2026.

Source: [`src/assets/tree-roots-engraving.png`](../src/assets/tree-roots-engraving.png),
1122 × 1402 pixels, RGBA with transparency. Astro's native `Image` component
generates WebP versions at 480, 800, and 1122 pixels wide. CSS applies grayscale,
responsive sizing, and restrained opacity; the background layer is decorative
and cannot intercept input.

## Final generation prompt

Use case: stylized-concept. Asset type: a premium fine-art illustration for the background of an extremely minimal personal website on solid near-black #161616. Create a complete, extraordinarily detailed, artistic grayscale mature oak tree with its ENTIRE exposed root system, on a truly transparent alpha background. This is a bespoke botanical copperplate engraving / graphite etching, museum-quality, poetic and natural rather than a diagram. A weathered, slightly twisting trunk with intricate bark furrows and fine cross-hatching, an asymmetrical airy crown with hundreds of exquisitely branching twigs and small clusters of finely engraved leaves; leave generous negative space between branches. The roots must be as compelling as the crown: large sculptural root buttresses split into organic winding roots and hundreds of delicate filament rootlets below the trunk, with subtle visible wood grain. No ground line, no landscape, no soil cross-section. Entire tree AND all roots visible with no cropping, centered with comfortable transparent margins, portrait composition approximately 4:5. Restrained monochrome warm silver and graphite gray, delicate light-gray marks suitable for a dark background, no pure-white flood fill, no colored marks. Convincing varied line weights, fine stippling, tactile hand-etched detail and artistic asymmetry; beautiful engraving, never clean vector curves, never an icon, never a geometric fractal, never a logo, never a 3D render or photo. The roots visually echo the spreading branches; calm, intelligent, contemplative, timeless. Keep fine details genuinely visible; do not blur or artificially fade the artwork since the site will control its opacity. No text, labels, symbols, frame, watermark, gradients, shadows, glow, or background. Transparent background with the finely etched tree isolated.
