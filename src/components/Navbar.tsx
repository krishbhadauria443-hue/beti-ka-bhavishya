import React, { useState } from 'react';
import { Menu, X, Sprout } from 'lucide-react';
import { Language } from '../data/projectConfig';
import { TranslationContent } from '../data/translations';

interface NavbarProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
  t: TranslationContent['nav'];
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, t }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: '#home', label: t.home },
    { href: '#about-ssy', label: t.about },
    { href: '#objectives', label: t.objectives },
    { href: '#benefits', label: t.benefits },
    { href: '#survey', label: t.survey },
    { href: '#findings', label: t.findings },
    { href: '#faq', label: t.faq },
    { href: '#team', label: t.team },
  ];

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F4]/95 backdrop-blur-md border-b border-[#242B27]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-[#176B45] font-display font-bold text-base sm:text-lg tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176B45] rounded-md"
        >
          <span className="w-8 h-8 rounded-lg bg-[#176B45] text-white flex items-center justify-center shrink-0">
            <Sprout className="w-4 h-4" aria-hidden="true" />
          </span>
          <span>{t.brand}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden xl:flex items-center gap-5 text-sm font-medium text-[#242B27]/80"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#176B45] transition-colors duration-150 border-b-2 border-transparent hover:border-[#176B45] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#176B45]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: Language Toggle + Explore SSY CTA + Mobile Hamburger */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Language Toggle */}
          <div
            role="group"
            aria-label="Language switcher"
            className="inline-flex items-center p-0.5 rounded-lg bg-[#DDF1E4]/70 border border-[#176B45]/15"
          >
            <button
              type="button"
              onClick={() => onToggleLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#176B45] ${
                lang === 'en'
                  ? 'bg-[#FFFFFF] text-[#176B45] shadow-xs'
                  : 'text-[#242B27]/75 hover:text-[#176B45]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onToggleLang('hi')}
              aria-pressed={lang === 'hi'}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#176B45] ${
                lang === 'hi'
                  ? 'bg-[#FFFFFF] text-[#176B45] shadow-xs'
                  : 'text-[#242B27]/75 hover:text-[#176B45]'
              }`}
            >
              हिंदी
            </button>
          </div>

          {/* Primary CTA (hidden on very small phones, visible from sm upwards) */}
          <a
            href="#about-ssy"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#176B45] hover:bg-[#125637] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#176B45]"
          >
            {t.exploreCta}
          </a>

          {/* Mobile / Tablet Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.closeMenuLabel : t.openMenuLabel}
            className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#242B27]/15 bg-white text-[#242B27] hover:bg-[#DDF1E4]/50 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#176B45]"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#FAF9F4] border-b border-[#242B27]/10 px-4 py-4 shadow-sm">
          <nav
            aria-label="Mobile navigation"
            className="grid grid-cols-2 sm:grid-cols-4 gap-2"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#242B27] hover:bg-[#DDF1E4]/60 hover:text-[#176B45] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 pt-3 border-t border-[#242B27]/10 sm:hidden">
            <a
              href="#about-ssy"
              onClick={handleLinkClick}
              className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-[#176B45] hover:bg-[#125637] rounded-lg transition-colors"
            >
              {t.exploreCta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
