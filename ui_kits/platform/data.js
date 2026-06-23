// Sample marketplace data for the NewObour platform UI kit.
window.NEWOBOUR_PROPS = [
  { id: 1, status: 'alloc',   district: 'الحي الثالث',  block: '12', plotNo: 'B-147', area: 320, price: 2450000, features: ['ناصية', 'بحري'], verified: true },
  { id: 2, status: 'ledger',  district: 'الحي الأول',   block: '4',  plotNo: 'A-32',  area: 500, price: 3100000, features: ['خدمات'], verified: false },
  { id: 3, status: 'license', district: 'الحي الخامس',  block: '7',  plotNo: 'E-08',  area: 408, price: 4200000, features: ['ناصية', 'خدمات'], verified: true },
  { id: 4, status: 'build',   district: 'الحي الثاني',  block: '9',  plotNo: 'C-211', area: 280, price: 2750000, features: ['بحري'], verified: true },
  { id: 5, status: 'mail',    district: 'الحي السابع',  block: '3',  plotNo: 'G-55',  area: 600, price: 3600000, features: ['خدمات'], verified: false },
  { id: 6, status: 'alloc',   district: 'الحي الثالث',  block: '14', plotNo: 'B-309', area: 350, price: 2900000, features: ['ناصية'], verified: true },
];

window.NEWOBOUR_NEWS = [
  { tag: 'مرافق', date: 'منذ ٣ ساعات', title: 'جارٍ توصيل خطوط الكهرباء للمجاورة ١٢ بالحي الثالث', tone: 'gold' },
  { tag: 'تسليمات', date: 'أمس', title: 'بدء تسليم قطع أراضي الحي الخامس اعتباراً من الأحد القادم', tone: 'success' },
  { tag: 'طرق', date: 'منذ يومين', title: 'افتتاح المحور المروري الرابط بين الحي الأول والمنطقة الصناعية', tone: 'info' },
  { tag: 'لوائح', date: 'منذ ٣ أيام', title: 'تحديث اشتراطات البناء والارتدادات للقطع السكنية', tone: 'navy' },
];

window.NEWOBOUR_SERVICES = [
  { icon: 'file-search', title: 'كشوف التقنين', desc: 'ابحث باسمك أو رقمك القومي للتأكد من نزول الكشف', to: 'ledger' },
  { icon: 'building-2', title: 'الماركت بليس', desc: 'تصفّح عروض الأراضي والوحدات الموثّقة', to: 'market' },
  { icon: 'newspaper', title: 'الأخبار والمرافق', desc: 'تحديثات رسمية عن المرافق والطرق والتسليمات', to: 'news' },
  { icon: 'scroll-text', title: 'دليل الترخيص', desc: 'خطوات الترخيص والبناء والاستلام والتكاليف', to: 'guide' },
];
