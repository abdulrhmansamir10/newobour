// ---------------------------------------------------------------------------
// StatusBadge — pill badge for land legal status
// ---------------------------------------------------------------------------
import { STATUS_CONFIG } from '../data/mockData';

/**
 * @param {{ status: 'mail'|'ledger'|'alloc'|'license'|'build', size?: 'sm'|'md' }} props
 */
export default function StatusBadge({ status, size = 'md' }) {
  const config = STATUS_CONFIG[status];

  if (!config) return null;

  const isSm = size === 'sm';

  return (
    <span
      dir="rtl"
      className={`
        inline-flex items-center gap-1.5 font-base font-semibold
        rounded-full select-none whitespace-nowrap
        ${isSm ? 'px-2 py-0.5' : 'px-3 py-1'}
      `}
      style={{
        fontSize: isSm ? '11px' : '13px',
        color: config.color,
        backgroundColor: config.bg,
      }}
    >
      {/* Status dot */}
      <span
        className="shrink-0 rounded-full"
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: config.color,
        }}
        aria-hidden="true"
      />

      {config.label}
    </span>
  );
}
