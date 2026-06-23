---
name: newobour-design
description: Use this skill to generate well-branded interfaces and assets for NewObour.com (the official real-estate marketplace & services portal for New Obour City, Egypt), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. Arabic / RTL first.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

This is an Arabic, **RTL-first** design system. Always author with `dir="rtl"`, Tajawal for Arabic/UI, and Playfair Display for Latin figures/prices.

Key facts:
- **Colors:** Deep Navy `#0B1B33` (brand), Royal Gold `#C9983E` (accent — sparingly), Soft White `#F7F7F5` (bg), Graphite `#2D2D2D` (text). Full tokens in `tokens/`, entry point `styles.css`.
- **Components** (in `components/`): `Button`, `Input`, `Select`, `Badge`, `Card`, `Avatar`, `Tabs`, plus real-estate primitives `StatusBadge`, `PropertyCard`, `LedgerSearch`. Compiled to `window.NewObourDesignSystem_0eda04`.
- **UI kit:** `ui_kits/platform/` — full web platform (home, marketplace, ledger search, owner dashboard).
- **Domain vocabulary is exact** — use canonical terms: كشوف التقنين، نزلت كشف، تم التخصيص، المجاورة، البلوك، ناصية، بحري. No emoji. Line icons (Lucide).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask a few questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
