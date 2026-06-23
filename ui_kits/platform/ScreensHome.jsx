// NewObour platform — Home & Market screens. Exports to window.
const { useState: useStateS } = React;

function Section({ title, subtitle, action, children, bg }) {
  return (
    <section style={{ background: bg || 'transparent', padding: '52px 36px' }}>
      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginBottom: 28 }}>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: 'var(--navy-800)', margin: 0 }}>{title}</h2>
            {subtitle && <p style={{ color: 'var(--text-muted)', fontSize: 15, margin: '6px 0 0' }}>{subtitle}</p>}
          </div>
          {action}
        </div>
        {children}
      </div>
    </section>
  );
}

function HomeScreen({ onNav }) {
  const { LedgerSearch, PropertyCard, Badge, Button } = window.NewObourDesignSystem_0eda04;
  const props = window.NEWOBOUR_PROPS.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <div style={{
        position: 'relative', background: 'linear-gradient(135deg, #0b1b33 0%, #13294b 55%, #1c3a63 100%)',
        color: '#fff', padding: '72px 36px 96px', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06,
          backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div style={{ position: 'relative', maxWidth: 'var(--container-lg)', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 16px', borderRadius: 'var(--radius-pill)',
            background: 'rgba(201,152,62,0.16)', border: '1px solid rgba(201,152,62,0.4)', color: 'var(--gold-300)', fontSize: 13.5, fontWeight: 700, marginBottom: 22 }}>
            <i data-lucide="shield-check" style={{ width: 16, height: 16 }}></i>
            الدليل الرسمي والموثوق لمدينة العبور الجديدة
          </span>
          <h1 style={{ fontSize: 46, fontWeight: 900, lineHeight: 1.2, margin: '0 0 16px', color: '#fff' }}>
            كل ما يخص أرضك في <span style={{ color: 'var(--gold-500)' }}>مكان واحد</span>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: 'rgba(255,255,255,0.82)', maxWidth: 680, margin: '0 auto 36px' }}>
            تابع كشوف التقنين، اطّلع على الأخبار الرسمية، واعرض أو اشترِ الأراضي والوحدات بثقة تامة.
          </p>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <LedgerSearch onSearch={() => onNav('ledger')} />
            <div style={{ display: 'flex', gap: 18, justifyContent: 'center', marginTop: 18, color: 'rgba(255,255,255,0.7)', fontSize: 13.5 }}>
              <span>بحث شائع:</span>
              <span style={{ cursor: 'pointer', color: 'var(--gold-300)' }}>الحي الثالث</span>
              <span style={{ cursor: 'pointer', color: 'var(--gold-300)' }}>كشف جمعية النصر</span>
              <span style={{ cursor: 'pointer', color: 'var(--gold-300)' }}>رقم قطعة أصلية</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div style={{ maxWidth: 'var(--container-xl)', margin: '-56px auto 0', padding: '0 36px', position: 'relative', zIndex: 5 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {window.NEWOBOUR_SERVICES.map((s) => (
            <div key={s.title} onClick={() => onNav(s.to)} style={{
              background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
              padding: 22, cursor: 'pointer', boxShadow: 'var(--shadow-md)', transition: 'transform var(--dur-base), box-shadow var(--dur-base)',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}>
              <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-700)', marginBottom: 14 }}>
                <i data-lucide={s.icon} style={{ width: 24, height: 24 }}></i>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: 'var(--navy-800)', margin: '0 0 6px' }}>{s.title}</h3>
              <p style={{ fontSize: 13.5, color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured listings */}
      <Section title="عروض مميزة وموثّقة" subtitle="أحدث الأراضي المعروضة للبيع في المدينة"
        action={<Button variant="outline" onClick={() => onNav('market')}>كل العروض</Button>}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {props.map((p) => <PropertyCard key={p.id} {...p} onClick={() => onNav('market')} />)}
        </div>
      </Section>

      {/* News */}
      <Section title="أخبار المدينة" subtitle="تحديثات رسمية من داخل الجهاز" bg="var(--white)"
        action={<Button variant="ghost" onClick={() => onNav('news')}>كل الأخبار ←</Button>}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {window.NEWOBOUR_NEWS.map((n, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center', background: 'var(--paper)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 18 }}>
              <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)', background: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-700)', flex: 'none' }}>
                <i data-lucide="megaphone" style={{ width: 24, height: 24 }}></i>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <Badge tone={n.tone} size="sm">{n.tag}</Badge>
                  <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{n.date}</span>
                </div>
                <p style={{ margin: 0, fontSize: 15.5, fontWeight: 600, color: 'var(--text-strong)', lineHeight: 1.5 }}>{n.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function MarketScreen({ onNav }) {
  const { PropertyCard, Select, Badge, StatusBadge } = window.NewObourDesignSystem_0eda04;
  const [status, setStatus] = useStateS('all');
  const all = window.NEWOBOUR_PROPS;
  const list = status === 'all' ? all : all.filter((p) => p.status === status);

  return (
    <div style={{ background: 'var(--paper)', minHeight: '70vh' }}>
      {/* Header band */}
      <div style={{ background: 'var(--navy-800)', color: '#fff', padding: '40px 36px' }}>
        <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, margin: '0 0 8px' }}>الماركت بليس</h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 16, margin: 0 }}>تصفّح عروض الأراضي والوحدات حسب الحالة القانونية والموقع</p>
        </div>
      </div>

      <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: '28px 36px 64px' }}>
        {/* Filter bar */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 14, marginBottom: 24, boxShadow: 'var(--shadow-sm)' }}>
          <span style={{ fontWeight: 700, color: 'var(--text-strong)', fontSize: 14 }}>تصفية:</span>
          {[['all','الكل'],['ledger','نزلت كشف'],['alloc','تم التخصيص'],['license','تم الترخيص'],['build','جاري البناء']].map(([v, l]) => (
            <button key={v} onClick={() => setStatus(v)} style={{
              padding: '7px 14px', borderRadius: 'var(--radius-pill)', cursor: 'pointer',
              fontFamily: 'var(--font-base)', fontSize: 13.5, fontWeight: 700,
              border: '1px solid ' + (status === v ? 'var(--navy-800)' : 'var(--border-default)'),
              background: status === v ? 'var(--navy-800)' : '#fff',
              color: status === v ? '#fff' : 'var(--text-body)',
            }}>{l}</button>
          ))}
          <div style={{ flex: 1 }} />
          <div style={{ width: 200 }}>
            <Select options={['الأحدث', 'الأقل سعراً', 'الأكبر مساحة']} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <span style={{ color: 'var(--text-muted)', fontSize: 14 }}><span style={{ fontFamily: 'var(--font-num)', fontWeight: 700, color: 'var(--navy-800)' }}>{list.length}</span> عرض متاح</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {list.map((p) => <PropertyCard key={p.id} {...p} onClick={() => onNav('home')} />)}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HomeScreen, MarketScreen });
