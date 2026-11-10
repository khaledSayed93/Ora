import React from 'react';

export default function PortfolioSection({ onOpenProject, onOpenConsultation }) {
  const projects = [
    {
      id: 'seashell-playa',
      title: 'Seashell Playa — Lagoons C2',
      location: 'NORTH COAST, EGYPT',
      image: '/assets/project-seashell-playa.png',
      role: 'Team role: integrated design & installation',
      facts: '5,200 m² water surface  /  2 swimmable lagoons',
      status: 'Completed & operating',
      details: 'Dual swimmable lagoons engineered with high-volume turnover hydraulics, automated chemical balancing, and sub-surface filtration systems designed to withstand coastal saline atmosphere.',
      nodeId: '7:4438',
      imgNodeId: '7:4440',
      locNodeId: '7:4445',
      arrowNodeId: '7:4446',
      titleNodeId: '7:4447',
      roleNodeId: '7:4448',
      factsNodeId: '7:4451',
      statusNodeId: '7:4452',
    },
    {
      id: 'creek-town',
      title: 'Creek Town — Phase 01',
      location: 'NEW CAIRO–SUEZ ROAD, EGYPT',
      image: '/assets/project-creek-town.png',
      role: 'Team role: integrated design & build',
      facts: '16,000 m² water surface  /  5 machine rooms',
      status: 'PLC choreography · VFD pump control',
      details: 'Extensive masterplanned water corridor across multiple residential clusters featuring automated water leveling, 5 centralized pump stations, and energy-efficient VFD motor drives.',
      nodeId: '7:4453',
      imgNodeId: '7:4455',
      locNodeId: '7:4460',
      arrowNodeId: '7:4461',
      titleNodeId: '7:4462',
      roleNodeId: '7:4463',
      factsNodeId: '7:4466',
      statusNodeId: '7:4467',
    },
    {
      id: 'oud-wellness',
      title: 'OUD Wellness Offices’ Lagoon',
      location: 'RIYADH, SAUDI ARABIA · 2023',
      image: '/assets/project-oud-wellness.png',
      role: 'Team role: full design & tender package',
      facts: '2,820 m² lagoon  /  11 pumps  /  62 lights',
      status: 'Water feature consultancy',
      details: 'A landmark biophilic commercial lagoon in Riyadh designed with smart DMX submersible illumination, specialized biological filtration and micro-climate misting integration.',
      nodeId: '7:4469',
      imgNodeId: '7:4471',
      locNodeId: '7:4476',
      arrowNodeId: '7:4477',
      titleNodeId: '7:4478',
      roleNodeId: '7:4479',
      factsNodeId: '7:4482',
      statusNodeId: '7:4483',
    },
    {
      id: 'my-otel',
      title: 'MY ŌTEL North Coast',
      location: 'EL DABAA, EGYPT · OPENED 2025',
      image: '/assets/project-my-otel.png',
      role: 'Team role: in-house specialist, The Waterway Developments',
      facts: '30+ pools  /  12+ jacuzzis  /  16+ fountains',
      status: 'Full IFC design · 59 hotel keys',
      details: 'Comprehensive luxury resort hospitality package spanning infinity edge pools, private plunge suites, therapeutic hydro-spas, and entry water show installations.',
      nodeId: '7:4484',
      imgNodeId: '7:4486',
      locNodeId: '7:4491',
      arrowNodeId: '7:4492',
      titleNodeId: '7:4493',
      roleNodeId: '7:4494',
      factsNodeId: '7:4497',
      statusNodeId: '7:4498',
    },
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
              04 / SELECTED EXPERIENCE
            </p>
          </div>

          <h2
            className="font-serif font-normal text-[#102c51] text-[40px] sm:text-[50px] lg:text-[62px] leading-[1.04]"
            data-node-id="7:4432"
          >
            <span>Different contexts.</span>
            <br />
            <span>The same depth of expertise.</span>
          </h2>
        </div>

        <div
          className="max-w-[436px] flex flex-col gap-3 font-sans"
          data-node-id="7:4433"
          data-name="Portfolio attribution"
        >
          <p
            className="text-[#627581] text-[15px] sm:text-[16px] leading-[1.7]"
            data-node-id="7:4434"
          >
            Projects delivered by ORA’s founding team across contracting, consultancy and developer-side roles — not all contracted by ORA.
          </p>
          <p
            className="text-[#21a8b9] text-[11px] font-medium"
            data-node-id="7:4435"
          >
            Roles and responsibilities noted for each project.
          </p>
        </div>
      </div>

      {/* 2x2 Featured Projects Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-[24px]"
        data-node-id="7:4436"
        data-name="Featured project grid"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onOpenProject(project)}
            className="flex flex-col group cursor-pointer"
            data-node-id={project.nodeId}
            data-name="Selected project"
          >
            {/* Project Image Frame */}
            <div
              className="relative h-[240px] sm:h-[302px] w-full overflow-hidden bg-slate-100 flex flex-col justify-end p-4"
              data-node-id="7:4439"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-node-id={project.imgNodeId}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              {/* Concept Imagery Disclosure Tag */}
              <div
                className="relative z-10 bg-white/95 px-2.5 py-1.5 self-start shadow-sm"
                data-node-id="7:4441"
              >
                <p className="font-sans text-[#102c51] text-[9px] font-semibold tracking-wider uppercase">
                  CONCEPT IMAGERY · NOT PROJECT PHOTOGRAPHY
                </p>
              </div>
            </div>

            {/* Information Block */}
            <div
              className="flex flex-col gap-3 pt-6 pb-6"
              data-node-id="7:4443"
              data-name="Project information"
            >
              {/* Location & Arrow */}
              <div
                className="flex items-center justify-between text-[#21a8b9] font-sans"
                data-node-id={project.locNodeId}
              >
                <span className="text-[10px] font-semibold tracking-wider">
                  {project.location}
                </span>
                <span className="text-[22px] font-light group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-serif text-[#102c51] text-[28px] sm:text-[34px] lg:text-[36px] group-hover:text-[#21a8b9] transition-colors leading-snug"
                data-node-id={project.titleNodeId}
              >
                {project.title}
              </h3>

              {/* Role */}
              <p
                className="font-sans text-[#183149] text-[13px] leading-[1.5]"
                data-node-id={project.roleNodeId}
              >
                {project.role}
              </p>

              {/* Divider */}
              <div className="bg-[#d5e1e5] h-px w-full my-1" />

              {/* Technical Scale Fact */}
              <p
                className="font-sans text-[#102c51] text-[12px] font-medium"
                data-node-id={project.factsNodeId}
              >
                {project.facts}
              </p>

              {/* Status */}
              <p
                className="font-sans text-[#627581] text-[11px]"
                data-node-id={project.statusNodeId}
              >
                {project.status}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Further Team Experience Banner */}
      <div
        className="bg-[#eff6f7] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        data-node-id="7:4499"
        data-name="Further team experience"
      >
        <div
          className="flex flex-col gap-3"
          data-node-id="7:4500"
          data-name="Additional project"
        >
          <p
            className="font-sans text-[#21a8b9] text-[10px] font-semibold tracking-[0.14em]"
            data-node-id="7:4501"
          >
            FOUNTAINS / NEW ADMINISTRATIVE CAPITAL, EGYPT
          </p>
          <h4
            className="font-serif text-[#102c51] text-[24px] sm:text-[29px]"
            data-node-id="7:4502"
          >
            Egyptian Flag Musical Dancing Fountain
          </h4>
          <p
            className="font-sans text-[#627581] text-[13px] leading-[1.7]"
            data-node-id="7:4503"
          >
            Team design & installation · 3,500 m² fountain pool · DMX music choreography · Completed & operating.
          </p>
        </div>

        <div
          className="flex flex-col gap-3"
          data-node-id="7:4504"
          data-name="Additional project"
        >
          <p
            className="font-sans text-[#21a8b9] text-[10px] font-semibold tracking-[0.14em]"
            data-node-id="7:4505"
          >
            HOSPITALITY / HURGHADA, EGYPT
          </p>
          <h4
            className="font-serif text-[#102c51] text-[24px] sm:text-[29px]"
            data-node-id="7:4506"
          >
            JAZ Aquamarine Resort
          </h4>
          <p
            className="font-sans text-[#627581] text-[13px] leading-[1.7]"
            data-node-id="7:4507"
          >
            Team water features design for TRAVCO · 17 pools · 13 slides · 1,001 rooms and suites.
          </p>
        </div>
      </div>

      {/* Portfolio Next Step Action */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4"
        data-node-id="7:4508"
        data-name="Portfolio next step"
      >
        <p
          className="font-sans text-[#627581] text-[12px]"
          data-node-id="7:4509"
        >
          Explore the technical scope behind the water.
        </p>

        <button
          onClick={() => onOpenConsultation('Portfolio Company Profile Request')}
          className="bg-transparent hover:bg-slate-50 border border-[#d5e1e5] text-[#091f39] h-[54px] px-6 flex items-center gap-6 text-[13px] font-semibold transition-all shadow-sm active:scale-[0.99] cursor-pointer"
          data-node-id="7:4510"
          data-name="Consultation action"
        >
          <span data-node-id="7:4511">Request the company profile</span>
          <span className="text-[#21a8b9] text-[20px] font-light" data-node-id="7:4512">↗</span>
        </button>
      </div>
    </section>
  );
}
