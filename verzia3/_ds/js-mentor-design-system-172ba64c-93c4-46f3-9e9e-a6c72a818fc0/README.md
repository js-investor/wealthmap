# JS Mentor — Design System

**JS Mentor** is a Slovak personal-finance, mindset and self-development brand fronted by **Ivan**, a licensed financial expert (NBS — Národná banka Slovenska, EFA-certified). The brand turns "finančné know-how" into a calm, practical community product: members get tools, calculators, real case studies and direct education instead of hype, crypto signals or get-rich-quick noise.

The tone is **direct, human and educational — never corporate.** Think Alex Hormozi in Slovak: calm, matter-of-fact, motivating. Short punchy sentences, concrete numbers, Slovak context.

> All user-facing copy is in **Slovak**. Keep it that way.

---

## Sources provided

The system was built from materials supplied by the user:

- **Fonts** — **Fraunces** (variable TTF, roman + italic — the heading serif) and **Matter** (TTF: Light/Regular/Medium/SemiBold/Bold — body/UI). Recoleta (the original heading serif) is retained in `fonts/` as a fallback but is no longer the brand display face. All copied into `fonts/`.
- **Logos** — `uploads/1.svg` and `uploads/2.svg`. ⚠️ **Both are broken exports** — they reference embedded raster images with no actual image data (empty `<image>` tags). No usable logo could be extracted. The wordmark in this system is set in Recoleta as a stand-in. **Action needed: please re-upload a real logo (PNG/SVG with embedded data).**
- **Screenshots** — four screens of the JS Mentor sales / landing page (`uploads/Snímka obrazovky …`, mirrored to `uploads/shot1–4.png`). These are the visual source of truth for the UI kit, since no codebase or Figma was provided.
- Portrait of Ivan and the bonus thumbnails were cropped out of the screenshots into `assets/`.

No codebase, Figma file, or slide deck was provided. There is **one product surface**: a marketing / sales landing page (a "vstúp do komunity" funnel). The UI kit recreates it.

---

## CONTENT FUNDAMENTALS

How JS Mentor writes. Match this voice exactly.

**Voice:** direct, confident, human. Calm authority, not loud salesmanship. Educational and de-jargoned. Builds trust through credentials + real numbers, then motivates.

**Person:** speaks to the reader as **"ty"** (informal singular) — "Vyšší príjem **ti** môže kúpiť pohodlie", "Keď sa **pridáš**, **dostaneš** konkrétne nástroje". Ivan refers to himself in first person — "**Volám sa** Ivan", "**Riešil som** bežné témy".

**Sentence style:** short, declarative, punchy. Often a bold lead-in then a plain continuation: "**Toto sú chyby,** ktoré ľudí stoja najviac peňazí." Frequent fragments for rhythm: "Nešlo o krypto signály. Nešlo o trading skupinu. Nešlo o rýchle zbohatnutie."

**Casing:** Sentence case everywhere in headlines and body. UPPERCASE reserved for button labels and tiny eyebrow pills ("CHCEM SA PRIDAŤ ZADARMO", "VSTÚPIŤ NA 15 DNÍ ZADARMO"). Headlines are NOT title-cased.

**Numbers & specifics:** always concrete and Slovak-formatted — `118 000`, `8 rokov`, `3 000 000 €`, "15 dní zadarmo", "+3 stručné dokumenty". Space as thousands separator, `€` after the number. Credentials cited plainly: "odborník s licenciou v Národnej banke Slovenska", "absolvent EFA (najväčší finančný titul v EÚ)".

**Emoji:** YES — used deliberately and sparingly as punctuation at the END of a line, never decoratively mid-sentence. Patterns seen: 🚀 on primary CTAs ("Chcem sa pridať ZADARMO 🚀"), 🎁 for bonuses ("praktické bonusy 🎁"), and one expressive emoji closing each pain-point list item (😅 🥵 ❌ 🏠 🧍 🤯 🤔). Keep it to one emoji per line, and only where it adds a human beat. No emoji in body paragraphs.

**Topic vocabulary:** investovanie, hypotéka, fondy, ETF, nehnuteľnosti, renta, poplatky, rozhodnutia, majetok, príjem, sloboda. Anti-vocabulary (what JS Mentor is NOT): krypto signály, trading skupina, rýchle zbohatnutie, špekulant.

**Anti-patterns to avoid:** empty corporate phrases, buzzwords, "synergy/leverage/disrupt"-style jargon, exclamation-point hype, vague promises. Every claim is backed by a number or a credential.

**Examples (verbatim from the product):**
- Hero: *"Toto je cesta k bohatšiemu životu."*
- Lead: *"Vyšší príjem ti môže kúpiť pohodlie. Rozumné finančné rozhodnutia ti kupujú slobodu."*
- Eyebrow pill (red): *"Toto nie sú finančné rozprávky"*
- Section head: *"Keď sa pridáš, dostaneš konkrétne nástroje, nie ďalšie prázdne rady."*
- CTA: *"Chcem sa pridať ZADARMO 🚀"* / *"VSTÚPIŤ NA 15 DNÍ ZADARMO 🚀"*

---

## VISUAL FOUNDATIONS

**The core motif: alternating black and cream sections.** The page reads as a rhythm of full-bleed `#000000` blocks and warm `#F5EDE0` blocks stacked vertically. Each section is one solid colour edge-to-edge; the contrast between them creates the structure. Use 2 background colours only — black and cream — never a third.

**Colour**
- `#000000` black — the primary base. Dark sections, the device frame, button text inversions.
- `#F5EDE0` cream — light sections. Warm, paper-like, never stark white as a section bg.
- `#FFFFFF` white — reserved for *cards* sitting on cream or black (pill list items, calculator cards).
- `#2B6B4A` forest green — CTAs and accents only. White text on green. Used sparingly so it always means "act now".
- `#B23A2E` muted brick red — the single attention pill ("Toto nie sú finančné rozprávky"). Rare, high-signal.
- Text on cream is a soft near-black `#161310`, not pure `#000`. Text on black is cream `#F5EDE0`, not pure white. This keeps everything warm.

**Type**
- **Fraunces** (serif, variable) for all headlines, big numbers and the wordmark. Warm, modern, soft serif — set with its `opsz` / `SOFT` / `WONK` axes (`--fraunces-display: "opsz" 144, "SOFT" 45, "WONK" 0`) for a friendly, premium feel. Headlines mix weights inside one sentence: a heavy **ExtraBold/Black (800–900)** lead-in followed by a lighter **Regular/Medium** continuation. Tight tracking (`-0.01em`), balanced wrapping.
- **Matter** (sans) for all body, sub-heads, UI and button labels. Clean, neutral grotesque. Sub-headlines are often Matter SemiBold (600) sitting under a serif headline.
- Generous line-height on body (1.55–1.6). Headlines tight (1.05–1.18).

**Backgrounds & imagery** — flat solid colour fills, no gradients, no patterns, no textures. Photography is warm-toned, naturalistic studio/lifestyle portraits of Ivan (warm browns, soft key light, shallow depth of field). Media sits in rounded containers. Floating "tag" chips (white pills: *investície, úspech, peniaze, dane, nehnuteľnosti, osobné financie*) are overlaid on dark portrait blocks to label themes.

**Corners & radii** — everything is rounded. Cards and buttons ~16px, media/large panels 20–28px, pills fully round (999px). No sharp corners anywhere. The phone/section frame itself has large rounded corners.

**Cards**
- *On cream:* white card, soft hairline border (`rgba(22,19,16,0.10)`) and/or a gentle shadow, generous padding, an icon at left. Pill-shaped list rows (numbered 1–8) are white with full rounding.
- *On black:* near-black raised cards (`#161310`) with a subtle light hairline, pill or rounded-rect, icon at left, cream text. The "Investovanie bez rozprávok" stack uses these.
- Stat rows sit in a recessed beige well (`#ECE2D1`) on cream.

**Buttons** — forest-green, fully/heavily rounded, white SemiBold label, often UPPERCASE, frequently closing with an emoji (🚀). Comfortable padding (~14px × 24px). Primary is the only loud element on a section.

**Shadows** — soft, warm, low-spread. Subtle on cards (`0 4px 16px rgba(22,19,16,0.07)`), larger only on hero media. No hard or coloured shadows. Cream wells use no shadow, just a darker fill.

**Motion** — restrained. Gentle fades and small rises on scroll, ~200–240ms, smooth ease-out (`cubic-bezier(0.22,1,0.36,1)`). No bounces, no parallax theatrics. Buttons: subtle.

**Hover states** — buttons darken green (`#2B6B4A` → `#225A3E`); cards lift slightly (raise shadow + ~1px translate up). Links/secondary use a small opacity drop.

**Press states** — slight scale-down (`scale(0.98)`) and the darker green; quick.

**Borders** — hairline only, 1px, low-opacity ink on light or low-opacity cream on dark. Borders are for definition, never decoration. No coloured left-border-accent cards.

**Transparency & blur** — minimal. Floating tag chips are solid white, not glassy. Overlay text on photos uses solid fills or simple darkening, not heavy blur. Avoid glassmorphism.

**Layout rules** — single column, centred, generous vertical air. "Radšej menej prvkov a viac priestoru." Content max-width is narrow (mobile-first funnel, ~440–480px content column even on desktop). Strong vertical rhythm via the alternating sections. Plenty of whitespace between blocks.

---

## ICONOGRAPHY

No icon font, sprite or SVG icon set was found in the provided materials (no codebase / Figma). The screenshots show **simple, modern, single-weight line/duotone icons** inside the feature and calculator cards — a chart-up glyph, a magnifier-over-figure, a document, a house, a coins/wallet, a lightbulb, a calculator. They read as a consistent thin-to-medium stroke, monochrome (ink on white cards, cream on black cards).

**Substitution (flagged):** This system uses **[Lucide](https://lucide.dev)** via CDN as the closest match — clean, modern, consistent ~2px stroke, single-weight, huge coverage. Mapping used in the UI kit:
- Investovanie → `trending-up` / `line-chart`
- Analýzy → `search` / `bar-chart-3`
- Rozhodnutia → `git-branch` / `scale`
- Hypotéky / byty → `home`
- Reálne prípady → `users`
- Rentová kalkulačka → `hand-coins`
- Investičná → `piggy-bank` / `coins`
- Hypotekárna → `building-2` / `file-text`
- Mzdová → `banknote` / `wallet`
- Splatiť/investovať → `lightbulb`

⚠️ If JS Mentor has its own icon set, please share it and we'll swap Lucide out.

**Emoji as icons:** emoji ARE part of the visual language (see Content Fundamentals) — used as expressive end-of-line punctuation, not as UI icons. Keep emoji in copy; use Lucide for structural/card icons.

**Logo:** no usable logo file (broken SVGs). Wordmark is set in Fraunces (heavy weight) as a placeholder — **please re-upload the real logo.**

---

## Index — what's in this system

| Path | What it is |
|---|---|
| `README.md` | This file — brand context, content & visual foundations, iconography |
| `colors_and_type.css` | All design tokens: `@font-face`, colour vars, type scale, radii, spacing, shadows, motion |
| `fonts/` | Fraunces (variable, roman + italic) + Matter (5 weights) + Recoleta (fallback) |
| `assets/` | Cropped imagery: `ivan-portrait.png`, `ivan-hero.png`, `bonus-*.png` |
| `preview/` | Design-system cards shown in the Design System tab (colors, type, components, etc.) |
| `ui_kits/landing/` | UI kit recreating the JS Mentor sales/landing page (`index.html` + JSX components) |
| `SKILL.md` | Agent-Skill manifest so this system works as a downloadable Claude skill |

**UI kits:** `ui_kits/landing/` — the marketing / community-funnel landing page (the only product surface provided).

---

## Caveats / open questions
- **Logo missing** — both supplied SVGs are empty exports. Need a real file.
- **Icons substituted** with Lucide — confirm or supply the real set.
- **Imagery** is cropped from compressed screenshots (low-res). Replace with originals for production.
- **No codebase/Figma** — the UI kit is reconstructed from screenshots, so exact paddings, hover/press behaviour and any below-the-fold sections are best-effort, not pixel-traced from source.
