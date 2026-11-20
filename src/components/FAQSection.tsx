import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { TranslationContent } from '../data/translations';

interface FAQSectionProps {
  t: TranslationContent['faq'];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-[#242B27]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
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

        <div className="mt-10 space-y-3">
          {t.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-colors duration-150 ${
                  isOpen
                    ? 'bg-[#FAF9F4] border-[#176B45]/30'
                    : 'bg-white border-[#242B27]/12 hover:border-[#176B45]/25'
                }`}
              >
                <h3 className="m-0">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(idx)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#176B45] rounded-2xl"
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#242B27]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#176B45] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 sm:px-6 pb-5 pt-0 text-sm sm:text-base text-[#242B27]/80 leading-relaxed"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
