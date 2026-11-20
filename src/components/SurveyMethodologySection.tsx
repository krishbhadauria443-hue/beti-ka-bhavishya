import React from 'react';
import { ClipboardList, FileSpreadsheet, Target, MapPin, Calendar, Users } from 'lucide-react';
import { FIELD_SURVEY_RECORD, Language } from '../data/projectConfig';
import { TranslationContent } from '../data/translations';

interface SurveyMethodologySectionProps {
  lang: Language;
  t: TranslationContent['methodology'];
}

export const SurveyMethodologySection: React.FC<SurveyMethodologySectionProps> = ({
  lang,
  t,
}) => {
  const villageValue =
    lang === 'en' ? FIELD_SURVEY_RECORD.villageNameEn : FIELD_SURVEY_RECORD.villageNameHi;
  const dateValue =
    lang === 'en' ? FIELD_SURVEY_RECORD.surveyDateEn : FIELD_SURVEY_RECORD.surveyDateHi;
  const respondentsValue =
    lang === 'en'
      ? FIELD_SURVEY_RECORD.totalRespondentsEn
      : FIELD_SURVEY_RECORD.totalRespondentsHi;
  const teamValue =
    lang === 'en' ? FIELD_SURVEY_RECORD.surveyTeamEn : FIELD_SURVEY_RECORD.surveyTeamHi;

  return (
    <section
      id="survey"
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
          <p className="mt-3 text-base sm:text-lg text-[#242B27]/80 leading-relaxed">
            {t.intro}
          </p>
        </div>

        {/* Approach, Data Collection & Purpose Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <article className="bg-white rounded-2xl p-6 border border-[#242B27]/10 shadow-xs">
              <div className="flex items-center gap-2.5 text-[#176B45] font-semibold text-base mb-2.5">
                <ClipboardList className="w-5 h-5 shrink-0" aria-hidden="true" />
                <h3>{t.approachTitle}</h3>
              </div>
              <p className="text-sm text-[#242B27]/80 leading-relaxed">
                {t.approachText}
              </p>
            </article>

            <article className="bg-white rounded-2xl p-6 border border-[#242B27]/10 shadow-xs">
              <div className="flex items-center gap-2.5 text-[#176B45] font-semibold text-base mb-2.5">
                <FileSpreadsheet className="w-5 h-5 shrink-0" aria-hidden="true" />
                <h3>{t.collectionTitle}</h3>
              </div>
              <p className="text-sm text-[#242B27]/80 leading-relaxed">
                {t.collectionText}
              </p>
            </article>
          </div>

          <article className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#242B27]/10 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-[#176B45] font-semibold text-base mb-4">
                <Target className="w-5 h-5 shrink-0" aria-hidden="true" />
                <h3>{t.purposeTitle}</h3>
              </div>
              <ul className="space-y-3">
                {t.purposeItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#242B27]/85 bg-[#FAF9F4] px-4 py-3 rounded-xl border border-[#242B27]/8"
                  >
                    <span className="font-mono-num text-xs font-semibold text-[#176B45] mt-0.5 shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        {/* 6-Step Survey Process Timeline */}
        <div className="mt-10 bg-white rounded-2xl p-6 sm:p-8 border border-[#242B27]/10 shadow-xs">
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#242B27] mb-6">
            {t.processTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {t.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9F4] rounded-xl p-4 border border-[#242B27]/10 flex flex-col justify-between"
              >
                <span className="font-mono-num text-xs font-semibold text-[#176B45] mb-2">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="text-sm font-medium text-[#242B27] leading-snug">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Editable Field Survey Record */}
        <div className="mt-8 bg-[#DDF1E4]/45 rounded-2xl p-6 sm:p-8 border border-[#176B45]/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
            <h3 className="font-display text-lg sm:text-xl font-semibold text-[#242B27]">
              {t.recordTitle}
            </h3>
            <p className="text-xs text-[#242B27]/70">{t.recordNote}</p>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 border border-[#242B27]/10">
              <dt className="flex items-center gap-1.5 text-xs font-medium text-[#242B27]/65">
                <MapPin className="w-3.5 h-3.5 text-[#176B45]" aria-hidden="true" />
                <span>{t.fields.villageLabel}</span>
              </dt>
              <dd className="mt-1.5 text-sm font-semibold text-[#242B27] font-mono-num">
                {villageValue}
              </dd>
            </div>

            <div className="bg-white rounded-xl p-4 border border-[#242B27]/10">
              <dt className="flex items-center gap-1.5 text-xs font-medium text-[#242B27]/65">
                <Calendar className="w-3.5 h-3.5 text-[#176B45]" aria-hidden="true" />
                <span>{t.fields.dateLabel}</span>
              </dt>
              <dd className="mt-1.5 text-sm font-semibold text-[#242B27] font-mono-num">
                {dateValue}
              </dd>
            </div>

            <div className="bg-white rounded-xl p-4 border border-[#242B27]/10">
              <dt className="flex items-center gap-1.5 text-xs font-medium text-[#242B27]/65">
                <Users className="w-3.5 h-3.5 text-[#176B45]" aria-hidden="true" />
                <span>{t.fields.respondentsLabel}</span>
              </dt>
              <dd className="mt-1.5 text-sm font-semibold text-[#242B27] font-mono-num">
                {respondentsValue}
              </dd>
            </div>

            <div className="bg-white rounded-xl p-4 border border-[#242B27]/10">
              <dt className="flex items-center gap-1.5 text-xs font-medium text-[#242B27]/65">
                <Users className="w-3.5 h-3.5 text-[#176B45]" aria-hidden="true" />
                <span>{t.fields.teamLabel}</span>
              </dt>
              <dd className="mt-1.5 text-sm font-semibold text-[#242B27]">
                {teamValue}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};
