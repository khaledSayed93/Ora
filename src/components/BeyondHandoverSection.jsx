import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function BeyondHandoverSection({ onOpenConsultation }) {
  const { t, isRTL } = useLanguage();

  return (
    <section
      className="w-full bg-[#eff6f7] flex flex-col lg:flex-row items-stretch overflow-hidden"
      data-node-id="7:4608"
      data-name="Performance beyond handover"
    >
      {/* Left Column: Pool Edge Photography */}
      <div
        className="relative lg:w-1/2 min-h-[340px] sm:min-h-[420px] lg:min-h-[580px] flex flex-col justify-end p-6 md:p-8"
        data-node-id="7:4609"
        data-name="Water detail"
      >
        <img
          src="./assets/pool-edge.png"
          alt="Water detail at pool edge"
          className="absolute inset-0 w-full h-full object-cover"
          data-node-id="7:4610"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <p
          className="relative z-10 font-sans text-white/90 text-[11px] tracking-wide"
          data-node-id="7:4611"
        >
          {t.beyond.waterDetailTag}
        </p>
      </div>

      {/* Right Column: Long Term Care Content */}
      <div
        className="lg:w-1/2 flex flex-col justify-center gap-7 px-6 sm:px-12 lg:px-16 py-12 lg:py-16"
        data-node-id="7:4612"
        data-name="Long term care"
      >
        {/* Section Eyebrow */}
        <div
          className="flex items-center gap-3"
          data-node-id="7:4613"
          data-name="Section label"
        >
          <div
            className="bg-[#21a8b9] h-[2px] w-[24px]"
            data-node-id="7:4614"
            data-name="Accent rule"
          />
          <p
            className="font-sans font-semibold text-[#147d8c] text-[11px] tracking-[0.16em]"
            data-node-id="7:4615"
          >
            {t.beyond.sectionLabel}
          </p>
        </div>

        {/* Heading */}
        <h2
          className="font-serif font-normal text-[#102c51] text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.08]"
          data-node-id="7:4616"
        >
          <span>{t.beyond.titleLine1}</span>
          <br />
          <span>{t.beyond.titleLine2}</span>
        </h2>

        {/* Description */}
        <p
          className="font-sans text-[#627581] text-[15px] sm:text-[16px] leading-[1.8] max-w-[616px]"
          data-node-id="7:4617"
        >
          {t.beyond.desc}
        </p>

        {/* Indicators */}
        <div
          className="flex flex-wrap items-center gap-6 sm:gap-8 pt-1"
          data-node-id="7:4618"
          data-name="Aftercare scope"
        >
          {t.beyond.indicators.map((service, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="bg-[#21a8b9] w-2 h-2 rounded-full" />
              <span className="font-sans text-[#102c51] text-[12px] font-semibold">
                {service.label}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={() => onOpenConsultation(t.beyond.cta)}
            className="bg-transparent hover:bg-white/60 border border-[#d5e1e5] text-[#091f39] h-[54px] px-6 inline-flex items-center gap-5 text-[13px] font-semibold transition-all active:scale-[0.99] cursor-pointer"
            data-node-id="7:4628"
            data-name="Consultation action"
          >
            <span data-node-id="7:4629">{t.beyond.cta}</span>
            <span className="text-[#21a8b9] text-[20px] font-light">
              {isRTL ? '↖' : '↗'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
