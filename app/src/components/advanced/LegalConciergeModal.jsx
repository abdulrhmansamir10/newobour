import { useState } from 'react';
import { CheckCircle2, ShieldCheck, UploadCloud, X } from 'lucide-react';
import { legalConciergeFees } from '../../data/mockData';

const DOCUMENTS = [
  'صورة بطاقة الرقم القومي',
  'صور عقود الملكية الابتدائية',
  'وصل البريد القديم',
];

export default function LegalConciergeModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-900/70 px-4 py-6">
      <div className="max-h-[92vh] w-full max-w-[760px] overflow-auto rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-ink-200 px-5 py-4">
          <div>
            <h2 className="m-0 text-xl font-extrabold text-navy-800">
              خدمة الكونسيرج القانوني
            </h2>
            <p className="m-0 mt-1 text-sm text-ink-500">
              تفويض آمن لمتابعة ملف التقنين وتوفير وقتك
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-ink-500 transition hover:bg-ink-100 hover:text-navy-800"
            aria-label="إغلاق"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-5 md:p-6">
          {submitted ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="m-0 text-xl font-extrabold text-navy-800">
                تم استلام طلب التفويض
              </h3>
              <p className="mx-auto mt-2 max-w-[520px] text-sm leading-relaxed text-ink-500">
                سيراجع المستشار القانوني البيانات والمستندات، ثم يتواصل معك
                لتأكيد التكلفة النهائية وخطوات التوكيل.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-5 rounded-2xl border border-gold-200 bg-gold-50 p-4">
                <div className="mb-2 flex items-center gap-2 text-base font-extrabold text-navy-800">
                  <ShieldCheck className="h-5 w-5 text-gold-700" />
                  أمان كامل وشفافية في المصروفات
                </div>
                <p className="m-0 text-sm leading-relaxed text-ink-600">
                  لا يتم تنفيذ أي خطوة حكومية أو دفع أي رسوم إلا بعد موافقتك
                  على بيان التكلفة.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="text-sm font-bold text-navy-800">
                  رقم الملف أو إيصال البريد
                  <input className="newobour-form-field mt-1.5" placeholder="مثال: 147 / ب" />
                </label>
                <label className="text-sm font-bold text-navy-800">
                  رقم التليفون
                  <input className="newobour-form-field mt-1.5" placeholder="01xxxxxxxxx" />
                </label>
              </div>

              <div className="mt-5">
                <h3 className="m-0 mb-3 text-base font-extrabold text-navy-800">
                  المستندات المطلوبة
                </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  {DOCUMENTS.map((doc) => (
                    <label
                      key={doc}
                      className="flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-ink-300 bg-paper p-4 text-center text-sm font-bold text-navy-800 transition hover:border-gold-600 hover:bg-gold-50"
                    >
                      <UploadCloud className="mb-2 h-6 w-6 text-gold-700" />
                      {doc}
                      <input className="hidden" type="file" accept="application/pdf,image/*" />
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border border-ink-200">
                <table className="w-full text-sm">
                  <tbody>
                    {legalConciergeFees.map((fee) => (
                      <tr key={fee.label} className="border-b border-ink-100 last:border-b-0">
                        <td className="px-4 py-3 font-bold text-navy-800">{fee.label}</td>
                        <td className="px-4 py-3 text-left font-num font-bold text-gold-700">
                          {fee.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>

        {!submitted && (
          <div className="flex items-center justify-between border-t border-ink-200 px-5 py-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-ink-300 px-5 py-2 text-sm font-bold text-navy-800 transition hover:bg-ink-100"
            >
              إلغاء
            </button>
            <button
              type="button"
              onClick={() => setSubmitted(true)}
              className="rounded-xl bg-navy-800 px-5 py-2 text-sm font-bold text-white transition hover:bg-navy-700 active:scale-[0.97]"
            >
              إرسال طلب التفويض
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
