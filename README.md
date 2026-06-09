# holmberg.work — That Declutter Life

A small journal on decluttering and the patient keeping of a home. A static
site, written by hand, hosted on GitHub Pages.

## Structure

```
/                                    The masthead, the opening essay,
                                     the ten-card collection, the
                                     short-form bridge, the statement,
                                     and the letters card.

/organize/                           The Field Guides landing — long
                                     pieces, in one quiet place.

/organize/articles/                  Index of every field guide.

/organize/articles/                  "A Patient House" — the flagship
  complete-home-organization-        room-by-room field guide.
  guide.html

/organize/articles/                  "A Short List, Taped to the
  decluttering-checklist-room-        Refrigerator" — a room-by-room
  by-room.html                       decluttering checklist for a working week.

/organize/articles/                  "A Pantry That Survives a Tuesday" —
  pantry-organization-that-          pantry organization for ordinary weeks,
  saves-money.html                   fewer duplicates, and the half-full shelf.

/organize/articles/                  "On Owning Fewer Shirts, and Loving
  owning-fewer-shirts-loving-        Them More" — a closet guide for real
  them-more.html                     weeks, useful favorites, and almost-clothes.

/organize/articles/                  "The Kondo Question, Asked Honestly" —
  the-kondo-question-asked-          a careful look at what still helps in
  honestly.html                      the famous decluttering question.

/organize/articles/                  "Where the Day Begins, and Where It
  entryway-organization-soft-        Lands" — an entryway guide for shoes,
  landing.html                       keys, bags, mail, and soft landings.

/organize/articles/                  "Three Drawers, and What Belongs in
  desk-decluttering-three-           Them" — a desk guide for papers,
  drawers.html                       cables, daily tools, and active work.

/organize/articles/                  "On Letting Go of the Tool You Do
  garage-tool-decluttering.html      Not Use" — a garage guide for tools,
                                     hardware, paint, and seasonal supplies.

/organize/articles/                  "Ten Minutes, Every Evening, Before
  evening-reset-decluttering-        the Lamps" — an evening reset guide for
  routine.html                       soft places, wandering objects, and
                                     tomorrow's first room.

/organize/articles/                  "The Basket by the Stairs" — a holding
  basket-by-the-stairs-              place guide for temporary objects,
  decluttering.html                  return routes, and avoiding hidden piles.

/organize/articles/                  "The Shelf That Catches Everything" —
  shelf-that-catches-                a catch-all surface guide for daily
  everything.html                    objects, small decisions, and return routes.

/planning/                           Internal project planning docs for
                                     That Declutter Life publishing packs
                                     and performance tracking. These are
                                     not public navigation pages.
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

The short-form work uses the same voice in smaller pieces: ordinary
objects, real footage, calm music, exact captions, and a lightly funny
reflective line rather than a productivity lecture.

## Social / short-form workflow

The homepage includes a small bridge to the That Declutter Life short-form
project and links to TikTok at `https://www.tiktok.com/@thatdeclutterlife`.
YouTube Shorts is treated as a manual cross-post/archive until a public URL
is confirmed.

Publishing rule: Hermes prepares scripts, captions, rendered files, and
copy. Linus posts manually. No social-platform automation.

Planning files:

- `planning/that-declutter-life-performance-tracker.md` — manual 24h/72h
  stats ledger for TikTok and YouTube Shorts.
- `planning/video-004-publishing-pack.md` — copy, hashtags, footage
  checklist, and posting checklist for "The Drawer That Knows Too Much".

## Deployment

Push to `main`. GitHub Pages serves from the repository root. The `CNAME`
file points the apex domain to `holmberg.work`.
