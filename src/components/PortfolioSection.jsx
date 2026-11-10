import React from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function PortfolioSection({ onOpenProject, onOpenConsultation }) {
  const { t, isRTL } = useLanguage();

  const projectImages = [
    '/assets/project-seashell-playa.png',
    '/assets/project-creek-town.png',
    '/assets/project-oud-wellness.png',
    '/assets/project-my-otel.png',
  ];

  return (
    <section
      id="experience"
      className="w-full bg-white px-6 md:px-12 lg:px-[72px] py-16 md:py-[104px] flex flex-col gap-10 md:gap-[42px]"
      data-node-id="7:4426"
      data-name="Selected founding team experience"
    >
      {/* Portfolio Introduction */}
      <div
        className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        data-node-id="7:4427"
        data-name="Portfolio introduction"
      >
        <div
          className="flex flex-col gap-6 max-w-[650px]"
          data-node-id="7:4428"
          data-name="Portfolio heading"
        >
          <div
            className="flex items-center gap-3"
            data-node-id="7:4429"
            data-name="Section label"
          >
            <div
              className="bg-[#21a8b9] h-[2px] w-[24px]"
              data-node-id="7:4430"
              data-name="Accent rule"
            />
            <p
              className="font-sans font-semibold text-[#147d8c] text-[11px] tracking-[0.16em]"
              data-node-id="7:4431"
            >
              {t.portfolio.sectionLabel}
            </p>
          </div>

          <h2
            className="font-serif font-normal text-[#102c51] text-[36px] sm:text-[46px] lg:text-[58px] leading-[1.06]"
            data-node-id="7:4432"
          >
            <span>{t.portfolio.titleLine1}</span>
            <br />
            <span>{t.portfolio.titleLine2}</span>
          </h2>
        </div>

        <div
          className="max-w-[436px] flex flex-col gap-3 font-sans"
          data-node-id="7:4433"
          data-name="Portfolio attribution"
        >
          <p
            className="text-[#627581] text-[15px] sm:text-[16px] leading-[1.8]"
            data-node-id="7:4434"
          >
            {t.portfolio.attribution}
          </p>
          <p
            className="text-[#21a8b9] text-[12px] font-medium"
            data-node-id="7:4435"
          >
            {t.portfolio.attributionNote}
          </p>
        </div>
      </div>

      {/* 2x2 Featured Projects Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-[24px]"
        data-node-id="7:4436"
        data-name="Featured project grid"
      >
        {t.portfolio.projects.map((project, idx) => {
          const projectWithImg = { ...project, image: projectImages[idx] };
          return (
            <div
              key={project.id}
              onClick={() => onOpenProject(projectWithImg)}
              className="flex flex-col group cursor-pointer"
              data-name="Selected project"
            >
              {/* Project Image Frame */}
              <div
                className="relative h-[240px] sm:h-[302px] w-full overflow-hidden bg-slate-100 flex flex-col justify-end p-4"
                data-node-id="7:4439"
              >
                <img
                  src={projectImages[idx]}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Concept Imagery Disclosure Tag */}
                <div className="relative z-10 bg-white/95 px-2.5 py-1.5 self-start shadow-sm">
                  <p className="font-sans text-[#102c51] text-[9px] font-semibold tracking-wider uppercase">
                    {t.portfolio.conceptTag}
                  </p>
                </div>
              </div>

              {/* Information Block */}
              <div
                className="flex flex-col gap-3 pt-6 pb-6"
                data-name="Project information"
              >
                {/* Location & Arrow */}
                <div className="flex items-center justify-between text-[#21a8b9] font-sans">
                  <span className="text-[11px] font-semibold tracking-wider">
                    {project.location}
                  </span>
                  <span className="text-[22px] font-light group-hover:scale-110 transition-transform">
                    {isRTL ? '↖' : '↗'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-[#102c51] text-[26px] sm:text-[30px] lg:text-[32px] group-hover:text-[#21a8b9] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Role */}
                <p className="font-sans text-[#183149] text-[13px] leading-[1.6]">
                  {project.role}
                </p>

                {/* Divider */}
                <div className="bg-[#d5e1e5] h-px w-full my-1" />

                {/* Technical Scale Fact */}
                <p className="font-sans text-[#102c51] text-[13px] font-medium">
                  {project.facts}
                </p>

                {/* Status */}
                <p className="font-sans text-[#627581] text-[12px]">
                  {project.status}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Further Team Experience Banner */}
      <div
        className="bg-[#eff6f7] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        data-node-id="7:4499"
        data-name="Further team experience"
      >
        {t.portfolio.additionals.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-3" data-name="Additional project">
            <p className="font-sans text-[#21a8b9] text-[11px] font-semibold tracking-[0.14em]">
              {item.cat}
            </p>
            <h4 className="font-serif text-[#102c51] text-[22px] sm:text-[26px]">
              {item.title}
            </h4>
            <p className="font-sans text-[#627581] text-[13px] leading-[1.8]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Portfolio Next Step Action */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4"
        data-node-id="7:4508"
        data-name="Portfolio next step"
      >
        <p className="font-sans text-[#627581] text-[13px]">
          {t.portfolio.nextStepText}
        </p>

        <button
          onClick={() => onOpenConsultation(t.portfolio.requestProfile)}
          className="bg-transparent hover:bg-slate-50 border border-[#d5e1e5] text-[#091f39] h-[54px] px-6 flex items-center gap-5 text-[13px] font-semibold transition-all shadow-sm active:scale-[0.99] cursor-pointer"
          data-name="Consultation action"
        >
          <span>{t.portfolio.requestProfile}</span>
          <span className="text-[#21a8b9] text-[20px] font-light">
            {isRTL ? '↖' : '↗'}
          </span>
        </button>
      </div>
    </section>
  );
}
