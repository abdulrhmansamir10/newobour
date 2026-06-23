import { useState } from 'react';
import { CheckCircle2, Home, Landmark, Store, X } from 'lucide-react';

const BUILDING_TYPES = [
  { value: 'classic-villa', label: 'فيلا كلاسيك', icon: Home },
  { value: 'modern-building', label: 'عمارة حديثة', icon: Landmark },
  { value: 'commercial-hub', label: 'مركز تجاري', icon: Store },
];

const FINANCING_OPTIONS = [
  { value: 'cash', label: 'دفع كاش مع خصم' },
  { value: '3-years', label: 'تقسيط على 3 سنوات' },
  { value: '5-years', label: 'تقسيط على 5 سنوات' },
];

export default function BuildRequestModal({ open, onClose, property }) {
  const [step, setStep] = useState(1);
  const [buildingType, setBuildingType] = useState('modern-building');
  const [floors, setFloors] = useState('أرضي + 3 أدوار');
  const [financing, setFinancing] = useState('3-years');

  if (!open) return null;

  const whatsappText = encodeURIComponent(
    `أرغب في مقايسة بناء لقطعة ${property.plotNo} - ${property.district}. النوع: ${buildingType}، الأدوار: ${floors}، التمويل: ${financing}`
  );
  const whatsappUrl = `https://wa.me/201000000000?text=${whatsappText}`;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-900/70 px-4 py-6">
      <div className="max-h-[92vh] w-full max-w-[760px] overflow-auto rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-ink-200 px-5 py-4">
          <div>
            <h2 className="m-0 text-xl font-extrabold text-navy-800">
              ابنِ أرضك معنا
            </h2>
            <p className="m-0 mt-1 text-sm text-ink-500">
              مقايسة أولية للبناء بالتقسيط بعد الترخيص
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
          {step === 1 && (
            <>
              <h3 className="m-0 mb-4 text-lg font-extrabold text-navy-800">
                اختيارات البناء
              </h3>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                {BUILDING_TYPES.map((item) => {
                  const Icon = item.icon;
                  const active = buildingType === item.value;
                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setBuildingType(item.value)}
                      className={`rounded-2xl border p-4 text-right transition ${
                        active
                          ? 'border-gold-600 bg-gold-50 shadow-sm'
                          : 'border-ink-200 bg-white hover:border-navy-200'
                      }`}
                    >
                      <Icon className="mb-3 h-6 w-6 text-gold-700" />
                      <span className="block text-sm font-extrabold text-navy-800">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <label className="mt-5 block text-sm font-bold text-navy-800">
                عدد الأدوار
                <select
                  value={floors}
                  onChange={(event) => setFloors(event.target.value)}
                  className="newobour-form-field mt-1.5"
                >
                  <option>أرضي + دورين</option>
                  <option>أرضي + 3 أدوار</option>
                  <option>أرضي + 4 أدوار</option>
                  <option>حسب اشتراطات القطعة</option>
                </select>
              </label>
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="m-0 mb-4 text-lg font-extrabold text-navy-800">
                تفضيل التمويل
              </h3>
              <div className="flex flex-col gap-3">
                {FINANCING_OPTIONS.map((item) => (
                  <label
                    key={item.value}
                    className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 text-sm font-bold transition ${
                      financing === item.value
                        ? 'border-gold-600 bg-gold-50 text-navy-800'
                        : 'border-ink-200 bg-white text-ink-700'
                    }`}
                  >
                    <input
                      type="radio"
                      name="financing"
                      value={item.value}
                      checked={financing === item.value}
                      onChange={(event) => setFinancing(event.target.value)}
                    />
                    {item.label}
                  </label>
                ))}
              </div>
            </>
          )}

          {step === 3 && (
            <div className="py-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="m-0 text-xl font-extrabold text-navy-800">
                تم تجهيز طلبك بنجاح
              </h3>
              <p className="mx-auto mb-5 mt-2 max-w-[520px] text-sm leading-relaxed text-ink-500">
                يمكنك الآن التواصل مباشرة مع مستشار البناء في السواري لمراجعة
                مقايسة القطعة وخيارات التقسيط.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-gold-600 px-6 text-sm font-bold text-navy-900 shadow-[0_6px_20px_rgba(201,152,62,0.28)] transition hover:bg-gold-700 active:scale-[0.97]"
              >
                فتح محادثة واتساب
              </a>
            </div>
          )}
        </div>

        {step < 3 && (
          <div className="flex items-center justify-between border-t border-ink-200 px-5 py-4">
            <button
              type="button"
              onClick={() => (step === 1 ? onClose() : setStep(step - 1))}
              className="rounded-xl border border-ink-300 px-5 py-2 text-sm font-bold text-navy-800 transition hover:bg-ink-100"
            >
              {step === 1 ? 'إلغاء' : 'رجوع'}
            </button>
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="rounded-xl bg-navy-800 px-5 py-2 text-sm font-bold text-white transition hover:bg-navy-700 active:scale-[0.97]"
            >
              {step === 1 ? 'التالي' : 'إرسال الطلب'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
