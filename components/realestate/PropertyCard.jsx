import React from 'react';
import { StatusBadge } from './StatusBadge.jsx';

/**
 * PropertyCard — marketplace listing for a land plot / unit.
 * Shows image, status, area, location (حي/مجاورة/بلوك), price, and feature tags.
 */
export function PropertyCard({
  image,
  status = 'alloc',
  title,
  district,        // الحي
  block,           // المجاورة / البلوك
  plotNo,          // رقم القطعة
  area,            // المساحة بالمتر
  price,           // السعر الإجمالي بالجنيه
  features = [],   // ['ناصية','بحري','خدمات']
  verified = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const fmt = (n) => (typeof n === 'number' ? n.toLocaleString('en-US') : n);
  const perMeter = (typeof price === 'number' && typeof area === 'number' && area)
    ? Math.round(price / area) : null;

  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: '100%', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-card)', overflow: 'hidden', cursor: onClick ? 'pointer' : 'default',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
        fontFamily: 'var(--font-base)', display: 'flex', flexDirection: 'column',
        ...style,
      }}
      {...rest}
    >
      {/* Media */}
      <div style={{ position: 'relative', aspectRatio: '16 / 10', background: 'var(--navy-100)', overflow: 'hidden' }}>
        {image
          ? <img src={image} alt={title || ''} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-300)' }}>
              <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3"/><path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01"/></svg>
            </div>}
        <div style={{ position: 'absolute', insetInlineStart: 12, top: 12 }}>
          <StatusBadge status={status} size="sm" />
        </div>
        {verified && (
          <div style={{ position: 'absolute', insetInlineEnd: 12, top: 12, display: 'inline-flex', alignItems: 'center', gap: 5,
            padding: '5px 10px', borderRadius: 'var(--radius-pill)', background: 'rgba(11,27,51,0.82)', color: '#fff',
            fontSize: 12, fontWeight: 700, backdropFilter: 'blur(4px)' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="var(--gold-500)" stroke="none"><path d="M12 2l2.4 2.1 3.1-.5 1.2 2.9 2.9 1.2-.5 3.1L23.6 16l-2.1 2.4.5 3.1-2.9 1.2-1.2 2.9-3.1-.5L12 22l-2.4-2.1-3.1.5-1.2-2.9L2.4 16 .3 13.6 2.4 11l-.5-3.1L4.8 6.7 6 3.8l3.1.5L12 2z" transform="scale(0.86) translate(2 2)"/></svg>
            موثّق
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--text-strong)', margin: 0 }}>
            {title || `قطعة أرض ${area ? `${area} م²` : ''}`}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: 13.5 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s-7-5.2-7-11a7 7 0 0114 0c0 5.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>
            <span>{[district, block && `بلوك ${block}`, plotNo && `قطعة ${plotNo}`].filter(Boolean).join(' · ')}</span>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 16, paddingBlock: 10, borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
          <Stat label="المساحة" value={<span><span style={{ fontFamily: 'var(--font-num)', fontWeight: 700 }}>{fmt(area)}</span> م²</span>} />
          {perMeter && <Stat label="سعر المتر" value={<span><span style={{ fontFamily: 'var(--font-num)', fontWeight: 700 }}>{fmt(perMeter)}</span> ج.م</span>} />}
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {features.map((f) => (
              <span key={f} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px',
                borderRadius: 'var(--radius-pill)', background: 'var(--navy-50)', color: 'var(--navy-700)',
                fontSize: 12.5, fontWeight: 600 }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold-600)' }} />{f}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <span style={{ fontFamily: 'var(--font-num)', fontWeight: 700, fontSize: 26, color: 'var(--navy-800)', letterSpacing: '-0.01em' }}>{fmt(price)}</span>
            <span style={{ fontSize: 14, color: 'var(--text-muted)', fontWeight: 600 }}>ج.م</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function Stat({ label, value }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span style={{ fontSize: 11.5, color: 'var(--text-muted)', fontWeight: 500 }}>{label}</span>
      <span style={{ fontSize: 15, color: 'var(--text-strong)' }}>{value}</span>
    </div>
  );
}
