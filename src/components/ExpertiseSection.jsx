import React from 'react';

export default function ExpertiseSection({ onSelectExpertise }) {
  const capabilities = [
    {
      number: '01',
      name: 'Swimming pools',
      image: '/assets/capability-swimming-pools.png',
      description: 'Private, leisure and competition pools, up to Olympic size.',
      nodeId: '7:4344',
      nameNodeId: '7:4347',
      numNodeId: '7:4348',
      descNodeId: '7:4349',
    },
    {
      number: '02',
      name: 'Lagoons',
      image: '/assets/capability-lagoons.png',
      description: 'Swimmable and landscape lagoons with sand or regenerative media filtration.',
      nodeId: '7:4350',
      nameNodeId: '7:4353',
      numNodeId: '7:4354',
      descNodeId: '7:4355',
    },
    {
      number: '03',
      name: 'Fountains',
      image: '/assets/capability-fountains.png',
      description: 'Classic jets, musical and dancing fountains with DMX choreography.',
      nodeId: '7:4356',
      nameNodeId: '7:4359',
      numNodeId: '7:4360',
      descNodeId: '7:4361',
    },
    {
      number: '04',
      name: 'Aqua parks',
      image: '/assets/capability-aqua-parks.png',
      description: 'Water slides, leisure pools, lazy rivers and aquatic attractions.',
      nodeId: '7:4362',
      nameNodeId: '7:4365',
      numNodeId: '7:4366',
      descNodeId: '7:4367',
    },
  ];

  const specialistCapabilities = [
    {
      title: 'Waterfalls & water walls',
      description: 'Natural cascades, sheer descents and architectural feature walls.',
      nodeId: '7:4371',
      titleNodeId: '7:4372',
      descNodeId: '7:4373',
    },
    {
      title: 'Spas, jacuzzis & therapy pools',
      description: 'Hydrotherapy, air and water jets, heating and treatment.',
      nodeId: '7:4374',
      titleNodeId: '7:4375',
      descNodeId: '7:4376',
    },
    {
      title: 'Water treatment systems',
      description: 'Filtration, ozone, UV, chemical dosing and automatic controls.',
      nodeId: '7:4377',
      titleNodeId: '7:4378',
      descNodeId: '7:4379',
    },
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
              02 / OUR EXPERTISE
            </p>
          </div>

          <h2
            className="font-serif font-normal text-[#102c51] text-[40px] sm:text-[50px] lg:text-[62px] leading-[1.04]"
            data-node-id="7:4340"
          >
            Water in every form.
          </h2>
        </div>

        <div
          className="max-w-[380px]"
          data-node-id="7:4341"
          data-name="Expertise summary"
        >
          <p
            className="font-sans text-[#627581] text-[15px] sm:text-[16px] leading-[1.7]"
            data-node-id="7:4342"
          >
            From a private pool to a landscape-scale lagoon. One specialist discipline, many expressions.
          </p>
        </div>
      </div>

      {/* 4 Primary Expertise Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        data-node-id="7:4343"
        data-name="Primary expertise"
      >
        {capabilities.map((item) => (
          <div
            key={item.name}
            className="flex flex-col gap-4 group cursor-pointer"
            onClick={() => onSelectExpertise && onSelectExpertise(item.name)}
            data-node-id={item.nodeId}
            data-name="Expertise area"
          >
            {/* Image Frame */}
            <div
              className="h-[260px] sm:h-[300px] w-full overflow-hidden bg-slate-100 relative"
              data-node-id="7:4345"
            >
              <img
                src={item.image}
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
              <h3
                className="font-serif text-[#102c51] text-[26px] sm:text-[31px] group-hover:text-[#21a8b9] transition-colors"
                data-node-id={item.nameNodeId}
              >
                {item.name}
              </h3>
              <span
                className="font-sans text-[#21a8b9] text-[11px] font-medium"
                data-node-id={item.numNodeId}
              >
                {item.number}
              </span>
            </div>

            {/* Description */}
            <p
              className="font-sans text-[#627581] text-[14px] leading-[1.7]"
              data-node-id={item.descNodeId}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Footnote Disclosure */}
      <p
        className="font-sans text-[#627581] text-[10px] tracking-wide"
        data-node-id="7:4368"
      >
        Capability imagery is illustrative.
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
        {specialistCapabilities.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 group"
            data-node-id={item.nodeId}
            data-name="Additional expertise"
          >
            <h4
              className="font-sans font-medium text-[#102c51] text-[17px] group-hover:text-[#21a8b9] transition-colors"
              data-node-id={item.titleNodeId}
            >
              {item.title}
            </h4>
            <p
              className="font-sans text-[#627581] text-[14px] leading-[1.7]"
              data-node-id={item.descNodeId}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
