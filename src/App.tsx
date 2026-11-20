/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Language } from './data/projectConfig';
import { TRANSLATIONS } from './data/translations';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectIntroSection } from './components/ProjectIntroSection';
import { AboutSSYSection } from './components/AboutSSYSection';
import { ObjectivesSection } from './components/ObjectivesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { HowToOpenSection } from './components/HowToOpenSection';
import { SurveyMethodologySection } from './components/SurveyMethodologySection';
import { SurveyDashboardSection } from './components/SurveyDashboardSection';
import { FindingsSection } from './components/FindingsSection';
import { WhyAwarenessMattersSection } from './components/WhyAwarenessMattersSection';
import { RecommendationsSection } from './components/RecommendationsSection';
import { FAQSection } from './components/FAQSection';
import { TeamAndOutcomesSection } from './components/TeamAndOutcomesSection';
import { ReferencesSection } from './components/ReferencesSection';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const content = TRANSLATIONS[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F4] text-[#242B27]">
      <Navbar lang={lang} onToggleLang={setLang} t={content.nav} />

      <main className="flex-1">
        <HeroSection t={content.hero} />
        <ProjectIntroSection t={content.intro} />
        <AboutSSYSection t={content.aboutSsy} />
        <ObjectivesSection t={content.objectives} />
        <BenefitsSection t={content.benefits} />
        <HowToOpenSection t={content.howToOpen} />
        <SurveyMethodologySection lang={lang} t={content.methodology} />
        <SurveyDashboardSection lang={lang} t={content.dashboard} />
        <FindingsSection lang={lang} t={content.findings} />
        <WhyAwarenessMattersSection t={content.whyAwareness} />
        <RecommendationsSection t={content.recommendations} />
        <FAQSection t={content.faq} />
        <TeamAndOutcomesSection lang={lang} t={content.team} />
        <ReferencesSection lang={lang} t={content.references} />
      </main>

      <Footer lang={lang} nav={content.nav} t={content.footer} />
    </div>
  );
}
