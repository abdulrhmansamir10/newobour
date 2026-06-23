import { Building2, ShieldCheck } from 'lucide-react';

export default function BrokerRegister() {
  return (
    <div className="min-h-[70vh] bg-paper">
      <header className="bg-navy-800 px-6 py-10 text-white md:px-9">
        <div className="mx-auto max-w-[860px]">
          <h1 className="m-0 text-[32px] font-extrabold">تسجيل وسيط معتمد</h1>
          <p className="m-0 mt-2 text-base leading-relaxed text-white/75">
            حساب تجاري للشركات والمكاتب المرخصة مع مراجعة مسبقة لكل عرض قبل النشر.
          </p>
        </div>
      </header>

      <main className="mx-auto grid max-w-[860px] grid-cols-1 gap-6 px-6 py-8 pb-16 md:px-9">
        <form className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm md:p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <h2 className="m-0 text-lg font-extrabold text-navy-800">بيانات الحساب التجاري</h2>
              <p className="m-0 text-sm text-ink-500">تظهر للزوار في صفحة الوسيط العامة</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="اسم الشركة أو المكتب">
              <input className="newobour-form-field" placeholder="مثال: شركة السواري" />
            </Field>
            <Field label="رقم الترخيص التجاري">
              <input className="newobour-form-field" placeholder="NOBC-2026-000" />
            </Field>
            <Field label="اسم مسؤول الحساب">
              <input className="newobour-form-field" placeholder="الاسم بالكامل" />
            </Field>
            <Field label="رقم التليفون">
              <input className="newobour-form-field" placeholder="01xxxxxxxxx" />
            </Field>
          </div>

          <div className="mt-5 rounded-2xl border border-gold-200 bg-gold-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-extrabold text-navy-800">
              <ShieldCheck className="h-4 w-4 text-gold-700" />
              سياسة المراجعة
            </div>
            <p className="m-0 text-sm leading-relaxed text-ink-600">
              كل العروض المرفوعة من حسابات الوسطاء تبدأ بحالة قيد المراجعة ولا
              تظهر في السوق العام إلا بعد اعتماد الإدارة.
            </p>
          </div>

          <button
            type="button"
            className="mt-6 h-12 rounded-xl bg-navy-800 px-6 text-sm font-bold text-white transition hover:bg-navy-700 active:scale-[0.97]"
          >
            إرسال طلب الاعتماد
          </button>
        </form>
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
