import { Megaphone } from 'lucide-react';
import { tickerMessages } from '../../data/mockData';

export default function LiveTicker() {
  return (
    <div className="bg-gold-50 border-y border-gold-200 py-3 overflow-hidden relative flex items-center">
      {/* Label (fixed on the right side in RTL) */}
      <div className="bg-gold-50 z-10 pr-4 pl-6 flex items-center gap-2 text-gold-800 font-bold text-sm h-full shrink-0">
        <Megaphone size={16} />
        <span>آخر التحديثات</span>
      </div>

      {/* Scrolling Content */}
      <div className="flex-1 overflow-hidden">
        <div className="animate-ticker whitespace-nowrap flex items-center">
          {/* We duplicate the content to create a seamless loop */}
          {[...tickerMessages, ...tickerMessages].map((msg, idx) => (
            <div key={idx} className="flex items-center">
              <span className="text-navy-800 text-sm font-medium mx-4">{msg}</span>
              {/* Separator dot, except for the very last item of the duplicated array if needed, but flex handles it */}
              <span className="text-gold-400 font-bold">·</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
