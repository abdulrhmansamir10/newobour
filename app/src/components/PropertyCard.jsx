// ---------------------------------------------------------------------------
// PropertyCard — premium property listing card
// ---------------------------------------------------------------------------
import { Building2, MapPin, BadgeCheck, Maximize2, Handshake } from 'lucide-react';
import StatusBadge from './StatusBadge';

/**
 * @param {{
 *   status: string,
 *   district: string,
 *   block: string,
 *   plotNo: string,
 *   area: number,
 *   price: number,
 *   features: string[],
 *   verified: boolean,
 *   partnershipTerms?: { isPartnership?: boolean, partnershipType?: string, expectedShare?: string },
 *   onClick?: () => void,
 * }} props
 */
export default function PropertyCard({
  status,
  district,
  block,
  plotNo,
  area,
  price,
  features = [],
  verified = false,
  partnershipTerms,
  onClick,
}) {
  const pricePerMeter = Math.round(price / area);
  const formattedPrice = price.toLocaleString('ar-EG');
  const formattedPPM = pricePerMeter.toLocaleString('ar-EG');

  return (
    <article
      dir="rtl"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      className="
        group flex flex-col bg-white rounded-2xl border border-ink-200
        shadow-[0_2px_8px_rgba(11,27,51,0.06)]
        transition-all duration-200 ease-out cursor-pointer
        hover:-translate-y-[3px]
        hover:shadow-[0_12px_28px_rgba(11,27,51,0.12)]
        active:scale-[0.97]
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600
        overflow-hidden
      "
    >
      {/* ------------------------------------------------------------------ */}
      {/* Image / placeholder area — 16 : 10                                 */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative aspect-[16/10] bg-navy-50 flex items-center justify-center overflow-hidden">
        <Building2
          className="text-navy-300 opacity-40"
          size={56}
          strokeWidth={1.2}
          aria-hidden="true"
        />

        {/* Status badge — top right */}
        <div className="absolute top-3 right-3">
          <StatusBadge status={status} size="sm" />
        </div>

        {/* Verified badge — top left */}
        {verified && (
          <div
            className="
              absolute top-3 left-3 flex items-center gap-1 rounded-full
              bg-gold-600/90 text-white px-2 py-0.5
              font-base font-semibold
            "
            style={{ fontSize: '11px' }}
          >
            <BadgeCheck size={14} strokeWidth={2.2} aria-hidden="true" />
            <span>موثّق</span>
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Content area                                                        */}
      {/* ------------------------------------------------------------------ */}
      <div className="flex flex-col gap-3 p-5">
        {/* Title */}
        <h3 className="font-base font-bold text-navy-800 leading-snug" style={{ fontSize: '16px' }}>
          قطعة أرض {area} متر — {district}
        </h3>

        {/* Location row */}
        <div className="flex items-center gap-1.5 text-ink-500" style={{ fontSize: '13px' }}>
          <MapPin size={15} strokeWidth={1.8} className="shrink-0 text-gold-600" aria-hidden="true" />
          <span className="font-base leading-none">
            {district} — البلوك {block} — قطعة {plotNo}
          </span>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-4 text-ink-600" style={{ fontSize: '13px' }}>
          <div className="flex items-center gap-1">
            <Maximize2 size={14} strokeWidth={1.8} className="text-navy-400" aria-hidden="true" />
            <span className="font-base">
              {area.toLocaleString('ar-EG')} م²
            </span>
          </div>

          <span className="text-ink-300" aria-hidden="true">|</span>

          <div className="font-base">
            <span className="font-num">{formattedPPM}</span> ج.م / م²
          </div>
        </div>

        {/* Feature pills */}
        {features.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {features.map((feat) => (
              <span
                key={feat}
                className="
                  inline-flex items-center gap-1 rounded-full
                  bg-navy-50 text-navy-700
                  px-2.5 py-0.5 font-base font-semibold
                "
                style={{ fontSize: '12px' }}
              >
                {/* Tiny gold dot */}
                <span
                  className="shrink-0 rounded-full bg-gold-600"
                  style={{ width: '5px', height: '5px' }}
                  aria-hidden="true"
                />
                {feat}
              </span>
            ))}
          </div>
        )}

        {partnershipTerms?.isPartnership && (
          <div className="flex items-start gap-2 rounded-xl border border-gold-200 bg-gold-50 px-3 py-2 text-[12.5px] font-bold leading-relaxed text-navy-800">
            <Handshake className="mt-0.5 h-4 w-4 shrink-0 text-gold-700" />
            <span>{partnershipTerms.partnershipType}</span>
          </div>
        )}

        {/* Divider */}
        <hr className="border-ink-100 my-0.5" />

        {/* Price */}
        <div className="flex items-baseline gap-1.5">
          <span
            className="font-num font-bold text-navy-800"
            style={{ fontSize: '22px', lineHeight: 1.2 }}
          >
            {formattedPrice}
          </span>
          <span className="font-base text-ink-500" style={{ fontSize: '14px' }}>
            ج.م
          </span>
        </div>
      </div>
    </article>
  );
}
