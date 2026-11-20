import React from 'react';
import {
  Search,
  Users,
  BookOpenCheck,
  PiggyBank,
  Compass,
  Laptop,
} from 'lucide-react';
import { TranslationContent } from '../data/translations';

interface ObjectivesSectionProps {
  t: TranslationContent['objectives'];
}

const OBJECTIVE_ICONS = [
  Search,
  Users,
  BookOpenCheck,
  PiggyBank,
  Compass,
  Laptop,
];

export const ObjectivesSection: React.FC<ObjectivesSectionProps> = ({ t }) => {
  return (
    <section id="objectives" className="py-16 sm:py-20 bg-white border-b border-[#242B27]/10">
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

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, idx) => {
            const Icon = OBJECTIVE_ICONS[idx % OBJECTIVE_ICONS.length];
            const numLabel = String(idx + 1).padStart(2, '0');
            return (
              <article
                key={idx}
                className="group bg-[#FAF9F4] rounded-2xl p-6 border border-[#242B27]/10 hover:border-[#176B45]/35 hover:bg-white transition-all duration-150 shadow-xs"
              >
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#DDF1E4] text-[#176B45] flex items-center justify-center group-hover:bg-[#176B45] group-hover:text-white transition-colors duration-150">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono-num text-sm font-semibold text-[#242B27]/45">
                    {numLabel}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#242B27] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#242B27]/80 leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
