import React from 'react';
import { CheckCircle2, Users } from 'lucide-react';
import { PROJECT_IMAGES } from '../data/projectConfig';
import { TranslationContent } from '../data/translations';
import { SafeImage } from './SafeImage';

interface ProjectIntroSectionProps {
  t: TranslationContent['intro'];
}

export const ProjectIntroSection: React.FC<ProjectIntroSectionProps> = ({ t }) => {
  return (
    <section id="project-intro" className="py-16 sm:py-20 bg-white border-b border-[#242B27]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Image Column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex-1 rounded-2xl overflow-hidden border border-[#242B27]/10 bg-[#FAF9F4] shadow-xs min-h-[280px]">
              <SafeImage
                src={PROJECT_IMAGES.communityInteraction}
                alt={t.imageAlt}
                className="w-full h-full object-cover"
                containerClassName="w-full h-full min-h-[280px]"
              />
            </div>
            <p className="mt-3 text-xs text-[#242B27]/65">
              {t.imageCaption}
            </p>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#176B45] mb-2">
              {t.eyebrow}
            </p>
            <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#242B27] tracking-tight text-balance">
              {t.heading}
            </h2>
            <p className="mt-4 text-base text-[#242B27]/80 leading-relaxed">
              {t.lead}
            </p>

            {/* Bullet Checklist */}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {t.points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 text-sm text-[#242B27]/85 leading-relaxed bg-[#FAF9F4] p-3.5 rounded-xl border border-[#242B27]/8"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-[#176B45] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Synergy Box */}
            <div className="mt-6 rounded-xl bg-[#DDF1E4]/55 border border-[#176B45]/15 p-5">
              <div className="flex items-center gap-2.5 text-[#176B45] font-semibold text-sm sm:text-base mb-1.5">
                <Users className="w-4 h-4 shrink-0" aria-hidden="true" />
                <h3>{t.synergyTitle}</h3>
              </div>
              <p className="text-sm text-[#242B27]/85 leading-relaxed">
                {t.synergyText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
