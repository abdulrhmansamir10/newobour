import { useState } from 'react';
import { BellRing, Check, Headset, Scale, Search, ShieldCheck } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import LegalConciergeModal from '../components/advanced/LegalConciergeModal';

const RESULT_FIELDS = [
  ['اسم المالك الأصلي', 'محمد عبد الله سالم'],
  ['الجمعية', 'جمعية النصر للإسكان'],
  ['رقم القطعة الأصلية', '147 / ب'],
  ['المساحة', '320 م²'],
  ['الحالة الحالية', 'ledger'],
  ['تاريخ نزول الكشف', '١٢ / ٠٣ / ٢٠٢٦'],
];

export default function LedgerSearch() {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(true);
  const [legalModalOpen, setLegalModalOpen] = useState(false);

  const submitSearch = (event) => {
    event.preventDefault();
    setSearched(true);
  };

  return (
    <div className="min-h-[70vh] bg-paper">
      <header
        className="px-6 py-11 pb-14 text-white md:px-9"
        style={{ background: 'linear-gradient(135deg, #0b1b33, #13294b)' }}
      >
        <div className="mx-auto max-w-[860px] text-center">
          <h1 className="m-0 text-[32px] font-extrabold">كشوف التقنين</h1>
          <p className="m-0 mb-7 mt-2 text-base text-white/80">
            تأكّد من نزول اسمك في الكشوف بالبحث ببياناتك الأصلية
          </p>

          <form
            onSubmit={submitSearch}
            className="mx-auto flex max-w-[720px] items-center gap-2 rounded-[20px] bg-white p-1.5 text-right shadow-xl"
          >
            <Search className="mx-3 h-5 w-5 shrink-0 text-ink-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              placeholder="ابحث باسمك أو رقمك القومي..."
              className="min-w-0 flex-1 bg-transparent py-2 text-[15px] text-ink-800 outline-none placeholder:text-ink-400"
            />
            <button
              type="submit"
              className="rounded-2xl bg-navy-800 px-6 py-3 text-sm font-bold text-white transition hover:bg-navy-700 active:scale-[0.97]"
            >
              بحث
            </button>
          </form>
        </div>
      </header>

      <main className="mx-auto max-w-[860px] px-6 py-8 pb-16 md:px-9">
        {searched && (
          <section className="overflow-hidden rounded-[20px] border border-ink-200 bg-white shadow-md">
            <div className="flex items-center gap-3 border-b border-green-200 bg-green-100 px-5 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-700 text-white">
                <Check className="h-[22px] w-[22px]" />
              </div>
              <div>
                <h2 className="m-0 text-lg font-extrabold text-green-900">
                  تم العثور على الاسم في الكشوف
                </h2>
                <p className="m-0 mt-0.5 text-sm text-green-800">
                  نزل اسمك ضمن كشف الحي الثالث — يمكنك متابعة الخطوات التالية
                </p>
              </div>
            </div>

            <div className="p-5 md:p-6">
              <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {RESULT_FIELDS.map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-1 text-[12.5px] text-ink-500">{label}</div>
                    {label === 'الحالة الحالية' ? (
                      <StatusBadge status={value} />
                    ) : (
                      <div
                        className={`text-[15.5px] font-bold text-navy-800 ${
                          label.includes('رقم') ||
                          label.includes('المساحة') ||
                          label.includes('تاريخ')
                            ? 'font-num'
                            : ''
                        }`}
                      >
                        {value}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 rounded-xl border border-gold-200 bg-gold-50 p-4 sm:flex-row sm:items-center">
                <Headset className="h-7 w-7 shrink-0 text-gold-700" />
                <div className="flex-1">
                  <div className="text-[15px] font-bold text-navy-800">
                    تواصل مع خدمة العملاء لإتمام الخطوات
                  </div>
                  <div className="text-[13.5px] text-ink-500">
                    دفع المصاريف، إجراءات الاستلام، والمتابعة حتى التخصيص
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-xl bg-gold-600 px-5 py-3 text-sm font-bold text-navy-900 shadow-[0_6px_20px_rgba(201,152,62,0.28)] transition hover:bg-gold-700 active:scale-[0.97]"
                >
                  ابدأ المتابعة
                </button>
              </div>

              <div className="mt-4 rounded-2xl border border-navy-100 bg-white p-4 shadow-sm">
                <div className="mb-2 flex items-center gap-2 text-lg font-extrabold text-navy-800">
                  <ShieldCheck className="h-5 w-5 text-gold-700" />
                  خدمة الكونسيرج القانوني
                </div>
                <p className="m-0 mb-4 text-sm leading-relaxed text-ink-500">
                  وفّر وقتك وفوّض مستشارينا القانونيين لمتابعة ملف الكشف
                  والتعاملات الحكومية بأمان كامل وبيان تكلفة واضح.
                </p>
                <button
                  type="button"
                  onClick={() => setLegalModalOpen(true)}
                  className="inline-flex animate-pulse items-center gap-2 rounded-xl bg-navy-800 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-700 active:scale-[0.97]"
                >
                  <Scale className="h-4 w-4" />
                  فوض مستشارينا القانونيين الآن
                </button>
              </div>
            </div>
          </section>
        )}

        <section className="mt-6 rounded-[20px] border border-ink-200 bg-white p-5 md:p-6">
          <div className="mb-1.5 flex items-center gap-2.5">
            <BellRing className="h-5 w-5 text-navy-700" />
            <h2 className="m-0 text-lg font-extrabold text-navy-800">
              لم يظهر اسمك بعد؟
            </h2>
          </div>
          <p className="m-0 mb-5 text-[14.5px] leading-relaxed text-ink-500">
            سجّل بياناتك وسنُنبّهك فور صدور الكشف الخاص بك أو فتح باب التقديم.
          </p>

          <form className="grid grid-cols-1 items-end gap-4 md:grid-cols-3">
            <label className="text-sm font-bold text-navy-800">
              الاسم بالكامل
              <input
                type="text"
                placeholder="كما في إثبات الملكية"
                className="mt-1.5 h-11 w-full rounded-xl border border-ink-300 bg-white px-3 text-sm font-medium outline-none transition placeholder:text-ink-400 focus:border-gold-600 focus:ring-2 focus:ring-gold-600/25"
              />
            </label>
            <label className="text-sm font-bold text-navy-800">
              رقم التليفون
              <input
                type="tel"
                placeholder="01xxxxxxxxx"
                className="mt-1.5 h-11 w-full rounded-xl border border-ink-300 bg-white px-3 text-sm font-medium outline-none transition placeholder:text-ink-400 focus:border-gold-600 focus:ring-2 focus:ring-gold-600/25"
              />
            </label>
            <button
              type="button"
              className="h-11 rounded-xl bg-navy-800 px-5 text-sm font-bold text-white transition hover:bg-navy-700 active:scale-[0.97]"
            >
              نبّهني عند النزول
            </button>
          </form>
        </section>
      </main>

      <LegalConciergeModal
        open={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
      />
    </div>
  );
}
