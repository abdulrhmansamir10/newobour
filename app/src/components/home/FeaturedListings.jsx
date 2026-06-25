import { Link, useNavigate } from 'react-router-dom';
import PropertyCard from '../PropertyCard';
import { properties } from '../../data/mockData';

export default function FeaturedListings() {
  const navigate = useNavigate();
  // Show only verified (premium) listings, max 3
  const featured = properties.filter((p) => p.verified).slice(0, 3);

  return (
    <section className="py-14 px-6 md:px-9">
      <div className="max-w-[1320px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-[28px] font-extrabold text-navy-800 m-0">
              عروض مميزة وموثّقة
            </h2>
            <p className="text-ink-500 text-[15px] mt-1.5">
              أحدث الأراضي المعروضة للبيع في المدينة
            </p>
          </div>
          <Link
            to="/marketplace"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-navy-800 text-navy-800 font-bold text-sm
                       bg-transparent hover:bg-navy-800 hover:text-white transition-colors duration-200 cursor-pointer
                       font-base shrink-0"
          >
            كل العروض
          </Link>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
              onClick={() => navigate(`/marketplace/${property.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
