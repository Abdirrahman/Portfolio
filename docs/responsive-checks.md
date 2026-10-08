# Responsive layout verification

Verified on 8 October 2026 against the production Astro build of the one-page
redesign in the in-app Chromium browser. These are CSS viewport checks, not
physical-device tests.

All 19 sizes passed: no horizontal overflow, all five icons loaded, project
copy stayed within each row, and project and contact links had at least
44 × 44 pixel targets. The layout remains a single, centered column; short
screens scroll naturally to reach every link.

| Viewport | One-page portfolio |
| --- | --- |
| 3840 × 2160 | Pass |
| 2560 × 1440 | Pass |
| 1920 × 1080 | Pass |
| 1600 × 900 | Pass |
| 1536 × 864 | Pass |
| 1440 × 900 | Pass |
| 1366 × 768 | Pass |
| 1280 × 800 | Pass |
| 1280 × 1024 | Pass |
| 1024 × 768 | Pass |
| 820 × 1180 | Pass |
| 768 × 1024 | Pass |
| 430 × 932 | Pass |
| 414 × 896 | Pass |
| 390 × 844 | Pass |
| 375 × 667 | Pass |
| 360 × 800 | Pass |
| 320 × 568 | Pass |
| 844 × 390 | Pass |

Keyboard checks confirmed a visible focus outline on the skip link, all five
project links, and the three contact links, in that order. The old `/projects`
URL reached `/#projects`. No browser warnings or errors were recorded.
`bun run check`, `bun run test`, and a frozen Bun install passed under Node 24.

To repeat: run `bun run test` and `bun run preview`, open `/`, and check the
sizes above. Confirm that icons load, text wraps without clipping, every link
can be reached with Tab, and narrow or short screens can scroll to the contact
links. Open `/projects` to verify the legacy redirect.
