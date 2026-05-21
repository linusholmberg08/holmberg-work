# holmberg.work — That Declutter Life

A small journal on decluttering and the patient keeping of a home. A static
site, written by hand, hosted on GitHub Pages.

## Structure

```
/                                    The masthead, the opening essay,
                                     the eight-card collection, the
                                     statement, the letters card.

/organize/                           The Field Guides landing — long
                                     pieces, in one quiet place.

/organize/articles/                  Index of every field guide.

/organize/articles/                  "A Patient House" — the flagship
  complete-home-organization-        room-by-room field guide.
  guide.html
```

## Design

Set in **Cormorant Garamond** (body), **Playfair Display** (display), and
**IBM Plex Mono** (metadata & captions). Palette is faded paperback —
warm cream paper, near-black ink, ochre and oxblood accents. Symmetrical
layouts throughout, with hairline rules and framed inner borders.

Two stylesheets, both self-contained:

- `styles.css` — the root site
- `organize/styles.css` — the Field Guides and article pages

Both share the same CSS custom-property vocabulary so the look stays
seamless across pages.

## Voice

Plainly written, in long careful sentences. The reader is assumed to be
busy and intelligent. No jargon, no influencer fluff, no affiliate
clutter.

## Deployment

Push to `main`. GitHub Pages serves from the repository root. The `CNAME`
file points the apex domain to `holmberg.work`.
