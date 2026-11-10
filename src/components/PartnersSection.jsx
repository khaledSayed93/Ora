import React from 'react';

export default function PartnersSection() {
  const developers = [
    { name: 'Mountain View', nodeId: '7:4639' },
    { name: 'IL CAZAR', nodeId: '7:4640' },
    { name: 'Hassan Allam Properties', nodeId: '7:4641' },
    { name: 'The Waterway Developments', nodeId: '7:4642' },
    { name: 'TRAVCO', nodeId: '7:4643' },
  ];

  const consultants = [
    { name: 'DMA', nodeId: '7:4645' },
    { name: 'ECG', nodeId: '7:4646' },
    { name: 'SHAKER', nodeId: '7:4647' },
    { name: 'POE Engineering Consultants', nodeId: '7:4648' },
    { name: 'ACE Moharram.Bakhoum', nodeId: '7:4649' },
  ];

  return (
    <section
      className="w-full bg-white px-6 md:px-12 lg:px-[72px] py-16 md:py-[72px] flex flex-col gap-8 md:gap-[34px]"
      data-node-id="7:4631"
      data-name="Founding team relationships"
    >
      {/* Introduction */}
      <div
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        data-node-id="7:4632"
        data-name="Relationships introduction"
      >
        <div
          className="flex items-center gap-3 shrink-0"
          data-node-id="7:4633"
          data-name="Section label"
        >
          <div
            className="bg-[#21a8b9] h-[2px] w-[24px]"
            data-node-id="7:4634"
            data-name="Accent rule"
          />
          <p
            className="font-sans font-semibold text-[#147d8c] text-[11px] tracking-[0.16em]"
            data-node-id="7:4635"
          >
            08 / A COLLABORATIVE DISCIPLINE
          </p>
        </div>

        <p
          className="font-sans text-[#627581] text-[13px] leading-[1.6] max-w-[640px]"
          data-node-id="7:4636"
        >
          Developers, consultants and partners represented in the founding team’s experience.
        </p>
      </div>

      {/* Divider */}
      <div
        className="bg-[#d5e1e5] h-px w-full"
        data-node-id="7:4637"
        data-name="Divider"
      />

      {/* Row 1: Developers */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center text-[#102c51] font-sans font-medium text-[16px] md:text-[17px]"
        data-node-id="7:4638"
        data-name="Developer names"
      >
        {developers.map((dev) => (
          <span
            key={dev.name}
            className="hover:text-[#21a8b9] transition-colors"
            data-node-id={dev.nodeId}
          >
            {dev.name}
          </span>
        ))}
      </div>

      {/* Row 2: Consultants */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center text-[#627581] font-sans text-[14px] md:text-[15px]"
        data-node-id="7:4644"
        data-name="Consultant names"
      >
        {consultants.map((con) => (
          <span
            key={con.name}
            className="hover:text-[#102c51] transition-colors"
            data-node-id={con.nodeId}
          >
            {con.name}
          </span>
        ))}
      </div>
    </section>
  );
}
