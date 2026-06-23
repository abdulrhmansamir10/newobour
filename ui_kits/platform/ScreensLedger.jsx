// NewObour platform — Ledger search & Owner dashboard. Exports to window.
const { useState: useStateL } = React;

function LedgerScreen() {
  const { LedgerSearch, StatusBadge, Button, Badge, Input } = window.NewObourDesignSystem_0eda04;
  const [done, setDone] = useStateL(true);

  return (
    <div style={{ background: 'var(--paper)', minHeight: '70vh' }}>
      <div style={{ background: 'linear-gradient(135deg, #0b1b33, #13294b)', color: '#fff', padding: '44px 36px 56px' }}>
        <div style={{ maxWidth: 'var(--container-md)', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, margin: '0 0 8px' }}>كشوف التقنين</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, margin: '0 0 28px' }}>تأكّد من نزول اسمك في الكشوف بالبحث ببياناتك الأصلية</p>
          <LedgerSearch onSearch={() => setDone(true)} />
        </div>
      </div>

      <div style={{ maxWidth: 'var(--container-md)', margin: '0 auto', padding: '32px 36px 64px' }}>
        {/* Success result */}
        <div style={{ background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
          <div style={{ background: 'var(--success-100)', borderBottom: '1px solid #cbe6d8', padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--success-600)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
              <i data-lucide="check" style={{ width: 22, height: 22 }}></i>
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#176043' }}>تم العثور على الاسم في الكشوف</h3>
              <p style={{ margin: '2px 0 0', fontSize: 14, color: '#1c7257' }}>نزل اسمك ضمن كشف الحي الثالث — يمكنك متابعة الخطوات التالية</p>
            </div>
          </div>
          <div style={{ padding: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 22 }}>
              {[['اسم المالك الأصلي','محمد عبد الله سالم'],['الجمعية','جمعية النصر للإسكان'],['رقم القطعة الأصلية','147 / ب'],['المساحة','320 م²'],['الحالة الحالية','نزلت كشف'],['تاريخ نزول الكشف','١٢ / ٠٣ / ٢٠٢٦']].map(([k, v], i) => (
                <div key={i}>
                  <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 4 }}>{k}</div>
                  {k === 'الحالة الحالية'
                    ? <StatusBadge status="ledger" />
                    : <div style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--text-strong)', fontFamily: k.includes('رقم') || k.includes('المساحة') || k.includes('تاريخ') ? 'var(--font-num)' : 'var(--font-base)' }}>{v}</div>}
                </div>
              ))}
            </div>
            <div style={{ background: 'var(--gold-50)', border: '1px solid var(--gold-200)', borderRadius: 'var(--radius-md)', padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <i data-lucide="headset" style={{ width: 26, height: 26, color: 'var(--gold-700)', flexShrink: 0 }}></i>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, color: 'var(--navy-800)', fontSize: 15 }}>تواصل مع خدمة العملاء لإتمام الخطوات</div>
                <div style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>دفع المصاريف، إجراءات الاستلام، والمتابعة حتى التخصيص</div>
              </div>
              <Button variant="accent">ابدأ المتابعة</Button>
            </div>
          </div>
        </div>

        {/* Alternate flow */}
        <div style={{ marginTop: 22, background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-xl)', padding: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <i data-lucide="bell-ring" style={{ width: 20, height: 20, color: 'var(--navy-700)' }}></i>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800, color: 'var(--navy-800)' }}>لم يظهر اسمك بعد؟</h3>
          </div>
          <p style={{ margin: '0 0 18px', fontSize: 14.5, color: 'var(--text-muted)', lineHeight: 1.7 }}>سجّل بياناتك وسنُنبّهك فور صدور الكشف الخاص بك أو فتح باب التقديم.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, alignItems: 'end' }}>
            <Input label="الاسم بالكامل" placeholder="كما في إثبات الملكية" />
            <Input label="رقم التليفون" placeholder="01xxxxxxxxx" />
            <Button variant="primary" block>نبّهني عند النزول</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardScreen() {
  const { StatusBadge, Badge, Button, Avatar } = window.NewObourDesignSystem_0eda04;
  const feed = [
    { tag: 'مرافق', tone: 'gold', text: 'جارٍ توصيل المرافق للمجاورة ١٢ — مرفق صور من الموقع', date: 'منذ ساعتين' },
    { tag: 'تسليمات', tone: 'success', text: 'سيتم تسليم قطعتك يوم الأحد ١٦ مارس بإذن الله', date: 'أمس' },
    { tag: 'عمران', tone: 'info', text: 'تم بدء إنشاء مدرسة جديدة على بُعد ٣٠٠م من قطعتك', date: 'منذ ٤ أيام' },
  ];
  return (
    <div style={{ background: 'var(--paper)', minHeight: '70vh', padding: '36px' }}>
      <div style={{ maxWidth: 'var(--container-lg)', margin: '0 auto', display: 'grid', gridTemplateColumns: '320px 1fr', gap: 28 }}>
        {/* Sidebar: tracked property */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar name="أحمد سمير" size={52} ring />
            <div>
              <div style={{ fontWeight: 800, fontSize: 17, color: 'var(--navy-800)' }}>أهلاً، أحمد</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>حساب شخصي</div>
            </div>
          </div>
          <div style={{ background: 'var(--navy-800)', borderRadius: 'var(--radius-lg)', padding: 22, color: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 13, color: 'var(--gold-400)', fontWeight: 700 }}>قطعتي المتابَعة</span>
              <StatusBadge status="alloc" size="sm" />
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>قطعة B-147</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.72)', marginBottom: 18 }}>الحي الثالث · مجاورة ١٢ · بلوك ٤</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: 16 }}>
              <div><div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>المساحة</div><div style={{ fontFamily: 'var(--font-num)', fontWeight: 700, fontSize: 18 }}>320 م²</div></div>
              <div><div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>رقم القطعة</div><div style={{ fontFamily: 'var(--font-num)', fontWeight: 700, fontSize: 18 }}>B-147</div></div>
            </div>
          </div>
          <Button variant="outline" block iconStart={<i data-lucide="plus" style={{ width: 16, height: 16 }}></i>}>أضف قطعة للمتابعة</Button>
        </aside>

        {/* Feed */}
        <main>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: 'var(--navy-800)', margin: '0 0 6px' }}>خلاصة الأخبار المخصصة</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 15, margin: '0 0 24px' }}>تحديثات تخص الحي الثالث والمجاورة ١٢ — تظهر تلقائياً في لوحتك</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {feed.map((f, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 20, boxShadow: 'var(--shadow-xs)', display: 'flex', gap: 16 }}>
                <div style={{ width: 46, height: 46, borderRadius: 'var(--radius-md)', background: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--navy-700)', flex: 'none' }}>
                  <i data-lucide="map-pin" style={{ width: 22, height: 22 }}></i>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 7 }}>
                    <Badge tone={f.tone} size="sm">{f.tag}</Badge>
                    <span style={{ fontSize: 12.5, color: 'var(--text-faint)' }}>{f.date}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: 16, fontWeight: 600, color: 'var(--text-strong)', lineHeight: 1.6 }}>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

Object.assign(window, { LedgerScreen, DashboardScreen });
