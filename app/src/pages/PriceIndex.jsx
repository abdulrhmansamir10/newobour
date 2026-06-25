import { useMemo, useState } from 'react';
import { Activity, BarChart3, TrendingUp } from 'lucide-react';
import { districtPriceHistory } from '../data/mockData';

export default function PriceIndex() {
  const [firstDistrict, setFirstDistrict] = useState(districtPriceHistory[0].district);
  const [secondDistrict, setSecondDistrict] = useState(districtPriceHistory[4].district);

  const metrics = useMemo(() => {
    const latestPrices = districtPriceHistory.map((item) => item.prices.at(-1));
    const totalAverage = Math.round(
      latestPrices.reduce((sum, price) => sum + price, 0) / latestPrices.length
    );
    const growth = districtPriceHistory.map((item) => ({
      district: item.district,
      delta: percentageDelta(item.prices[0], item.prices.at(-1)),
    }));
    const highestGrowth = growth.sort((a, b) => b.delta - a.delta)[0];
    const marketVolume = districtPriceHistory.reduce(
      (sum, item) => sum + item.activeListings * item.prices.at(-1) * 300,
      0
    );

    return { totalAverage, highestGrowth, marketVolume };
  }, []);

  const first = districtPriceHistory.find((item) => item.district === firstDistrict);
  const second = districtPriceHistory.find((item) => item.district === secondDistrict);

  return (
    <div className="min-h-[70vh] bg-paper">
      <header className="bg-navy-800 px-6 py-10 text-white md:px-9">
        <div className="mx-auto max-w-[1320px]">
          <h1 className="m-0 text-[32px] font-extrabold">مؤشر أسعار العبور الجديد</h1>
          <p className="m-0 mt-2 max-w-[760px] text-base leading-relaxed text-white/75">
            قراءة تحليلية لسعر المتر، حجم السوق، ونسب اكتمال المرافق بين الأحياء.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-[1320px] px-6 py-8 pb-16 md:px-9">
        <section className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <MetricCard
            icon={BarChart3}
            label="متوسط سعر المتر"
            value={`${metrics.totalAverage.toLocaleString('ar-EG')} ج.م`}
            hint="متوسط آخر شهر لكل الأحياء"
          />
          <MetricCard
            icon={TrendingUp}
            label="أعلى نمو هذا الشهر"
            value={metrics.highestGrowth.district}
            hint={`+${metrics.highestGrowth.delta.toFixed(1)}% خلال 6 أشهر`}
          />
          <MetricCard
            icon={Activity}
            label="حجم السوق النشط"
            value={`${Math.round(metrics.marketVolume / 1000000).toLocaleString('ar-EG')} مليون ج.م`}
            hint="تقدير مبني على العروض النشطة"
          />
        </section>

        <section className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm md:p-6">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="m-0 text-xl font-extrabold text-navy-800">
                مقارنة الأحياء
              </h2>
              <p className="m-0 mt-1 text-sm text-ink-500">
                اختر حيين لمقارنة السعر والمرافق واتجاه النمو.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <DistrictSelect value={firstDistrict} onChange={setFirstDistrict} />
              <DistrictSelect value={secondDistrict} onChange={setSecondDistrict} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <DistrictPanel district={first} />
            <DistrictPanel district={second} />
          </div>
        </section>
      </main>
    </div>
  );
}

function MetricCard({ icon: Icon, label, value, hint }) {
  return (
    <article className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gold-50 text-gold-700">
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-sm font-bold text-ink-500">{label}</div>
      <div className="mt-1 text-2xl font-extrabold text-navy-800">{value}</div>
      <div className="mt-2 text-xs text-ink-500">{hint}</div>
    </article>
  );
}

function DistrictSelect({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="h-11 min-w-[220px] rounded-xl border border-ink-300 bg-white px-3 text-sm font-bold text-navy-800 outline-none transition focus:border-gold-600 focus:ring-2 focus:ring-gold-600/25"
    >
      {districtPriceHistory.map((item) => (
        <option key={item.district} value={item.district}>
          {item.district}
        </option>
      ))}
    </select>
  );
}

function DistrictPanel({ district }) {
  const firstPrice = district.prices[0];
  const latestPrice = district.prices.at(-1);
  const delta = percentageDelta(firstPrice, latestPrice);
  const positive = delta >= 0;

  return (
    <article className="rounded-2xl border border-ink-200 bg-paper p-5">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="m-0 text-lg font-extrabold text-navy-800">{district.district}</h3>
          <p className="m-0 mt-1 text-sm text-ink-500">آخر 6 أشهر من حركة السعر</p>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-sm font-bold ${
            positive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {positive ? '▲' : '▼'} {Math.abs(delta).toFixed(1)}%
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <SmallStat label="متوسط سعر المتر" value={`${latestPrice.toLocaleString('ar-EG')} ج.م`} />
        <SmallStat label="العروض النشطة" value={district.activeListings.toLocaleString('ar-EG')} />
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-bold text-navy-800">اكتمال المرافق</span>
          <span className="font-num font-bold text-gold-700">{district.infrastructure}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-ink-100">
          <div
            className="h-full rounded-full bg-gold-600"
            style={{ width: `${district.infrastructure}%` }}
          />
        </div>
      </div>

      <PriceLine prices={district.prices} />
    </article>
  );
}

function SmallStat({ label, value }) {
  return (
    <div className="rounded-xl bg-white p-4">
      <div className="text-xs text-ink-500">{label}</div>
      <div className="mt-1 font-num text-lg font-bold text-navy-800">{value}</div>
    </div>
  );
}

function PriceLine({ prices }) {
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const points = prices
    .map((price, index) => {
      const x = 20 + index * 52;
      const y = 118 - ((price - min) / Math.max(max - min, 1)) * 88;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg className="mt-5 h-[140px] w-full" viewBox="0 0 300 140" role="img" aria-label="منحنى نمو السعر">
      <polyline
        fill="none"
        stroke="#C9983E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        points={points}
      />
      {prices.map((price, index) => {
        const x = 20 + index * 52;
        const y = 118 - ((price - min) / Math.max(max - min, 1)) * 88;
        return <circle key={price + index} cx={x} cy={y} r="4" fill="#0B1B33" />;
      })}
    </svg>
  );
}

function percentageDelta(start, end) {
  return ((end - start) / start) * 100;
}
