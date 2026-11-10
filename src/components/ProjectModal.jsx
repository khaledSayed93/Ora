import React from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onConsult }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#091f39]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white text-[#102c51] w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl border border-[#d5e1e5]">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 bg-white/90 p-2 text-[#102c51] hover:text-[#21a8b9] transition-colors rounded-full shadow"
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        {/* Project Image */}
        <div className="relative h-[280px] sm:h-[340px] w-full bg-slate-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[#5ddade] text-xs font-semibold tracking-widest uppercase">
              {project.location}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mt-1">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-6 font-sans">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-[#147d8c] tracking-wider uppercase">
              Team Responsibility
            </span>
            <p className="text-[#102c51] text-base font-medium">
              {project.role}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#d5e1e5] bg-[#eff6f7]/50 p-4 rounded-sm">
            <div>
              <span className="text-[11px] text-[#627581] block">Technical Scale</span>
              <span className="text-sm font-semibold text-[#102c51]">{project.facts}</span>
            </div>
            <div>
              <span className="text-[11px] text-[#627581] block">Operational Status</span>
              <span className="text-sm font-semibold text-[#102c51]">{project.status}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-semibold text-[#102c51] uppercase tracking-wider">
              Engineering & Scope Overview
            </h4>
            <p className="text-sm text-[#627581] leading-relaxed">
              {project.details || 'Delivered with advanced hydraulic engineering, synchronized biological and chemical balancing, precision pipe routing, and seamless integration with surrounding architectural finishes.'}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#627581]">
              Interested in similar engineering for your development?
            </p>
            <button
              onClick={() => {
                onClose();
                onConsult(`Project Scope: ${project.title}`);
              }}
              className="w-full sm:w-auto bg-[#21a8b9] hover:bg-[#1da0b0] text-[#091f39] px-6 py-3 text-xs font-semibold flex items-center justify-center gap-3 transition-colors shadow-sm"
            >
              <span>Inquire About This Project</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
