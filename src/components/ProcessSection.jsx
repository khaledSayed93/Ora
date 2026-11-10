import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function ProcessSection() {
  const { t } = useLanguage();
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section
      id="process"
      className="w-full bg-white px-6 md:px-12 lg:px-[72px] py-16 md:py-[104px] flex flex-col gap-12 md:gap-[48px]"
      data-node-id="7:4554"
      data-name="From first idea to daily operation"
    >
      {/* Process Introduction */}
      <div
        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        data-node-id="7:4555"
        data-name="Process introduction"
      >
        <div
          className="flex flex-col gap-6 max-w-[730px]"
          data-node-id="7:4556"
          data-name="Process title"
        >
          <div
            className="flex items-center gap-3"
            data-node-id="7:4557"
            data-name="Section label"
          >
            <div
              className="bg-[#21a8b9] h-[2px] w-[24px]"
              data-node-id="7:4558"
              data-name="Accent rule"
            />
            <p
              className="font-sans font-semibold text-[#147d8c] text-[11px] tracking-[0.16em]"
              data-node-id="7:4559"
            >
              {t.process.sectionLabel}
            </p>
          </div>

          <h2
            className="font-serif font-normal text-[#102c51] text-[36px] sm:text-[46px] lg:text-[58px] leading-[1.06]"
            data-node-id="7:4560"
          >
            <span>{t.process.titleLine1}</span>
            <br />
            <span>{t.process.titleLine2}</span>
          </h2>
        </div>

        <div
          className="max-w-[420px]"
          data-node-id="7:4561"
          data-name="Process summary"
        >
          <p
            className="font-sans text-[#627581] text-[15px] sm:text-[16px] leading-[1.8]"
            data-node-id="7:4562"
          >
            {t.process.desc}
          </p>
        </div>
      </div>

      {/* 6-Stage Timeline Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 pt-6"
        data-node-id="7:4563"
        data-name="Delivery timeline"
      >
        {t.process.stages.map((stage, idx) => (
          <div
            key={stage.number}
            onClick={() => setActiveStage(idx)}
            className="flex flex-col gap-4 group cursor-pointer"
            data-name="Delivery stage"
          >
            {/* Stage Marker & Line */}
            <div
              className="flex items-center gap-4 w-full"
              data-name="Stage marker"
            >
              <span className="font-serif text-[#21a8b9] text-[34px] sm:text-[38px] leading-none shrink-0 group-hover:scale-110 transition-transform">
                {stage.number}
              </span>
              <div className="bg-[#d5e1e5] flex-1 h-px group-hover:bg-[#21a8b9] transition-colors" />
            </div>

            {/* Title */}
            <h3 className="font-sans font-semibold text-[#102c51] text-[18px] sm:text-[19px] group-hover:text-[#21a8b9] transition-colors">
              {stage.title}
            </h3>

            {/* Description */}
            <p className="font-sans text-[#627581] text-[14px] leading-[1.8]">
              {stage.description}
            </p>

            {/* Stage Outcome Tag */}
            <p className="font-sans text-[#21a8b9] text-[10px] font-semibold tracking-[0.14em] uppercase pt-1">
              {stage.tag}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
