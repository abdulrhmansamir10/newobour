import { Mail, MapPin, Phone, Send } from 'lucide-react';

const CONTACT_METHODS = [
  {
    icon: Phone,
    title: 'اتصال مباشر',
    value: '0100 000 0000',
    hint: 'للاستفسارات العامة ومتابعة العروض',
  },
  {
    icon: Mail,
    title: 'البريد الإلكتروني',
    value: 'hello@newobour.com',
    hint: 'للشراكات وطلبات التعاون',
  },
  {
    icon: MapPin,
    title: 'نطاق الخدمة',
    value: 'مدينة العبور الجديد',
    hint: 'الأحياء السكنية والتجارية ومناطق الأراضي',
  },
];

export default function Contact() {
  return (
    <div className="min-h-[70vh] bg-paper">
      <header className="bg-navy-800 px-6 py-10 text-white md:px-9">
        <div className="mx-auto max-w-[1120px]">
          <h1 className="m-0 text-[32px] font-extrabold">تواصل معنا</h1>
          <p className="m-0 mt-2 max-w-[680px] text-base leading-relaxed text-white/75">
            أرسل استفسارك عن الكشوف، العروض، أو بيانات المدينة وسنراجع الرسالة مع الفريق المختص.
          </p>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1120px] grid-cols-1 gap-6 px-6 py-8 pb-16 md:px-9 lg:grid-cols-[1fr_360px]">
        <form className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm md:p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-50 text-gold-700">
              <Send className="h-5 w-5" />
            </div>
            <div>
              <h2 className="m-0 text-lg font-extrabold text-navy-800">رسالة جديدة</h2>
              <p className="m-0 text-sm text-ink-500">اكتب البيانات الأساسية للتواصل</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="الاسم">
              <input className="newobour-form-field" placeholder="الاسم بالكامل" />
            </Field>
            <Field label="رقم التليفون">
              <input className="newobour-form-field" placeholder="01xxxxxxxxx" />
            </Field>
          </div>

          <Field label="نوع الاستفسار">
            <select className="newobour-form-field">
              <option>كشوف التقنين</option>
              <option>عروض الأراضي والعقارات</option>
              <option>دليل الترخيص</option>
              <option>اقتراح أو شراكة</option>
            </select>
          </Field>

          <label className="mt-4 block text-sm font-bold text-navy-800">
            الرسالة
            <textarea
              className="newobour-form-field mt-1.5 min-h-32 resize-y py-3"
              placeholder="اكتب تفاصيل الاستفسار"
            />
          </label>

          <button
            type="button"
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gold-600 px-6 text-sm font-bold text-navy-900 shadow-[0_6px_20px_rgba(201,152,62,0.28)] transition hover:bg-gold-700 active:scale-[0.97]"
          >
            <Send className="h-4 w-4" />
            إرسال الرسالة
          </button>
        </form>

        <aside className="flex flex-col gap-4">
          {CONTACT_METHODS.map((method) => {
            const Icon = method.icon;
            return (
              <article
                key={method.title}
                className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="m-0 text-base font-extrabold text-navy-800">
                  {method.title}
                </h2>
                <p className="m-0 mt-1 text-sm font-bold text-gold-700">
                  {method.value}
                </p>
                <p className="m-0 mt-2 text-sm leading-relaxed text-ink-500">
                  {method.hint}
                </p>
              </article>
            );
          })}
        </aside>
      </main>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="mt-4 block text-sm font-bold text-navy-800">
      {label}
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
