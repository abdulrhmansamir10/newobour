import { CheckCircle2, FileText, Landmark, Ruler, ScrollText } from 'lucide-react';

const STEPS = [
  {
    icon: FileText,
    title: 'تجهيز الملف',
    text: 'اجمع مستندات الملكية، بطاقة الرقم القومي، وإيصالات السداد أو ما يثبت التعامل السابق.',
  },
  {
    icon: Landmark,
    title: 'مراجعة الجهاز',
    text: 'تأكّد من مطابقة بيانات القطعة مع المجاورة والبلوك والمساحة المسجلة في الكشوف.',
  },
  {
    icon: Ruler,
    title: 'اشتراطات البناء',
    text: 'راجع الارتدادات، النسبة البنائية، وعدد الأدوار قبل البدء في الرسومات الهندسية.',
  },
  {
    icon: CheckCircle2,
    title: 'المتابعة حتى الاستلام',
    text: 'تابع جواب التخصيص، إجراءات الترخيص، وخطوات الاستلام من لوحة المتابعة.',
  },
];

export default function Guide() {
  return (
    <div className="min-h-[70vh] bg-paper">
      <header
        className="px-6 py-11 text-white md:px-9"
        style={{ background: 'linear-gradient(135deg, #0b1b33, #13294b)' }}
      >
        <div className="mx-auto max-w-[1120px]">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-600 text-navy-900">
            <ScrollText className="h-6 w-6" />
          </div>
          <h1 className="m-0 text-[32px] font-extrabold">دليل الترخيص</h1>
          <p className="m-0 mt-2 max-w-[720px] text-base leading-relaxed text-white/75">
            خطوات واضحة لمتابعة ملف التقنين والترخيص والبناء من تجهيز المستندات حتى الاستلام.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-[1120px] px-6 py-8 pb-16 md:px-9">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-num text-sm font-bold text-gold-700">
                    {(index + 1).toLocaleString('ar-EG').padStart(2, '0')}
                  </span>
                </div>
                <h2 className="m-0 text-lg font-extrabold text-navy-800">
                  {step.title}
                </h2>
                <p className="m-0 mt-2 text-sm leading-relaxed text-ink-500">
                  {step.text}
                </p>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
}
