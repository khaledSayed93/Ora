import React, { useState } from 'react';

export default function ServicesSection({ onOpenConsultation }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const services = [
    {
      number: '01',
      name: 'Turnkey Contracting',
      description: 'A complete delivery scope: equipment supply, installation, testing, commissioning and handover.',
      scope: 'FROM APPROVED DESIGN TO OPERATION',
      details: [
        'End-to-end mechanical, electrical & civil coordination',
        'Direct procurement of certified international equipment',
        'Site supervision by dedicated hydraulic engineers',
        'Comprehensive testing, balancing & operator training'
      ],
      nodeId: '7:4389',
      numNodeId: '7:4392',
      nameNodeId: '7:4394',
      descNodeId: '7:4395',
      scopeNodeId: '7:4396',
    },
    {
      number: '02',
      name: 'Design & Consultancy',
      description: 'Concept development, detailed engineering and multidisciplinary coordination for developers, consultants and architects.',
      scope: 'CONCEPT · DETAILED DESIGN · BIM / MEP',
      details: [
        '3D BIM modeling and clash detection with master structure',
        'Hydraulic turnover and pump head loss calculations',
        'Filtration, disinfection and water chemistry engineering',
        'Tender drawings, specifications and comprehensive BOQs'
      ],
      nodeId: '7:4398',
      numNodeId: '7:4401',
      nameNodeId: '7:4403',
      descNodeId: '7:4404',
      scopeNodeId: '7:4405',
    },
    {
      number: '03',
      name: 'Operation & Maintenance',
      description: 'Preventive and corrective maintenance, water treatment and chemical supply for operating facilities.',
      scope: 'PLANNED CARE · WATER QUALITY · SUPPORT',
      details: [
        'Scheduled biological and chemical water testing',
        'Preventive pump and filtration backwash service',
        'Automation, sensor calibration and PLC checks',
        'Emergency response and genuine spare parts inventory'
      ],
      nodeId: '7:4407',
      numNodeId: '7:4410',
      nameNodeId: '7:4412',
      descNodeId: '7:4413',
      scopeNodeId: '7:4414',
    },
    {
      number: '04',
      name: 'Renovation & Upgrading',
      description: 'Equipment replacement and upgrades to filtration, treatment and controls for existing water features.',
      scope: 'ASSESS · REPLACE · IMPROVE',
      details: [
        'Hydraulic diagnostic and energy consumption audits',
        'Retrofitting energy-efficient VFD circulation pumps',
        'Conversion to regenerative media or sand filtration',
        'Automation modernization with DMX and smart remote controls'
      ],
      nodeId: '7:4416',
      numNodeId: '7:4419',
      nameNodeId: '7:4421',
      descNodeId: '7:4422',
      scopeNodeId: '7:4423',
    },
  ];

  return (
    <section
      id="services"
      className="w-full bg-[#eff6f7] px-6 md:px-12 lg:px-[72px] py-16 md:py-[104px]"
      data-node-id="7:4380"
      data-name="Services across the lifecycle"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[108px] items-start">
        {/* Left Column: Intro */}
        <div
          className="lg:col-span-5 flex flex-col gap-6"
          data-node-id="7:4381"
          data-name="Services introduction"
        >
          <div
            className="flex items-center gap-3"
            data-node-id="7:4382"
            data-name="Section label"
          >
            <div
              className="bg-[#21a8b9] h-[2px] w-[24px]"
              data-node-id="7:4383"
              data-name="Accent rule"
            />
            <p
              className="font-sans font-semibold text-[#147d8c] text-[11px] tracking-[0.16em]"
              data-node-id="7:4384"
            >
              03 / WHAT WE DO
            </p>
          </div>

          <h2
            className="font-serif font-normal text-[#102c51] text-[40px] sm:text-[48px] lg:text-[54px] leading-[1.04]"
            data-node-id="7:4385"
          >
            <span>A complete scope.</span>
            <br />
            <span>A clear responsibility.</span>
          </h2>

          <p
            className="font-sans text-[#627581] text-[15px] sm:text-[16px] leading-[1.7]"
            data-node-id="7:4386"
          >
            Engage ORA for a single specialist package or bring us into the full water-feature lifecycle.
          </p>

          <p
            className="font-sans font-medium text-[#21a8b9] text-[12px] tracking-[0.16em] pt-2"
            data-node-id="7:4387"
          >
            DESIGN • BUILD • OPERATE
          </p>

          <div className="pt-4 hidden lg:block">
            <button
              onClick={() => onOpenConsultation('Services Section Inquiry')}
              className="inline-flex items-center gap-4 text-[13px] font-semibold text-[#102c51] hover:text-[#21a8b9] transition-colors border-b border-[#102c51]/30 pb-1 cursor-pointer"
            >
              <span>Inquire about custom scopes</span>
              <span>↗</span>
            </button>
          </div>
        </div>

        {/* Right Column: 4 Service Rows */}
        <div
          className="lg:col-span-7 flex flex-col w-full"
          data-node-id="7:4388"
          data-name="Services"
        >
          {services.map((service, idx) => (
            <div
              key={service.number}
              className="flex flex-col border-t border-[#d5e1e5] group cursor-pointer transition-colors"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => onOpenConsultation(`Service: ${service.name}`)}
              data-node-id={service.nodeId}
              data-name="Service"
            >
              <div
                className="flex items-start gap-6 py-7 md:py-[26px] group-hover:bg-white/50 px-2 transition-all rounded-sm"
                data-node-id="7:4391"
                data-name="Service content"
              >
                {/* Number */}
                <span
                  className="font-sans text-[#21a8b9] text-[12px] font-normal w-[30px] pt-2 shrink-0"
                  data-node-id={service.numNodeId}
                >
                  {service.number}
                </span>

                {/* Details */}
                <div className="flex-1 flex flex-col gap-3">
                  <h3
                    className="font-serif text-[#102c51] text-[26px] sm:text-[32px] group-hover:text-[#21a8b9] transition-colors leading-[1.1]"
                    data-node-id={service.nameNodeId}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-sans text-[#627581] text-[14px] leading-[1.7]"
                    data-node-id={service.descNodeId}
                  >
                    {service.description}
                  </p>
                  <p
                    className="font-sans text-[#21a8b9] text-[9px] font-medium tracking-[0.14em] uppercase"
                    data-node-id={service.scopeNodeId}
                  >
                    {service.scope}
                  </p>

                  {/* Smart interactive expanded detail on hover or mobile tap */}
                  {hoveredIdx === idx && (
                    <div className="mt-2 pt-2 border-t border-[#21a8b9]/20 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#475b68] animate-in fade-in duration-200">
                      {service.details.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#21a8b9]" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Arrow */}
                <span
                  className="text-[#21a8b9] text-[24px] font-light transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0"
                  data-node-id="7:4397"
                >
                  ↗
                </span>
              </div>
            </div>
          ))}
          <div className="border-b border-[#d5e1e5] w-full" data-node-id="7:4425" />
        </div>
      </div>
    </section>
  );
}
