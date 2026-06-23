import React from 'react';

/**
 * Generic pill Badge with tonal variants. For the legal land-status badge
 * (تم التخصيص / نزلت كشف …) use StatusBadge instead.
 */
export function Badge({
  children,
  tone = 'neutral',
  solid = false,
  size = 'md',
  iconStart = null,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: { soft: ['#eef0f3', 'var(--ink-700)'], solid: ['var(--ink-700)', '#fff'] },
    navy:    { soft: ['var(--navy-50)', 'var(--navy-700)'], solid: ['var(--navy-800)', '#fff'] },
    gold:    { soft: ['var(--gold-100)', 'var(--gold-800)'], solid: ['var(--gold-600)', 'var(--navy-900)'] },
    success: { soft: ['var(--success-100)', 'var(--success-600)'], solid: ['var(--success-600)', '#fff'] },
    warning: { soft: ['var(--warning-100)', 'var(--warning-600)'], solid: ['var(--warning-600)', '#fff'] },
    danger:  { soft: ['var(--danger-100)', 'var(--danger-600)'], solid: ['var(--danger-600)', '#fff'] },
    info:    { soft: ['var(--info-100)', 'var(--info-600)'], solid: ['var(--info-600)', '#fff'] },
  };
  const pair = (tones[tone] || tones.neutral)[solid ? 'solid' : 'soft'];
  const sizes = {
    sm: { padding: '3px 9px', fontSize: 11.5, gap: 4 },
    md: { padding: '5px 12px', fontSize: 13, gap: 6 },
  };
  const s = sizes[size] || sizes.md;

  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: s.gap,
        padding: s.padding, fontFamily: 'var(--font-base)', fontWeight: 700,
        fontSize: s.fontSize, lineHeight: 1.2, borderRadius: 'var(--radius-pill)',
        background: pair[0], color: pair[1], whiteSpace: 'nowrap', ...style,
      }}
      {...rest}
    >
      {iconStart}
      {children}
    </span>
  );
}
