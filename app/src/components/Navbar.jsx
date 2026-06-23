import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { id: 'home', label: 'الرئيسية', path: '/' },
  { id: 'market', label: 'الماركت بليس', path: '/marketplace' },
  { id: 'ledger', label: 'كشوف التقنين', path: '/ledger-search' },
  { id: 'price', label: 'مؤشر الأسعار', path: '/price-index' },
  { id: 'news', label: 'الأخبار والمعلومات', path: '/news' },
  { id: 'guide', label: 'دليل الترخيص', path: '/guide' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <nav className="sticky top-0 z-50 bg-navy-800 font-base">
      {/* ── Desktop bar ── */}
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-5 lg:px-8">
        {/* RIGHT — Logo + brand (RTL, so visually right) */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img
            src="/images/logo-mark-light.png"
            alt="العبور الجديدة"
            className="h-[42px] w-auto"
          />
          <div className="flex flex-col">
            <span className="text-lg font-extrabold leading-tight text-white">
              العبور الجديدة
            </span>
            <span className="font-num text-[10.5px] tracking-[0.16em] text-gold-400">
              NEW OBOUR CITY
            </span>
          </div>
        </Link>

        {/* CENTER — Nav links (hidden on mobile) */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id} className="relative">
              <Link
                to={link.path}
                className={`newobour-nav-link relative block px-3.5 py-2 text-[15px] no-underline transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'newobour-nav-link-active font-bold'
                    : 'font-medium'
                }`}
              >
                {link.label}

                {/* Gold underline indicator */}
                {isActive(link.path) && (
                  <span className="absolute bottom-0.5 left-0 right-0 mx-auto h-[3px] w-4/5 rounded-full bg-gold-500" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* LEFT — Action buttons (hidden on mobile) */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/dashboard"
            className="newobour-header-secondary-action flex items-center gap-2 rounded-xl border bg-transparent px-4 py-2 text-sm font-medium no-underline transition-all duration-200 hover:shadow-md active:scale-[0.97]"
          >
            <LayoutDashboard className="h-[18px] w-[18px]" />
            لوحتي
          </Link>
          <Link
            to="/add-listing"
            className="flex items-center gap-2 rounded-xl bg-gold-600 px-5 py-2 text-sm font-bold text-navy-900 no-underline shadow-[0_2px_12px_rgba(201,152,62,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_18px_rgba(201,152,62,0.45)] active:scale-[0.97]"
          >
            أضف عرضك
          </Link>
        </div>

        {/* HAMBURGER — mobile only */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="newobour-header-icon-button flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden"
          aria-label={mobileOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* ── Mobile slide-down panel ── */}
      <div
        className={`overflow-hidden bg-navy-800 transition-all duration-300 ease-out md:hidden ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="newobour-mobile-menu-border border-t px-5 pb-6 pt-4">
          {/* Mobile nav links */}
          <ul className="mb-5 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`newobour-nav-link relative block rounded-lg px-4 py-2.5 text-[15px] no-underline transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'newobour-nav-link-active newobour-nav-link-panel-active font-bold'
                      : 'font-medium'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {isActive(link.path) && (
                      <span className="h-[18px] w-[3px] rounded-full bg-gold-500" />
                    )}
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile action buttons */}
          <div className="flex flex-col gap-3">
            <Link
              to="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="newobour-header-secondary-action flex items-center justify-center gap-2 rounded-xl border bg-transparent px-4 py-2.5 text-sm font-medium no-underline transition-all duration-200 active:scale-[0.97]"
            >
              <LayoutDashboard className="h-[18px] w-[18px]" />
              لوحتي
            </Link>
            <Link
              to="/add-listing"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-gold-600 px-5 py-2.5 text-sm font-bold text-navy-900 no-underline shadow-[0_2px_12px_rgba(201,152,62,0.35)] transition-all duration-200 active:scale-[0.97]"
            >
              أضف عرضك
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
