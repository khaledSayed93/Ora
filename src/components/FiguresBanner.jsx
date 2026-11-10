import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function FiguresBanner() {
  const { t } = useLanguage();

  return (
    <section
      className="w-full bg-[#102c51] px-6 md:px-12 lg:px-[72px] py-12 md:py-[58px] flex flex-col gap-9"
      data-node-id="7:4311"
      data-name="Founding team in figures"
    >
      {/* Top Experience Attribution */}
      <div
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        data-node-id="7:4312"
        data-name="Experience attribution"
      >
        <div
          className="flex items-center gap-3 shrink-0"
          data-node-id="7:4313"
          data-name="Section label"
        >
          <div
            className="bg-[#21a8b9] h-[2px] w-[24px]"
            data-node-id="7:4314"
            data-name="Accent rule"
          />
          <p
            className="font-sans font-semibold text-[#5ddade] text-[11px] tracking-[0.16em]"
            data-node-id="7:4315"
          >
            {t.figures.sectionLabel}
          </p>
        </div>

        <p
          className="font-sans text-[#b9ccd7] text-[13px] leading-[1.7] max-w-[650px]"
          data-node-id="7:4316"
        >
          {t.figures.intro}
        </p>
      </div>

      {/* 4 Metric Columns */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-[40px] pt-4"
        data-node-id="7:4317"
        data-name="Key figures"
      >
        {t.figures.metrics.map((m, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2.5"
            data-name="Experience metric"
          >
            <p
              className="font-serif font-normal text-white text-[46px] sm:text-[56px] lg:text-[64px] leading-none"
              style={{ direction: 'ltr' }}
            >
              {m.value}
            </p>
            <p className="font-sans text-white text-[15px] font-medium">
              {m.label}
            </p>
            <p className="font-sans text-[#b9ccd7] text-[12px] font-normal">
              {m.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
