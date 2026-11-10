import React, { useState } from 'react';
import { CheckCircle2, Paperclip, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function ContactSection() {
  const { t, isRTL } = useLanguage();
  const f = t.contact.form;

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    waterFeatureType: '',
    serviceRequired: '',
    projectStage: '',
    brief: '',
    agreed: true,
  });

  const [attachedFile, setAttachedFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.location.trim() || !formData.brief.trim()) {
      setErrorMsg(f.validationErr);
      return;
    }
    if (!formData.agreed) {
      setErrorMsg(f.agreeErr);
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#091f39] px-6 md:px-12 lg:px-[72px] py-16 md:py-[96px] text-white"
      data-node-id="7:4651"
      data-name="Start a project"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[100px] items-start">
        {/* Left Column: Contact Invitation */}
        <div
          className="lg:col-span-5 flex flex-col gap-8"
          data-node-id="7:4652"
          data-name="Contact invitation"
        >
          <div
            className="flex items-center gap-3"
            data-node-id="7:4653"
            data-name="Section label"
          >
            <div
              className="bg-[#21a8b9] h-[2px] w-[24px]"
              data-node-id="7:4654"
              data-name="Accent rule"
            />
            <p
              className="font-sans font-semibold text-[#5ddade] text-[11px] tracking-[0.16em]"
              data-node-id="7:4655"
            >
              {t.contact.sectionLabel}
            </p>
          </div>

          <h2
            className="font-serif font-normal text-white text-[40px] sm:text-[50px] lg:text-[64px] leading-[1.08]"
            data-node-id="7:4656"
          >
            <span>{t.contact.titleLine1}</span>
            <br />
            <span>{t.contact.titleLine2}</span>
          </h2>

          <p
            className="font-sans text-[#b9ccd7] text-[15px] sm:text-[16px] leading-[1.8]"
            data-node-id="7:4657"
          >
            {t.contact.desc}
          </p>

          {/* Direct Contact Channels */}
          <div
            className="flex flex-col gap-6 pt-4 font-sans"
            data-node-id="7:4658"
            data-name="Direct contact"
          >
            <div className="flex flex-col gap-1.5" data-node-id="7:4659">
              <span className="text-[#5ddade] text-[10px] font-semibold tracking-widest uppercase">
                {t.contact.channels.email}
              </span>
              <a
                href="mailto:info@orawaterfeature.com"
                className="text-white text-[18px] sm:text-[21px] hover:text-[#5ddade] transition-colors"
                style={{ direction: 'ltr', textAlign: isRTL ? 'right' : 'left' }}
                data-node-id="7:4661"
              >
                info@orawaterfeature.com
              </a>
            </div>

            <div className="flex flex-col gap-1.5" data-node-id="7:4662">
              <span className="text-[#5ddade] text-[10px] font-semibold tracking-widest uppercase">
                {t.contact.channels.phone}
              </span>
              <a
                href="tel:+201094394854"
                className="text-white text-[18px] sm:text-[21px] hover:text-[#5ddade] transition-colors"
                style={{ direction: 'ltr', textAlign: isRTL ? 'right' : 'left' }}
                data-node-id="7:4664"
              >
                +20 109 439 4854
              </a>
            </div>

            <div className="flex flex-col gap-1.5" data-node-id="7:4665">
              <span className="text-[#5ddade] text-[10px] font-semibold tracking-widest uppercase">
                {t.contact.channels.website}
              </span>
              <a
                href="https://orawaterfeature.com"
                target="_blank"
                rel="noreferrer"
                className="text-white text-[18px] sm:text-[21px] hover:text-[#5ddade] transition-colors"
                style={{ direction: 'ltr', textAlign: isRTL ? 'right' : 'left' }}
                data-node-id="7:4667"
              >
                orawaterfeature.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Project Inquiry Form */}
        <div
          className="lg:col-span-7 flex flex-col gap-6"
          data-node-id="7:4668"
          data-name="Project inquiry form"
        >
          {submitted ? (
            <div className="bg-[#102c51]/80 border border-[#21a8b9] p-8 md:p-12 flex flex-col items-center text-center gap-4 animate-in fade-in zoom-in-95">
              <CheckCircle2 size={56} className="text-[#5ddade]" />
              <h3 className="font-serif text-3xl text-white">{f.successTitle}</h3>
              <p className="font-sans text-[#b9ccd7] text-[15px] max-w-md leading-relaxed">
                {f.successDesc}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-[#21a8b9] text-[#091f39] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider"
              >
                {f.submitAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Form Introduction */}
              <div
                className="flex items-center justify-between border-b border-[#345069] pb-4"
                data-node-id="7:4669"
                data-name="Form introduction"
              >
                <h3 className="font-serif text-[26px] sm:text-[32px] text-white">
                  {f.title}
                </h3>
                <span className="font-sans text-[#b9ccd7] text-[10px]">
                  {f.required}
                </span>
              </div>

              {errorMsg && (
                <div className="bg-red-900/40 border border-red-500/50 text-red-200 text-xs px-4 py-2.5 rounded-sm">
                  {errorMsg}
                </div>
              )}

              {/* Identity Fields: Full Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-node-id="7:4672">
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[#b9ccd7] text-[11px]">{f.fullName}</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={f.namePlaceholder}
                    className="bg-transparent border-b border-[#345069] focus:border-[#5ddade] text-white text-[14px] py-2 focus:outline-none placeholder:text-[#b9ccd7]/40 transition-colors"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[#b9ccd7] text-[11px]">{f.company}</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={f.companyPlaceholder}
                    className="bg-transparent border-b border-[#345069] focus:border-[#5ddade] text-white text-[14px] py-2 focus:outline-none placeholder:text-[#b9ccd7]/40 transition-colors"
                  />
                </div>
              </div>

              {/* Contact Fields: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-node-id="7:4681">
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[#b9ccd7] text-[11px]">{f.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    style={{ direction: 'ltr', textAlign: isRTL ? 'right' : 'left' }}
                    className="bg-transparent border-b border-[#345069] focus:border-[#5ddade] text-white text-[14px] py-2 focus:outline-none placeholder:text-[#b9ccd7]/40 transition-colors"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[#b9ccd7] text-[11px]">{f.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={f.phonePlaceholder}
                    style={{ direction: 'ltr', textAlign: isRTL ? 'right' : 'left' }}
                    className="bg-transparent border-b border-[#345069] focus:border-[#5ddade] text-white text-[14px] py-2 focus:outline-none placeholder:text-[#b9ccd7]/40 transition-colors"
                  />
                </div>
              </div>

              {/* Project Fields: Location & Water Feature Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-node-id="7:4690">
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[#b9ccd7] text-[11px]">{f.location}</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder={f.locationPlaceholder}
                    className="bg-transparent border-b border-[#345069] focus:border-[#5ddade] text-white text-[14px] py-2 focus:outline-none placeholder:text-[#b9ccd7]/40 transition-colors"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label className="font-sans text-[#b9ccd7] text-[11px]">{f.waterFeatureType}</label>
                  <div className="relative">
                    <select
                      name="waterFeatureType"
                      value={formData.waterFeatureType}
                      onChange={handleChange}
                      className="w-full bg-[#091f39] border-b border-[#345069] focus:border-[#5ddade] text-[#b9ccd7] text-[14px] py-2 px-1 focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="">{f.selectType}</option>
                      {f.types.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={16} className={`absolute ${isRTL ? 'left-2' : 'right-2'} top-3 text-[#5ddade] pointer-events-none`} />
                  </div>
                </div>
              </div>

              {/* Scope Fields: Service Required & Project Stage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-node-id="7:4700">
                <div className="flex flex-col gap-2 relative">
                  <label className="font-sans text-[#b9ccd7] text-[11px]">{f.serviceRequired}</label>
                  <div className="relative">
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className="w-full bg-[#091f39] border-b border-[#345069] focus:border-[#5ddade] text-[#b9ccd7] text-[14px] py-2 px-1 focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="">{f.selectService}</option>
                      {f.services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={16} className={`absolute ${isRTL ? 'left-2' : 'right-2'} top-3 text-[#5ddade] pointer-events-none`} />
                  </div>
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label className="font-sans text-[#b9ccd7] text-[11px]">{f.projectStage}</label>
                  <div className="relative">
                    <select
                      name="projectStage"
                      value={formData.projectStage}
                      onChange={handleChange}
                      className="w-full bg-[#091f39] border-b border-[#345069] focus:border-[#5ddade] text-[#b9ccd7] text-[14px] py-2 px-1 focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="">{f.selectStage}</option>
                      {f.stages.map((stage) => (
                        <option key={stage} value={stage}>
                          {stage}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={16} className={`absolute ${isRTL ? 'left-2' : 'right-2'} top-3 text-[#5ddade] pointer-events-none`} />
                  </div>
                </div>
              </div>

              {/* Project Brief Textarea */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-[#b9ccd7] text-[11px]">{f.brief}</label>
                <textarea
                  name="brief"
                  rows={3}
                  value={formData.brief}
                  onChange={handleChange}
                  placeholder={f.briefPlaceholder}
                  className="w-full bg-transparent border-b border-[#345069] focus:border-[#5ddade] text-white text-[14px] py-2 focus:outline-none placeholder:text-[#b9ccd7]/40 transition-colors resize-none"
                  required
                />
              </div>

              {/* Attachment Button */}
              <label
                className="border border-[#345069] border-dashed hover:border-[#5ddade] h-[52px] px-5 flex items-center justify-between text-[#b9ccd7] cursor-pointer transition-colors"
                data-node-id="7:4715"
              >
                <input type="file" onChange={handleFileChange} className="hidden" accept=".pdf,.dwg,.zip,.jpg,.png" />
                <span className="flex items-center gap-2 text-[12px]">
                  <Paperclip size={14} className="text-[#5ddade]" />
                  <span>{attachedFile ? `${f.attachedPrefix}${attachedFile}` : f.attachText}</span>
                </span>
                <span className="text-[10px] text-[#b9ccd7]/70">{f.attachSub}</span>
              </label>

              {/* Contact Permission Checkbox */}
              <label
                className="flex items-start gap-3 cursor-pointer pt-1"
                data-node-id="7:4718"
              >
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="mt-0.5 accent-[#21a8b9] rounded"
                  required
                />
                <span className="font-sans text-[#b9ccd7] text-[11px] leading-relaxed">
                  {f.agree}
                </span>
              </label>

              {/* Submit Consultation Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#21a8b9] hover:bg-[#1da0b0] text-[#091f39] border border-[#21a8b9] h-[54px] px-6 flex items-center gap-5 text-[13px] font-semibold transition-all shadow-md active:scale-[0.99] cursor-pointer"
                  data-node-id="7:4721"
                >
                  <span>{f.submitBtn}</span>
                  <span className="text-[20px] font-light leading-none">
                    {isRTL ? '↖' : '↗'}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
