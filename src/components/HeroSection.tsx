import React from 'react';
import { ArrowDown, ArrowRight, BarChart3 } from 'lucide-react';
import { PROJECT_IMAGES } from '../data/projectConfig';
import { TranslationContent } from '../data/translations';
import { SafeImage } from './SafeImage';

interface HeroSectionProps {
  t: TranslationContent['hero'];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ t }) => {
  return (
    <section
      id="home"
      className="relative bg-[#FAF9F4] pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-[#242B27]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#176B45] mb-4">
                {t.kicker}
              </p>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-semibold leading-[1.15] tracking-tight text-[#242B27] text-balance">
                {t.headline}
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#242B27]/80 leading-relaxed max-w-xl">
                {t.supporting}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#about-ssy"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-white bg-[#176B45] hover:bg-[#125637] rounded-xl shadow-xs transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176B45]"
                >
                  <span>{t.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href="#survey"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-[#176B45] bg-[#DDF1E4]/75 hover:bg-[#DDF1E4] border border-[#176B45]/20 rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176B45]"
                >
                  <BarChart3 className="w-4 h-4" aria-hidden="true" />
                  <span>{t.secondaryCta}</span>
                </a>
              </div>
            </div>

            {/* Initiative Attribution & Subtle Scroll Indicator */}
            <div className="mt-10 pt-6 border-t border-[#242B27]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-sm font-medium text-[#242B27]/75">
                {t.initiativeNote}
              </p>

              <a
                href="#project-intro"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#176B45] hover:text-[#125637] whitespace-nowrap shrink-0 self-start sm:self-auto"
              >
                <span>{t.scrollLabel}</span>
                <span className="w-7 h-7 rounded-full bg-[#DDF1E4] flex items-center justify-center animate-scroll-indicator">
                  <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Photographic Column */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full rounded-2xl overflow-hidden bg-[#DDF1E4]/40 border border-[#242B27]/10 shadow-sm min-h-[300px] sm:min-h-[380px] lg:min-h-[460px]">
              <SafeImage
                src={PROJECT_IMAGES.heroMotherDaughter}
                alt={t.imageAlt}
                className="w-full h-full lg:h-full object-cover object-center"
                containerClassName="w-full h-full min-h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
