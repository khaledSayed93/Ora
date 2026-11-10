import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function EngineeringSection() {
  const { t } = useLanguage();
  const [activeComponent, setActiveComponent] = useState(null);

  const componentData = t.engineering.components;

  return (
    <section
      id="engineering"
      className="w-full bg-[#102c51] px-6 md:px-12 lg:px-[72px] py-16 md:py-[88px]"
      data-node-id="7:4513"
      data-name="Engineering behind the experience"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[80px] items-center">
        {/* Left Column: Schematic Drawing Card */}
        <div
          className="lg:col-span-6 bg-[#091f39] p-6 sm:p-[30px] border border-[#345069]/40 flex flex-col justify-between"
          data-node-id="7:4514"
          data-name="Hydraulic system study"
        >
          {/* Header of schematic */}
          <div
            className="flex items-center justify-between text-xs pb-4 border-b border-[#345069]/50"
            data-node-id="7:4515"
            data-name="Drawing title"
          >
            <span
              className="text-[#5ddade] text-[10px] font-semibold tracking-widest"
              data-node-id="7:4516"
            >
              {t.engineering.drawingTitle}
            </span>
            <span
              className="text-[#b9ccd7] text-[9px] tracking-wider"
              data-node-id="7:4517"
            >
              {t.engineering.drawingSub}
            </span>
          </div>

          {/* Interactive Schematic Visual Canvas */}
          <div
            className="relative h-[290px] sm:h-[310px] w-full max-w-[544px] mx-auto overflow-hidden my-4"
            style={{ direction: 'ltr' }}
            data-node-id="7:4518"
            data-name="Engineering schematic"
          >
            {/* Water Basin Box */}
            <div
              onMouseEnter={() => setActiveComponent('basin')}
              onMouseLeave={() => setActiveComponent(null)}
              className={`absolute border border-[#b9ccd7] transition-all cursor-pointer ${
                activeComponent === 'basin' ? 'border-[#5ddade] bg-[#5ddade]/10' : 'bg-transparent'
              }`}
              style={{ width: '76%', height: '28%', left: '12%', top: '6%' }}
              data-node-id="7:4519"
              data-name="Water basin"
            />

            {/* Water Level & Surface */}
            <div
              className="absolute bg-[#21a8b9]/15"
              style={{ width: '75.5%', height: '17%', left: '12.2%', top: '16%' }}
              data-node-id="7:4520"
              data-name="Water level"
            />
            <div
              className="absolute pointer-events-none"
              style={{ width: '75.5%', height: '4px', left: '12.2%', top: '15.5%' }}
              data-node-id="7:4521"
              data-name="Water surface"
            >
              <img src="/assets/water-surface.svg" alt="" className="w-full h-full block" />
            </div>

            {/* Basin Text Label */}
            <p
              className="absolute font-sans text-[#b9ccd7] text-[10px] sm:text-[11px] font-medium tracking-wider pointer-events-none"
              style={{ left: '34%', top: '22%' }}
              data-node-id="7:4522"
            >
              {t.engineering.labels.waterFeature}
            </p>

            {/* Return Arrow Label */}
            <p
              className="absolute font-sans text-[#5ddade] text-[9px] font-semibold tracking-wider"
              style={{ left: '77%', top: '2%' }}
              data-node-id="7:4533"
            >
              {t.engineering.labels.return}
            </p>

            {/* Circulation Pipe Network SVG */}
            <div
              className="absolute inset-0 pointer-events-none"
              data-node-id="7:4523"
              data-name="Circulation network"
            >
              <img
                src="/assets/circulation-network.svg"
                alt="Hydraulic piping network"
                className="w-full h-full object-fill block"
              />
            </div>

            {/* Pump Unit */}
            <div
              onMouseEnter={() => setActiveComponent('pump')}
              onMouseLeave={() => setActiveComponent(null)}
              className={`absolute cursor-pointer transition-transform ${
                activeComponent === 'pump' ? 'scale-110' : ''
              }`}
              style={{ width: '54px', height: '54px', left: '29%', top: '61%' }}
              data-node-id="7:4524"
              data-name="Circulation pump"
            >
              <img src="/assets/circulation-pump.svg" alt="Circulation pump" className="w-full h-full" />
              <div
                className="absolute inset-0 flex items-center justify-center animate-spin"
                style={{ animationDuration: '6s' }}
              >
                <img src="/assets/pump-impeller.svg" alt="" className="w-[20px] h-[24px]" />
              </div>
            </div>

            {/* Filtration Unit */}
            <div
              onMouseEnter={() => setActiveComponent('filtration')}
              onMouseLeave={() => setActiveComponent(null)}
              className={`absolute border border-[#b9ccd7] rounded-xl cursor-pointer bg-[#091f39] flex flex-col items-center justify-end pb-3 transition-all ${
                activeComponent === 'filtration' ? 'border-[#5ddade] shadow-lg shadow-[#5ddade]/20 scale-105' : ''
              }`}
              style={{ width: '58px', height: '78px', left: '47%', top: '57%' }}
              data-node-id="7:4526"
              data-name="Filtration vessel"
            >
              <img src="/assets/media-bed.svg" alt="Media bed" className="w-[38px] h-[18px]" />
            </div>

            {/* UV Treatment Unit */}
            <div
              onMouseEnter={() => setActiveComponent('treatment')}
              onMouseLeave={() => setActiveComponent(null)}
              className={`absolute border border-[#b9ccd7] cursor-pointer bg-[#091f39] flex items-center justify-center transition-all ${
                activeComponent === 'treatment' ? 'border-[#5ddade] shadow-lg shadow-[#5ddade]/20 scale-105' : ''
              }`}
              style={{ width: '58px', height: '46px', left: '66%', top: '62%' }}
              data-node-id="7:4528"
              data-name="Treatment unit"
            >
              <span className="font-sans font-bold text-[#5ddade] text-[11px]" data-node-id="7:4529">
                UV
              </span>
            </div>

            {/* Unit Labels */}
            <p
              className="absolute font-sans text-[#b9ccd7] text-[9px] font-semibold tracking-wider"
              style={{ left: '25%', top: '89%' }}
            >
              {t.engineering.labels.circulation}
            </p>
            <p
              className="absolute font-sans text-[#b9ccd7] text-[9px] font-semibold tracking-wider"
              style={{ left: '46%', top: '89%' }}
            >
              {t.engineering.labels.filtration}
            </p>
            <p
              className="absolute font-sans text-[#b9ccd7] text-[9px] font-semibold tracking-wider"
              style={{ left: '65%', top: '89%' }}
            >
              {t.engineering.labels.treatment}
            </p>
          </div>

          {/* Interactive Info Pill or Caption */}
          <div className="pt-3 border-t border-[#345069]">
            {activeComponent && componentData[activeComponent] ? (
              <div className="text-xs text-[#5ddade] animate-in fade-in">
                <span className="font-semibold">{componentData[activeComponent].name}: </span>
                <span className="text-[#b9ccd7]">{componentData[activeComponent].desc}</span>
              </div>
            ) : (
              <p
                className="font-sans text-[#b9ccd7] text-[12px] leading-[1.7]"
                data-node-id="7:4535"
              >
                {t.engineering.drawingCaption}
              </p>
            )}
          </div>
        </div>

        {/* Right Column: Engineering Content */}
        <div
          className="lg:col-span-6 flex flex-col gap-7"
          data-node-id="7:4536"
          data-name="Engineering content"
        >
          <div
            className="flex items-center gap-3"
            data-node-id="7:4537"
            data-name="Section label"
          >
            <div
              className="bg-[#21a8b9] h-[2px] w-[24px]"
              data-node-id="7:4538"
              data-name="Accent rule"
            />
            <p
              className="font-sans font-semibold text-[#5ddade] text-[11px] tracking-[0.16em]"
              data-node-id="7:4539"
            >
              {t.engineering.sectionLabel}
            </p>
          </div>

          <h2
            className="font-serif font-normal text-white text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.08]"
            data-node-id="7:4540"
          >
            <span>{t.engineering.titleLine1}</span>
            <br />
            <span>{t.engineering.titleLine2}</span>
          </h2>

          <p
            className="font-sans text-[#b9ccd7] text-[15px] sm:text-[16px] leading-[1.8]"
            data-node-id="7:4541"
          >
            {t.engineering.desc}
          </p>

          <div className="flex flex-col gap-6 pt-2">
            {t.engineering.principles.map((principle, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 pt-3 border-t border-[#345069]"
                data-name="Engineering principle"
              >
                <h4 className="font-sans text-white text-[15px] font-semibold">
                  {principle.title}
                </h4>
                <p className="font-sans text-[#b9ccd7] text-[13px] leading-[1.7]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
