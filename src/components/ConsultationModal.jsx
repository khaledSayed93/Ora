import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function ConsultationModal({ isOpen, onClose, contextTitle = 'General Inquiry' }) {
  const { t, isRTL } = useLanguage();
  const m = t.consultModal;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#091f39]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#091f39] border border-[#345069] w-full max-w-lg p-6 sm:p-8 text-white relative shadow-2xl">
        <button
          onClick={resetAndClose}
          className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-4 text-[#b9ccd7] hover:text-white transition-colors`}
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center gap-4">
            <CheckCircle2 size={48} className="text-[#5ddade]" />
            <h3 className="font-serif text-2xl">{m.successTitle}</h3>
            <p className="font-sans text-[#b9ccd7] text-sm leading-relaxed max-w-xs">
              {m.successDesc} "{contextTitle}". {m.successContact}
            </p>
            <button
              onClick={resetAndClose}
              className="mt-4 bg-[#21a8b9] text-[#091f39] px-6 py-2.5 text-xs font-semibold tracking-wider uppercase"
            >
              {m.closeBtn}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <p className="text-[#5ddade] text-[10px] font-semibold tracking-widest uppercase">
                {m.badge}
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl mt-1">{contextTitle}</h3>
              <p className="text-[#b9ccd7] text-xs mt-1">
                {m.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] text-[#b9ccd7]">{m.nameLabel}</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder=""
                className="bg-transparent border-b border-[#345069] focus:border-[#5ddade] py-2 text-sm text-white focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] text-[#b9ccd7]">{m.emailLabel}</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                style={{ direction: 'ltr', textAlign: isRTL ? 'right' : 'left' }}
                className="bg-transparent border-b border-[#345069] focus:border-[#5ddade] py-2 text-sm text-white focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] text-[#b9ccd7]">{m.phoneLabel}</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+20 ... / +966 ... / +971 ..."
                style={{ direction: 'ltr', textAlign: isRTL ? 'right' : 'left' }}
                className="bg-transparent border-b border-[#345069] focus:border-[#5ddade] py-2 text-sm text-white focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] text-[#b9ccd7]">{m.messageLabel}</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={m.messagePlaceholder}
                className="w-full bg-transparent border-b border-[#345069] focus:border-[#5ddade] py-2 text-sm text-white focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={resetAndClose}
                className="px-4 py-2.5 text-xs text-[#b9ccd7] hover:text-white"
              >
                {m.cancelBtn}
              </button>
              <button
                type="submit"
                className="bg-[#21a8b9] hover:bg-[#1da0b0] text-[#091f39] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
              >
                <span>{m.submitBtn}</span>
                <span>{isRTL ? '↖' : '↗'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
