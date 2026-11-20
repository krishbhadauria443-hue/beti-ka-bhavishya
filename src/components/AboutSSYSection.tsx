import React from 'react';
import { Calendar, GraduationCap, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';
import { TranslationContent } from '../data/translations';

interface AboutSSYSectionProps {
  t: TranslationContent['aboutSsy'];
}

const PILLAR_ICONS = [Calendar, HeartHandshake, ShieldCheck, GraduationCap];

export const AboutSSYSection: React.FC<AboutSSYSectionProps> = ({ t }) => {
  return (
    <section id="about-ssy" className="py-16 sm:py-20 bg-[#FAF9F4] border-b border-[#242B27]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#176B45] mb-2">
            {t.eyebrow}
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#242B27] tracking-tight text-balance">
            {t.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#242B27]/80 leading-relaxed">
            {t.introParagraph}
          </p>
        </div>

        {/* Highlighted Message Banner (Hairline bordered, soft pink accent) */}
        <div className="mt-8 rounded-2xl bg-[#F5DCE5]/70 border border-[#242B27]/10 px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="font-display text-xl sm:text-2xl font-medium text-[#242B27]">
            {t.highlightQuote}
          </p>
          <span className="text-xs font-semibold text-[#176B45] whitespace-nowrap shrink-0">
            Beti Bachao Beti Padhao · SSY 2015
          </span>
        </div>

        {/* Four Core Pillars */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.pillars.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
            return (
              <article
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#242B27]/10 shadow-xs hover:border-[#176B45]/30 transition-colors duration-150"
              >
                <div className="w-10 h-10 rounded-xl bg-[#DDF1E4] text-[#176B45] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-[#242B27] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#242B27]/75 leading-relaxed">
                  {pillar.text}
                </p>
              </article>
            );
          })}
        </div>

        {/* Visual Explanation: How the Savings Journey Works */}
        <div className="mt-12 bg-white rounded-2xl border border-[#242B27]/10 p-6 sm:p-8 shadow-xs">
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#242B27] mb-6">
            {t.lifecycleTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.lifecycleSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-[#FAF9F4] rounded-xl p-5 border border-[#242B27]/8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-xs font-semibold text-[#176B45]">
                      {step.stage}
                    </span>
                    {idx < t.lifecycleSteps.length - 1 && (
                      <ArrowRight
                        className="hidden lg:block w-4 h-4 text-[#176B45]/50 shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h4 className="text-base font-semibold text-[#242B27] mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-sm text-[#242B27]/75 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
