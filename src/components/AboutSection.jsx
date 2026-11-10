import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="w-full bg-white px-6 md:px-12 lg:px-[72px] py-16 md:py-[104px] flex flex-col gap-12 md:gap-[64px]"
      data-node-id="7:4284"
      data-name="One accountable specialist"
    >
      {/* Top Company Introduction */}
      <div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[100px] items-start"
        data-node-id="7:4285"
        data-name="Company introduction"
      >
        {/* Left Column: Eyebrow + Heading */}
        <div
          className="lg:col-span-6 flex flex-col gap-6"
          data-node-id="7:4286"
          data-name="Editorial title"
        >
          <div
            className="flex items-center gap-3"
            data-node-id="7:4287"
            data-name="Section label"
          >
            <div
              className="bg-[#21a8b9] h-[2px] w-[24px]"
              data-node-id="7:4288"
              data-name="Accent rule"
            />
            <p
              className="font-sans font-semibold text-[#147d8c] text-[11px] tracking-[0.16em]"
              data-node-id="7:4289"
            >
              {t.about.sectionLabel}
            </p>
          </div>

          <h2
            className="font-serif font-normal text-[#102c51] text-[36px] sm:text-[46px] lg:text-[58px] leading-[1.06]"
            data-node-id="7:4290"
          >
            <span>{t.about.titleLine1}</span>
            <br />
            <span>{t.about.titleLine2}</span>
          </h2>
        </div>

        {/* Right Column: Narrative paragraphs */}
        <div
          className="lg:col-span-6 flex flex-col gap-5 pt-0 lg:pt-8 text-[#627581] font-sans"
          data-node-id="7:4291"
          data-name="Company description"
        >
          <p
            className="text-[16px] md:text-[18px] leading-[1.8] text-[#475b68] font-normal"
            data-node-id="7:4292"
          >
            {t.about.desc1}
          </p>
          <p
            className="text-[14px] md:text-[16px] leading-[1.8]"
            data-node-id="7:4293"
          >
            {t.about.desc2}
          </p>
        </div>
      </div>

      {/* Subtle Divider Rule */}
      <div
        className="bg-[#d5e1e5] h-px w-full"
        data-node-id="7:4294"
        data-name="Divider"
      />

      {/* Three Pillars */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-[48px]"
        data-node-id="7:4295"
        data-name="Our three pillars"
      >
        {t.about.pillars.map((pillar, idx) => (
          <div
            key={pillar.number}
            className="flex items-start gap-5 group"
            data-node-id={idx === 0 ? "7:4296" : idx === 1 ? "7:4301" : "7:4306"}
            data-name="Company pillar"
          >
            <span
              className="font-sans text-[#21a8b9] text-[13px] font-semibold pt-1 shrink-0"
              data-node-id={idx === 0 ? "7:4297" : idx === 1 ? "7:4302" : "7:4307"}
            >
              {pillar.number}
            </span>
            <div
              className="flex flex-col gap-3.5"
              data-node-id={idx === 0 ? "7:4298" : idx === 1 ? "7:4303" : "7:4308"}
              data-name="Pillar content"
            >
              <h3
                className="font-sans font-semibold text-[#102c51] text-[18px] group-hover:text-[#21a8b9] transition-colors"
                data-node-id={idx === 0 ? "7:4299" : idx === 1 ? "7:4304" : "7:4309"}
              >
                {pillar.title}
              </h3>
              <p
                className="font-sans text-[#627581] text-[14px] leading-[1.8]"
                data-node-id={idx === 0 ? "7:4300" : idx === 1 ? "7:4305" : "7:4310"}
              >
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
