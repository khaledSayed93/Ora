import React, { useState } from 'react';

export default function ProcessSection() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      number: '01',
      title: 'Concept & Feasibility',
      description: 'System selection, budget and design brief aligned with the architect and landscape designer.',
      tag: 'BRIEF & FEASIBILITY',
      nodeId: '7:4565',
      numNodeId: '7:4567',
      ruleNodeId: '7:4568',
      titleNodeId: '7:4569',
      descNodeId: '7:4570',
      tagNodeId: '7:4571',
    },
    {
      number: '02',
      title: 'Detailed Design',
      description: 'Hydraulics, filtration, treatment and MEP engineering with full BIM coordination.',
      tag: 'COORDINATED DESIGN',
      nodeId: '7:4572',
      numNodeId: '7:4574',
      ruleNodeId: '7:4575',
      titleNodeId: '7:4576',
      descNodeId: '7:4577',
      tagNodeId: '7:4578',
    },
    {
      number: '03',
      title: 'Tender & Procurement',
      description: 'IFC drawings, BOQs, specifications and approved material submittals.',
      tag: 'DEFINED SCOPE',
      nodeId: '7:4579',
      numNodeId: '7:4581',
      ruleNodeId: '7:4582',
      titleNodeId: '7:4583',
      descNodeId: '7:4584',
      tagNodeId: '7:4585',
    },
    {
      number: '04',
      title: 'Construction & Installation',
      description: 'Civil, finishing, mechanical and electrical works delivered under one scope.',
      tag: 'SITE DELIVERY',
      nodeId: '7:4587',
      numNodeId: '7:4589',
      ruleNodeId: '7:4590',
      titleNodeId: '7:4591',
      descNodeId: '7:4592',
      tagNodeId: '7:4593',
    },
    {
      number: '05',
      title: 'Testing & Commissioning',
      description: 'Pressure testing, balancing, water treatment start-up and operator handover.',
      tag: 'VERIFIED PERFORMANCE',
      nodeId: '7:4594',
      numNodeId: '7:4596',
      ruleNodeId: '7:4597',
      titleNodeId: '7:4598',
      descNodeId: '7:4599',
      tagNodeId: '7:4600',
    },
    {
      number: '06',
      title: 'Operation & Maintenance',
      description: 'Preventive care, chemicals supply, corrective maintenance and system upgrades.',
      tag: 'LONG-TERM OPERATION',
      nodeId: '7:4601',
      numNodeId: '7:4603',
      ruleNodeId: '7:4604',
      titleNodeId: '7:4605',
      descNodeId: '7:4606',
      tagNodeId: '7:4607',
    },
  ];

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
              06 / HOW WE WORK
            </p>
          </div>

          <h2
            className="font-serif font-normal text-[#102c51] text-[40px] sm:text-[50px] lg:text-[62px] leading-[1.04]"
            data-node-id="7:4560"
          >
            <span>One continuous process.</span>
            <br />
            <span>No missing connections.</span>
          </h2>
        </div>

        <div
          className="max-w-[370px]"
          data-node-id="7:4561"
          data-name="Process summary"
        >
          <p
            className="font-sans text-[#627581] text-[15px] sm:text-[16px] leading-[1.7]"
            data-node-id="7:4562"
          >
            Six connected stages keep design intent, budget and performance aligned — from the first conversation to long-term operation.
          </p>
        </div>
      </div>

      {/* 6-Stage Timeline Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 pt-6"
        data-node-id="7:4563"
        data-name="Delivery timeline"
      >
        {stages.map((stage, idx) => (
          <div
            key={stage.number}
            onClick={() => setActiveStage(idx)}
            className="flex flex-col gap-4 group cursor-pointer"
            data-node-id={stage.nodeId}
            data-name="Delivery stage"
          >
            {/* Stage Marker & Line */}
            <div
              className="flex items-center gap-4 w-full"
              data-node-id="7:4566"
              data-name="Stage marker"
            >
              <span
                className="font-serif text-[#21a8b9] text-[38px] sm:text-[42px] leading-none shrink-0 group-hover:scale-110 transition-transform"
                data-node-id={stage.numNodeId}
              >
                {stage.number}
              </span>
              <div
                className="bg-[#d5e1e5] flex-1 h-px group-hover:bg-[#21a8b9] transition-colors"
                data-node-id={stage.ruleNodeId}
              />
            </div>

            {/* Title */}
            <h3
              className="font-sans font-medium text-[#102c51] text-[19px] sm:text-[20px] group-hover:text-[#21a8b9] transition-colors"
              data-node-id={stage.titleNodeId}
            >
              {stage.title}
            </h3>

            {/* Description */}
            <p
              className="font-sans text-[#627581] text-[14px] leading-[1.7]"
              data-node-id={stage.descNodeId}
            >
              {stage.description}
            </p>

            {/* Stage Outcome Tag */}
            <p
              className="font-sans text-[#21a8b9] text-[9px] font-semibold tracking-[0.14em] uppercase pt-1"
              data-node-id={stage.tagNodeId}
            >
              {stage.tag}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
