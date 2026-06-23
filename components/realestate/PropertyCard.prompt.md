The core marketplace listing — a land plot or unit with image, legal status, area, location, price, and feature tags. Auto-computes price-per-meter.

```jsx
<PropertyCard
  image="/plots/b147.jpg"
  status="alloc"
  district="الحي الثالث"
  block="12"
  plotNo="B-147"
  area={320}
  price={2450000}
  features={['ناصية','بحري','خدمات']}
  verified
  onClick={openListing}
/>
```

Props: `image`, `status` (LandStatus), `title`, `district`, `block`, `plotNo`, `area`, `price`, `features[]`, `verified`, `onClick`. Composes `StatusBadge`. Designed for a responsive grid (≈360–420px wide).
