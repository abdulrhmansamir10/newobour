Cornerstone search bar for the legalization ledgers (كشوف التقنين). Field-type selector + query input + search button on one elevated bar. Use as the hero search on the legalization section and homepage.

```jsx
<LedgerSearch
  onSearch={({ field, query }) => lookup(field, query)}
  loading={isSearching}
/>
```

Props: `fields` (`{value,label}[]` — defaults to name / national ID / plot), `field`, `query`, `placeholder`, `onFieldChange`, `onQueryChange`, `onSearch({field,query})`, `loading`. Composes `Button`. Submits on Enter.
