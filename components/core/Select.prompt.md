Dropdown select — land status, neighbourhood, block, account type. Matches Input chrome.

```jsx
<Select label="حالة الأرض" placeholder="اختر الحالة"
  options={['تم تقديم البريد','نزلت كشف','تم التخصيص','تم الترخيص','جاري البناء']} />
```

Props: `label`, `options` (strings or `{value,label}`), `placeholder`, `hint`, `error`, `size`. Chevron auto-positions on the RTL side.
