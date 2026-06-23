import { Link, useParams } from 'react-router-dom';
import { BadgeCheck, Building2, FileCheck2 } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { brokers, properties } from '../data/mockData';

export default function BrokerProfile() {
  const { id } = useParams();
  const broker = brokers.find((item) => item.id === id) || brokers[0];
  const listings = properties.filter((property) => property.brokerId === broker.id);

  return (
    <div className="min-h-[70vh] bg-paper">
      <header className="bg-navy-800 px-6 py-10 text-white md:px-9">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-5 md:flex-row md:items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-gold-500 bg-white/5 font-num text-2xl font-bold text-gold-300">
            {broker.logoInitials}
          </div>
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2 text-sm font-bold text-gold-300">
              <BadgeCheck className="h-4 w-4" />
              وسيط معتمد
            </div>
            <h1 className="m-0 text-[30px] font-extrabold">{broker.name}</h1>
            <p className="m-0 mt-2 text-sm text-white/70">
              رقم الترخيص التجاري: {broker.licenseNo}
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1120px] px-6 py-8 pb-16 md:px-9">
        <section className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Stat icon={Building2} label="عروض نشطة" value={broker.activeListings.toLocaleString('ar-EG')} />
          <Stat icon={FileCheck2} label="عروض موثقة هنا" value={listings.length.toLocaleString('ar-EG')} />
          <Stat icon={BadgeCheck} label="حالة الحساب" value="معتمد" />
        </section>

        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="m-0 text-xl font-extrabold text-navy-800">معرض العروض</h2>
          <Link to="/broker/register" className="text-sm font-bold text-gold-700 underline">
            تسجيل وسيط جديد
          </Link>
        </div>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </section>
      </main>
    </div>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <article className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm">
      <Icon className="mb-3 h-5 w-5 text-gold-700" />
      <div className="text-xs text-ink-500">{label}</div>
      <div className="mt-1 text-xl font-extrabold text-navy-800">{value}</div>
    </article>
  );
}
