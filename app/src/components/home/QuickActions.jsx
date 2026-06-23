import { Link } from 'react-router-dom';
import { FileSearch, Building2, Newspaper, ScrollText } from 'lucide-react';
import { services } from '../../data/mockData';

const iconMap = { FileSearch, Building2, Newspaper, ScrollText };

export default function QuickActions() {
  return (
    <div className="max-w-[1320px] mx-auto px-9 relative z-10 -mt-14 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          return (
            <Link
              key={index}
              to={service.to}
              className="group bg-white border border-ink-200 rounded-2xl p-5 cursor-pointer transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col no-underline"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center text-navy-700 mb-3.5 shrink-0">
                {IconComponent && <IconComponent size={24} />}
              </div>
              <h3 className="text-[17px] font-bold text-navy-800 mb-1.5">{service.title}</h3>
              <p className="text-[13.5px] text-ink-500 leading-relaxed m-0">{service.desc}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
