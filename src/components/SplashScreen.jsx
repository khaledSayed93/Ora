import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function SplashScreen({ onEnter }) {
  const { t, isRTL } = useLanguage();
  const s = t.splash;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#071d37] flex flex-col justify-between p-6 sm:p-12 lg:px-[72px] lg:py-[44px] overflow-hidden"
      data-node-id="20:3"
      data-name="ORA Water Features — Splash screen"
    >
      {/* Background imagery and scrim */}
      <div className="absolute inset-0 pointer-events-none" data-node-id="20:4">
        <img
          src="./assets/architectural-lagoon.png"
          alt="ORA Water Landscape"
          className="w-full h-full object-cover scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[rgba(7,29,55,0.92)] via-[rgba(9,43,75,0.7)] to-[rgba(10,42,69,0.4)]"
          data-node-id="20:6"
        />
      </div>

      {/* Opening Note */}
      <div
        className="relative z-10 flex items-center justify-between text-white text-[11px] sm:text-[12px] font-sans"
        data-node-id="20:7"
      >
        <div className="flex items-center gap-3" data-node-id="20:8">
          <div className="bg-[#21a8b9] h-[1px] w-[28px]" data-node-id="20:9" />
          <span className="font-semibold tracking-wider text-white" data-node-id="20:10">
            {s.brandSignature}
          </span>
        </div>
        <p className="text-[#5ddade] tracking-widest font-medium uppercase" data-node-id="20:11">
          {s.philosophy}
        </p>
      </div>

      {/* Brand Entrance */}
      <div
        className="relative z-10 max-w-xl mx-auto flex flex-col items-center text-center gap-6 my-auto"
        data-node-id="20:12"
      >
        {/* Wordmark */}
        <div className="h-[90px] w-[220px] sm:h-[120px] sm:w-[280px] relative overflow-hidden" data-node-id="20:13">
          <img
            src="./assets/ora-wordmark.png"
            alt="ORA"
            className="absolute h-[240%] left-[-10.8%] max-w-none top-[-74.7%] w-[120.5%] object-contain"
          />
        </div>

        {/* Brand Promise */}
        <p
          className="font-serif text-white text-3xl sm:text-4xl md:text-5xl leading-tight"
          data-node-id="20:20"
        >
          {s.brandPromise}
        </p>

        {/* Enter Website Action */}
        <button
          onClick={onEnter}
          className="mt-4 bg-[#21a8b9] hover:bg-[#1da0b0] text-[#091f39] border border-[#21a8b9] h-[54px] px-8 flex items-center gap-5 text-[13px] font-semibold transition-all shadow-xl active:scale-[0.98] cursor-pointer"
          data-node-id="20:22"
        >
          <span data-node-id="20:23">{s.enterWebsite}</span>
          <span className="text-[20px] leading-none" data-node-id="20:24">
            {isRTL ? '↖' : '↗'}
          </span>
        </button>
      </div>

      {/* Closing Note */}
      <div
        className="relative z-10 flex flex-col gap-4 font-sans text-white/80 text-[11px]"
        data-node-id="20:25"
      >
        <div className="bg-[#b9ccd7]/30 h-[1px] w-full" data-node-id="20:26" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2" data-node-id="20:27">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-white/90" data-node-id="20:28">
            {s.expertiseList.map((item, idx) => (
              <React.Fragment key={item}>
                {idx > 0 && <span className="opacity-40">·</span>}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </div>
          <span className="text-[#b9ccd7]/70 text-[10px]" data-node-id="20:34">
            {s.imageryNote}
          </span>
        </div>
      </div>
    </div>
  );
}
