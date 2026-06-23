import React from 'react';

/**
 * Text input with optional label, leading icon, hint/error. RTL-first.
 */
export function Input({
  label,
  hint,
  error,
  iconStart = null,
  type = 'text',
  size = 'md',
  disabled = false,
  required = false,
  style = {},
  id,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    md: { height: 46, fontSize: 15, padX: 14 },
    lg: { height: 54, fontSize: 16, padX: 16 },
  };
  const s = sizes[size] || sizes.md;
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--danger-600)' : focus ? 'var(--accent)' : 'var(--border-default)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontFamily: 'var(--font-base)', fontSize: 13.5, fontWeight: 600, color: 'var(--text-strong)' }}>
          {label}{required && <span style={{ color: 'var(--danger-600)', marginInlineStart: 4 }}>*</span>}
        </label>
      )}
      <div
        style={{
          display: 'flex', alignItems: 'center', gap: 10, height: s.height,
          padding: `0 ${s.padX}px`, background: disabled ? 'var(--bg-sunken)' : 'var(--bg-surface)',
          border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-input)',
          boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-xs)',
          transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
        }}
      >
        {iconStart && <span style={{ color: 'var(--text-muted)', display: 'flex', flex: 'none' }}>{iconStart}</span>}
        <input
          id={inputId}
          type={type}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-base)', fontSize: s.fontSize, color: 'var(--text-body)',
            minWidth: 0,
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span style={{ fontSize: 12.5, color: error ? 'var(--danger-600)' : 'var(--text-muted)', fontFamily: 'var(--font-base)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
