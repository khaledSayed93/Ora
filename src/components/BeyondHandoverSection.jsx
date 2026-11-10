import React from 'react';

export default function BeyondHandoverSection({ onOpenConsultation }) {
  const supportServices = [
    { label: 'Preventive care', nodeId: '7:4619', dotNodeId: '7:4620', labelNodeId: '7:4621' },
    { label: 'Water treatment', nodeId: '7:4622', dotNodeId: '7:4623', labelNodeId: '7:4624' },
    { label: 'System upgrades', nodeId: '7:4625', dotNodeId: '7:4626', labelNodeId: '7:4627' },
  ];

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
          src="/assets/pool-edge.png"
          alt="Water detail at pool edge"
          className="absolute inset-0 w-full h-full object-cover"
          data-node-id="7:4610"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <p
          className="relative z-10 font-sans text-white/90 text-[10px] tracking-wide"
          data-node-id="7:4611"
        >
          Water detail · Illustrative imagery
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
            07 / BEYOND HANDOVER
          </p>
        </div>

        {/* Heading */}
        <h2
          className="font-serif font-normal text-[#102c51] text-[40px] sm:text-[48px] lg:text-[57px] leading-[1.04]"
          data-node-id="7:4616"
        >
          <span>Designed to work.</span>
          <br />
          <span>Supported to last.</span>
        </h2>

        {/* Description */}
        <p
          className="font-sans text-[#627581] text-[15px] sm:text-[16px] leading-[1.7] max-w-[616px]"
          data-node-id="7:4617"
        >
          A water feature’s life begins at commissioning. ORA supports operating facilities with planned maintenance, water treatment and the right upgrades when systems need to evolve.
        </p>

        {/* Indicators */}
        <div
          className="flex flex-wrap items-center gap-6 sm:gap-8 pt-1"
          data-node-id="7:4618"
          data-name="Aftercare scope"
        >
          {supportServices.map((service) => (
            <div
              key={service.label}
              className="flex items-center gap-2"
              data-node-id={service.nodeId}
            >
              <div
                className="bg-[#21a8b9] w-1.5 h-1.5 rounded-full"
                data-node-id={service.dotNodeId}
              />
              <span
                className="font-sans text-[#102c51] text-[11px] font-medium"
                data-node-id={service.labelNodeId}
              >
                {service.label}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={() => onOpenConsultation('Facility Aftercare Discussion')}
            className="bg-transparent hover:bg-white/60 border border-[#d5e1e5] text-[#091f39] h-[54px] px-6 inline-flex items-center gap-6 text-[13px] font-semibold transition-all active:scale-[0.99] cursor-pointer"
            data-node-id="7:4628"
            data-name="Consultation action"
          >
            <span data-node-id="7:4629">Talk to us about your facility</span>
            <span className="text-[#21a8b9] text-[20px] font-light" data-node-id="7:4630">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}
