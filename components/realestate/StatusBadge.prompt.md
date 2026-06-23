Semantic land-status badge — the canonical legal states of a plot. Use everywhere a plot's status is shown (cards, dashboards, ledgers).

```jsx
<StatusBadge status="alloc" />            {/* تم التخصيص */}
<StatusBadge status="ledger" size="lg" /> {/* نزلت كشف */}
<StatusBadge status="build" dot={false} />
```

Statuses: `mail` (تم تقديم البريد), `ledger` (نزلت كشف), `alloc` (تم التخصيص), `license` (تم الترخيص), `build` (جاري البناء). Sizes `sm | md | lg`. `StatusBadge.STATUSES` lists all keys.
