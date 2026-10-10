# Identity and company-logo refinement

The selected homepage uses the compact Role first identity treatment on a solid
`#161616` background. The Leyton title and its import are commented out in Astro
source; neither the role nor employer appears in published HTML or metadata.
The former-role line lists Technical Consultant at Bonham & Brook first, then
Data Engineer at Sigma Labs. Earlier design previews remain local working files
and are excluded from this release.

## References

- [Emil Kowalski](https://emilkowal.ski/): browser inspection showed an Inter
  Variable identity stack with both name and role at 16px, weight 500, and no
  added margin between the two. The portfolio uses that compact scale while
  retaining its own column, palette, italic tagline and section spacing. The
  role gets a 20px line height to remain readable when it wraps on small screens.
- [Paul Larkin](https://www.paullarkin.info/): the current site keeps 14–16px
  employer marks visible inline and changes their colour on hover. Its
  [served CSS](https://www.paullarkin.info/_next/static/chunks/0g8pxpiwb1st..css)
  uses a 150ms transition. This portfolio adapts the restraint with a 160ms
  grayscale wordmark swap in the company name's existing box.

## Authentic assets

All three assets come from the respective official company website:

| Company | Local asset | Original source |
| --- | --- | --- |
| Leyton | `public/logos/leyton.svg` — 108×44, 1.6KB | [Official SVG](https://leyton.com/wp-content/blogs.dir/9/files/2026/01/logo.svg), linked from [Leyton UK](https://leyton.com/uk/) |
| Sigma Labs | `public/logos/sigma-labs.webp` — 250×40, transparent, 7.6KB | [Official asset](https://cdn.prod.website-files.com/64df847d578b866f0cd7ec24/64df847d578b866f0cd7ed7e_sigma-labs-logo.png), linked from [Sigma Labs UK](https://www.sigmalabs.co.uk/) |
| Bonham & Brook | `public/logos/bonham-and-brook.svg` — 210×58, 9.5KB | [Official SVG](https://bonhamandbrook.co.uk/hubfs/Bonham%20and%20Brook%202026/bonham-logo.svg), linked from [Bonham & Brook](https://bonhamandbrook.co.uk/) |

Sigma Labs is the UK data/software consultancy, not the US additive manufacturing
business with the same name. Both SVGs contain static paths, without scripts,
event handlers, external references or embedded images. The SVG assets are unmodified. Sigma Labs was resized and losslessly encoded
as WebP, reducing the original PNG by 66%. CSS renders the marks in muted
monochrome. The Leyton asset is reserved for restoring the commented title.

## Interaction

Company names are ordinary links. On hover or keyboard focus, text fades up by
2px and its wordmark fades into the same reserved box at 75% opacity. The link's
width, line wrapping and surrounding content positions stay fixed. Images are
decorative and excluded from the accessible name, which remains the company
name. Touch devices retain readable company names without requiring hover.
Reduced-motion disables movement and transitions; forced-colors keeps the text
visible and hides the decorative logos. No browser JavaScript or dependencies
were added. Project markup and motion are unchanged.

## Earlier preview verification

Checked the selected homepage at 320×740, 390×844, 768×1024, 1440×900 and
1920×1080: no horizontal overflow, both identity lines remain 16px/500, all
five project icons and three company logos load, company names stay within the
column, and contact targets remain 44×44px. Narrow-screen wrapping was inspected
visually. Keyboard focus revealed all three wordmarks at 75% opacity with no
change to any company link's position or dimensions; accessible link names
remained intact. Hover uses the same reveal properties.

`bun run check`, the production build, both existing tests and
`git diff --check` passed. Reduced-motion and forced-colors fallbacks were
reviewed in the source. The comparison thumbnail for Role first was refreshed.
