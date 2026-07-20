# Verbarium

*A personal lexicon · Emma Darling · MMXXVI*

Verbarium is a hand-built dictionary of coined words — inventions for the things
we all recognise but have no name for. Around 110 entries across six volumes,
each with a definition, etymology, example of use, and a note on why the word
deserves to exist.

It is also the place where I taught myself to build for the web: plain HTML, CSS
and JavaScript, no frameworks, no build step.

**Live site:** https://verbarium.netlify.app *(replace with your actual URL)*

---

## The volumes

| Vol. | Title | Entries |
|------|-------------------------------------------|---------|
| I | Ten coinages for the present age | 10 |
| II | Coinages for love, family & company | 30 |
| III | — | — |
| IV | — | — |
| V | — | — |
| VI | **Promptwrought** — the craft of instructing machines | 20 |

### Vol. VI · Promptwrought

The newest volume, and the one that outgrew the shelf. Twenty words for the
craft of shaping language to direct a machine, built on real etymological bones
— Old English, Greek, the Victorian theatre, the carpenter's workshop.

Its central coinages:

> **promptwright** *n.* — one who shapes language to direct a machine; a maker
> who treats instruction as a craft rather than a command, judged by what the
> machine brings forth.
>
> **promptwrought** *adj.* — made by, or bearing the marks of, skilled
> instruction; of AI output: shaped with evident intent rather than merely
> generated.
>
> **promptwrighting** *n.* — the craft itself.

*Promptwrought* is in development as a standalone app and a non-fiction book.

---

## How it is built

| File | What it does |
|--------------|--------------------------------------------------------|
| `index.html` | Page structure, search box, volume and theme filters |
| `style.css` | All styling — cream and burgundy, Playfair Display and Source Serif 4, responsive at 600px and 1025px |
| `script.js` | The `words` array (all entries as data) plus the render, search, filter and expand logic |

Content and design are deliberately separated: every entry is a plain object in
the `words` array, so adding a word never means touching the layout.

```js
{
  word: "Misask",
  pos:  "noun & verb",
  pron: "/mɪsˈɑːsk/",
  vol:  "VI",
  tag:  "Work",
  def:  "The gap between what one asked for and what one meant...",
  etym: "From mis- (Old English, 'wrongly') + ask (Old English āscian)...",
  quote:"The output wasn't wrong -- my question was. A straight misask.",
  why:  "It relocates blame from the machine to the phrasing..."
}
```

### Adding a volume

1. Add the entry objects to the `words` array in `script.js`, each with its `vol`.
2. Add a filter button in `index.html`:
   `<button class="vb-filter" data-filter="VI">Vol. VI</button>`
3. Commit and push — Netlify publishes automatically.

## Running it locally

No install, no dependencies. Clone the repo and open `index.html` in a browser,
or use the VS Code Live Server extension for auto-refresh on save.

## Built with

Plain HTML, CSS and JavaScript · Google Fonts (Playfair Display, Source Serif 4)
· VS Code · Git and GitHub · Netlify · Squarespace DNS

---

## Authorship

All words, definitions, etymologies and example sentences in this repository are
original coinages by **Emma Darling**, written 2026. The commit history of this
repository is the record of their creation and dates.

Copyright © 2026 Emma Darling. The words are offered freely for use in speech
and writing — a coinage nobody repeats is a coinage that failed. The text of the
entries, the collection, and its arrangement remain the author's own and may not
be reproduced as a collection or published in any form without permission.

