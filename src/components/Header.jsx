import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Header({ onOpenConsultation }) {
  const { t, isRTL, toggleLanguage, lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.expertise, href: '#expertise' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.process, href: '#process' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm h-[88px]'
          : 'bg-white h-[112px]'
      } flex items-center justify-between px-6 md:px-12 lg:px-[72px] border-b border-[#d5e1e5]/40`}
      data-node-id="7:4246"
      data-name="Navigation"
    >
      {/* Brand Logo / Wordmark */}
      <a href="#" className="relative shrink-0 block h-[70px] w-[140px] md:h-[80px] md:w-[160px] overflow-hidden" data-node-id="31:4">
        <img
          src="./assets/ora-wordmark.png"
          alt="ORA Water Features"
          className="absolute h-[240%] left-[-10.8%] max-w-none top-[-74.7%] w-[120.5%] object-contain"
        />
      </a>

      {/* Desktop Main Navigation */}
      <nav
        className="hidden lg:flex items-center gap-8 xl:gap-[34px] font-sans text-[14px] text-[#102c51] font-medium tracking-normal"
        data-node-id="7:4254"
        data-name="Main navigation"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-[#21a8b9] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#21a8b9] hover:after:w-full after:transition-all"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Desktop Action & Language Switcher */}
      <div className="hidden sm:flex items-center gap-4">
        {/* Language Switcher Button */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 border border-[#d5e1e5] hover:border-[#21a8b9] hover:text-[#21a8b9] text-[#102c51] h-[48px] md:h-[54px] px-4 text-xs font-semibold tracking-wider transition-all cursor-pointer bg-white"
          title={lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
        >
          <Globe size={16} className="text-[#21a8b9]" />
          <span>{t.nav.langToggle}</span>
        </button>

        {/* CTA Button */}
        <button
          onClick={() => onOpenConsultation(t.nav.discussProject)}
          className="bg-[#21a8b9] hover:bg-[#1ca0b0] text-[#091f39] border border-[#21a8b9] h-[48px] md:h-[54px] px-[22px] md:px-[24px] flex items-center gap-4 text-[13px] font-semibold transition-all shadow-sm hover:shadow active:scale-[0.99] cursor-pointer"
          data-node-id="7:4260"
          data-name="Consultation action"
        >
          <span data-node-id="7:4261">{t.nav.discussProject}</span>
          <span className="text-[20px] font-light leading-none">
            {isRTL ? '↖' : '↗'}
          </span>
        </button>
      </div>

      {/* Mobile Menu & Language Toggle */}
      <div className="lg:hidden flex items-center gap-2">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1.5 border border-[#d5e1e5] text-[#102c51] px-2.5 py-1.5 text-xs font-semibold"
        >
          <Globe size={13} className="text-[#21a8b9]" />
          <span>{t.nav.langToggle}</span>
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-[#102c51] hover:text-[#21a8b9] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[88px] bg-white border-b border-[#d5e1e5] shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#102c51] text-[15px] font-medium py-2 border-b border-[#d5e1e5]/40 hover:text-[#21a8b9] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation(t.nav.discussProject);
            }}
            className="w-full bg-[#21a8b9] text-[#091f39] h-[50px] font-semibold text-[14px] flex items-center justify-center gap-3 mt-2 shadow-sm"
          >
            <span>{t.nav.discussProject}</span>
            <span className="text-[18px]">{isRTL ? '↖' : '↗'}</span>
          </button>
        </div>
      )}
    </header>
  );
}
