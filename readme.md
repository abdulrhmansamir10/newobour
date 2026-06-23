# NewObour Design System

The design system for **NewObour.com** — a comprehensive real-estate marketplace and digital service platform for **New Obour City (مدينة العبور الجديدة)**, Egypt. It is a dual-sided marketplace for buying/selling land plots, apartments, and commercial units, and the city's primary service portal (legalization ledger updates, official news, construction guidelines). Audiences: property owners, buyers, and brokers. The product must feel **trustworthy, official, yet user-friendly** — corporate luxury meets functional e-commerce.

> **Primary language & direction: Arabic, RTL.** Every component, card, and screen is authored RTL-first.

## Source materials (provided)
- `uploads/NewObour Features.md` — full UI/UX specification (Arabic). Authentication, IA, the legalization (تقنين) flow, the dynamic selling flow by land status, buyer flows, and the owner tracking dashboard.
- `uploads/ALSWARY_Color_Palette.pdf` / `.png` — the approved 4-color "ALSWARY" luxury corporate palette.
- `uploads/newobour transparent logo.png` — the shield + sunrise mark (copied & trimmed into `assets/`).
- Tajawal font family (7 weights, OFL) — copied into `assets/fonts/`.
- **Not supplied:** Playfair Display font files (named in the original zip). Loaded from Google Fonts as a substitute — see Caveats.

No codebase or Figma was provided; this system is built from the spec, palette, logo, and fonts.

---

## Index / manifest

**Root**
- `styles.css` — single entry point (import-only). Consumers link this.
- `tokens/` — `colors.css`, `typography.css`, `layout.css` (spacing/radius/shadow/motion), `fonts.css` (@font-face), `base.css` (reset).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill manifest for downloadable use.

**Components** (`window.NewObourDesignSystem_0eda04`)
- `components/core/` — `Button`, `Input`, `Select`, `Badge`, `Card`, `Avatar`, `Tabs`.
- `components/realestate/` — `StatusBadge`, `PropertyCard`, `LedgerSearch`.

**UI kit**
- `ui_kits/platform/` — the NewObour web platform: home, marketplace, ledger search, owner dashboard.

**Foundation cards** (`guidelines/*.card.html`) — colors, type, spacing, brand specimens shown in the Design System tab.

**Assets** (`assets/`) — `logo-mark.png` (trimmed), `logo-mark-navy.png`, `logo-original.png`, `fonts/`.

---

## CONTENT FUNDAMENTALS

**Language & voice.** Arabic (Egyptian-standard, formal-but-warm). The tone is that of an **official guide** — authoritative and reassuring, never salesy or playful. Think "الجهاز" (the authority) speaking plainly to a citizen.

- **Address the user directly** with second person: «تأكّد من نزول اسمك»، «أضف قطعتك للمتابعة»، «سنُنبّهك فور صدور الكشف». This builds the trustworthy, personal-guide feel.
- **Casing/script:** Arabic has no case. Latin fragments (brand, "NEW OBOUR CITY", status acronyms) are uppercase with wide tracking for an official stamp feel.
- **Domain vocabulary is exact — never paraphrase.** Use the spec's canonical terms: «كشوف التقنين»، «نزلت كشف»، «تم التخصيص»، «جواب التخصيص»، «المجاورة»، «البلوك»، «ناصية»، «بحري». These are legal/administrative terms owners search for verbatim.
- **Numbers & figures** render in Latin numerals (Playfair Display) for scannability in data-dense tables — prices, areas (م²), plot numbers, national IDs.
- **Microcopy is action-first and concrete:** «بحث في الكشوف»، «ابدأ المتابعة»، «نبّهني عند النزول». Buttons state the outcome, not the mechanism.
- **No emoji.** Ever. This is an official portal. Iconography carries all symbolic weight (line icons only).
- **Reassurance patterns:** success states name the next human step («تواصل مع خدمة العملاء لإتمام الخطوات») rather than leaving the user at a dead end — a core requirement of the legalization flow.

---

## VISUAL FOUNDATIONS

**Palette.** Four anchored brand colors, extended into tonal ramps in `tokens/colors.css`.
- **Deep Navy `#0B1B33`** — the brand spine. Navbars, footers, headings, primary CTAs, dark hero bands.
- **Royal Gold `#C9983E`** — accent only, used sparingly for emphasis: verified badges, the "نزلت كشف" status, accent CTAs, active-tab underlines, the avatar verification ring. Gold is the "trust mark"; over-using it cheapens it.
- **Soft White `#F7F7F5`** — the app background (`--bg-app`). Cards sit on it as pure white (`#fff`) surfaces.
- **Graphite `#2D2D2D`** — body text (`--text-body`). Headings shift to navy for hierarchy.

**Status color system.** Five legal land states each carry a semantic color (soft tint + dot): mail (slate), ledger (gold), alloc (green), license (blue), build (amber). See `StatusBadge` and the Land Status Colors card.

**Typography.**
- **Tajawal** (300–900) for all Arabic + UI. Headings ExtraBold/Black; body Regular; line-height a touch loose (1.6) for Arabic legibility.
- **Playfair Display** for Latin display accents and all figures/prices — a serif counterpoint that signals luxury and makes numbers tabular & scannable.

**Shape & corners.** Soft, generously rounded — cards `16px`, inputs/buttons `12px`, pills fully round, the search bar `20px`. Nothing sharp; the rounded language echoes "المنحنيات الناعمة" (soft curves) from the logo's arc.

**Elevation.** Restrained, **cool navy-tinted shadows** (not neutral gray) — `rgba(11,27,51,…)`. Cards rest at `shadow-sm` and lift to `shadow-lg` with a `-2/-3px` translateY on hover. A dedicated gold-tinted shadow (`--shadow-gold`) sits under accent CTAs only. No harsh or colored drop-shadows beyond these.

**Borders.** Hairline `1px` in `--ink-200/300`; inputs go gold on focus with a soft gold focus ring (`--shadow-focus`). Strong navy borders reserved for outline buttons.

**Backgrounds.** Mostly flat Soft White. Hero/section bands use a **navy gradient** (`135deg` navy→lighter navy) with a faint dotted grid texture at ~6% opacity — subtle, architectural, never loud. No photographic full-bleeds by default (none supplied); no purple/blue tech gradients.

**Motion.** Quick and confident, not bouncy. `--dur-base 200ms` with `--ease-out`. Hover = lift + slight brightness shift; press = `scale(0.97)`. Tab/indicator changes fade (opacity). No infinite/looping decoration.

**Hover/press states.**
- Buttons: hover `brightness(0.93)`, press `scale(0.97)`.
- Cards/listings: hover lift (translateY) + deepen shadow.
- Nav links: muted→white with a gold underline appearing on the active item.

**Layout.** Sticky navy navbar (`72px`). Centered containers (`--container-lg/xl`) with `36px` gutters. Service/listing grids are 3–4 up, collapsing responsively. Generous vertical rhythm (`~52px` section padding).

**Imagery vibe.** When real imagery is added it should read **warm, daylight, aspirational** (sunlit plots, completed villas) to match the sunrise in the mark — but the system itself ships placeholders (a navy building glyph) rather than invented photos.

---

## ICONOGRAPHY

- **System: Lucide** (line icons), loaded from CDN. This matches the spec's explicit direction — «الأيقونات الخطية (Line Icons) كما هو موضح في البانر». Consistent `~2px` stroke, rounded caps/joins, which harmonizes with the soft-rounded UI.
- **This is a substitution** — no proprietary icon set was supplied. If NewObour adopts a house icon set, swap the Lucide CDN for it; usage points are isolated to UI-kit screens and component `iconStart`/`iconEnd` props.
- Common glyphs in use: `file-search` (ledger), `building-2`/`shield-check` (marketplace/trust), `newspaper`/`megaphone` (news), `scroll-text` (licensing guide), `map-pin` (location), `badge-check`/`headset`/`bell-ring` (verified, support, alerts).
- **No emoji, no Unicode-glyph icons.** The verified mark is a custom gold star drawn inline in `PropertyCard`, and the logo is a raster PNG asset — never re-drawn as ad-hoc SVG.
- Icons are monochrome, inheriting `currentColor` (navy on light surfaces, white on navy bands, gold for accent moments).

---

## Caveats
- **Playfair Display** loads from Google Fonts (the TTFs weren't in the upload). Provide the files for offline/production use.
- **Lucide** icons are a substitute for an unspecified icon set.
- No real photography — listing cards ship with a placeholder glyph.
- Built from the written spec only (no codebase/Figma), so screen specifics for the News and Licensing-Guide sections are stubbed pending content.
