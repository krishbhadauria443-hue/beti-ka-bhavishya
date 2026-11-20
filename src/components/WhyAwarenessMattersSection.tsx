import React from 'react';
import { PROJECT_IMAGES } from '../data/projectConfig';
import { TranslationContent } from '../data/translations';
import { SafeImage } from './SafeImage';

interface WhyAwarenessMattersSectionProps {
  t: TranslationContent['whyAwareness'];
}

export const WhyAwarenessMattersSection: React.FC<WhyAwarenessMattersSectionProps> = ({
  t,
}) => {
  return (
    <section
      id="why-awareness"
      className="py-16 sm:py-20 bg-white border-b border-[#242B27]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Heading + Visual Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-6">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#176B45] mb-2">
              {t.eyebrow}
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#242B27] tracking-tight text-balance">
              {t.heading}
            </h2>
          </div>

          <div className="lg:col-span-6">
            <blockquote className="rounded-2xl bg-[#DDF1E4]/55 border border-[#176B45]/15 px-6 py-6 sm:px-8">
              <p className="font-display text-2xl sm:text-3xl font-medium text-[#176B45] leading-snug">
                {t.quote}
              </p>
            </blockquote>
          </div>
        </div>

        {/* Content Split: 4 Explanation Cards + Education Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.cards.map((card, idx) => (
              <article
                key={idx}
                className="bg-[#FAF9F4] rounded-2xl p-6 border border-[#242B27]/10 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono-num text-xs font-semibold text-[#176B45]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-[#242B27] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#242B27]/80 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 rounded-2xl overflow-hidden border border-[#242B27]/10 bg-[#FAF9F4] min-h-[280px]">
              <SafeImage
                src={PROJECT_IMAGES.girlsEducation}
                alt={t.imageAlt}
                className="w-full h-full object-cover"
                containerClassName="w-full h-full min-h-[280px]"
              />
            </div>
            <p className="mt-3 text-xs text-[#242B27]/65">{t.imageCaption}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
