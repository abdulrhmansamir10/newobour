import React from 'react';

/** User avatar — image or initials, navy ring optional. RTL-safe. */
export function Avatar({ src, name = '', size = 40, ring = false, style = {}, ...rest }) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map((w) => w[0] || '').join('');
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, borderRadius: '50%', flex: 'none', overflow: 'hidden',
        background: 'var(--navy-100)', color: 'var(--navy-700)',
        fontFamily: 'var(--font-base)', fontWeight: 700, fontSize: size * 0.4,
        boxShadow: ring ? '0 0 0 2px var(--bg-surface), 0 0 0 4px var(--gold-600)' : 'none',
        ...style,
      }}
      {...rest}
    >
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : <span>{initials || '؟'}</span>}
    </span>
  );
}
