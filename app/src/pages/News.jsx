import { CalendarDays, Megaphone, Search } from 'lucide-react';
import { news } from '../data/mockData';

const TONE_CLASSES = {
  gold: 'bg-gold-100 text-gold-800',
  success: 'bg-green-100 text-green-800',
  info: 'bg-blue-100 text-blue-800',
  navy: 'bg-navy-100 text-navy-800',
};

export default function News() {
  return (
    <div className="min-h-[70vh] bg-paper">
      <header className="bg-navy-800 px-6 py-10 text-white md:px-9">
        <div className="mx-auto max-w-[1320px]">
          <h1 className="m-0 text-[32px] font-extrabold">الأخبار والمعلومات</h1>
          <p className="m-0 mt-2 text-base text-white/75">
            تحديثات رسمية عن المرافق، التسليمات، اللوائح، وخدمات المدينة
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-[1320px] px-6 py-8 pb-16 md:px-9">
        <div className="mb-6 flex max-w-[560px] items-center gap-2 rounded-2xl border border-ink-200 bg-white p-2 shadow-sm">
          <Search className="mx-2 h-5 w-5 text-ink-400" />
          <input
            type="search"
            placeholder="ابحث في أخبار المدينة..."
            className="min-w-0 flex-1 bg-transparent py-2 text-sm text-ink-800 outline-none placeholder:text-ink-400"
          />
        </div>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {news.map((item) => (
            <article
              key={item.title}
              className="flex gap-4 rounded-2xl border border-ink-200 bg-white p-5 shadow-sm"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                <Megaphone className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2.5">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11.5px] font-bold ${
                      TONE_CLASSES[item.tone] || 'bg-ink-100 text-ink-800'
                    }`}
                  >
                    {item.tag}
                  </span>
                  <span className="flex items-center gap-1 text-[12.5px] text-ink-500">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {item.date}
                  </span>
                </div>
                <h2 className="m-0 text-[17px] font-bold leading-snug text-navy-800">
                  {item.title}
                </h2>
                <p className="m-0 mt-2 text-sm leading-relaxed text-ink-500">
                  تابع التفاصيل الرسمية والإجراءات المرتبطة بهذا التحديث من داخل المنصة.
                </p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
