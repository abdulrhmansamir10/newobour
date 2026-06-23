import React from 'react';
import { Button } from '../core/Button.jsx';

/**
 * LedgerSearch — the cornerstone search bar for كشوف التقنين.
 * Look up a name / national ID / plot number in the legalization ledgers.
 * Self-contained: a field-type selector + input + search button on one bar.
 */
export function LedgerSearch({
  fields = [
    { value: 'name', label: 'الاسم' },
    { value: 'national_id', label: 'الرقم القومي' },
    { value: 'plot', label: 'رقم القطعة الأصلية' },
  ],
  field,
  query = '',
  placeholder = 'اكتب الاسم كما هو في وصل البريد…',
  onFieldChange,
  onQueryChange,
  onSearch,
  loading = false,
  style = {},
  ...rest
}) {
  const [internalField, setInternalField] = React.useState(field ?? fields[0]?.value);
  const [internalQuery, setInternalQuery] = React.useState(query);
  const f = field ?? internalField;
  const q = onQueryChange ? query : internalQuery;
  const setF = (v) => { setInternalField(v); onFieldChange && onFieldChange(v); };
  const setQ = (v) => { setInternalQuery(v); onQueryChange && onQueryChange(v); };
  const submit = () => onSearch && onSearch({ field: f, query: q });

  return (
    <div
      style={{
        display: 'flex', alignItems: 'stretch', gap: 8, padding: 8,
        background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)', ...style,
      }}
      {...rest}
    >
      {/* Field selector */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', flex: 'none' }}>
        <select
          value={f}
          onChange={(e) => setF(e.target.value)}
          style={{
            appearance: 'none', height: '100%', border: 'none', outline: 'none', cursor: 'pointer',
            background: 'var(--navy-50)', color: 'var(--navy-700)', fontFamily: 'var(--font-base)',
            fontWeight: 700, fontSize: 14, borderRadius: 'var(--radius-md)', padding: '0 36px 0 16px',
          }}
        >
          {fields.map((x) => <option key={x.value} value={x.value}>{x.label}</option>)}
        </select>
        <span style={{ position: 'absolute', insetInlineStart: 12, pointerEvents: 'none', color: 'var(--navy-500)', display: 'flex' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </span>
      </div>

      {/* Query input */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, padding: '0 12px' }}>
        <span style={{ color: 'var(--text-muted)', display: 'flex', flex: 'none' }}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>
        </span>
        <input
          value={q}
          placeholder={placeholder}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') submit(); }}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-base)', fontSize: 16, color: 'var(--text-body)', minWidth: 0,
          }}
        />
      </div>

      <Button variant="primary" size="lg" onClick={submit} loading={loading} style={{ flex: 'none', borderRadius: 'var(--radius-md)' }}>
        بحث في الكشوف
      </Button>
    </div>
  );
}
