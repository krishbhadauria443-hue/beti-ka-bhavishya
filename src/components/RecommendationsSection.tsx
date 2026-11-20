import React from 'react';
import { Check, Code2 } from 'lucide-react';
import { PROJECT_IMAGES } from '../data/projectConfig';
import { TranslationContent } from '../data/translations';
import { SafeImage } from './SafeImage';

interface RecommendationsSectionProps {
  t: TranslationContent['recommendations'];
}

export const RecommendationsSection: React.FC<RecommendationsSectionProps> = ({ t }) => {
  return (
    <section
      id="recommendations"
      className="py-16 sm:py-20 bg-[#FAF9F4] border-b border-[#242B27]/10"
    >
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

        {/* 7 Practical Recommendations */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.items.map((rec, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-[#242B27]/10 shadow-xs flex items-start gap-3.5"
            >
              <span className="w-7 h-7 rounded-lg bg-[#DDF1E4] text-[#176B45] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4" aria-hidden="true" />
              </span>
              <p className="text-sm text-[#242B27]/85 leading-relaxed">{rec}</p>
            </div>
          ))}
        </div>

        {/* Wide Awareness Session Photo + BCA Tech Contribution */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex-1 rounded-2xl overflow-hidden border border-[#242B27]/10 bg-white min-h-[260px]">
              <SafeImage
                src={PROJECT_IMAGES.awarenessMeeting}
                alt={t.imageAlt}
                className="w-full h-full object-cover"
                containerClassName="w-full h-full min-h-[260px]"
              />
            </div>
            <p className="mt-3 text-xs text-[#242B27]/65">{t.imageCaption}</p>
          </div>

          <div className="lg:col-span-5 bg-[#DDF1E4]/55 rounded-2xl p-6 sm:p-8 border border-[#176B45]/20 flex flex-col justify-center">
            <div className="w-11 h-11 rounded-xl bg-[#176B45] text-white flex items-center justify-center mb-5">
              <Code2 className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#242B27] mb-3">
              {t.techTitle}
            </h3>
            <p className="text-sm sm:text-base text-[#242B27]/85 leading-relaxed">
              {t.techDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
