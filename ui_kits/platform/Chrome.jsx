// NewObour platform chrome: Navbar + Footer. Exports to window.
const { useState } = React;
const LOGO = '../../assets/logo-mark.png';
const LOGO_LIGHT = '../../assets/logo-mark-light.png';

const NAV = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'market', label: 'الماركت بليس' },
  { id: 'ledger', label: 'كشوف التقنين' },
  { id: 'news', label: 'الأخبار والمعلومات' },
  { id: 'guide', label: 'دليل الترخيص' },
];

function Navbar({ active, onNav }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, height: 'var(--navbar-h)',
      background: 'var(--navy-800)', color: '#fff',
      display: 'flex', alignItems: 'center', gap: 28, padding: '0 36px',
      boxShadow: '0 2px 16px rgba(11,27,51,0.18)',
    }}>
      <div onClick={() => onNav('home')} style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', flex: 'none' }}>
        <img src={LOGO_LIGHT} alt="NewObour" style={{ height: 42 }} />
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontWeight: 800, fontSize: 18 }}>العبور الجديدة</span>
          <span style={{ fontFamily: 'var(--font-num)', fontSize: 10.5, letterSpacing: '0.16em', color: 'var(--gold-400)', marginTop: 3 }}>NEW OBOUR CITY</span>
        </div>
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 4, flex: 1 }}>
        {NAV.map((n) => (
          <button key={n.id} onClick={() => onNav(n.id)} style={{
            position: 'relative', background: 'transparent', border: 'none', cursor: 'pointer',
            color: active === n.id ? '#fff' : 'rgba(255,255,255,0.72)',
            fontFamily: 'var(--font-base)', fontSize: 15, fontWeight: active === n.id ? 700 : 500,
            padding: '10px 14px', transition: 'color var(--dur-base)',
          }}>
            {n.label}
            {active === n.id && <span style={{ position: 'absolute', insetInline: 14, bottom: 2, height: 3, borderRadius: 3, background: 'var(--gold-500)' }} />}
          </button>
        ))}
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 'none' }}>
        <button onClick={() => onNav('dashboard')} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent',
          border: '1px solid rgba(255,255,255,0.22)', color: '#fff', cursor: 'pointer',
          fontFamily: 'var(--font-base)', fontSize: 14, fontWeight: 600, padding: '9px 16px',
          borderRadius: 'var(--radius-md)',
        }}>
          <i data-lucide="layout-dashboard" style={{ width: 16, height: 16 }}></i>
          لوحتي
        </button>
        <button style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--gold-600)',
          border: 'none', color: 'var(--navy-900)', cursor: 'pointer',
          fontFamily: 'var(--font-base)', fontSize: 14, fontWeight: 700, padding: '10px 18px',
          borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-gold)',
        }}>
          أضف عرضك
        </button>
      </div>
    </header>
  );
}

function Footer() {
  const cols = [
    { h: 'الخدمات', items: ['كشوف التقنين', 'دليل الترخيص', 'تكاليف البناء', 'إجراءات الاستلام'] },
    { h: 'الماركت بليس', items: ['عروض الأراضي', 'الوحدات السكنية', 'الوحدات التجارية', 'طلبات الشراء'] },
    { h: 'المدينة', items: ['الأخبار والمرافق', 'الخرائط والمخططات', 'اللوائح والقوانين', 'تواصل معنا'] },
  ];
  return (
    <footer style={{ background: 'var(--navy-900)', color: 'rgba(255,255,255,0.66)', padding: '52px 36px 28px', fontFamily: 'var(--font-base)' }}>
      <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap', maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
        <div style={{ flex: '1 1 240px', minWidth: 240 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <img src={LOGO_LIGHT} alt="" style={{ height: 40 }} />
            <span style={{ fontWeight: 800, fontSize: 18, color: '#fff' }}>العبور الجديدة</span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.8, margin: 0 }}>الدليل الرسمي والموثوق لسكان ومستثمري مدينة العبور الجديدة — متابعة الكشوف، الأخبار، وسوق الأراضي في مكان واحد.</p>
        </div>
        {cols.map((c) => (
          <div key={c.h} style={{ flex: '0 1 180px' }}>
            <h4 style={{ color: '#fff', fontSize: 15, fontWeight: 700, marginBottom: 14 }}>{c.h}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {c.items.map((i) => <li key={i} style={{ fontSize: 14, cursor: 'pointer' }}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', marginTop: 36, paddingTop: 20, fontSize: 13, textAlign: 'center', maxWidth: 'var(--container-xl)', margin: '36px auto 0' }}>
        © ٢٠٢٦ منصة العبور الجديدة · جميع الحقوق محفوظة
      </div>
    </footer>
  );
}

Object.assign(window, { Navbar, Footer, NEWOBOUR_NAV: NAV });
