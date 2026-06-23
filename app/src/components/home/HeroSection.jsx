import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Search } from 'lucide-react';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('ledger'); // 'ledger' | 'property'
  const navigate = useNavigate();
  const searchPath = activeTab === 'ledger' ? '/ledger-search' : '/marketplace';

  return (
    <section 
      className="relative overflow-hidden py-[72px] px-9 pb-24"
      style={{ background: 'linear-gradient(135deg, #0b1b33 0%, #13294b 55%, #1c3a63 100%)' }}
    >
      {/* Dot Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="relative z-10 max-w-[1120px] mx-auto text-center">
        {/* Trust Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 font-bold text-[13.5px]"
             style={{ backgroundColor: 'rgba(201,152,62,0.16)', borderColor: 'rgba(201,152,62,0.4)', borderWidth: '1px', color: 'var(--color-gold-300)' }}>
          <ShieldCheck size={16} />
          <span>الدليل الرسمي والموثوق لمدينة العبور الجديدة</span>
        </div>

        {/* Headline */}
        <h1 className="text-[32px] md:text-[46px] font-black leading-tight text-white mb-4">
          كل ما يخص أرضك في <span className="text-gold-500">مكان واحد</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[17px] md:text-[19px] leading-relaxed text-white/80 max-w-[680px] mx-auto mb-9">
          تابع كشوف التقنين، اطّلع على الأخبار الرسمية، واعرض أو اشترِ الأراضي والوحدات بثقة تامة.
        </p>

        {/* Dual Search Bar */}
        <div className="max-w-[760px] mx-auto">
          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-3">
            <button
              onClick={() => setActiveTab('ledger')}
              className={`px-5 py-2 rounded-full font-bold text-[15px] transition-colors ${
                activeTab === 'ledger' ? 'bg-white/20 text-white' : 'bg-transparent text-white/60 hover:text-white/80'
              }`}
            >
              بحث في الكشوف
            </button>
            <button
              onClick={() => setActiveTab('property')}
              className={`px-5 py-2 rounded-full font-bold text-[15px] transition-colors ${
                activeTab === 'property' ? 'bg-white/20 text-white' : 'bg-transparent text-white/60 hover:text-white/80'
              }`}
            >
              بحث في العقارات
            </button>
          </div>

          {/* Search Input Container */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              navigate(searchPath);
            }}
            className="bg-white rounded-[20px] shadow-xl p-1.5 flex items-center gap-2"
          >
            <Search className="text-ink-400 mx-3" size={20} />
            <input
              type="text"
              placeholder={activeTab === 'ledger' ? 'ابحث باسمك أو رقمك القومي...' : 'ابحث بالحي أو المساحة أو رقم القطعة...'}
              className="flex-1 bg-transparent outline-none text-ink-800 placeholder:text-ink-400 font-base text-[15px] py-2"
            />
            <button type="submit" className="bg-navy-800 text-white px-6 py-3 rounded-[16px] font-bold text-sm hover:bg-navy-700 transition">
              بحث
            </button>
          </form>

          {/* Popular Searches */}
          <div className="flex gap-4 justify-center mt-4 text-white/60 text-[13.5px]">
            <span>بحث شائع:</span>
            <span className="text-gold-300 cursor-pointer hover:text-gold-200 transition">الحي الثالث</span>
            <span className="text-gold-300 cursor-pointer hover:text-gold-200 transition">كشف جمعية النصر</span>
            <span className="text-gold-300 cursor-pointer hover:text-gold-200 transition">رقم قطعة أصلية</span>
          </div>
        </div>
      </div>
    </section>
  );
}
