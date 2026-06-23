import React from 'react';

/**
 * StatusBadge — semantic badge for a land plot's legal state.
 * Maps the five canonical NewObour statuses to brand-correct colors.
 * Pass a known `status` key, or override label/tone freely.
 */
const STATUS = {
  mail:    { label: 'تم تقديم البريد', bg: '#e9eff6', fg: '#3c5876', dot: 'var(--status-mail)' },
  ledger:  { label: 'نزلت كشف',        bg: 'var(--gold-100)', fg: '#8a6622', dot: 'var(--status-ledger)' },
  alloc:   { label: 'تم التخصيص',      bg: '#dcefe5', fg: '#1c7257', dot: 'var(--status-alloc)' },
  license: { label: 'تم الترخيص',      bg: 'var(--info-100)', fg: '#1f4f86', dot: 'var(--status-license)' },
  build:   { label: 'جاري البناء',     bg: '#f7ecd7', fg: '#9a5f1c', dot: 'var(--status-build)' },
};

export function StatusBadge({ status = 'ledger', label, size = 'md', dot = true, style = {}, ...rest }) {
  const s = STATUS[status] || STATUS.ledger;
  const sizes = {
    sm: { padding: '4px 10px', fontSize: 12, gap: 6, dotSize: 7 },
    md: { padding: '6px 13px', fontSize: 13.5, gap: 7, dotSize: 8 },
    lg: { padding: '8px 16px', fontSize: 15, gap: 8, dotSize: 9 },
  };
  const z = sizes[size] || sizes.md;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: z.gap, padding: z.padding,
        background: s.bg, color: s.fg, fontFamily: 'var(--font-base)', fontWeight: 700,
        fontSize: z.fontSize, lineHeight: 1.2, borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: z.dotSize, height: z.dotSize, borderRadius: '50%', background: s.dot, flex: 'none' }} />}
      {label || s.label}
    </span>
  );
}

StatusBadge.STATUSES = Object.keys(STATUS);
