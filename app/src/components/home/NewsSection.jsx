import { Megaphone } from 'lucide-react';
import { news } from '../../data/mockData';

const getToneClasses = (tone) => {
  switch (tone) {
    case 'gold': return 'bg-gold-100 text-gold-800';
    case 'success': return 'bg-green-100 text-green-800';
    case 'info': return 'bg-blue-100 text-blue-800';
    case 'navy': return 'bg-navy-100 text-navy-800';
    default: return 'bg-ink-100 text-ink-800';
  }
};

export default function NewsSection() {
  return (
    <section className="py-13 px-9 bg-white">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div>
            <h2 className="text-[28px] font-extrabold text-navy-800 m-0">
              أخبار المدينة
            </h2>
            <p className="text-ink-500 text-[15px] mt-1.5 mb-0">
              تحديثات رسمية من داخل الجهاز
            </p>
          </div>
          <button className="bg-transparent border-none text-navy-700 font-bold text-sm hover:text-navy-800 transition cursor-pointer self-start sm:self-end py-2 px-1">
            كل الأخبار &larr;
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {news.map((item, index) => (
            <div key={index} className="flex gap-4 items-center bg-paper border border-ink-200 rounded-2xl p-4">
              <div className="w-14 h-14 rounded-xl bg-navy-50 flex items-center justify-center text-navy-700 shrink-0">
                <Megaphone size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className={`rounded-full px-2.5 py-0.5 text-[11.5px] font-bold ${getToneClasses(item.tone)}`}>
                    {item.tag}
                  </span>
                  <span className="text-[12.5px] text-ink-500">{item.date}</span>
                </div>
                <h3 className="text-[15.5px] font-semibold text-navy-800 leading-snug m-0">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
