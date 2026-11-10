import React from 'react';

export default function Hero({ onOpenConsultation }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-[720px] md:min-h-[816px] w-full flex flex-col justify-between pt-[140px] md:pt-[170px] pb-9 px-6 md:px-12 lg:px-[72px] overflow-hidden"
      data-node-id="7:4263"
      data-name="Immersive water landscape"
    >
      {/* Background Photography */}
      <div
        className="absolute inset-0 w-full h-full"
        data-node-id="7:4264"
        data-name="Architectural lagoon illustration"
      >
        <img
          src="/assets/architectural-lagoon.png"
          alt="Architectural water landscape by ORA"
          className="w-full h-full object-cover pointer-events-none scale-105 animate-subtle-zoom transition-transform duration-1000"
        />
      </div>

      {/* Atmospheric Gradient Scrim */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[rgba(7,29,55,0.88)] via-[rgba(9,43,75,0.52)] to-[rgba(10,42,69,0.12)] md:via-[60%]"
        data-node-id="7:4265"
        data-name="Reading scrim"
      />

      {/* Foreground Hero Content */}
      <div
        className="relative z-10 max-w-[800px] flex flex-col gap-6 md:gap-[28px] mt-4 md:mt-8"
        data-node-id="7:4266"
        data-name="Hero message"
      >
        {/* Brand Promise Eyebrow */}
        <p
          className="font-sans font-medium text-[#5ddade] text-[12px] tracking-[0.16em] uppercase"
          data-node-id="7:4267"
        >
          DESIGN • BUILD • OPERATE
        </p>

        {/* Editorial Title */}
        <h1
          className="font-serif font-normal text-white text-[52px] sm:text-[72px] md:text-[88px] lg:text-[98px] leading-[0.98] tracking-[-0.01em]"
          data-node-id="7:4268"
        >
          <span>Water, shaped by</span>
          <br />
          <span>engineering.</span>
        </h1>

        {/* Introduction */}
        <p
          className="font-sans text-white/95 text-[16px] sm:text-[18px] leading-[1.65] max-w-[530px]"
          data-node-id="7:4269"
        >
          Swimming pools, lagoons and water features. Designed with precision. Built for lasting performance.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center gap-4 pt-2"
          data-node-id="7:4270"
          data-name="Hero actions"
        >
          <a
            href="#expertise"
            className="bg-[#21a8b9] hover:bg-[#1ba0b0] text-[#091f39] border border-[#21a8b9] h-[52px] md:h-[54px] px-6 flex items-center gap-6 text-[13px] font-semibold transition-all shadow-md active:scale-[0.99]"
            data-node-id="7:4271"
            data-name="Consultation action"
          >
            <span data-node-id="7:4272">Explore our expertise</span>
            <span className="text-[20px] font-light leading-none" data-node-id="7:4273">↗</span>
          </a>

          <button
            onClick={() => onOpenConsultation('Hero Start Conversation')}
            className="bg-transparent hover:bg-white/10 text-white border border-[#b9ccd7] h-[52px] md:h-[54px] px-6 flex items-center gap-6 text-[13px] font-semibold transition-all active:scale-[0.99] cursor-pointer"
            data-node-id="7:4274"
            data-name="Consultation action"
          >
            <span data-node-id="7:4275">Start a conversation</span>
            <span className="text-[20px] font-light leading-none" data-node-id="7:4276">↗</span>
          </button>
        </div>
      </div>

      {/* Hero Footnotes / Attribution */}
      <div
        className="relative z-10 w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pt-16 text-white text-[10px] md:text-[11px]"
        data-node-id="7:4277"
        data-name="Hero footnotes"
      >
        <div
          className="flex items-center gap-5 sm:gap-6 text-white/90 font-medium tracking-[0.14em]"
          data-node-id="7:4278"
          data-name="Sectors"
        >
          <span data-node-id="7:4279">RESIDENTIAL</span>
          <span className="opacity-40">·</span>
          <span data-node-id="7:4280">HOSPITALITY</span>
          <span className="opacity-40">·</span>
          <span data-node-id="7:4281">COMMERCIAL</span>
        </div>

        <p className="text-white/70 text-[10px]" data-node-id="7:4282">
          Architectural imagery for illustration
        </p>

        <button
          onClick={() => scrollToSection('about')}
          className="group flex items-center gap-1.5 text-white/90 hover:text-[#5ddade] text-[11px] tracking-wider transition-colors cursor-pointer"
          data-node-id="7:4283"
        >
          <span>DISCOVER ORA</span>
          <span className="transition-transform group-hover:translate-y-0.5">↓</span>
        </button>
      </div>
    </section>
  );
}
