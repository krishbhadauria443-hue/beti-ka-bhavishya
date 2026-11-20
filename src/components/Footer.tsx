import React from 'react';
import { Sprout, ExternalLink } from 'lucide-react';
import { Language, OFFICIAL_REFERENCES, PROJECT_INFO } from '../data/projectConfig';
import { TranslationContent } from '../data/translations';

interface FooterProps {
  lang: Language;
  nav: TranslationContent['nav'];
  t: TranslationContent['footer'];
}

export const Footer: React.FC<FooterProps> = ({ lang, nav, t }) => {
  const quickLinks = [
    { href: '#home', label: nav.home },
    { href: '#about-ssy', label: nav.about },
    { href: '#objectives', label: nav.objectives },
    { href: '#benefits', label: nav.benefits },
    { href: '#survey', label: nav.survey },
    { href: '#findings', label: nav.findings },
    { href: '#faq', label: nav.faq },
    { href: '#team', label: nav.team },
  ];

  const college = lang === 'en' ? PROJECT_INFO.collegeEn : PROJECT_INFO.collegeHi;
  const course = lang === 'en' ? PROJECT_INFO.courseEn : PROJECT_INFO.courseHi;
  const subject = lang === 'en' ? PROJECT_INFO.subjectEn : PROJECT_INFO.subjectHi;

  return (
    <footer className="bg-[#242B27] text-white/90 pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-white/15">
          {/* Brand & Description */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 text-white font-display font-bold text-lg tracking-tight"
            >
              <span className="w-8 h-8 rounded-lg bg-[#176B45] text-white flex items-center justify-center shrink-0">
                <Sprout className="w-4 h-4" aria-hidden="true" />
              </span>
              <span>{nav.brand}</span>
            </a>
            <p className="mt-4 text-sm text-white/75 leading-relaxed max-w-sm">
              {t.description}
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white mb-4">
              {t.quickLinksTitle}
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm text-white/75">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#DDF1E4] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-white mb-4">
              {t.officialLinksTitle}
            </h3>
            <ul className="space-y-2.5 text-sm text-white/75">
              {OFFICIAL_REFERENCES.map((ref) => (
                <li key={ref.id}>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#DDF1E4] transition-colors"
                  >
                    <span>{ref.domainLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-75" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Details */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-white mb-4">
              {t.academicInfoTitle}
            </h3>
            <ul className="space-y-2 text-sm text-white/75">
              <li>{college}</li>
              <li>{course}</li>
              <li>{subject}</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-4">
          <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-xs sm:text-sm text-white/80 leading-relaxed">
            {t.disclaimer}
          </div>
          <p className="text-xs text-white/60 text-center sm:text-left">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
