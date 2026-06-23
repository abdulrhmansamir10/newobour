Section tabs with gold underline indicator — news categories, dashboard views, marketplace filters.

```jsx
<Tabs items={[
  { value: 'all', label: 'الكل' },
  { value: 'land', label: 'أراضي', count: 128 },
  { value: 'units', label: 'وحدات', count: 42 },
]} onChange={setTab} />
```

Props: `items` (`{value,label,count?}`), `value` (controlled), `onChange`. Works controlled or uncontrolled.
