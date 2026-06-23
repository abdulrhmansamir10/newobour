import React from 'react';

/**
 * NewObour Button — primary navy CTA, gold accent, outline & ghost.
 * RTL-first; icon sits inline and flips with direction automatically.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  loading = false,
  iconStart = null,
  iconEnd = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '0 14px', height: 36, fontSize: 14, gap: 7, radius: 'var(--radius-sm)' },
    md: { padding: '0 20px', height: 44, fontSize: 15, gap: 8, radius: 'var(--radius-md)' },
    lg: { padding: '0 28px', height: 54, fontSize: 17, gap: 10, radius: 'var(--radius-md)' },
  };
  const s = sizes[size] || sizes.md;

  const variants = {
    primary: {
      background: 'var(--brand)', color: 'var(--text-on-brand)',
      border: '1px solid var(--brand)', boxShadow: 'var(--shadow-sm)',
    },
    accent: {
      background: 'var(--accent)', color: 'var(--text-on-accent)',
      border: '1px solid var(--accent)', boxShadow: 'var(--shadow-gold)',
    },
    outline: {
      background: 'transparent', color: 'var(--brand)',
      border: '1px solid var(--border-strong)', boxShadow: 'none',
    },
    ghost: {
      background: 'transparent', color: 'var(--brand)',
      border: '1px solid transparent', boxShadow: 'none',
    },
    danger: {
      background: 'var(--danger-600)', color: '#fff',
      border: '1px solid var(--danger-600)', boxShadow: 'var(--shadow-sm)',
    },
  };
  const v = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      style={{
        display: block ? 'flex' : 'inline-flex',
        width: block ? '100%' : 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        height: s.height,
        padding: s.padding,
        fontFamily: 'var(--font-base)',
        fontWeight: 700,
        fontSize: s.fontSize,
        lineHeight: 1,
        borderRadius: s.radius,
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
        ...v,
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled && !loading) e.currentTarget.style.transform = 'scale(0.97)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'none'; }}
      onMouseEnter={(e) => { if (!disabled && !loading) e.currentTarget.style.filter = 'brightness(0.93)'; }}
      {...rest}
    >
      {loading && <Spinner />}
      {!loading && iconStart}
      {children}
      {!loading && iconEnd}
    </button>
  );
}

function Spinner() {
  return (
    <span
      style={{
        width: 16, height: 16, borderRadius: '50%',
        border: '2px solid currentColor', borderTopColor: 'transparent',
        display: 'inline-block', animation: 'no-spin 0.7s linear infinite',
      }}
    >
      <style>{`@keyframes no-spin { to { transform: rotate(360deg); } }`}</style>
    </span>
  );
}
