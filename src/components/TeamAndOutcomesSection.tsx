import React from 'react';
import { Award, GraduationCap, UserCheck } from 'lucide-react';
import { Language, PROJECT_INFO, TEAM_MEMBERS } from '../data/projectConfig';
import { TranslationContent } from '../data/translations';

interface TeamAndOutcomesSectionProps {
  lang: Language;
  t: TranslationContent['team'];
}

export const TeamAndOutcomesSection: React.FC<TeamAndOutcomesSectionProps> = ({
  lang,
  t,
}) => {
  const college = lang === 'en' ? PROJECT_INFO.collegeEn : PROJECT_INFO.collegeHi;
  const course = lang === 'en' ? PROJECT_INFO.courseEn : PROJECT_INFO.courseHi;
  const subject = lang === 'en' ? PROJECT_INFO.subjectEn : PROJECT_INFO.subjectHi;

  return (
    <section
      id="team"
      className="py-16 sm:py-20 bg-[#FAF9F4] border-b border-[#242B27]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Header */}
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#176B45] mb-2">
            {t.eyebrow}
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#242B27] tracking-tight text-balance">
            {t.heading}
          </h2>
          <p className="mt-3 text-base text-[#242B27]/80 leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Academic Metadata Strip */}
        <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 bg-white rounded-2xl p-5 sm:p-6 border border-[#242B27]/10 shadow-xs">
          <div>
            <dt className="text-xs font-medium text-[#242B27]/60">
              {t.metaLabels.college}
            </dt>
            <dd className="mt-1 text-sm font-semibold text-[#242B27]">{college}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-[#242B27]/60">
              {t.metaLabels.course}
            </dt>
            <dd className="mt-1 text-sm font-semibold text-[#242B27]">{course}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-[#242B27]/60">
              {t.metaLabels.subject}
            </dt>
            <dd className="mt-1 text-sm font-semibold text-[#242B27]">{subject}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-[#242B27]/60">
              {t.metaLabels.project}
            </dt>
            <dd className="mt-1 text-sm font-semibold text-[#242B27]">
              {t.projectNameValue}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium text-[#242B27]/60">
              {t.metaLabels.facultyGuide}
            </dt>
            <dd className="mt-1 text-sm font-semibold text-[#176B45] flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{PROJECT_INFO.facultyGuide}</span>
            </dd>
          </div>
        </dl>

        {/* Team Member Cards (Initials / Editable Image Slots) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.id}
              className="bg-white rounded-2xl p-5 border border-[#242B27]/10 shadow-xs flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#DDF1E4] border border-[#176B45]/20 text-[#176B45] font-display text-lg font-semibold flex items-center justify-center shrink-0">
                {member.initials}
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-[#242B27] truncate">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#242B27]/70 mt-0.5">
                  {lang === 'en' ? member.roleEn : member.roleHi}
                </p>
                <p className="text-xs text-[#176B45] mt-1 font-medium">
                  SGT University
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Learning & Project Outcomes */}
        <div
          id="outcomes"
          className="mt-14 bg-white rounded-2xl p-6 sm:p-8 border border-[#242B27]/10 shadow-xs"
        >
          <div className="flex items-center gap-2.5 text-[#176B45] text-xs sm:text-sm font-semibold mb-2">
            <GraduationCap className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t.outcomesEyebrow}</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#242B27]">
            {t.outcomesHeading}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-[#242B27]/75 max-w-3xl">
            {t.outcomesIntro}
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {t.outcomesList.map((outcome, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-[#FAF9F4] rounded-xl p-4 border border-[#242B27]/8"
              >
                <Award
                  className="w-4 h-4 text-[#176B45] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-sm text-[#242B27]/85 leading-relaxed">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
