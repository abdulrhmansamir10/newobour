import React from 'react';

/**
 * Native-backed Select with the same chrome as Input. RTL-first.
 * options: array of { value, label } or string.
 */
export function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  size = 'md',
  disabled = false,
  required = false,
  style = {},
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = { md: { height: 46, fontSize: 15 }, lg: { height: 54, fontSize: 16 } };
  const s = sizes[size] || sizes.md;
  const selId = id || React.useId();
  const borderColor = error ? 'var(--danger-600)' : focus ? 'var(--accent)' : 'var(--border-default)';
  const norm = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={selId} style={{ fontFamily: 'var(--font-base)', fontSize: 13.5, fontWeight: 600, color: 'var(--text-strong)' }}>
          {label}{required && <span style={{ color: 'var(--danger-600)', marginInlineStart: 4 }}>*</span>}
        </label>
      )}
      <div
        style={{
          position: 'relative', display: 'flex', alignItems: 'center', height: s.height,
          background: disabled ? 'var(--bg-sunken)' : 'var(--bg-surface)',
          border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-input)',
          boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-xs)',
          transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
        }}
      >
        <select
          id={selId}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          defaultValue={placeholder ? '' : undefined}
          style={{
            flex: 1, height: '100%', border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-base)', fontSize: s.fontSize, color: 'var(--text-body)',
            padding: '0 14px', appearance: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
          }}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {norm.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <span style={{ position: 'absolute', insetInlineStart: 12, pointerEvents: 'none', color: 'var(--text-muted)', display: 'flex' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </span>
      </div>
      {(hint || error) && (
        <span style={{ fontSize: 12.5, color: error ? 'var(--danger-600)' : 'var(--text-muted)', fontFamily: 'var(--font-base)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
