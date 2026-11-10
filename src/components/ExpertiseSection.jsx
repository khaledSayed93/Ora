import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function ExpertiseSection({ onSelectExpertise }) {
  const { t } = useLanguage();

  const capabilityImages = [
    './assets/capability-swimming-pools.png',
    './assets/capability-lagoons.png',
    './assets/capability-fountains.png',
    './assets/capability-aqua-parks.png',
  ];

  return (
    <section
      id="expertise"
      className="w-full bg-white px-6 md:px-12 lg:px-[72px] py-16 md:py-[104px] flex flex-col gap-10 md:gap-[44px]"
      data-node-id="7:4334"
      data-name="Water in every form"
    >
      {/* Header Introduction */}
      <div
        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        data-node-id="7:4335"
        data-name="Expertise introduction"
      >
        <div
          className="flex flex-col gap-6 max-w-[660px]"
          data-node-id="7:4336"
          data-name="Expertise title"
        >
          <div
            className="flex items-center gap-3"
            data-node-id="7:4337"
            data-name="Section label"
          >
            <div
              className="bg-[#21a8b9] h-[2px] w-[24px]"
              data-node-id="7:4338"
              data-name="Accent rule"
            />
            <p
              className="font-sans font-semibold text-[#147d8c] text-[11px] tracking-[0.16em]"
              data-node-id="7:4339"
            >
              {t.expertise.sectionLabel}
            </p>
          </div>

          <h2
            className="font-serif font-normal text-[#102c51] text-[36px] sm:text-[46px] lg:text-[58px] leading-[1.06]"
            data-node-id="7:4340"
          >
            {t.expertise.title}
          </h2>
        </div>

        <div
          className="max-w-[420px]"
          data-node-id="7:4341"
          data-name="Expertise summary"
        >
          <p
            className="font-sans text-[#627581] text-[15px] sm:text-[16px] leading-[1.8]"
            data-node-id="7:4342"
          >
            {t.expertise.summary}
          </p>
        </div>
      </div>

      {/* 4 Primary Expertise Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        data-node-id="7:4343"
        data-name="Primary expertise"
      >
        {t.expertise.capabilities.map((item, idx) => (
          <div
            key={item.number}
            className="flex flex-col gap-4 group cursor-pointer"
            onClick={() => onSelectExpertise && onSelectExpertise(item.name)}
            data-name="Expertise area"
          >
            {/* Image Frame */}
            <div
              className="h-[260px] sm:h-[300px] w-full overflow-hidden bg-slate-100 relative"
              data-node-id="7:4345"
            >
              <img
                src={capabilityImages[idx]}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Title & Number */}
            <div
              className="flex items-center justify-between pt-1"
              data-node-id="7:4346"
              data-name="Capability heading"
            >
              <h3 className="font-serif text-[#102c51] text-[24px] sm:text-[28px] group-hover:text-[#21a8b9] transition-colors">
                {item.name}
              </h3>
              <span className="font-sans text-[#21a8b9] text-[12px] font-semibold">
                {item.number}
              </span>
            </div>

            {/* Description */}
            <p className="font-sans text-[#627581] text-[14px] leading-[1.8]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Footnote Disclosure */}
      <p
        className="font-sans text-[#627581] text-[11px] tracking-wide"
        data-node-id="7:4368"
      >
        {t.expertise.disclosure}
      </p>

      {/* Divider */}
      <div
        className="bg-[#d5e1e5] h-px w-full"
        data-node-id="7:4369"
        data-name="Divider"
      />

      {/* 3 Specialist Capabilities */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-[48px]"
        data-node-id="7:4370"
        data-name="Specialist capabilities"
      >
        {t.expertise.specialists.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-3 group"
            data-name="Additional expertise"
          >
            <h4 className="font-sans font-semibold text-[#102c51] text-[17px] group-hover:text-[#21a8b9] transition-colors">
              {item.title}
            </h4>
            <p className="font-sans text-[#627581] text-[14px] leading-[1.8]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
