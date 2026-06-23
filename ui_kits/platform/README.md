# NewObour Web Platform — UI Kit

High-fidelity, RTL Arabic recreation of the NewObour.com web platform — the official services + marketplace portal for New Obour City.

## Screens (`index.html` — interactive click-through)
- **Home** (`ScreensHome.jsx` → `HomeScreen`) — navy hero with the `LedgerSearch` cornerstone, quick-service grid, featured listings, and the city news strip.
- **Marketplace** (`ScreensHome.jsx` → `MarketScreen`) — filterable grid of `PropertyCard`s by legal status, with sort + count.
- **Ledger Search** (`ScreensLedger.jsx` → `LedgerScreen`) — كشوف التقنين search with the "name found" success result and the "notify me" alternate flow.
- **Owner Dashboard** (`ScreensLedger.jsx` → `DashboardScreen`) — tracked-plot card + personalized news feed for the owner's neighbourhood.

`news` and `guide` render as labelled stubs (content not specified in the brief).

## Composition
Screens compose the published design-system components via `window.NewObourDesignSystem_0eda04` — `Button`, `Input`, `Select`, `Badge`, `Avatar`, `StatusBadge`, `PropertyCard`, `LedgerSearch`. Shared chrome (`Navbar`, `Footer`) lives in `Chrome.jsx`. Sample data is in `data.js`.

## Notes
- Icons: **Lucide** (CDN) — line icons matching the brand's stated "Line Icons" direction. Substitute; no proprietary icon set was supplied.
- Imagery: property cards use the component's built-in placeholder (no real photography supplied). Drop real images via the `image` prop.
- Everything is RTL-first (`dir="rtl"`, Tajawal).
