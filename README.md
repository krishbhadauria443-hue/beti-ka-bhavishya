# BETI KA BHAVISHYA — Community Development Project (CDP)

**Project Title:** Awareness and Understanding of Sukanya Samriddhi Yojana Among Rural Communities  
**Institution:** SGT University, Gurugram, Haryana, India  
**Course:** Bachelor of Computer Applications (BCA)  
**Subject:** Community Development Project (CDP)  
**Team Members:** Adarsh Rathaur, Tanmay, Jaya, Gunika, Yuvraj, and Kashish  
**Faculty Guide:** Ms. Sanchita  

> **Academic Disclaimer:** This website is an educational awareness initiative created by BCA students of SGT University. It is **not** an official government portal. Scheme details, interest rates, and tax rules should always be verified through official Government of India sources.

---

## 1. Project Introduction

As part of our Bachelor of Computer Applications (BCA) Community Development Project at SGT University, our team participated in a college-organized village visit. During this field visit, we interacted directly with village residents and conducted a structured awareness survey regarding **Sukanya Samriddhi Yojana (SSY)** using a Google Forms questionnaire.

This web application serves two purposes:
1. **Community Education:** Explaining Sukanya Samriddhi Yojana clearly in both **English** and **conversational Hindi** without complex banking jargon.
2. **Academic Presentation:** Presenting our survey methodology, interactive data visualization dashboard, potential observation areas, recommendations, and learning outcomes in a clean, accessible format.

---

## 2. Project Objectives

1. To understand the awareness level of Sukanya Samriddhi Yojana among village residents.
2. To identify how many people are familiar and unfamiliar with the scheme.
3. To understand the knowledge of residents regarding the benefits and eligibility of the scheme.
4. To educate people about the importance of financial planning for girl children.
5. To encourage families to explore suitable government savings schemes.
6. To use digital technology as a medium for spreading social awareness.

---

## 3. Technologies Used

- **React 19** — Component-based user interface library.
- **TypeScript** — Type-safe JavaScript for cleaner, bug-free data structures and components.
- **Tailwind CSS v4** — Utility-first CSS framework for responsive desktop, tablet, and mobile layouts.
- **Recharts** — Lightweight React charting library for responsive Pie/Donut and Bar charts.
- **Lucide React** — Clean, consistent open-source vector icons.
- **Vite** — Fast frontend build tool and local development server.

---

## 4. Project Folder Structure

```text
├── index.html                           # HTML entry point, SEO meta tags, Google Fonts
├── metadata.json                        # Project metadata
├── package.json                         # Dependencies & npm scripts
├── README.md                            # Academic & viva documentation
└── src/
    ├── App.tsx                          # Root application component & language state
    ├── index.css                        # Global Tailwind styles, typography & colors
    ├── main.tsx                         # React DOM entry point
    ├── assets/
    │   └── images/                      # Optimized local project photographs
    ├── data/
    │   ├── projectConfig.ts             # Centralized editable config (team, survey data, validation)
    │   └── translations.ts              # Complete English ('en') & Hindi ('hi') translation dictionary
    └── components/
        ├── Navbar.tsx                   # Sticky header, mobile hamburger menu & EN/हिंदी toggle
        ├── HeroSection.tsx              # Homepage banner with mother-daughter photo & CTAs
        ├── ProjectIntroSection.tsx      # Village visit overview & digital-community synergy
        ├── AboutSSYSection.tsx          # SSY introduction, 2015 launch & savings lifecycle
        ├── ObjectivesSection.tsx        # 6 project objective cards
        ├── BenefitsSection.tsx          # 8 SSY key features & official verification note
        ├── HowToOpenSection.tsx         # 4-step account opening guide & India Post link
        ├── SurveyMethodologySection.tsx # Survey approach, Google Forms & editable field record
        ├── SurveyDashboardSection.tsx   # KPI cards, 3 Recharts charts & live Viva calculator
        ├── FindingsSection.tsx          # 5 observation areas & verification placeholder
        ├── WhyAwarenessMattersSection.tsx # Financial literacy & community awareness context
        ├── RecommendationsSection.tsx   # 7 actionable steps & BCA tech contribution
        ├── FAQSection.tsx               # Interactive 10-question bilingual accordion
        ├── TeamAndOutcomesSection.tsx   # SGT University team cards & 7 learning outcomes
        ├── ReferencesSection.tsx        # Official Government of India portal links
        ├── Footer.tsx                   # Disclaimer, quick links & copyright
        └── SafeImage.tsx                # Resilient image component with fallback UI
```

---

## 5. Explanation of Important React Components

- **`Navbar.tsx`**: Renders a sticky top navigation bar with smooth-scrolling anchor links, a mobile-friendly hamburger drawer, and the `EN | हिंदी` segmented toggle button.
- **`SurveyDashboardSection.tsx`**: Uses `useMemo` to derive statistics via `computeSurveyStats()` and passes formatted arrays to Recharts `<PieChart>` and `<BarChart>` components inside `<ResponsiveContainer>`. It also includes an optional **"Viva Demo"** panel to test live percentage recalculations without modifying source files.
- **`FAQSection.tsx`**: Uses React `useState` (`openIndex`) to expand and collapse one question at a time with proper `aria-expanded` accessibility attributes.
- **`SafeImage.tsx`**: Wraps standard `<img>` tags with an `onError` handler so no broken image frame ever appears.

---

## 6. Explanation of Bilingual Functionality (`EN | हिंदी`)

All visible text on the website is stored inside a single centralized TypeScript object in `src/data/translations.ts` with two top-level keys: `en` and `hi`.

- In `src/App.tsx`, `const [lang, setLang] = useState<Language>('en')` stores the active language.
- Selecting `EN` or `हिंदी` in the navigation bar updates `lang` in state, immediately re-rendering every section with `TRANSLATIONS[lang]`.
- Because navigation uses smooth scrolling on a single page, the selected language stays preserved as users move between sections.
- `useEffect` also updates `document.documentElement.lang` (`"en"` or `"hi"`) so Devanagari fonts (`Noto Sans Devanagari`) and screen readers behave accurately.

---

## 7. Explanation of How Survey Charts Work

Charts are powered by **Recharts** inside `src/components/SurveyDashboardSection.tsx`:
1. **Chart 1 (Awareness Distribution):** A `<PieChart>` (donut style with `innerRadius` and `outerRadius`) showing **Aware** vs. **Unaware** counts and auto-calculated percentages.
2. **Chart 2 (Awareness Comparison):** A vertical `<BarChart>` comparing **Aware**, **Unaware**, and **Interested in Learning More** counts.
3. **Chart 3 (Question-wise Analysis):** A horizontal stacked `<BarChart layout="vertical">` comparing `Yes`, `No`, and `Unsure` responses across the 5 core survey questions.

All charts are wrapped in `<ResponsiveContainer width="100%" height="100%">` so they resize smoothly across desktop, tablet, and mobile screens.

---

## 8. Instructions to Update Survey Figures

Open **`src/data/projectConfig.ts`** and edit:

1. **Field Metadata (`FIELD_SURVEY_RECORD`):**
   Update `villageNameEn` / `villageNameHi`, `surveyDateEn` / `surveyDateHi`, and `totalRespondentsEn` / `totalRespondentsHi` once verified village records are finalized.
2. **Survey Numbers (`INITIAL_SURVEY_DATA`):**
   - Set `totalRespondents`, `awareCount`, `unawareCount`, and `interestedCount`.
   - Ensure `awareCount + unawareCount === totalRespondents` and all values are non-negative.
   - Only set `isVerifiedData: true` once verified field figures have been entered (while `false`, the website automatically displays the **Illustrative Sample Data** warning banner).
3. **Observations (`SURVEY_OBSERVATION_AREAS`):**
   Update the `statusEn`/`statusHi` and `noteEn`/`noteHi` fields for each of the five observation areas.

---

## 9. Instructions to Run the Website Locally

Make sure **Node.js (v18+)** and **npm** are installed on your computer.

```bash
# 1. Install project dependencies
npm install

# 2. Start the local development server (runs on port 3000)
npm run dev
```

Then open your browser and visit `http://localhost:3000`.

---

## 10. Instructions to Deploy the Website

To create an optimized production build:

```bash
# 1. Verify TypeScript types
npm run lint

# 2. Build static files into dist/
npm run build
```

You can preview the production build locally using `npm run preview`, or deploy the generated `dist/` folder directly to static hosting platforms such as **Vercel**, **Netlify**, or **GitHub Pages**.
