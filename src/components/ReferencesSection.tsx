import React from 'react';
import { ExternalLink, ShieldAlert } from 'lucide-react';
import { Language, OFFICIAL_REFERENCES } from '../data/projectConfig';
import { TranslationContent } from '../data/translations';

interface ReferencesSectionProps {
  lang: Language;
  t: TranslationContent['references'];
}

export const ReferencesSection: React.FC<ReferencesSectionProps> = ({ lang, t }) => {
  return (
    <section
      id="references"
      className="py-16 sm:py-20 bg-white border-b border-[#242B27]/10"
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

        {/* Academic vs Official Source Distinction */}
        <div className="mt-6 rounded-xl bg-[#FAF9F4] border border-[#242B27]/12 px-5 py-4 flex items-start gap-3">
          <ShieldAlert
            className="w-5 h-5 text-[#176B45] shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-sm text-[#242B27]/85 leading-relaxed">
            {t.distinctionNote}
          </p>
        </div>

        {/* Official Links Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {OFFICIAL_REFERENCES.map((ref) => (
            <a
              key={ref.id}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#FAF9F4] rounded-2xl p-6 border border-[#242B27]/10 hover:border-[#176B45]/40 hover:bg-[#DDF1E4]/30 transition-colors duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="font-mono-num text-xs font-medium text-[#176B45]">
                    {ref.domainLabel}
                  </span>
                  <ExternalLink
                    className="w-4 h-4 text-[#242B27]/50 group-hover:text-[#176B45] transition-colors shrink-0"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-[#242B27] group-hover:text-[#176B45] transition-colors">
                  {lang === 'en' ? ref.titleEn : ref.titleHi}
                </h3>
                <p className="mt-2 text-sm text-[#242B27]/75 leading-relaxed">
                  {lang === 'en' ? ref.subtitleEn : ref.subtitleHi}
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#176B45]">
                {t.visitLinkText}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
