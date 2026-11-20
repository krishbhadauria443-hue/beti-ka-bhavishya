import React from 'react';
import { Building2, FileText, FolderCheck, Landmark, ExternalLink } from 'lucide-react';
import { TranslationContent } from '../data/translations';

interface HowToOpenSectionProps {
  t: TranslationContent['howToOpen'];
}

const STEP_ICONS = [Building2, FileText, FolderCheck, Landmark];

export const HowToOpenSection: React.FC<HowToOpenSectionProps> = ({ t }) => {
  return (
    <section id="how-to-open" className="py-16 sm:py-20 bg-white border-b border-[#242B27]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#176B45] mb-2">
              {t.eyebrow}
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#242B27] tracking-tight text-balance">
              {t.heading}
            </h2>
            <p className="mt-3 text-base text-[#242B27]/75 leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://www.indiapost.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#176B45] hover:bg-[#125637] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176B45]"
            >
              <span>{t.ctaButton}</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
            <p className="mt-1.5 text-xs text-[#242B27]/60">{t.ctaNote}</p>
          </div>
        </div>

        {/* 4-Step Horizontal Process on Desktop / Vertical Timeline on Mobile */}
        <div className="mt-12 relative">
          {/* Desktop horizontal connector line */}
          <div
            className="hidden lg:block absolute top-8 left-10 right-10 h-px bg-[#176B45]/20"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-5 relative">
            {t.steps.map((step, idx) => {
              const Icon = STEP_ICONS[idx % STEP_ICONS.length];
              return (
                <div
                  key={idx}
                  className="relative pl-12 lg:pl-0 lg:pt-0 pb-6 lg:pb-0 last:pb-0"
                >
                  {/* Mobile vertical connector */}
                  {idx < t.steps.length - 1 && (
                    <div
                      className="lg:hidden absolute left-4 top-10 bottom-0 w-px bg-[#176B45]/20"
                      aria-hidden="true"
                    />
                  )}

                  {/* Step Icon Marker */}
                  <div className="absolute left-0 top-0 lg:relative lg:mb-5 w-9 h-9 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-[#DDF1E4] border border-[#176B45]/20 text-[#176B45] flex items-center justify-center z-10">
                    <Icon className="w-4 h-4 lg:w-6 lg:h-6" aria-hidden="true" />
                  </div>

                  {/* Step Content Card */}
                  <div className="bg-[#FAF9F4] rounded-2xl p-5 border border-[#242B27]/10 h-full">
                    <span className="text-xs font-semibold text-[#176B45]">
                      {step.stepNumber}
                    </span>
                    <h3 className="mt-1.5 text-base font-semibold text-[#242B27]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#242B27]/75 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
