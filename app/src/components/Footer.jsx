const FOOTER_COLUMNS = [
  {
    title: 'الخدمات',
    links: ['كشوف التقنين', 'دليل الترخيص', 'تكاليف البناء', 'إجراءات الاستلام'],
  },
  {
    title: 'الماركت بليس',
    links: ['عروض الأراضي', 'الوحدات السكنية', 'الوحدات التجارية', 'طلبات الشراء'],
  },
  {
    title: 'المدينة',
    links: [
      'الأخبار والمرافق',
      'الخرائط والمخططات',
      'اللوائح والقوانين',
      'تواصل معنا',
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
              <img
                src="/images/logo-mark-light.png"
                alt="العبور الجديدة"
                className="h-10 w-auto"
              />
              <span className="text-lg font-extrabold text-white">
                العبور الجديدة
              </span>
            </div>
            <p className="max-w-[360px] text-sm leading-relaxed text-white/65">
              الدليل الرسمي والموثوق لسكان ومستثمري مدينة العبور الجديدة —
              متابعة الكشوف، الأخبار، وسوق الأراضي في مكان واحد.
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
                  <li key={link}>
                    <span className="cursor-pointer text-sm text-white/65 transition-colors duration-200 hover:text-gold-400">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Copyright bar ── */}
        <div className="mt-9 border-t border-white/10 pt-5 text-center text-[13px] text-white/50">
          &copy; ٢٠٢٦ منصة العبور الجديدة &middot; جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
}
