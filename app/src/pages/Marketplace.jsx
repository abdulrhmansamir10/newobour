import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/mockData';

const STATUS_FILTERS = [
  { value: 'all', label: 'الكل' },
  { value: 'ledger', label: 'نزلت كشف' },
  { value: 'alloc', label: 'تم التخصيص' },
  { value: 'license', label: 'تم الترخيص' },
  { value: 'build', label: 'جاري البناء' },
];

const SORT_OPTIONS = [
  { value: 'latest', label: 'الأحدث' },
  { value: 'price-asc', label: 'الأقل سعراً' },
  { value: 'area-desc', label: 'الأكبر مساحة' },
];

export default function Marketplace() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('all');
  const [sort, setSort] = useState('latest');
  const [partnershipOnly, setPartnershipOnly] = useState(false);

  const listings = useMemo(() => {
    const byStatus =
      status === 'all'
        ? [...properties]
        : properties.filter((property) => property.status === status);
    const filtered = partnershipOnly
      ? byStatus.filter((property) => property.partnershipTerms?.isPartnership)
      : byStatus;

    switch (sort) {
      case 'price-asc':
        return filtered.sort((a, b) => a.price - b.price);
      case 'area-desc':
        return filtered.sort((a, b) => b.area - a.area);
      default:
        return filtered.sort((a, b) => b.id - a.id);
    }
  }, [partnershipOnly, sort, status]);

  return (
    <div className="min-h-[70vh] bg-paper">
      <header className="bg-navy-800 px-6 py-10 text-white md:px-9">
        <div className="mx-auto max-w-[1320px]">
          <h1 className="m-0 text-[32px] font-extrabold">عروض الأراضي والعقارات</h1>
          <p className="m-0 mt-2 text-base text-white/75">
            تصفّح عروض الأراضي والوحدات حسب الحالة القانونية والموقع
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-[1320px] px-6 py-7 pb-16 md:px-9">
        <section className="mb-6 flex flex-col gap-4 rounded-2xl border border-ink-200 bg-white p-4 shadow-sm lg:flex-row lg:items-center">
          <div className="flex items-center gap-2 text-sm font-bold text-navy-800">
            <SlidersHorizontal className="h-4 w-4 text-gold-600" />
            <span>تصفية:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {STATUS_FILTERS.map((filter) => {
              const active = status === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setStatus(filter.value)}
                  className={`rounded-full border px-3.5 py-2 text-[13.5px] font-bold transition-colors ${
                    active
                      ? 'border-navy-800 bg-navy-800 text-white'
                      : 'border-ink-300 bg-white text-ink-800 hover:border-navy-300'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="flex-1" />

          <label className="flex cursor-pointer items-center gap-2 rounded-full border border-gold-200 bg-gold-50 px-3.5 py-2 text-[13.5px] font-bold text-navy-800">
            <input
              type="checkbox"
              checked={partnershipOnly}
              onChange={(event) => setPartnershipOnly(event.target.checked)}
              className="h-4 w-4 accent-gold-600"
            />
            عرض أراضي الشراكة فقط
          </label>

          <label className="flex min-w-[210px] items-center gap-2 text-sm font-bold text-navy-800">
            ترتيب:
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="h-11 flex-1 rounded-xl border border-ink-300 bg-white px-3 text-sm font-medium text-ink-800 outline-none transition focus:border-gold-600 focus:ring-2 focus:ring-gold-600/25"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </section>

        <div className="mb-4 text-sm text-ink-500">
          <span className="font-num text-base font-bold text-navy-800">
            {listings.length.toLocaleString('ar-EG')}
          </span>{' '}
          عرض متاح
        </div>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
              onClick={() => navigate(`/marketplace/${property.id}`)}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
