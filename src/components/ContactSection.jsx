import React, { useState } from 'react';
import { CheckCircle2, Paperclip, ChevronDown } from 'lucide-react';

export default function ContactSection() {
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
      setErrorMsg('Please complete all required fields (*)');
      return;
    }
    if (!formData.agreed) {
      setErrorMsg('Please agree to be contacted regarding this inquiry.');
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
              09 / LET’S TALK WATER
            </p>
          </div>

          <h2
            className="font-serif font-normal text-white text-[44px] sm:text-[56px] lg:text-[70px] leading-[1.04]"
            data-node-id="7:4656"
          >
            <span>Let’s build your</span>
            <br />
            <span>next water feature.</span>
          </h2>

          <p
            className="font-sans text-[#b9ccd7] text-[15px] sm:text-[16px] leading-[1.7]"
            data-node-id="7:4657"
          >
            Tell us about the site, the ambition and the stage you’re at. We’ll start with the right technical conversation.
          </p>

          {/* Direct Contact Channels */}
          <div
            className="flex flex-col gap-6 pt-4 font-sans"
            data-node-id="7:4658"
            data-name="Direct contact"
          >
            <div className="flex flex-col gap-1.5" data-node-id="7:4659">
              <span className="text-[#5ddade] text-[10px] font-semibold tracking-widest uppercase">
                EMAIL
              </span>
              <a
                href="mailto:info@orawaterfeature.com"
                className="text-white text-[18px] sm:text-[21px] hover:text-[#5ddade] transition-colors"
                data-node-id="7:4661"
              >
                info@orawaterfeature.com
              </a>
            </div>

            <div className="flex flex-col gap-1.5" data-node-id="7:4662">
              <span className="text-[#5ddade] text-[10px] font-semibold tracking-widest uppercase">
                PHONE
              </span>
              <a
                href="tel:+201094394854"
                className="text-white text-[18px] sm:text-[21px] hover:text-[#5ddade] transition-colors"
                data-node-id="7:4664"
              >
                +20 109 439 4854
              </a>
            </div>

            <div className="flex flex-col gap-1.5" data-node-id="7:4665">
              <span className="text-[#5ddade] text-[10px] font-semibold tracking-widest uppercase">
                WEBSITE
              </span>
              <a
                href="https://orawaterfeature.com"
                target="_blank"
                rel="noreferrer"
                className="text-white text-[18px] sm:text-[21px] hover:text-[#5ddade] transition-colors"
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
              <h3 className="font-serif text-3xl text-white">Inquiry Received</h3>
              <p className="font-sans text-[#b9ccd7] text-[15px] max-w-md leading-relaxed">
                Thank you for reaching out. An ORA senior hydraulic engineer will review your project brief and connect with you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-[#21a8b9] text-[#091f39] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider"
              >
                Submit another request
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
                <h3
                  className="font-serif text-[28px] sm:text-[34px] text-white"
                  data-node-id="7:4670"
                >
                  Tell us about your project
                </h3>
                <span className="font-sans text-[#b9ccd7] text-[10px]" data-node-id="7:4671">
                  * Required
                </span>
              </div>

              {errorMsg && (
                <div className="bg-red-900/40 border border-red-500/50 text-red-200 text-xs px-4 py-2.5 rounded-sm">
                  {errorMsg}
                </div>
              )}

              {/* Identity Fields: Full Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-node-id="7:4672">
                <div className="flex flex-col gap-2" data-node-id="7:4673">
                  <label className="font-sans text-[#b9ccd7] text-[11px]">Full name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-transparent border-b border-[#345069] focus:border-[#5ddade] text-white text-[14px] py-2 focus:outline-none placeholder:text-[#b9ccd7]/40 transition-colors"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2" data-node-id="7:4677">
                  <label className="font-sans text-[#b9ccd7] text-[11px]">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company / practice"
                    className="bg-transparent border-b border-[#345069] focus:border-[#5ddade] text-white text-[14px] py-2 focus:outline-none placeholder:text-[#b9ccd7]/40 transition-colors"
                  />
                </div>
              </div>

              {/* Contact Fields: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-node-id="7:4681">
                <div className="flex flex-col gap-2" data-node-id="7:4682">
                  <label className="font-sans text-[#b9ccd7] text-[11px]">Work email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="bg-transparent border-b border-[#345069] focus:border-[#5ddade] text-white text-[14px] py-2 focus:outline-none placeholder:text-[#b9ccd7]/40 transition-colors"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2" data-node-id="7:4686">
                  <label className="font-sans text-[#b9ccd7] text-[11px]">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Country code + number"
                    className="bg-transparent border-b border-[#345069] focus:border-[#5ddade] text-white text-[14px] py-2 focus:outline-none placeholder:text-[#b9ccd7]/40 transition-colors"
                  />
                </div>
              </div>

              {/* Project Fields: Location & Water Feature Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-node-id="7:4690">
                <div className="flex flex-col gap-2" data-node-id="7:4691">
                  <label className="font-sans text-[#b9ccd7] text-[11px]">Project location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, country"
                    className="bg-transparent border-b border-[#345069] focus:border-[#5ddade] text-white text-[14px] py-2 focus:outline-none placeholder:text-[#b9ccd7]/40 transition-colors"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2 relative" data-node-id="7:4695">
                  <label className="font-sans text-[#b9ccd7] text-[11px]">Water feature type</label>
                  <div className="relative">
                    <select
                      name="waterFeatureType"
                      value={formData.waterFeatureType}
                      onChange={handleChange}
                      className="w-full bg-[#091f39] border-b border-[#345069] focus:border-[#5ddade] text-[#b9ccd7] text-[14px] py-2 pr-8 focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="">Select a type</option>
                      <option value="Swimming Pools">Swimming Pools</option>
                      <option value="Swimmable Lagoons">Swimmable Lagoons</option>
                      <option value="Landscape Lagoons">Landscape Lagoons</option>
                      <option value="Fountains & Choreography">Fountains & Choreography</option>
                      <option value="Aqua Parks & Slides">Aqua Parks & Slides</option>
                      <option value="Spas & Therapy Pools">Spas & Therapy Pools</option>
                      <option value="Waterfalls & Water Walls">Waterfalls & Water Walls</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-0 top-3 text-[#5ddade] pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Scope Fields: Service Required & Project Stage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-node-id="7:4700">
                <div className="flex flex-col gap-2 relative" data-node-id="7:4701">
                  <label className="font-sans text-[#b9ccd7] text-[11px]">Service required</label>
                  <div className="relative">
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className="w-full bg-[#091f39] border-b border-[#345069] focus:border-[#5ddade] text-[#b9ccd7] text-[14px] py-2 pr-8 focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="Turnkey Contracting">Turnkey Contracting</option>
                      <option value="Design & Consultancy">Design & Consultancy</option>
                      <option value="Operation & Maintenance">Operation & Maintenance</option>
                      <option value="Renovation & Upgrading">Renovation & Upgrading</option>
                      <option value="Full Lifecycle Package">Full Lifecycle Package</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-0 top-3 text-[#5ddade] pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 relative" data-node-id="7:4706">
                  <label className="font-sans text-[#b9ccd7] text-[11px]">Project stage</label>
                  <div className="relative">
                    <select
                      name="projectStage"
                      value={formData.projectStage}
                      onChange={handleChange}
                      className="w-full bg-[#091f39] border-b border-[#345069] focus:border-[#5ddade] text-[#b9ccd7] text-[14px] py-2 pr-8 focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="">Select current stage</option>
                      <option value="Concept & Feasibility">Concept & Feasibility</option>
                      <option value="Schematic / Detailed Design">Schematic / Detailed Design</option>
                      <option value="Tender / Procurement">Tender / Procurement</option>
                      <option value="Under Construction">Under Construction</option>
                      <option value="Existing Operating Facility">Existing Operating Facility</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-0 top-3 text-[#5ddade] pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Project Brief Textarea */}
              <div className="flex flex-col gap-2" data-node-id="7:4711">
                <label className="font-sans text-[#b9ccd7] text-[11px]">Project brief *</label>
                <textarea
                  name="brief"
                  rows={3}
                  value={formData.brief}
                  onChange={handleChange}
                  placeholder="Scope, approximate size, timeline and what you need from ORA…"
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
                  <span>{attachedFile ? `Attached: ${attachedFile}` : '＋ Attach a brief or drawings'}</span>
                </span>
                <span className="text-[10px] text-[#b9ccd7]/70">PDF / DWG · Optional</span>
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
                  I agree to be contacted by ORA about this project inquiry.
                </span>
              </label>

              {/* Submit Consultation Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#21a8b9] hover:bg-[#1da0b0] text-[#091f39] border border-[#21a8b9] h-[54px] px-6 flex items-center gap-6 text-[13px] font-semibold transition-all shadow-md active:scale-[0.99] cursor-pointer"
                  data-node-id="7:4721"
                >
                  <span data-node-id="7:4722">Request a consultation</span>
                  <span className="text-[20px] font-light leading-none" data-node-id="7:4723">↗</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
