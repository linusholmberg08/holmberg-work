# SVG logo fix — 2026-05-24

No outreach sent.

## Reason

User correctly noted the page was reconstructing/painting the agreed logos in HTML/CSS, which made them look weird in mobile screenshots. Requested copying the agreed logos and using SVG instead.

## Change

Created standalone transparent SVG logo lockups and patched both preview headers to use `<img class="brand-logo" src="...svg">` rather than separate painted DOM/CSS pieces.

Files:

- `/hagersten-tradgard/assets/logo-hagersten-tradgard.svg`
- `/hagersten-maleri/assets/logo-hagersten-maleri.svg`

## Verification

- Local 390px screenshots QA passed for both.
- Trädgård logo appears as one cohesive horizontal butterfly/text/divider lockup.
- Måleri logo appears as serif Hägersten/Måleri/KONSULT with a flat orange paint-stroke mark, no cube/splash.
- Pushed commit: `08da8ca Use standalone SVG logos in outreach previews`.
- Live pages verified to reference `.svg` assets, and SVG asset URLs return 200.
