import { Link } from 'react-router-dom';
import { BadgeCheck, Building2, MapPin, Send } from 'lucide-react';

export default function AddListing() {
  return (
    <div className="min-h-[70vh] bg-paper">
      <header className="bg-navy-800 px-6 py-10 text-white md:px-9">
        <div className="mx-auto max-w-[1120px]">
          <h1 className="m-0 text-[32px] font-extrabold">أضف عرضك</h1>
          <p className="m-0 mt-2 max-w-[680px] text-base leading-relaxed text-white/75">
            أرسل بيانات القطعة أو الوحدة، وسنراجعها قبل ظهورها في الماركت بليس.
          </p>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1120px] grid-cols-1 gap-6 px-6 py-8 pb-16 md:px-9 lg:grid-cols-[1fr_320px]">
        <form className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm md:p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <h2 className="m-0 text-lg font-extrabold text-navy-800">بيانات العرض</h2>
              <p className="m-0 text-sm text-ink-500">املأ البيانات الأساسية للعرض</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="نوع العرض">
              <select className="newobour-form-field">
                <option>قطعة أرض</option>
                <option>وحدة سكنية</option>
                <option>وحدة تجارية</option>
              </select>
            </Field>
            <Field label="الحالة القانونية">
              <select className="newobour-form-field">
                <option>نزلت كشف</option>
                <option>تم التخصيص</option>
                <option>تم الترخيص</option>
                <option>جاري البناء</option>
              </select>
            </Field>
            <Field label="الحي">
              <input className="newobour-form-field" placeholder="مثال: الحي الثالث" />
            </Field>
            <Field label="البلوك ورقم القطعة">
              <input className="newobour-form-field" placeholder="مثال: بلوك 12 / B-147" />
            </Field>
            <Field label="المساحة">
              <input className="newobour-form-field" placeholder="320 م²" />
            </Field>
            <Field label="السعر المطلوب">
              <input className="newobour-form-field" placeholder="2,450,000 ج.م" />
            </Field>
            <Field label="رقم التليفون">
              <input className="newobour-form-field" placeholder="01xxxxxxxxx" />
            </Field>
            <Field label="اسم المالك أو الوسيط">
              <input className="newobour-form-field" placeholder="الاسم بالكامل" />
            </Field>
          </div>

          <label className="mt-4 block text-sm font-bold text-navy-800">
            ملاحظات إضافية
            <textarea
              className="newobour-form-field mt-1.5 min-h-28 resize-y py-3"
              placeholder="اكتب أي تفاصيل مهمة عن الموقع، الواجهة، أو المستندات المتاحة"
            />
          </label>

          <button
            type="button"
            className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gold-600 px-6 text-sm font-bold text-navy-900 shadow-[0_6px_20px_rgba(201,152,62,0.28)] transition hover:bg-gold-700 active:scale-[0.97]"
          >
            <Send className="h-4 w-4" />
            إرسال العرض للمراجعة
          </button>
        </form>

        <aside className="flex flex-col gap-4">
          <InfoCard
            icon={BadgeCheck}
            title="مراجعة قبل النشر"
            text="يتم التأكد من البيانات الأساسية وحالة الأرض قبل ظهور العرض للمشترين."
          />
          <InfoCard
            icon={MapPin}
            title="بيانات دقيقة"
            text="اكتب الحي، المجاورة، البلوك، ورقم القطعة كما هي في المستندات."
          />
          <article className="rounded-2xl border border-gold-200 bg-gold-50 p-5">
            <h2 className="m-0 text-base font-extrabold text-navy-800">
              هل أنت وسيط أو شركة؟
            </h2>
            <p className="m-0 mt-2 text-sm leading-relaxed text-ink-500">
              افتح حساب وسيط معتمد ليتم مراجعة عروضك قبل النشر.
            </p>
            <Link
              to="/broker/register"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-xl bg-navy-800 px-4 text-sm font-bold text-white transition hover:bg-navy-700"
            >
              تسجيل وسيط معتمد
            </Link>
          </article>
        </aside>
      </main>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block text-sm font-bold text-navy-800">
      {label}
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <article className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gold-50 text-gold-700">
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="m-0 text-base font-extrabold text-navy-800">{title}</h2>
      <p className="m-0 mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
    </article>
  );
}
