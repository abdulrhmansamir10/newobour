Labelled text field — registration, marketplace forms, search-by-ID. RTL-first; gold focus ring.

```jsx
<Input label="رقم التليفون" iconStart={<i data-lucide="phone" />} placeholder="01xxxxxxxxx" />
<Input label="الاسم بالكامل" required error="هذا الحقل مطلوب" />
```

Props: `label`, `hint`, `error`, `iconStart`, `size` (`md | lg`), plus native input attrs (`type`, `placeholder`, `value`, `onChange`, `disabled`, `required`).
