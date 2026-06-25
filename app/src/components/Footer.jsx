import { Link } from 'react-router-dom';

const FOOTER_COLUMNS = [
  {
    title: 'الخدمات',
    links: [
      { label: 'كشوف التقنين', to: '/ledger-search' },
      { label: 'دليل الترخيص', to: '/guide' },
      { label: 'تكاليف البناء', to: '/guide' },
      { label: 'إجراءات الاستلام', to: '/guide' },
    ],
  },
  {
    title: 'عروض الأراضي والعقارات',
    links: [
      { label: 'عروض الأراضي', to: '/marketplace' },
      { label: 'الوحدات السكنية', to: '/marketplace' },
      { label: 'الوحدات التجارية', to: '/marketplace' },
      { label: 'طلبات الشراء', to: '/add-listing' },
    ],
  },
  {
    title: 'المدينة',
    links: [
      { label: 'الأخبار والمرافق', to: '/news' },
      { label: 'الخرائط والمخططات', to: '/price-index' },
      { label: 'اللوائح والقوانين', to: '/guide' },
      { label: 'تواصل معنا', to: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 font-base">
      <div className="mx-auto max-w-[1320px] px-9 pb-7 pt-[52px]">
        {/* ── Main columns ── */}
        <div className="flex flex-wrap gap-10 lg:gap-16">
          {/* Brand column */}
          <div className="min-w-[240px] flex-1">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm">
                <img
                  src="/images/new-obour-logo-mark.png"
                  alt="العبور الجديد"
                  className="h-full w-full scale-[1.38] object-contain"
                />
              </span>
              <span className="text-lg font-extrabold text-white">
                العبور الجديد
              </span>
            </div>
            <p className="max-w-[360px] text-sm leading-relaxed text-white/65">
              الدليل الرسمي والموثوق لسكان ومستثمري مدينة العبور الجديد —
              متابعة الكشوف، الأخبار، وعروض الأراضي والعقارات في مكان واحد.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="w-[180px] shrink-0">
              <h4 className="mb-3.5 text-[15px] font-bold text-white">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/65 transition-colors duration-200 hover:text-gold-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Copyright bar ── */}
        <div className="mt-9 border-t border-white/10 pt-5 text-center text-[13px] text-white/50">
          &copy; ٢٠٢٦ منصة العبور الجديد &middot; جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}
