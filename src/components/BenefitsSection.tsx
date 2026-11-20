import React from 'react';
import {
  Baby,
  Coins,
  Wallet,
  Clock,
  CalendarCheck2,
  Percent,
  FileCheck2,
  GraduationCap,
  Info,
} from 'lucide-react';
import { TranslationContent } from '../data/translations';

interface BenefitsSectionProps {
  t: TranslationContent['benefits'];
}

const BENEFIT_ICONS = [
  Baby,
  Coins,
  Wallet,
  Clock,
  CalendarCheck2,
  Percent,
  FileCheck2,
  GraduationCap,
];

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ t }) => {
  return (
    <section id="benefits" className="py-16 sm:py-20 bg-[#FAF9F4] border-b border-[#242B27]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
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

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.cards.map((card, idx) => {
            const Icon = BENEFIT_ICONS[idx % BENEFIT_ICONS.length];
            return (
              <article
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#242B27]/10 shadow-xs hover:border-[#176B45]/35 transition-colors duration-150 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-semibold text-[#176B45]">
                      {card.label}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#DDF1E4]/75 text-[#176B45] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                  <p className="font-display text-xl sm:text-2xl font-semibold text-[#242B27] tabular-nums mb-2.5">
                    {card.value}
                  </p>
                  <p className="text-sm text-[#242B27]/75 leading-relaxed">
                    {card.detail}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Official Verification Disclaimer Note */}
        <div className="mt-8 rounded-xl bg-[#DDF1E4]/50 border border-[#176B45]/15 px-5 py-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-[#176B45] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-[#242B27]/85 leading-relaxed">
            {t.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
