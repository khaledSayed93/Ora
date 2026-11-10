import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Footer({ onOpenSplash }) {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: t.nav.about, href: '#about', nodeId: '7:4736' },
    { name: t.nav.expertise, href: '#expertise', nodeId: '7:4737' },
    { name: t.nav.services, href: '#services', nodeId: '7:4738' },
    { name: t.nav.experience, href: '#experience', nodeId: '7:4739' },
    { name: t.nav.process, href: '#process', nodeId: '7:4740' },
  ];

  return (
    <footer
      className="w-full bg-[#091f39] px-6 md:px-12 lg:px-[72px] pb-8 pt-4 flex flex-col gap-9"
      data-node-id="7:4724"
      data-name="Footer"
    >
      {/* Top Divider */}
      <div className="bg-[#345069] h-px w-full" data-node-id="7:4725" />

      {/* Footer Navigation Bar */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-6"
        data-node-id="7:4726"
        data-name="Footer navigation"
      >
        {/* Brand Wordmark & Splash preview link */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="block h-[70px] w-[140px] md:h-[80px] md:w-[160px] relative overflow-hidden"
            data-node-id="7:4727"
          >
            <img
              src="./assets/ora-logo.png"
              alt="ORA Logo"
              className="absolute h-[240%] left-[-10.8%] max-w-none top-[-74.7%] w-[120.5%] object-contain"
              data-node-id="31:5"
            />
          </a>
          {onOpenSplash && (
            <button
              onClick={onOpenSplash}
              className="text-[11px] text-[#b9ccd7]/60 hover:text-[#5ddade] transition-colors border border-[#345069] px-2.5 py-1 rounded"
              title="View brand splash entrance"
            >
              {t.footer.splashBtn}
            </button>
          )}
        </div>

        {/* Brand Motto */}
        <p
          className="font-sans font-medium text-[#5ddade] text-[11px] tracking-[0.16em]"
          data-node-id="7:4734"
        >
          {t.hero.motto}
        </p>

        {/* Links */}
        <div
          className="flex flex-wrap items-center gap-6 md:gap-[28px] font-sans text-[#b9ccd7] text-[13px]"
          data-node-id="7:4735"
          data-name="Footer links"
        >
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
              data-node-id={link.nodeId}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Legal & Back To Top */}
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 font-sans text-[11px] text-[#b9ccd7]"
        data-node-id="7:4741"
        data-name="Legal and regional note"
      >
        <p data-node-id="7:4742">
          {t.footer.rights}
        </p>

        <p data-node-id="7:4743">
          {t.footer.regions}
        </p>

        <button
          onClick={scrollToTop}
          className="text-[#5ddade] hover:text-white transition-colors cursor-pointer tracking-wider font-medium"
          data-node-id="7:4744"
        >
          {t.footer.backToTop}
        </button>
      </div>
    </footer>
  );
}
