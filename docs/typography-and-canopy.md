# Typography and canopy refinement — 10 October 2026

The chosen original layout now uses “Abdirrahman” as its visible name, Inter
for headings and project names, and Newsreader for prose and descriptions.
The centered 512px column, five outline project icons, project destinations,
contact icons, and existing CSS motion remain part of the design.

## Typography and spacing

| Role | Font / weight | Desktop size / line height | Phone size / line height |
| --- | --- | --- | --- |
| Name | Inter 550 | 24 / 30px | 22 / 27.5px below 400px |
| Introduction | Newsreader 400 | 17 / 28.05px | 16 / 26.4px |
| Career context | Newsreader 400 | 15 / 24.75px | 14 / 23.1px |
| Selected Projects heading | Inter 500 | 13 / 19.5px | Same |
| Project name | Inter 450 | 14 / 22.4px | Same |
| Project description | Newsreader 400 | 15 / 22.5px | Same |

The name has 20px below it; introduction/context are separated by 16px.
Selected Projects starts 52px after the introduction group, reduced to 48px
on phones. Its heading has 20px below it. Project rows retain the original
16px icon-to-copy gap, 12px inter-row gap, and 32px icons. The page keeps 24px
side gutters on narrow screens and 104px top space on phones to clear contacts.

These choices interpret the Dead Simple Sites research: constrained reading
widths, roughly 16px body text, generous leading, tight local relationships,
and larger gaps between sections. They are design decisions for this portfolio,
not universal measurements from the gallery.

## Font sources

The normal Latin variable WOFF2 files are self-hosted, preloaded, and use
`font-display: swap`. The selected weight-only files total 106,340 bytes;
Newsreader uses its fixed 16pt optical master. Both are licensed under SIL OFL
1.1; license files are stored alongside the font files.

- [Official Google Fonts CSS request](https://fonts.googleapis.com/css2?family=Inter:wght@400..600&family=Newsreader:wght@400..600&display=swap).
- [Inter source](https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2)
  and [upstream](https://github.com/rsms/inter).
- [Newsreader source](https://fonts.gstatic.com/s/newsreader/v26/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbNJYQ.woff2)
  and [upstream](https://github.com/productiontype/Newsreader).

## Background and motion

The previous homepage engraving is replaced by an original grayscale canopy
photograph. The image’s generation prompt and responsive asset details are in
[artwork.md](artwork.md). No client JavaScript or dependencies were added.
The intro/project entrances, project-arrow reveal, icon brightening, focus
states, reduced-motion rules, and forced-colors fallback are retained.

## Verification

`bun run check` passed without diagnostics. `bun run test` passed both existing
tests and generated the static production build. The build assertion now checks
the visible `<h1>Abdirrahman</h1>` rather than matching the full name anywhere.

The production build was inspected at 320×568, 375×667, 390×844, 640×800,
768×1024, 1024×768, 1440×900, 1920×1080, and 844×390. All nine sizes showed
five projects, loaded artwork/icons, no horizontal overflow or clipped copy,
and at least 44×44px project/contact targets. Contacts cleared the name by
at least 34px. Phone and desktop compositions were inspected visually.

At 320×568, keyboard navigation reached the skip link, three contacts, employer
link, and five projects with visible focus. Off-screen links scrolled into view;
the focused project arrow revealed correctly. Browser stylesheet inspection
confirmed reduced-motion gating. These are Chromium viewport checks, not tests
on physical devices or other browser engines.
