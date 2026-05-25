# Mobile optimization notes — 2026-05-24

No outreach sent.

## User feedback

Both generated logos looked too large on mobile and overall mobile quality was not good enough.

## Changes applied

- Reduced mobile logo sizes for both pages.
- Made mobile nav non-sticky to avoid a heavy stacked top area.
- Tightened preview/contact bars.
- Improved hero spacing/type scale.
- Made CTAs stacked, centered, and touch-friendly.
- Added narrow-phone overrides for <=380px.
- Added explicit 36px side gutters for narrow-phone CTAs/cards to avoid edge-heavy webview screenshots.

## Verification

Commits:

- `5e67297 Optimize mobile layouts for outreach previews`
- `d0e24cd Fix narrow mobile spacing and CTA insets`
- `a977b3a Strengthen narrow phone CTA and card gutters`

Live CDP-emulated 360px verification:

- Trädgård viewport `360`, scrollWidth `360`, no overflow.
- Trädgård CTAs/card: x=36..324, width 288.
- Måleri viewport `360`, scrollWidth `360`, no overflow.
- Måleri CTAs/card: x=36..324, width 288.
- Final vision QA from CDP screenshots passed for both.

Live URLs:

- https://holmberg.work/hagersten-tradgard/
- https://holmberg.work/hagersten-maleri/
