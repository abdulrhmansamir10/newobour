import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  CreditCard,
  LockKeyhole,
  MapPin,
  ShieldCheck,
  Smartphone,
  X,
} from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import { properties } from '../data/mockData';

const PAYMENT_METHODS = [
  { value: 'fawry', label: 'فوري', icon: Building2 },
  { value: 'vodafone', label: 'فودافون كاش', icon: Smartphone },
  { value: 'card', label: 'بطاقة بنكية', icon: CreditCard },
];

export default function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find((item) => String(item.id) === id);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(
    property?.verificationStatus || 'unverified'
  );
  const [paymentMethod, setPaymentMethod] = useState('fawry');

  if (!property) {
    return (
      <div className="min-h-[70vh] bg-paper px-6 py-12 text-center">
        <h1 className="text-2xl font-extrabold text-navy-800">العرض غير موجود</h1>
        <Link className="mt-4 inline-block text-sm font-bold text-gold-700 underline" to="/marketplace">
          العودة إلى عروض الأراضي والعقارات
        </Link>
      </div>
    );
  }

  const pricePerMeter = Math.round(property.price / property.area).toLocaleString('ar-EG');

  return (
    <div className="min-h-[70vh] bg-paper">
      <header className="bg-navy-800 px-6 py-10 text-white md:px-9">
        <div className="mx-auto max-w-[1120px]">
          <Link to="/marketplace" className="mb-4 inline-block text-sm font-bold text-gold-300">
            العودة إلى كل العروض
          </Link>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="m-0 text-[32px] font-extrabold">
                قطعة أرض {property.area} متر — {property.district}
              </h1>
              <p className="m-0 mt-2 flex items-center gap-2 text-base text-white/75">
                <MapPin className="h-4 w-4 text-gold-400" />
                البلوك {property.block} — قطعة {property.plotNo}
              </p>
            </div>
            <StatusBadge status={property.status} />
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-[1120px] grid-cols-1 gap-6 px-6 py-8 pb-16 md:px-9 lg:grid-cols-[1fr_340px]">
        <section className="overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-sm">
          <div className="flex aspect-[16/9] items-center justify-center bg-navy-50 text-navy-300">
            <Building2 className="h-20 w-20 opacity-45" strokeWidth={1.2} />
          </div>
          <div className="p-5 md:p-6">
            <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-3">
              <Metric label="السعر المطلوب" value={`${property.price.toLocaleString('ar-EG')} ج.م`} />
              <Metric label="سعر المتر" value={`${pricePerMeter} ج.م`} />
              <Metric label="المساحة" value={`${property.area.toLocaleString('ar-EG')} م²`} />
            </div>

            <h2 className="m-0 text-lg font-extrabold text-navy-800">تفاصيل العرض</h2>
            <p className="m-0 mt-2 text-sm leading-relaxed text-ink-500">
              عرض مناسب للباحثين عن أرض في {property.district}. البيانات المعروضة
              أولية، ويُنصح بمراجعة السند القانوني قبل إتمام أي تعاقد.
            </p>

            {property.partnershipTerms?.isPartnership && (
              <div className="mt-5 rounded-2xl border border-gold-200 bg-gold-50 p-4">
                <h3 className="m-0 text-base font-extrabold text-navy-800">
                  فرصة شراكة
                </h3>
                <p className="m-0 mt-2 text-sm leading-relaxed text-ink-600">
                  {property.partnershipTerms.partnershipType} — {property.partnershipTerms.expectedShare}
                </p>
              </div>
            )}
          </div>
        </section>

        <aside className="flex flex-col gap-4">
          <section className="rounded-2xl border border-ink-200 bg-white p-5 shadow-sm">
            <h2 className="m-0 mb-3 text-lg font-extrabold text-navy-800">
              بيانات البائع
            </h2>
            <div className="mb-4 flex items-center gap-2 text-sm font-bold text-ink-700">
              {property.verified ? (
                <BadgeCheck className="h-5 w-5 text-gold-700" />
              ) : (
                <ShieldCheck className="h-5 w-5 text-ink-400" />
              )}
              {property.seller || 'مالك مباشر'}
            </div>
            <button
              type="button"
              className="h-11 w-full rounded-xl bg-navy-800 px-5 text-sm font-bold text-white transition hover:bg-navy-700 active:scale-[0.97]"
            >
              اطلب التواصل
            </button>
          </section>

          {!property.verified && (
            <section className="rounded-2xl border border-gold-200 bg-white p-5 shadow-md">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-50 text-gold-700">
                <LockKeyhole className="h-6 w-6" />
              </div>
              <h2 className="m-0 text-lg font-extrabold text-navy-800">
                احمِ استثمارك
              </h2>
              <p className="m-0 mt-2 text-sm leading-relaxed text-ink-500">
                اطلب فحص السند القانوني لهذه القطعة من الإدارة القانونية بالشركة
                مقابل <span className="font-num font-bold text-navy-800">500 ج.م</span> فقط.
              </p>
              {verificationStatus === 'verification_pending' ? (
                <div className="mt-4 rounded-xl bg-green-100 p-3 text-sm font-bold text-green-800">
                  تم إرسال طلب الفحص — الحالة الآن قيد المراجعة.
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setCheckoutOpen(true)}
                  className="mt-4 h-11 w-full rounded-xl bg-gold-600 px-5 text-sm font-bold text-navy-900 shadow-[0_6px_20px_rgba(201,152,62,0.28)] transition hover:bg-gold-700 active:scale-[0.97]"
                >
                  طلب فحص الأوراق
                </button>
              )}
            </section>
          )}
        </aside>
      </main>

      {checkoutOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-900/70 px-4 py-6">
          <div className="w-full max-w-[620px] rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-ink-200 px-5 py-4">
              <h2 className="m-0 text-xl font-extrabold text-navy-800">
                فحص السند القانوني
              </h2>
              <button
                type="button"
                onClick={() => setCheckoutOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-ink-500 transition hover:bg-ink-100"
                aria-label="إغلاق"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-5">
              <div className="mb-5 rounded-2xl border border-navy-100 bg-navy-50 p-4">
                <div className="mb-2 flex items-center gap-2 text-base font-extrabold text-navy-800">
                  <ShieldCheck className="h-5 w-5 text-gold-700" />
                  ضمان ثقة قبل التعاقد
                </div>
                <p className="m-0 text-sm leading-relaxed text-ink-600">
                  يتم مراجعة المستندات المتاحة وإصدار ملخص قانوني أولي قبل
                  انتقالك إلى خطوة العربون أو التعاقد.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                {PAYMENT_METHODS.map((method) => {
                  const Icon = method.icon;
                  return (
                    <button
                      key={method.value}
                      type="button"
                      onClick={() => setPaymentMethod(method.value)}
                      className={`rounded-2xl border p-4 text-center transition ${
                        paymentMethod === method.value
                          ? 'border-gold-600 bg-gold-50'
                          : 'border-ink-200 bg-white'
                      }`}
                    >
                      <Icon className="mx-auto mb-2 h-6 w-6 text-gold-700" />
                      <span className="text-sm font-bold text-navy-800">{method.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-ink-200 px-5 py-4">
              <span className="font-num text-lg font-bold text-navy-800">500 ج.م</span>
              <button
                type="button"
                onClick={() => {
                  setVerificationStatus('verification_pending');
                  setCheckoutOpen(false);
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-navy-800 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-navy-700 active:scale-[0.97]"
              >
                <CheckCircle2 className="h-4 w-4" />
                تأكيد الطلب
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-ink-200 bg-paper p-4">
      <div className="text-xs text-ink-500">{label}</div>
      <div className="mt-1 font-num text-lg font-bold text-navy-800">{value}</div>
    </div>
  );
}
