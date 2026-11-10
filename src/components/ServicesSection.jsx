import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function ServicesSection({ onOpenConsultation }) {
  const { t, isRTL } = useLanguage();
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section
      id="services"
      className="w-full bg-[#eff6f7] px-6 md:px-12 lg:px-[72px] py-16 md:py-[104px]"
      data-node-id="7:4380"
      data-name="Services across the lifecycle"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[108px] items-start">
        {/* Left Column: Intro */}
        <div
          className="lg:col-span-5 flex flex-col gap-6"
          data-node-id="7:4381"
          data-name="Services introduction"
        >
          <div
            className="flex items-center gap-3"
            data-node-id="7:4382"
            data-name="Section label"
          >
            <div
              className="bg-[#21a8b9] h-[2px] w-[24px]"
              data-node-id="7:4383"
              data-name="Accent rule"
            />
            <p
              className="font-sans font-semibold text-[#147d8c] text-[11px] tracking-[0.16em]"
              data-node-id="7:4384"
            >
              {t.services.sectionLabel}
            </p>
          </div>

          <h2
            className="font-serif font-normal text-[#102c51] text-[36px] sm:text-[44px] lg:text-[50px] leading-[1.08]"
            data-node-id="7:4385"
          >
            <span>{t.services.titleLine1}</span>
            <br />
            <span>{t.services.titleLine2}</span>
          </h2>

          <p
            className="font-sans text-[#627581] text-[15px] sm:text-[16px] leading-[1.8]"
            data-node-id="7:4386"
          >
            {t.services.desc}
          </p>

          <p
            className="font-sans font-medium text-[#21a8b9] text-[12px] tracking-[0.16em] pt-2"
            data-node-id="7:4387"
          >
            {t.services.philosophy}
          </p>

          <div className="pt-4 hidden lg:block">
            <button
              onClick={() => onOpenConsultation(t.services.customScopeInquiry)}
              className="inline-flex items-center gap-4 text-[13px] font-semibold text-[#102c51] hover:text-[#21a8b9] transition-colors border-b border-[#102c51]/30 pb-1 cursor-pointer"
            >
              <span>{t.services.customScopeInquiry}</span>
              <span>{isRTL ? '↖' : '↗'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: 4 Service Rows */}
        <div
          className="lg:col-span-7 flex flex-col w-full"
          data-node-id="7:4388"
          data-name="Services"
        >
          {t.services.items.map((service, idx) => (
            <div
              key={service.number}
              className="flex flex-col border-t border-[#d5e1e5] group cursor-pointer transition-colors"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => onOpenConsultation(`${service.name}`)}
              data-name="Service"
            >
              <div
                className="flex items-start gap-6 py-7 md:py-[26px] group-hover:bg-white/50 px-2 transition-all rounded-sm"
                data-name="Service content"
              >
                {/* Number */}
                <span className="font-sans text-[#21a8b9] text-[13px] font-semibold w-[30px] pt-1.5 shrink-0">
                  {service.number}
                </span>

                {/* Details */}
                <div className="flex-1 flex flex-col gap-3">
                  <h3 className="font-serif text-[#102c51] text-[24px] sm:text-[28px] group-hover:text-[#21a8b9] transition-colors leading-[1.2]">
                    {service.name}
                  </h3>
                  <p className="font-sans text-[#627581] text-[14px] leading-[1.8]">
                    {service.description}
                  </p>
                  <p className="font-sans text-[#21a8b9] text-[10px] font-semibold tracking-[0.12em] uppercase">
                    {service.scope}
                  </p>

                  {/* Interactive Details */}
                  {hoveredIdx === idx && (
                    <div className="mt-2 pt-2 border-t border-[#21a8b9]/20 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#475b68] animate-in fade-in duration-200">
                      {service.details.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#21a8b9]" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Arrow */}
                <span className="text-[#21a8b9] text-[24px] font-light transition-transform group-hover:scale-110 shrink-0">
                  {isRTL ? '↖' : '↗'}
                </span>
              </div>
            </div>
          ))}
          <div className="border-b border-[#d5e1e5] w-full" data-node-id="7:4425" />
        </div>
      </div>
    </section>
  );
}
