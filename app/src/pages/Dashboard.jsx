import { useState } from 'react';
import { Hammer, MapPin, Plus, Scale, Users } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import BuildRequestModal from '../components/advanced/BuildRequestModal';
import LegalConciergeModal from '../components/advanced/LegalConciergeModal';

const TRACKED_PROPERTY = {
  status: 'license',
  plotNo: 'B-147',
  district: 'الحي الثالث',
  neighborhood: 'مجاورة ١٢',
  block: '٤',
  area: 320,
};

const FEED = [
  {
    tag: 'مرافق',
    tone: 'gold',
    text: 'جارٍ توصيل المرافق للمجاورة ١٢ — مرفق صور من الموقع',
    date: 'منذ ساعتين',
  },
  {
    tag: 'تسليمات',
    tone: 'success',
    text: 'سيتم تسليم قطعتك يوم الأحد ١٦ مارس بإذن الله',
    date: 'أمس',
  },
  {
    tag: 'عمران',
    tone: 'info',
    text: 'تم بدء إنشاء مدرسة جديدة على بُعد ٣٠٠م من قطعتك',
    date: 'منذ ٤ أيام',
  },
];

const TONE_CLASSES = {
  gold: 'bg-gold-100 text-gold-800',
  success: 'bg-green-100 text-green-800',
  info: 'bg-blue-100 text-blue-800',
};

function InitialAvatar() {
  return (
    <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-2 border-gold-500 bg-navy-800 text-lg font-extrabold text-white shadow-sm">
      أ
    </div>
  );
}

export default function Dashboard() {
  const [buildModalOpen, setBuildModalOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);

  return (
    <div className="min-h-[70vh] bg-paper px-6 py-9 md:px-9">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-7 lg:grid-cols-[320px_1fr]">
        <aside className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <InitialAvatar />
            <div>
              <div className="text-[17px] font-extrabold text-navy-800">
                أهلاً، أحمد
              </div>
              <div className="text-[13px] text-ink-500">حساب شخصي</div>
            </div>
          </div>

          <section className="overflow-hidden rounded-2xl bg-navy-800 text-white">
            {TRACKED_PROPERTY.status === 'license' && (
              <div className="border-r-4 border-gold-600 bg-gradient-to-l from-gold-600/18 to-transparent p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-extrabold text-gold-300">
                  <Hammer className="h-4 w-4" />
                  تم ترخيص القطعة — جاهزة للبناء
                </div>
                <button
                  type="button"
                  onClick={() => setBuildModalOpen(true)}
                  className="rounded-xl bg-gold-600 px-4 py-2 text-xs font-extrabold text-navy-900 shadow-[0_6px_20px_rgba(201,152,62,0.28)] transition hover:bg-gold-700 active:scale-[0.97]"
                >
                  احصل على مقايسة مجانية للبناء بالتقسيط
                </button>
              </div>
            )}

            <div className="p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="text-[13px] font-bold text-gold-400">
                قطعتي المتابَعة
              </span>
              <StatusBadge status={TRACKED_PROPERTY.status} size="sm" />
            </div>

            <h2 className="m-0 mb-1 text-[22px] font-extrabold">قطعة {TRACKED_PROPERTY.plotNo}</h2>
            <p className="m-0 mb-5 text-sm text-white/70">
              {TRACKED_PROPERTY.district} · {TRACKED_PROPERTY.neighborhood} · بلوك {TRACKED_PROPERTY.block}
            </p>

            <div className="grid grid-cols-2 gap-3 border-t border-white/15 pt-4">
              <div>
                <div className="text-xs text-white/60">المساحة</div>
                <div className="font-num text-lg font-bold">{TRACKED_PROPERTY.area} م²</div>
              </div>
              <div>
                <div className="text-xs text-white/60">رقم القطعة</div>
                <div className="font-num text-lg font-bold">{TRACKED_PROPERTY.plotNo}</div>
              </div>
            </div>
            </div>
          </section>

          <button
            type="button"
            className="flex h-11 items-center justify-center gap-2 rounded-xl border border-navy-200 bg-transparent px-4 text-sm font-bold text-navy-800 transition hover:bg-white active:scale-[0.97]"
          >
            <Plus className="h-4 w-4" />
            أضف قطعة للمتابعة
          </button>

          <button
            type="button"
            onClick={() => setLegalModalOpen(true)}
            className="rounded-2xl border border-gold-200 bg-gold-50 p-4 text-right transition hover:border-gold-600 hover:bg-white"
          >
            <div className="mb-2 flex items-center gap-2 text-sm font-extrabold text-navy-800">
              <Scale className="h-4 w-4 text-gold-700" />
              الكونسيرج القانوني
            </div>
            <p className="m-0 text-xs leading-relaxed text-ink-500">
              فوّض مستشارينا لمتابعة الملف الحكومي بأمان وشفافية.
            </p>
          </button>
        </aside>

        <main>
          <h1 className="m-0 text-[26px] font-extrabold text-navy-800">
            خلاصة الأخبار المخصصة
          </h1>
          <p className="m-0 mb-6 mt-1.5 text-[15px] text-ink-500">
            تحديثات تخص الحي الثالث والمجاورة ١٢ — تظهر تلقائياً في لوحتك
          </p>

          <section className="flex flex-col gap-3.5">
            <article className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm">
              <div className="mb-2 flex items-center gap-2 text-base font-extrabold text-navy-800">
                <Users className="h-5 w-5 text-gold-700" />
                برنامج تجميع الملاك والشراكات
              </div>
              <p className="m-0 mb-4 text-sm leading-relaxed text-ink-500">
                مساحة قطعتك مناسبة للدخول في شراكة بنائية أو دمج مع أرض مجاورة
                لزيادة العائد وتقليل تكلفة التنفيذ.
              </p>
              <button
                type="button"
                className="rounded-xl bg-navy-800 px-5 py-2 text-sm font-bold text-white transition hover:bg-navy-700 active:scale-[0.97]"
              >
                أرسل طلب الانضمام للبرنامج
              </button>
            </article>

            {FEED.map((item) => (
              <article
                key={item.text}
                className="flex gap-4 rounded-2xl border border-ink-200 bg-white p-5 shadow-xs"
              >
                <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                  <MapPin className="h-[22px] w-[22px]" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2.5">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11.5px] font-bold ${
                        TONE_CLASSES[item.tone]
                      }`}
                    >
                      {item.tag}
                    </span>
                    <span className="text-[12.5px] text-ink-400">
                      {item.date}
                    </span>
                  </div>
                  <p className="m-0 text-base font-semibold leading-relaxed text-navy-800">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>

      <BuildRequestModal
        open={buildModalOpen}
        onClose={() => setBuildModalOpen(false)}
        property={TRACKED_PROPERTY}
      />
      <LegalConciergeModal
        open={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
      />
    </div>
  );
}
