import React from 'react';

/**
 * Tabs — underline style with gold active indicator. RTL-first.
 * items: array of { value, label, count? }. Controlled via value/onChange.
 */
export function Tabs({ items = [], value, onChange, style = {}, ...rest }) {
  const [internal, setInternal] = React.useState(value ?? (items[0] && items[0].value));
  const active = value ?? internal;
  const select = (v) => { setInternal(v); onChange && onChange(v); };

  return (
    <div
      style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--border-subtle)', ...style }}
      {...rest}
    >
      {items.map((it) => {
        const on = it.value === active;
        return (
          <button
            key={it.value}
            onClick={() => select(it.value)}
            style={{
              position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '12px 16px', background: 'transparent', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-base)', fontSize: 15, fontWeight: on ? 700 : 500,
              color: on ? 'var(--brand)' : 'var(--text-muted)',
              transition: 'color var(--dur-base)',
            }}
          >
            {it.label}
            {it.count != null && (
              <span style={{
                fontFamily: 'var(--font-num)', fontSize: 12, fontWeight: 700,
                padding: '1px 7px', borderRadius: 'var(--radius-pill)',
                background: on ? 'var(--gold-100)' : 'var(--bg-sunken)',
                color: on ? 'var(--gold-800)' : 'var(--text-muted)',
              }}>{it.count}</span>
            )}
            <span style={{
              position: 'absolute', insetInline: 8, bottom: -1, height: 3, borderRadius: 3,
              background: 'var(--gold-600)', opacity: on ? 1 : 0,
              transition: 'opacity var(--dur-base)',
            }} />
          </button>
        );
      })}
    </div>
  );
}
