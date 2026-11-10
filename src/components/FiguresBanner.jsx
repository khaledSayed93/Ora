import React from 'react';

export default function FiguresBanner() {
  const metrics = [
    {
      value: '12',
      label: 'Featured projects',
      detail: 'Across the team’s portfolio',
      nodeId: '7:4318',
      valueNodeId: '7:4319',
      labelNodeId: '7:4320',
      detailNodeId: '7:4321',
    },
    {
      value: '35,000+',
      label: 'm² water surface',
      detail: 'Lagoons, creeks & fountains',
      nodeId: '7:4322',
      valueNodeId: '7:4323',
      labelNodeId: '7:4324',
      detailNodeId: '7:4325',
    },
    {
      value: '90+',
      label: 'Swimming pools',
      detail: 'Resorts, residences & villas',
      nodeId: '7:4326',
      valueNodeId: '7:4327',
      labelNodeId: '7:4328',
      detailNodeId: '7:4329',
    },
    {
      value: '3',
      label: 'Countries',
      detail: 'Egypt · Saudi Arabia · UAE',
      nodeId: '7:4330',
      valueNodeId: '7:4331',
      labelNodeId: '7:4332',
      detailNodeId: '7:4333',
    },
  ];

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
            EXPERIENCE, BEFORE AND BEYOND ORA
          </p>
        </div>

        <p
          className="font-sans text-[#b9ccd7] text-[13px] leading-[1.6] max-w-[650px]"
          data-node-id="7:4316"
        >
          Selected experience of ORA’s founding team across contracting, consultancy and developer-side roles.
        </p>
      </div>

      {/* 4 Metric Columns */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-[40px] pt-4"
        data-node-id="7:4317"
        data-name="Key figures"
      >
        {metrics.map((m) => (
          <div
            key={m.label}
            className="flex flex-col gap-2.5"
            data-node-id={m.nodeId}
            data-name="Experience metric"
          >
            <p
              className="font-serif font-normal text-white text-[50px] sm:text-[60px] lg:text-[66px] leading-none"
              data-node-id={m.valueNodeId}
            >
              {m.value}
            </p>
            <p
              className="font-sans text-white text-[15px] font-normal"
              data-node-id={m.labelNodeId}
            >
              {m.label}
            </p>
            <p
              className="font-sans text-[#b9ccd7] text-[12px] font-normal"
              data-node-id={m.detailNodeId}
            >
              {m.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
