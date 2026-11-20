import React from 'react';
import { ClipboardCheck, FileSearch, Hourglass } from 'lucide-react';
import { Language, SURVEY_OBSERVATION_AREAS } from '../data/projectConfig';
import { TranslationContent } from '../data/translations';

interface FindingsSectionProps {
  lang: Language;
  t: TranslationContent['findings'];
}

export const FindingsSection: React.FC<FindingsSectionProps> = ({ lang, t }) => {
  return (
    <section
      id="findings"
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
          <p className="mt-3 text-base text-[#242B27]/80 leading-relaxed">
            {t.intro}
          </p>
        </div>

        {/* Status Banner */}
        <div className="mt-8 rounded-2xl bg-[#F5DCE5]/65 border border-[#242B27]/10 px-5 py-4 flex items-center gap-3">
          <Hourglass className="w-5 h-5 text-[#7A2844] shrink-0" aria-hidden="true" />
          <p className="text-sm sm:text-base font-semibold text-[#242B27]">
            {t.statusBanner}
          </p>
        </div>

        {/* 5 Editable Observation Areas */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SURVEY_OBSERVATION_AREAS.map((obs, idx) => {
            const areaTitle = lang === 'en' ? obs.areaEn : obs.areaHi;
            const areaStatus = lang === 'en' ? obs.statusEn : obs.statusHi;
            const areaNote = lang === 'en' ? obs.noteEn : obs.noteHi;

            return (
              <article
                key={obs.id}
                className="bg-white rounded-2xl p-6 border border-[#242B27]/10 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-[#242B27]/60 mb-3">
                    <span className="font-mono-num font-semibold text-[#176B45]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{areaStatus}</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#242B27] mb-2">
                    {areaTitle}
                  </h3>
                  <p className="text-sm text-[#242B27]/75 leading-relaxed">
                    {areaNote}
                  </p>
                </div>
              </article>
            );
          })}

          {/* Verified Field Observations Placeholder Card */}
          <article className="bg-[#DDF1E4]/55 rounded-2xl p-6 border border-[#176B45]/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#176B45] text-sm font-semibold mb-2.5">
                <ClipboardCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
                <h3>{t.actualObservationsTitle}</h3>
              </div>
              <p className="text-sm text-[#242B27]/85 leading-relaxed">
                {t.actualObservationsPlaceholder}
              </p>
            </div>
          </article>
        </div>

        {/* How Survey Analysis Guides Awareness */}
        <div className="mt-8 bg-white rounded-2xl p-6 sm:p-8 border border-[#242B27]/10 shadow-xs flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#DDF1E4] text-[#176B45] flex items-center justify-center shrink-0 mt-0.5">
            <FileSearch className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-[#242B27]">
              {t.analysisExplanationTitle}
            </h3>
            <p className="mt-1.5 text-sm sm:text-base text-[#242B27]/80 leading-relaxed max-w-4xl">
              {t.analysisExplanation}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
