# Responsive layout verification

Verified on 5 October 2026 against the production Astro build in the in-app Chromium browser. Dimensions below are CSS viewport pixels; this is viewport testing rather than physical-device testing.

Both pages passed at all 19 viewport sizes (38 page checks). Each projects-page check measured all five project cards, videos, and link rows. Checks covered horizontal overflow, content fitting inside each slide, pagination staying clear of project links, 44 × 44 pixel pagination targets, the instruction pill staying clear of pagination, and the home-page divider resizing with its container.

| Viewport | Home | Projects | Layout |
| --- | --- | --- | --- |
| 3840 × 2160 | Pass | Pass | Side by side |
| 2560 × 1440 | Pass | Pass | Side by side |
| 1920 × 1080 | Pass | Pass | Side by side |
| 1600 × 900 | Pass | Pass | Side by side |
| 1536 × 864 | Pass | Pass | Side by side |
| 1440 × 900 | Pass | Pass | Side by side |
| 1366 × 768 | Pass | Pass | Side by side |
| 1280 × 800 | Pass | Pass | Side by side |
| 1280 × 1024 | Pass | Pass | Side by side |
| 1024 × 768 | Pass | Pass | Side by side |
| 820 × 1180 | Pass | Pass | Stacked |
| 768 × 1024 | Pass | Pass | Stacked |
| 430 × 932 | Pass | Pass | Stacked |
| 414 × 896 | Pass | Pass | Stacked |
| 390 × 844 | Pass | Pass | Stacked |
| 375 × 667 | Pass | Pass | Stacked |
| 360 × 800 | Pass | Pass | Stacked |
| 320 × 568 | Pass | Pass | Stacked, vertical scrolling |
| 844 × 390 | Pass | Pass | Side by side, vertical scrolling |

Interaction checks also confirmed that short phone and landscape viewports can scroll vertically without changing the active project, while pagination, keyboard navigation, swiping, and desktop mousewheel navigation remain available where appropriate. Browser console checks, `bun run check`, and `bun run test` passed.

To repeat: run `bun run test`, then `bun run preview`; open `/` and `/projects` in browser responsive mode at the sizes above. Check the longest project description, the project links, all five pagination targets, and resize or rotate without reloading. On short screens, confirm that vertical scrolling reaches every control without accidentally advancing the carousel.
