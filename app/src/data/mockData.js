// ---------------------------------------------------------------------------
// NewObour City Portal — Mock Data
// ---------------------------------------------------------------------------

/** Property listings */
export const properties = [
  { id: 1, status: 'alloc', district: 'الحي الثالث', block: '12', plotNo: 'B-147', area: 320, price: 2450000, features: ['ناصية', 'بحري'], verified: true, seller: 'أحمد سمير', brokerId: 'alsawarey', verificationStatus: 'verified' },
  { id: 2, status: 'ledger', district: 'الحي الأول', block: '4', plotNo: 'A-32', area: 500, price: 3100000, features: ['خدمات'], verified: false, seller: 'مكتب النخبة', brokerId: 'elite', verificationStatus: 'unverified' },
  { id: 3, status: 'license', district: 'الحي الخامس', block: '7', plotNo: 'E-08', area: 408, price: 4200000, features: ['ناصية', 'خدمات'], verified: true, seller: 'شركة السواري', brokerId: 'alsawarey', verificationStatus: 'verified' },
  { id: 4, status: 'build', district: 'الحي الثاني', block: '9', plotNo: 'C-211', area: 280, price: 2750000, features: ['بحري'], verified: true, seller: 'مالك مباشر', verificationStatus: 'verified' },
  {
    id: 5,
    status: 'mail',
    district: 'الحي السابع',
    block: '3',
    plotNo: 'G-55',
    area: 600,
    price: 3600000,
    features: ['خدمات'],
    verified: false,
    seller: 'وسيط معتمد',
    brokerId: 'elite',
    verificationStatus: 'unverified',
    partnershipTerms: {
      isPartnership: true,
      partnershipType: 'شراكة بنائية / دمج أرض مجاورة',
      expectedShare: '50% للمالك / 50% للمطور',
    },
  },
  {
    id: 6,
    status: 'alloc',
    district: 'الحي الثالث',
    block: '14',
    plotNo: 'B-309',
    area: 350,
    price: 2900000,
    features: ['ناصية'],
    verified: true,
    seller: 'مالك مباشر',
    verificationStatus: 'verified',
    partnershipTerms: {
      isPartnership: true,
      partnershipType: 'دمج أرض مجاورة',
      expectedShare: '45% للمالك / 55% للمطور',
    },
  },
];

/** City news */
export const news = [
  { tag: 'مرافق', date: 'منذ ٣ ساعات', title: 'جارٍ توصيل خطوط الكهرباء للمجاورة ١٢ بالحي الثالث', tone: 'gold' },
  { tag: 'تسليمات', date: 'أمس', title: 'بدء تسليم قطع أراضي الحي الخامس اعتباراً من الأحد القادم', tone: 'success' },
  { tag: 'طرق', date: 'منذ يومين', title: 'افتتاح المحور المروري الرابط بين الحي الأول والمنطقة الصناعية', tone: 'info' },
  { tag: 'لوائح', date: 'منذ ٣ أيام', title: 'تحديث اشتراطات البناء والارتدادات للقطع السكنية', tone: 'navy' },
];

/** Quick action services */
export const services = [
  { icon: 'FileSearch', title: 'كشوف التقنين', desc: 'ابحث باسمك أو رقمك القومي للتأكد من نزول الكشف', to: '/ledger-search' },
  { icon: 'Building2', title: 'عروض الأراضي والعقارات', desc: 'تصفّح عروض الأراضي والوحدات الموثّقة', to: '/marketplace' },
  { icon: 'Newspaper', title: 'الأخبار والمرافق', desc: 'تحديثات رسمية عن المرافق والطرق والتسليمات', to: '/news' },
  { icon: 'ScrollText', title: 'دليل الترخيص', desc: 'خطوات الترخيص والبناء والاستلام والتكاليف', to: '/guide' },
];

/** Live ticker messages */
export const tickerMessages = [
  'تم الانتهاء من توصيل شبكة المياه للحي الثاني بالكامل',
  'جارٍ رصف الطرق الداخلية بالمجاورة ٨ — الحي الثالث',
  'فتح باب حجز الوحدات التجارية بالمنطقة المركزية',
  'اعتماد المخطط التفصيلي للحي السادس رسمياً',
  'بدء أعمال إنشاء مدرسة دولية بالحي الخامس',
  'تسليم دفعة جديدة من جوابات التخصيص — الحي الأول',
];

/** Status configuration map — colours & labels for each legal status */
export const STATUS_CONFIG = {
  mail:    { label: 'تم تقديم البريد', color: '#5b7da6', bg: '#eef2f8' },
  ledger:  { label: 'نزلت كشف',       color: '#c9983e', bg: '#fbf6ec' },
  alloc:   { label: 'تم التخصيص',     color: '#2f9e7d', bg: '#dcefe5' },
  license: { label: 'تم الترخيص',     color: '#2563a8', bg: '#dde9f6' },
  build:   { label: 'جاري البناء',    color: '#d08a3a', bg: '#f7ecd7' },
};

/** Historical district pricing used by the price index. */
export const districtPriceHistory = [
  { district: 'الحي الأول', infrastructure: 74, activeListings: 12, prices: [6150, 6280, 6410, 6550, 6740, 6920] },
  { district: 'الحي الثاني', infrastructure: 81, activeListings: 9, prices: [6900, 7040, 7210, 7340, 7480, 7610] },
  { district: 'الحي الثالث', infrastructure: 88, activeListings: 18, prices: [7350, 7560, 7820, 8100, 8380, 8650] },
  { district: 'الحي الخامس', infrastructure: 69, activeListings: 7, prices: [8100, 8280, 8550, 8720, 9050, 9440] },
  { district: 'الحي السابع', infrastructure: 57, activeListings: 11, prices: [5200, 5480, 5820, 6200, 6670, 7180] },
];

export const brokers = [
  {
    id: 'alsawarey',
    name: 'شركة السواري للتطوير والتسويق العقاري',
    businessName: 'ALSAWAREY Real Estate',
    licenseNo: 'NOBC-2026-118',
    verified: true,
    activeListings: 24,
    logoInitials: 'AS',
  },
  {
    id: 'elite',
    name: 'مكتب النخبة العقاري',
    businessName: 'Elite Brokers',
    licenseNo: 'NOBC-2026-074',
    verified: true,
    activeListings: 11,
    logoInitials: 'EB',
  },
];

export const moderationListings = [
  { id: 'MR-104', broker: 'مكتب النخبة العقاري', title: 'قطعة 500م — الحي الأول', status: 'pending_review', submittedAt: 'اليوم 11:20 ص' },
  { id: 'MR-105', broker: 'شركة السواري', title: 'قطعة ناصية 408م — الحي الخامس', status: 'pending_review', submittedAt: 'أمس 04:10 م' },
  { id: 'MR-106', broker: 'مكتب النخبة العقاري', title: 'أرض شراكة 600م — الحي السابع', status: 'needs_documents', submittedAt: 'أمس 09:45 ص' },
];

export const legalConciergeFees = [
  { label: 'مراجعة أولية للملف', value: 'مجانية' },
  { label: 'توكيل ومتابعة إدارية', value: '1,500 ج.م' },
  { label: 'رسوم حكومية تقديرية', value: 'حسب الملف' },
];
