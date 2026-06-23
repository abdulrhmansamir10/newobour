import { AlertCircle, CheckCircle2, Clock3 } from 'lucide-react';
import { moderationListings } from '../data/mockData';

const STATUS_STYLES = {
  pending_review: 'bg-gold-100 text-gold-800',
  needs_documents: 'bg-blue-100 text-blue-800',
};

const STATUS_LABELS = {
  pending_review: 'قيد المراجعة',
  needs_documents: 'مطلوب مستندات',
};

export default function AdminModeration() {
  return (
    <div className="min-h-[70vh] bg-paper">
      <header className="bg-navy-800 px-6 py-10 text-white md:px-9">
        <div className="mx-auto max-w-[1120px]">
          <h1 className="m-0 text-[32px] font-extrabold">لوحة مراجعة العروض</h1>
          <p className="m-0 mt-2 text-base text-white/75">
            اعتماد عروض الوسطاء قبل ظهورها في الماركت بليس.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-[1120px] px-6 py-8 pb-16 md:px-9">
        <section className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm">
          {moderationListings.map((item) => (
            <article
              key={item.id}
              className="grid grid-cols-1 gap-4 border-b border-ink-100 p-5 last:border-b-0 md:grid-cols-[1fr_auto]"
            >
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="font-num text-sm font-bold text-gold-700">{item.id}</span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[11.5px] font-bold ${
                      STATUS_STYLES[item.status]
                    }`}
                  >
                    {STATUS_LABELS[item.status]}
                  </span>
                </div>
                <h2 className="m-0 text-lg font-extrabold text-navy-800">{item.title}</h2>
                <p className="m-0 mt-1 flex items-center gap-2 text-sm text-ink-500">
                  <Clock3 className="h-4 w-4" />
                  {item.broker} · {item.submittedAt}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button className="inline-flex items-center gap-2 rounded-xl bg-green-700 px-4 py-2 text-sm font-bold text-white">
                  <CheckCircle2 className="h-4 w-4" />
                  اعتماد
                </button>
                <button className="inline-flex items-center gap-2 rounded-xl border border-ink-300 px-4 py-2 text-sm font-bold text-navy-800">
                  <AlertCircle className="h-4 w-4" />
                  طلب مستندات
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
