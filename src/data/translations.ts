import { Language } from './projectConfig';

export interface TranslationContent {
  nav: {
    brand: string;
    home: string;
    about: string;
    objectives: string;
    benefits: string;
    survey: string;
    findings: string;
    faq: string;
    team: string;
    exploreCta: string;
    openMenuLabel: string;
    closeMenuLabel: string;
  };
  hero: {
    kicker: string;
    headline: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    initiativeNote: string;
    imageAlt: string;
    scrollLabel: string;
  };
  intro: {
    eyebrow: string;
    heading: string;
    lead: string;
    points: string[];
    synergyTitle: string;
    synergyText: string;
    imageAlt: string;
    imageCaption: string;
  };
  aboutSsy: {
    eyebrow: string;
    heading: string;
    introParagraph: string;
    pillars: {
      title: string;
      text: string;
    }[];
    highlightQuote: string;
    lifecycleTitle: string;
    lifecycleSteps: {
      stage: string;
      title: string;
      detail: string;
    }[];
  };
  objectives: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  benefits: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    cards: {
      label: string;
      value: string;
      detail: string;
    }[];
    disclaimer: string;
  };
  howToOpen: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    steps: {
      stepNumber: string;
      title: string;
      description: string;
    }[];
    ctaButton: string;
    ctaNote: string;
  };
  methodology: {
    eyebrow: string;
    heading: string;
    intro: string;
    approachTitle: string;
    approachText: string;
    collectionTitle: string;
    collectionText: string;
    purposeTitle: string;
    purposeItems: string[];
    processTitle: string;
    processSteps: string[];
    recordTitle: string;
    recordNote: string;
    fields: {
      villageLabel: string;
      dateLabel: string;
      respondentsLabel: string;
      teamLabel: string;
    };
  };
  dashboard: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    sampleWarningTitle: string;
    sampleWarningBody: string;
    verifiedBadgeText: string;
    cards: {
      totalTitle: string;
      totalSub: string;
      awareTitle: string;
      awareSub: string;
      unawareTitle: string;
      unawareSub: string;
      interestedTitle: string;
      interestedSub: string;
    };
    chart1Title: string;
    chart1Subtitle: string;
    chart2Title: string;
    chart2Subtitle: string;
    chart3Title: string;
    chart3Subtitle: string;
    legendAware: string;
    legendUnaware: string;
    legendInterested: string;
    legendYes: string;
    legendNo: string;
    legendUnsure: string;
    respondentsUnit: string;
    calculatorToggleOpen: string;
    calculatorToggleClose: string;
    calculatorTitle: string;
    calculatorHelp: string;
    inputTotal: string;
    inputAware: string;
    inputUnaware: string;
    inputInterested: string;
    resetButton: string;
  };
  findings: {
    eyebrow: string;
    heading: string;
    statusBanner: string;
    intro: string;
    analysisExplanationTitle: string;
    analysisExplanation: string;
    actualObservationsTitle: string;
    actualObservationsPlaceholder: string;
  };
  whyAwareness: {
    eyebrow: string;
    heading: string;
    quote: string;
    imageAlt: string;
    imageCaption: string;
    cards: {
      title: string;
      description: string;
    }[];
  };
  recommendations: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: string[];
    techTitle: string;
    techDescription: string;
    imageAlt: string;
    imageCaption: string;
  };
  faq: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  team: {
    eyebrow: string;
    heading: string;
    description: string;
    metaLabels: {
      college: string;
      course: string;
      subject: string;
      project: string;
      facultyGuide: string;
    };
    projectNameValue: string;
    outcomesEyebrow: string;
    outcomesHeading: string;
    outcomesIntro: string;
    outcomesList: string[];
  };
  references: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    distinctionNote: string;
    visitLinkText: string;
  };
  footer: {
    description: string;
    quickLinksTitle: string;
    officialLinksTitle: string;
    academicInfoTitle: string;
    disclaimer: string;
    copyright: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  en: {
    nav: {
      brand: 'BETI KA BHAVISHYA',
      home: 'Home',
      about: 'About SSY',
      objectives: 'Objectives',
      benefits: 'Benefits',
      survey: 'Survey',
      findings: 'Findings',
      faq: 'FAQ',
      team: 'Our Team',
      exploreCta: 'Explore SSY',
      openMenuLabel: 'Open navigation menu',
      closeMenuLabel: 'Close navigation menu',
    },
    hero: {
      kicker: 'Community Development Project · SGT University',
      headline: 'Every Daughter Deserves a Secure Future.',
      supporting:
        'Empowering families through awareness of Sukanya Samriddhi Yojana – a government savings scheme that supports the financial future of girl children.',
      primaryCta: 'Explore the Scheme',
      secondaryCta: 'View Our Survey',
      initiativeNote: 'A Community Development Initiative by BCA Students of SGT University.',
      imageAlt:
        'An Indian mother in a green cotton saree smiling alongside her school-going daughter holding notebooks in a sunlit rural courtyard.',
      scrollLabel: 'Scroll to explore',
    },
    intro: {
      eyebrow: 'Project Introduction',
      heading: 'About Our Community Development Project',
      lead: 'As part of our Bachelor of Computer Applications (BCA) curriculum at SGT University, we visited a nearby rural community to understand how familiar local families are with government savings schemes meant for daughters.',
      points: [
        'Our college organized a village visit as part of the Community Development Project (CDP).',
        'We interacted directly with local residents, parents, and elders in an open and friendly setting.',
        'We conducted a structured survey to understand awareness about Sukanya Samriddhi Yojana (SSY).',
        'We collected resident responses systematically through a Google Forms questionnaire.',
        'Through conversations, we recognized how important it is to explain government savings schemes in simple, everyday language.',
        'We built this bilingual website as a digital awareness initiative so families and students can easily read and share accurate information.',
      ],
      synergyTitle: 'Connecting Community Interaction with Digital Technology',
      synergyText:
        'In-person village visits build trust and reveal real questions residents have, while digital platforms organize that information into clear, accessible English and Hindi resources that anyone with a phone can revisit anytime.',
      imageAlt:
        'BCA college students speaking warmly with village parents and elders seated in a sunlit rural verandah.',
      imageCaption: 'Community interaction and field survey conversations during rural outreach.',
    },
    aboutSsy: {
      eyebrow: 'Understanding the Scheme',
      heading: 'What is Sukanya Samriddhi Yojana?',
      introParagraph:
        'Sukanya Samriddhi Yojana (SSY) is a dedicated small-savings scheme backed by the Government of India, created to encourage families to save systematically for a girl child’s higher education and long-term financial security.',
      pillars: [
        {
          title: 'Launched in 2015',
          text: 'Introduced in January 2015, the scheme offers families a reliable, government-backed way to start building savings early in a daughter’s life.',
        },
        {
          title: 'Linked with Beti Bachao Beti Padhao',
          text: 'SSY works alongside the Beti Bachao Beti Padhao campaign to support both the education and financial dignity of girl children across India.',
        },
        {
          title: 'Opened by Parents or Guardians',
          text: 'A parent or legal guardian can open and manage the account in the girl’s name at an authorized post office or participating bank.',
        },
        {
          title: 'Built for Long-Term Planning',
          text: 'Regular, affordable deposits over the years help families prepare steadily for future college fees and life milestones without sudden financial strain.',
        },
      ],
      highlightQuote: '“Small savings today can help create a stronger tomorrow.”',
      lifecycleTitle: 'How the Savings Journey Works',
      lifecycleSteps: [
        {
          stage: 'Stage 01 · Below Age 10',
          title: 'Open the Account',
          detail: 'Parent or legal guardian opens an SSY account for a daughter under 10 years of age with as little as ₹250.',
        },
        {
          stage: 'Stage 02 · Years 1 to 15',
          title: 'Steady Annual Savings',
          detail: 'Deposit between ₹250 and ₹1,50,000 per financial year for 15 years according to family capacity.',
        },
        {
          stage: 'Stage 03 · Higher Education',
          title: 'Eligible Partial Support',
          detail: 'Partial withdrawal is permitted for the daughter’s higher education as per official scheme guidelines.',
        },
        {
          stage: 'Stage 04 · 21 Years',
          title: 'Full Maturity',
          detail: 'The account generally matures 21 years from the date of opening, securing her future independence.',
        },
      ],
    },
    objectives: {
      eyebrow: 'Study Scope',
      heading: 'Our Project Objectives',
      subtitle:
        'Six focused goals guided both our village field survey and the design of this bilingual awareness platform.',
      items: [
        {
          title: 'Assess Village Awareness',
          description:
            'To understand the awareness level of Sukanya Samriddhi Yojana among village residents.',
        },
        {
          title: 'Measure Familiarity Gaps',
          description:
            'To identify how many people are familiar and unfamiliar with the scheme.',
        },
        {
          title: 'Check Scheme Knowledge',
          description:
            'To understand the knowledge of residents regarding the benefits and eligibility of the scheme.',
        },
        {
          title: 'Educate on Financial Planning',
          description:
            'To educate people about the importance of financial planning for girl children.',
        },
        {
          title: 'Encourage Informed Exploration',
          description:
            'To encourage families to explore suitable government savings schemes.',
        },
        {
          title: 'Apply Digital Technology',
          description:
            'To use digital technology as a medium for spreading social awareness.',
        },
      ],
    },
    benefits: {
      eyebrow: 'Key Features & Rules',
      heading: 'Why Sukanya Samriddhi Yojana Matters',
      subtitle:
        'Understanding the core parameters helps parents plan confidently without complex banking jargon.',
      cards: [
        {
          label: 'Eligibility',
          value: 'Below 10 Years',
          detail:
            'An account can generally be opened for a girl child below 10 years of age by a parent or legal guardian.',
        },
        {
          label: 'Minimum Deposit',
          value: '₹250 / Year',
          detail:
            'Accessible entry threshold of ₹250 per financial year so every household can participate.',
        },
        {
          label: 'Maximum Deposit',
          value: '₹1,50,000 / Year',
          detail:
            'Families can deposit up to ₹1,50,000 in a financial year, in lump sum or installments.',
        },
        {
          label: 'Deposit Period',
          value: '15 Years',
          detail:
            'Deposits are required for 15 years from the date of account opening.',
        },
        {
          label: 'Maturity Period',
          value: '21 Years',
          detail:
            'The account generally matures 21 years after opening, building a substantial long-term corpus.',
        },
        {
          label: 'Interest Rate',
          value: 'Govt. Notified',
          detail:
            'Interest is determined by the Government of India and may change periodically.',
        },
        {
          label: 'Tax Benefits',
          value: 'As Per Tax Laws',
          detail:
            'Applicable tax benefits are available subject to prevailing income tax laws.',
        },
        {
          label: 'Education Support',
          value: 'Partial Withdrawal',
          detail:
            'Eligible partial withdrawals can be made for higher education according to scheme rules.',
        },
      ],
      disclaimer:
        'Note: Scheme rules, eligibility conditions, interest rates and tax provisions are subject to government notifications. Please verify current details through official sources.',
    },
    howToOpen: {
      eyebrow: 'Step-by-Step Guide',
      heading: 'How Can You Open an Account?',
      subtitle:
        'An SSY account is opened offline at authorized post offices and participating banks. Follow these four straightforward steps.',
      steps: [
        {
          stepNumber: 'Step 01',
          title: 'Visit Authorized Center',
          description: 'Visit an authorized post office or participating bank branch near your village or town.',
        },
        {
          stepNumber: 'Step 02',
          title: 'Collect the Form',
          description: 'Obtain the official Sukanya Samriddhi Account opening form from the counter.',
        },
        {
          stepNumber: 'Step 03',
          title: 'Submit Documents',
          description:
            'Submit the required documents, including the girl’s birth certificate and applicable identity and address documents of the parent or guardian.',
        },
        {
          stepNumber: 'Step 04',
          title: 'Initial Deposit',
          description:
            'Complete the account-opening verification procedure and make the initial deposit to receive your passbook.',
        },
      ],
      ctaButton: 'Know More About SSY',
      ctaNote: 'Opens official India Post small savings portal in a new tab.',
    },
    methodology: {
      eyebrow: 'Field Research Design',
      heading: 'Understanding Awareness at the Ground Level',
      intro:
        'Before designing awareness material, we wanted to listen to residents first. Our methodology combined face-to-face community conversations with structured digital recording.',
      approachTitle: 'Survey Approach',
      approachText:
        'We conducted a community-based awareness survey during our college-organized village visit, speaking respectfully with families in their local environment.',
      collectionTitle: 'Data Collection Method',
      collectionText:
        'We interacted with village residents and collected responses using a structured questionnaire through Google Forms so every response remained organized.',
      purposeTitle: 'Survey Purpose',
      purposeItems: [
        'Whether residents had heard about Sukanya Samriddhi Yojana.',
        'Whether they understood its purpose.',
        'Whether they knew its benefits.',
        'Whether they were aware of its eligibility conditions.',
        'Whether they wanted additional information about the scheme.',
      ],
      processTitle: 'Six-Step Survey Process',
      processSteps: [
        'Selection of the survey topic',
        'Preparation of questionnaire',
        'Village visit and interaction with residents',
        'Collection of responses',
        'Understanding and analysis of awareness levels',
        'Preparation of a digital awareness platform',
      ],
      recordTitle: 'Field Survey Record',
      recordNote:
        'Editable placeholders below await final verified village survey documentation.',
      fields: {
        villageLabel: 'Village Name',
        dateLabel: 'Survey Date',
        respondentsLabel: 'Total Respondents',
        teamLabel: 'Survey Team',
      },
    },
    dashboard: {
      eyebrow: 'Interactive Survey Dashboard',
      heading: 'What Did Our Survey Help Us Understand?',
      subtitle:
        'Visualizing awareness levels, response ratios, and question-wise patterns. All figures are managed centrally and recalculate percentages automatically.',
      sampleWarningTitle:
        'ILLUSTRATIVE SAMPLE DATA – THESE FIGURES ARE NOT VERIFIED RESULTS FROM OUR VILLAGE SURVEY.',
      sampleWarningBody:
        'The numbers displayed below are demonstration placeholders (100 total, 35 aware, 65 unaware) to show how our survey analytics dashboard works once verified village responses are entered.',
      verifiedBadgeText: 'Verified Village Survey Results Active',
      cards: {
        totalTitle: 'Total Respondents',
        totalSub: 'Sample baseline for analysis',
        awareTitle: 'People Aware of SSY',
        awareSub: 'Of total respondents',
        unawareTitle: 'People Unaware of SSY',
        unawareSub: 'Need clear outreach',
        interestedTitle: 'Interested in Learning More',
        interestedSub: 'Open to simple guidance',
      },
      chart1Title: 'Chart 1: Awareness Distribution',
      chart1Subtitle: 'Proportion of respondents aware vs. unaware of SSY',
      chart2Title: 'Chart 2: Awareness Comparison',
      chart2Subtitle: 'Headcount comparison across awareness & interest categories',
      chart3Title: 'Chart 3: Question-wise Analysis',
      chart3Subtitle: 'Illustrative distribution across the five core survey questions',
      legendAware: 'Aware of SSY',
      legendUnaware: 'Unaware of SSY',
      legendInterested: 'Interested in Info',
      legendYes: 'Yes',
      legendNo: 'No',
      legendUnsure: 'Unsure / Need Clarity',
      respondentsUnit: 'residents',
      calculatorToggleOpen: 'Test Dashboard Calculations (Viva Demo)',
      calculatorToggleClose: 'Hide Viva Demo Controls',
      calculatorTitle: 'Live Calculation Preview (Viva Demonstration Only)',
      calculatorHelp:
        'Adjust figures below to test automatic percentage updates and validation (Aware + Unaware must equal Total Respondents). Changes here preview locally and do not alter saved files.',
      inputTotal: 'Total Respondents',
      inputAware: 'Aware of SSY',
      inputUnaware: 'Unaware of SSY',
      inputInterested: 'Interested in Learning More',
      resetButton: 'Reset to Sample Baseline',
    },
    findings: {
      eyebrow: 'Key Observations & Findings',
      heading: 'What Can We Learn from Community Awareness Surveys?',
      statusBanner:
        'Potential Areas of Awareness Assessment – Actual Findings Await Verification.',
      intro:
        'Community surveys help uncover where information gaps exist—whether people have never heard of a scheme, know its name without knowing eligibility rules, or hesitate because of document confusion.',
      analysisExplanationTitle: 'Why Structured Survey Analysis Matters',
      analysisExplanation:
        'By reviewing responses across these five dimensions, student teams and local volunteers can focus awareness meetings on the exact questions families struggle with—such as minimum deposit affordability or which post office documents to carry—rather than repeating generic slogans.',
      actualObservationsTitle: 'Space for Verified Field Observations',
      actualObservationsPlaceholder:
        'Verified village-specific conclusions will be documented here once final Google Forms response sheets are validated. No unverified conclusions about village residents are assumed in advance.',
    },
    whyAwareness: {
      eyebrow: 'Social Purpose',
      heading: 'Creating Awareness, Building Better Futures',
      quote: '“An informed community is a stronger community.”',
      imageAlt:
        'A young Indian girl studying attentively at a wooden desk with textbooks and a traditional clay piggy bank by a sunlit window.',
      imageCaption: 'Connecting everyday household savings with a daughter’s educational aspirations.',
      cards: [
        {
          title: 'Financial Literacy in Rural Communities',
          description:
            'Many rural households save diligently at home, yet lack clear guidance on formal, safe savings options that protect long-term value.',
        },
        {
          title: 'Knowing Government Savings Schemes',
          description:
            'Schemes like SSY are designed with low minimum deposits specifically so modest-income families can participate safely.',
        },
        {
          title: 'Supporting Informed Parental Decisions',
          description:
            'When parents know eligibility, maturity timelines, and withdrawal rules clearly, they can plan education milestones with confidence.',
        },
        {
          title: 'Students in Community Development',
          description:
            'College students bridge the gap between complex policy portals and everyday village conversations using empathy and digital tools.',
        },
      ],
    },
    recommendations: {
      eyebrow: 'Actionable Recommendations',
      heading: 'How Can We Improve Awareness?',
      subtitle:
        'Practical, community-friendly steps that combine local outreach with accessible digital guidance.',
      items: [
        'Organize village-level awareness meetings with parents, elders, and local community leaders.',
        'Distribute simple informational pamphlets in Hindi and local languages.',
        'Use visual posters and trusted local communication channels such as schools and panchayat boards.',
        'Explain eligibility, deposit limits, and benefits in clear, understandable everyday language.',
        'Encourage families to visit authorized post offices and participating banks for official guidance.',
        'Conduct follow-up surveys later to measure genuine improvements in community awareness.',
        'Use digital platforms like bilingual websites to make verified government scheme information easy to access.',
      ],
      techTitle: 'How BCA Students Contribute Through Technology',
      techDescription:
        'As Bachelor of Computer Applications students, we apply web development, responsive design, bilingual content structuring, and data visualization skills to translate technical scheme notifications into an easy-to-read portal that families can open on any smartphone.',
      imageAlt:
        'A rural community awareness gathering under a shaded village tree where educators explain savings concepts with visual charts.',
      imageCaption: 'Accessible community sessions paired with visual charts and simple language.',
    },
    faq: {
      eyebrow: 'Common Questions',
      heading: 'Frequently Asked Questions',
      subtitle:
        'Short, accurate answers to the most common questions families ask about Sukanya Samriddhi Yojana.',
      items: [
        {
          question: '1. What is Sukanya Samriddhi Yojana?',
          answer:
            'Sukanya Samriddhi Yojana (SSY) is a Government of India small savings scheme designed to help parents and guardians build long-term financial savings for a girl child’s future education and security.',
        },
        {
          question: '2. Who can open an SSY account?',
          answer:
            'A parent or legal guardian can open an SSY account on behalf of a girl child who is below 10 years of age at the time of opening.',
        },
        {
          question: '3. What is the minimum annual deposit?',
          answer:
            'The minimum deposit required to keep an SSY account active is ₹250 per financial year.',
        },
        {
          question: '4. What is the maximum annual deposit?',
          answer:
            'A maximum of ₹1,50,000 can be deposited into an SSY account in a single financial year.',
        },
        {
          question: '5. What is the maturity period?',
          answer:
            'An SSY account generally matures 21 years from the date of account opening, while deposits are made for the first 15 years.',
        },
        {
          question: '6. Where can an account be opened?',
          answer:
            'An SSY account can be opened at any authorized India Post office or participating public/private sector bank branch.',
        },
        {
          question: '7. What documents are required?',
          answer:
            'Typically, the girl child’s birth certificate, the parent or guardian’s identity proof and address proof, and the completed account-opening form are required.',
        },
        {
          question: '8. Can money be withdrawn before maturity?',
          answer:
            'Yes, eligible partial withdrawals are permitted for the daughter’s higher education according to official scheme rules and age/education criteria.',
        },
        {
          question: '9. Does the government change the interest rate?',
          answer:
            'Yes. Interest rates on Sukanya Samriddhi Yojana are notified by the Government of India and are reviewed periodically.',
        },
        {
          question: '10. What is the connection between SSY and Beti Bachao Beti Padhao?',
          answer:
            'Sukanya Samriddhi Yojana was launched in 2015 as a financial pillar supporting the Beti Bachao Beti Padhao initiative, encouraging families to invest in their daughters’ education and future.',
        },
      ],
    },
    team: {
      eyebrow: 'Academic Project Team',
      heading: 'Meet the Project Team',
      description:
        'This project represents our collaborative effort to understand a community-level issue and use technology to spread awareness.',
      metaLabels: {
        college: 'College',
        course: 'Course',
        subject: 'Subject',
        project: 'Project',
        facultyGuide: 'Faculty Guide',
      },
      projectNameValue: 'Sukanya Samriddhi Yojana Awareness Campaign',
      outcomesEyebrow: 'Academic Reflections',
      outcomesHeading: 'Our Learning and Project Outcomes',
      outcomesIntro:
        'Beyond technical website creation, this Community Development Project helped our team develop practical academic and civic skills:',
      outcomesList: [
        'Understanding real-world community problems through respectful field interaction.',
        'Developing clear communication and listening skills with diverse rural residents.',
        'Learning about government financial inclusion initiatives and small savings schemes.',
        'Understanding structured questionnaire-based data collection using Google Forms.',
        'Learning basic data analysis, percentage validation, and interactive visualization.',
        'Applying BCA web development skills (React, TypeScript, Tailwind) to a social awareness project.',
        'Understanding the practical role of digital technology in supporting community development.',
      ],
    },
    references: {
      eyebrow: 'Official Sources',
      heading: 'References and Official Information',
      subtitle:
        'Always verify current interest rates, tax rules, and account forms directly through authorized Government of India portals.',
      distinctionNote:
        'Academic Distinction: Content on this website is prepared by BCA students for educational awareness. The external links below lead to official Government of India websites.',
      visitLinkText: 'Visit Official Portal',
    },
    footer: {
      description:
        'An academic Community Development Project dedicated to explaining Sukanya Samriddhi Yojana in clear, accessible English and Hindi.',
      quickLinksTitle: 'Quick Navigation',
      officialLinksTitle: 'Official Information',
      academicInfoTitle: 'Academic Context',
      disclaimer:
        'This website is an educational awareness initiative developed by BCA students of SGT University. It is not an official government portal. Scheme details should be verified through authorized government sources.',
      copyright: '© 2026 Beti Ka Bhavishya | BCA Community Development Project.',
    },
  },
  hi: {
    nav: {
      brand: 'बेटी का भविष्य',
      home: 'होम',
      about: 'SSY के बारे में',
      objectives: 'उद्देश्य',
      benefits: 'लाभ',
      survey: 'सर्वेक्षण',
      findings: 'निष्कर्ष',
      faq: 'सवाल-जवाब',
      team: 'हमारी टीम',
      exploreCta: 'योजना जानें',
      openMenuLabel: 'मेनू खोलें',
      closeMenuLabel: 'मेनू बंद करें',
    },
    hero: {
      kicker: 'सामुदायिक विकास परियोजना · एसजीटी विश्वविद्यालय',
      headline: 'हर बेटी एक सुरक्षित भविष्य की हकदार है।',
      supporting:
        'सुकन्या समृद्धि योजना की जागरूकता के माध्यम से परिवारों को सशक्त बनाना — एक ऐसी सरकारी बचत योजना जो बेटियों के आर्थिक भविष्य को सहारा देती है।',
      primaryCta: 'योजना के बारे में जानें',
      secondaryCta: 'हमारा सर्वेक्षण देखें',
      initiativeNote: 'एसजीटी विश्वविद्यालय के BCA छात्रों की एक सामुदायिक विकास पहल।',
      imageAlt:
        'हरे रंग की सूती साड़ी में एक भारतीय माँ अपनी स्कूल जाने वाली बेटी के साथ धूप से भरे गाँव के आँगन में मुस्कुराते हुए खड़ी हैं।',
      scrollLabel: 'नीचे देखें',
    },
    intro: {
      eyebrow: 'परियोजना परिचय',
      heading: 'हमारी सामुदायिक विकास परियोजना के बारे में',
      lead: 'एसजीटी विश्वविद्यालय में अपने बैचलर ऑफ कंप्यूटर एप्लीकेशन्स (BCA) पाठ्यक्रम के हिस्से के रूप में, हमने एक ग्रामीण समुदाय का दौरा किया ताकि यह समझा जा सके कि स्थानीय परिवार बेटियों की सरकारी बचत योजनाओं के बारे में कितना जानते हैं।',
      points: [
        'हमारे कॉलेज ने सामुदायिक विकास परियोजना (CDP) के तहत एक गाँव के दौरे का आयोजन किया।',
        'हमने गाँव के निवासियों, माता-पिता और बुजुर्गों से सहज और आत्मीय माहौल में बातचीत की।',
        'सुकन्या समृद्धि योजना (SSY) के प्रति जागरूकता को समझने के लिए हमने एक सर्वेक्षण किया।',
        'हमने Google Forms प्रश्नावली के माध्यम से व्यवस्थित रूप से लोगों के उत्तर एकत्र किए।',
        'बातचीत के दौरान हमें महसूस हुआ कि सरकारी बचत योजनाओं को सरल, बोलचाल की भाषा में समझाना कितना ज़रूरी है।',
        'हमने इस द्विभाषी वेबसाइट को एक डिजिटल जागरूकता पहल के रूप में बनाया है ताकि परिवार और छात्र आसानी से सही जानकारी पढ़ सकें।',
      ],
      synergyTitle: 'सामुदायिक संवाद और डिजिटल तकनीक का संगम',
      synergyText:
        'गाँव के प्रत्यक्ष दौरे से लोगों का विश्वास बनता है और उनके असली सवाल सामने आते हैं, जबकि डिजिटल प्लेटफॉर्म उस जानकारी को सरल हिंदी और अंग्रेज़ी में व्यवस्थित करता है जिसे कोई भी अपने फोन पर कभी भी पढ़ सकता है।',
      imageAlt:
        'BCA कॉलेज के छात्र धूप से भरे गाँव के बरामदे में ग्रामीण माता-पिता और बुजुर्गों से सम्मानपूर्वक बातचीत करते हुए।',
      imageCaption: 'ग्रामीण दौरे के दौरान सामुदायिक संवाद और सर्वेक्षण बातचीत।',
    },
    aboutSsy: {
      eyebrow: 'योजना की समझ',
      heading: 'सुकन्या समृद्धि योजना क्या है?',
      introParagraph:
        'सुकन्या समृद्धि योजना (SSY) भारत सरकार द्वारा समर्थित एक विशेष लघु बचत योजना है। इसे परिवारों को बेटी की उच्च शिक्षा और उसके सुरक्षित भविष्य के लिए नियमित बचत करने हेतु प्रोत्साहित करने के लिए बनाया गया है।',
      pillars: [
        {
          title: '2015 में शुरुआत',
          text: 'जनवरी 2015 में शुरू हुई यह योजना परिवारों को बेटी के बचपन से ही सुरक्षित बचत शुरू करने का एक विश्वसनीय सरकारी माध्यम देती है।',
        },
        {
          title: 'बेटी बचाओ बेटी पढ़ाओ से जुड़ाव',
          text: 'SSY योजना "बेटी बचाओ बेटी पढ़ाओ" अभियान के साथ मिलकर पूरे भारत में बेटियों की शिक्षा और आर्थिक सुरक्षा को मजबूती देती है।',
        },
        {
          title: 'माता-पिता या अभिभावक द्वारा खाता',
          text: 'माता-पिता या कानूनी अभिभावक किसी अधिकृत डाकघर या बैंक में बेटी के नाम पर यह खाता खोल सकते हैं और चला सकते हैं।',
        },
        {
          title: 'दीर्घकालिक योजना के लिए उपयोगी',
          text: 'वर्षों तक थोड़ी-थोड़ी नियमित बचत करने से परिवार बिना अचानक आर्थिक बोझ के बेटी की आगे की पढ़ाई और भविष्य की तैयारी कर सकते हैं।',
        },
      ],
      highlightQuote: '“आज की छोटी-सी बचत कल एक मजबूत भविष्य बना सकती है।”',
      lifecycleTitle: 'यह बचत योजना कैसे काम करती है',
      lifecycleSteps: [
        {
          stage: 'चरण 01 · 10 वर्ष से कम उम्र',
          title: 'खाता खुलवाएँ',
          detail: 'माता-पिता या कानूनी अभिभावक 10 वर्ष से कम उम्र की बेटी के लिए कम से कम ₹250 से SSY खाता खोल सकते हैं।',
        },
        {
          stage: 'चरण 02 · 1 से 15 वर्ष तक',
          title: 'नियमित वार्षिक बचत',
          detail: '15 वर्षों तक हर वित्त वर्ष में अपनी सुविधा के अनुसार ₹250 से ₹1,50,000 के बीच राशि जमा करें।',
        },
        {
          stage: 'चरण 03 · उच्च शिक्षा',
          title: 'पढ़ाई के लिए आंशिक निकासी',
          detail: 'योजना के नियमों के अनुसार बेटी की उच्च शिक्षा के लिए खाते से आंशिक राशि निकाली जा सकती है।',
        },
        {
          stage: 'चरण 04 · 21 वर्ष पूर्ण होने पर',
          title: 'पूर्ण परिपक्वता (Maturity)',
          detail: 'खाता खोलने की तारीख से सामान्यतः 21 वर्ष बाद खाता परिपक्व होता है, जिससे बेटी को आर्थिक संबल मिलता है।',
        },
      ],
    },
    objectives: {
      eyebrow: 'अध्ययन का दायरा',
      heading: 'हमारी परियोजना के उद्देश्य',
      subtitle:
        'हमारे ग्रामीण सर्वेक्षण और इस डिजिटल जागरूकता वेबसाइट के निर्माण का मार्गदर्शन इन छह प्रमुख उद्देश्यों ने किया है।',
      items: [
        {
          title: 'गाँव में जागरूकता जानना',
          description:
            'गाँव के निवासियों के बीच सुकन्या समृद्धि योजना की जागरूकता के स्तर को समझना।',
        },
        {
          title: 'जानकारी के अंतर की पहचान',
          description:
            'यह जानना कि कितने लोग इस योजना से परिचित हैं और कितने लोग इससे अनभिज्ञ हैं।',
        },
        {
          title: 'लाभ व पात्रता की समझ देखना',
          description:
            'योजना के लाभों और पात्रता शर्तों के बारे में लोगों के ज्ञान का आकलन करना।',
        },
        {
          title: 'वित्तीय योजना की शिक्षा देना',
          description:
            'बेटियों के भविष्य के लिए सही समय पर आर्थिक योजना बनाने के महत्व के बारे में जागरूक करना।',
        },
        {
          title: 'सरकारी योजनाओं को अपनाने की प्रेरणा',
          description:
            'परिवारों को उपयुक्त और सुरक्षित सरकारी बचत योजनाओं के बारे में जानने के लिए प्रोत्साहित करना।',
        },
        {
          title: 'डिजिटल तकनीक का उपयोग',
          description:
            'सामाजिक जागरूकता फैलाने के लिए डिजिटल तकनीक को एक सरल माध्यम के रूप में उपयोग करना।',
        },
      ],
    },
    benefits: {
      eyebrow: 'मुख्य विशेषताएँ एवं नियम',
      heading: 'सुकन्या समृद्धि योजना क्यों महत्वपूर्ण है',
      subtitle:
        'योजना की मुख्य शर्तों को सरल भाषा में समझने से माता-पिता बिना किसी उलझन के सही निर्णय ले सकते हैं।',
      cards: [
        {
          label: 'पात्रता (Eligibility)',
          value: '10 वर्ष से कम',
          detail:
            'माता-पिता या कानूनी अभिभावक द्वारा 10 वर्ष से कम उम्र की बालिका के लिए खाता खोला जा सकता है।',
        },
        {
          label: 'न्यूनतम जमा राशि',
          value: '₹250 / वर्ष',
          detail:
            'एक वित्त वर्ष में कम से कम ₹250 जमा करने की सुविधा, ताकि हर परिवार आसानी से जुड़ सके।',
        },
        {
          label: 'अधिकतम जमा राशि',
          value: '₹1,50,000 / वर्ष',
          detail:
            'एक वित्त वर्ष में एकमुश्त या किस्तों में अधिकतम ₹1,50,000 तक जमा किए जा सकते हैं।',
        },
        {
          label: 'जमा करने की अवधि',
          value: '15 वर्ष',
          detail:
            'खाता खुलने की तारीख से 15 वर्षों तक खाते में राशि जमा करनी होती है।',
        },
        {
          label: 'परिपक्वता अवधि',
          value: '21 वर्ष',
          detail:
            'खाता सामान्यतः खुलने के 21 वर्ष बाद परिपक्व होता है, जिससे अच्छी बचत तैयार होती है।',
        },
        {
          label: 'ब्याज दर',
          value: 'सरकार द्वारा तय',
          detail:
            'ब्याज दर भारत सरकार द्वारा निर्धारित की जाती है और समय-समय पर बदल सकती है।',
        },
        {
          label: 'कर (Tax) लाभ',
          value: 'नियमानुसार छूट',
          detail:
            'प्रचलित आयकर कानूनों के अधीन लागू कर लाभ उपलब्ध होते हैं।',
        },
        {
          label: 'शिक्षा सहायता',
          value: 'आंशिक निकासी',
          detail:
            'योजना के नियमों के अनुसार बेटी की उच्च शिक्षा के लिए आंशिक राशि निकाली जा सकती है।',
        },
      ],
      disclaimer:
        'नोट: योजना के नियम, पात्रता शर्तें, ब्याज दरें और कर प्रावधान सरकारी अधिसूचनाओं के अधीन हैं। कृपया वर्तमान विवरण की पुष्टि आधिकारिक स्रोतों से करें।',
    },
    howToOpen: {
      eyebrow: 'आसान प्रक्रिया',
      heading: 'आप खाता कैसे खोल सकते हैं?',
      subtitle:
        'SSY खाता अधिकृत डाकघरों और भाग लेने वाले बैंकों में ऑफलाइन खोला जाता है। इसके चार सरल चरण नीचे दिए गए हैं।',
      steps: [
        {
          stepNumber: 'चरण 01',
          title: 'नजदीकी केंद्र पर जाएँ',
          description: 'अपने गाँव या शहर के नजदीकी अधिकृत डाकघर या संबंधित बैंक शाखा में जाएँ।',
        },
        {
          stepNumber: 'चरण 02',
          title: 'आवेदन फॉर्म प्राप्त करें',
          description: 'काउंटर से सुकन्या समृद्धि खाता खोलने का आधिकारिक फॉर्म लें।',
        },
        {
          stepNumber: 'चरण 03',
          title: 'दस्तावेज जमा करें',
          description:
            'बेटी का जन्म प्रमाण पत्र तथा माता-पिता या अभिभावक के पहचान और पते के प्रमाण जैसे आवश्यक दस्तावेज जमा करें।',
        },
        {
          stepNumber: 'चरण 04',
          title: 'शुरुआती राशि जमा करें',
          description:
            'खाता खोलने की प्रक्रिया पूरी करें और शुरुआती जमा राशि भरकर अपनी पासबुक प्राप्त करें।',
        },
      ],
      ctaButton: 'SSY के बारे में और जानें',
      ctaNote: 'नए टैब में भारतीय डाक का आधिकारिक पोर्टल खुलेगा।',
    },
    methodology: {
      eyebrow: 'सर्वेक्षण कार्यप्रणाली',
      heading: 'जमीनी स्तर पर जागरूकता को समझना',
      intro:
        'जागरूकता सामग्री तैयार करने से पहले हमने गाँव के निवासियों की बात सुनना ज़रूरी समझा। हमारी कार्यप्रणाली में प्रत्यक्ष संवाद और व्यवस्थित डिजिटल रिकॉर्डिंग दोनों शामिल थे।',
      approachTitle: 'सर्वेक्षण दृष्टिकोण',
      approachText:
        'हमने कॉलेज द्वारा आयोजित गाँव के दौरे के दौरान एक समुदाय-आधारित जागरूकता सर्वेक्षण किया और परिवारों से उनके ही परिवेश में सम्मानपूर्वक बातचीत की।',
      collectionTitle: 'डेटा संग्रह का तरीका',
      collectionText:
        'हमने गाँव के निवासियों से बातचीत की और Google Forms पर तैयार एक व्यवस्थित प्रश्नावली के माध्यम से उत्तर एकत्र किए।',
      purposeTitle: 'सर्वेक्षण का उद्देश्य',
      purposeItems: [
        'क्या निवासियों ने सुकन्या समृद्धि योजना के बारे में सुना था।',
        'क्या वे इस योजना के मुख्य उद्देश्य को समझते थे।',
        'क्या वे इसके लाभों के बारे में जानते थे।',
        'क्या उन्हें इसकी पात्रता शर्तों की जानकारी थी।',
        'क्या वे इस योजना के बारे में अतिरिक्त जानकारी प्राप्त करना चाहते थे।',
      ],
      processTitle: 'छह-चरणीय सर्वेक्षण प्रक्रिया',
      processSteps: [
        'सर्वेक्षण विषय का चयन',
        'प्रश्नावली की तैयारी',
        'गाँव का दौरा और निवासियों से संवाद',
        'उत्तरों का संग्रह',
        'जागरूकता स्तर की समझ और विश्लेषण',
        'डिजिटल जागरूकता प्लेटफॉर्म की तैयारी',
      ],
      recordTitle: 'क्षेत्रीय सर्वेक्षण विवरण',
      recordNote:
        'नीचे दिए गए संपादन योग्य स्थान सत्यापित क्षेत्रीय विवरण दर्ज करने के लिए हैं।',
      fields: {
        villageLabel: 'गाँव का नाम',
        dateLabel: 'सर्वेक्षण की तारीख',
        respondentsLabel: 'कुल उत्तरदाता',
        teamLabel: 'सर्वेक्षण टीम',
      },
    },
    dashboard: {
      eyebrow: 'इंटरैक्टिव सर्वेक्षण डैशबोर्ड',
      heading: 'हमारे सर्वेक्षण ने हमें क्या समझने में मदद की?',
      subtitle:
        'जागरूकता स्तर, अनुपात और प्रश्न-वार स्थिति का दृश्य विश्लेषण। सभी प्रतिशत केंद्रीय डेटा से स्वतः गणना किए जाते हैं।',
      sampleWarningTitle:
        'उदाहरणात्मक नमूना डेटा – ये आँकड़े हमारे गाँव के सर्वेक्षण के सत्यापित परिणाम नहीं हैं।',
      sampleWarningBody:
        'नीचे दिखाए गए आँकड़े (कुल 100, जागरूक 35, अनभिज्ञ 65) केवल यह दिखाने के लिए हैं कि सत्यापित सर्वेक्षण डेटा दर्ज होने पर यह डैशबोर्ड कैसे काम करता है।',
      verifiedBadgeText: 'सत्यापित ग्रामीण सर्वेक्षण परिणाम सक्रिय',
      cards: {
        totalTitle: 'कुल उत्तरदाता',
        totalSub: 'विश्लेषण के लिए नमूना आधार',
        awareTitle: 'SSY से जागरूक लोग',
        awareSub: 'कुल उत्तरदाताओं में से',
        unawareTitle: 'SSY से अनभिज्ञ लोग',
        unawareSub: 'जिन्हें सरल जानकारी चाहिए',
        interestedTitle: 'अधिक जानने के इच्छुक',
        interestedSub: 'सरल मार्गदर्शन के लिए तैयार',
      },
      chart1Title: 'चार्ट 1: जागरूकता वितरण',
      chart1Subtitle: 'SSY के प्रति जागरूक बनाम अनभिज्ञ उत्तरदाताओं का अनुपात',
      chart2Title: 'चार्ट 2: जागरूकता तुलना',
      chart2Subtitle: 'जागरूकता और रुचि श्रेणियों में लोगों की संख्या की तुलना',
      chart3Title: 'चार्ट 3: प्रश्न-वार विश्लेषण',
      chart3Subtitle: 'पाँच प्रमुख सर्वेक्षण प्रश्नों पर उदाहरणात्मक प्रतिक्रिया वितरण',
      legendAware: 'SSY से जागरूक',
      legendUnaware: 'SSY से अनभिज्ञ',
      legendInterested: 'जानकारी के इच्छुक',
      legendYes: 'हाँ',
      legendNo: 'नहीं',
      legendUnsure: 'अनिश्चित / स्पष्ट जानकारी चाहिए',
      respondentsUnit: 'निवासी',
      calculatorToggleOpen: 'डैशबोर्ड गणना जाँचें (वाइवा डेमो)',
      calculatorToggleClose: 'वाइवा डेमो नियंत्रण बंद करें',
      calculatorTitle: 'लाइव गणना पूर्वावलोकन (केवल वाइवा प्रदर्शन हेतु)',
      calculatorHelp:
        'प्रतिशत अपडेट और नियम सत्यापन (जागरूक + अनभिज्ञ = कुल उत्तरदाता) जाँचने के लिए नीचे संख्या बदलें। यह केवल स्थानीय पूर्वावलोकन है।',
      inputTotal: 'कुल उत्तरदाता',
      inputAware: 'SSY से जागरूक',
      inputUnaware: 'SSY से अनभिज्ञ',
      inputInterested: 'अधिक जानने के इच्छुक',
      resetButton: 'नमूना डेटा पर रीसेट करें',
    },
    findings: {
      eyebrow: 'मुख्य अवलोकन एवं निष्कर्ष',
      heading: 'सामुदायिक जागरूकता सर्वेक्षण से हम क्या सीख सकते हैं?',
      statusBanner:
        'जागरूकता आकलन के संभावित क्षेत्र – वास्तविक निष्कर्ष सत्यापन की प्रतीक्षा में हैं।',
      intro:
        'सामुदायिक सर्वेक्षण यह समझने में मदद करते हैं कि जानकारी की कमी कहाँ है—क्या लोगों ने योजना का नाम ही नहीं सुना, या नाम सुनने के बावजूद पात्रता और दस्तावेजों को लेकर भ्रम है।',
      analysisExplanationTitle: 'व्यवस्थित सर्वेक्षण विश्लेषण क्यों उपयोगी है',
      analysisExplanation:
        'इन पाँच पहलुओं का विश्लेषण करने से छात्र टीमें और स्थानीय कार्यकर्ता अपनी जागरूकता बैठकों को उन्हीं बिंदुओं पर केंद्रित कर सकते हैं जहाँ परिवारों को सबसे अधिक सहायता चाहिए—जैसे ₹250 न्यूनतम जमा या डाकघर में ले जाने वाले दस्तावेज।',
      actualObservationsTitle: 'सत्यापित क्षेत्रीय अवलोकन हेतु स्थान',
      actualObservationsPlaceholder:
        'Google Forms की अंतिम प्रतिक्रिया शीट सत्यापित होने के बाद गाँव से जुड़े वास्तविक निष्कर्ष यहाँ दर्ज किए जाएँगे। बिना सत्यापन के कोई काल्पनिक निष्कर्ष नहीं लिखा गया है।',
    },
    whyAwareness: {
      eyebrow: 'सामाजिक उद्देश्य',
      heading: 'जागरूकता बढ़ाना, बेहतर भविष्य बनाना',
      quote: '“एक जागरूक समुदाय ही एक सशक्त समुदाय होता है।”',
      imageAlt:
        'खिड़की की धूप में लकड़ी की मेज पर किताबों और मिट्टी की गुल्लक के साथ ध्यान से पढ़ती हुई एक भारतीय स्कूली छात्रा।',
      imageCaption: 'परिवार की रोज़मर्रा की बचत को बेटी के शिक्षा के सपनों से जोड़ना।',
      cards: [
        {
          title: 'ग्रामीण समुदायों में वित्तीय साक्षरता',
          description:
            'कई ग्रामीण परिवार घर पर बचत तो करते हैं, लेकिन सुरक्षित और दीर्घकालिक सरकारी बचत विकल्पों के बारे में स्पष्ट मार्गदर्शन से वंचित रहते हैं।',
        },
        {
          title: 'सरकारी बचत योजनाओं की जानकारी',
          description:
            'SSY जैसी योजनाएँ कम न्यूनतम जमा राशि के साथ बनाई गई हैं ताकि मध्यम और कम आय वाले परिवार भी सुरक्षित भागीदारी कर सकें।',
        },
        {
          title: 'माता-पिता के सही वित्तीय निर्णय',
          description:
            'जब माता-पिता को पात्रता, परिपक्वता और निकासी के नियम स्पष्ट पता होते हैं, तो वे बेटी की पढ़ाई की योजना आत्मविश्वास से बना पाते हैं।',
        },
        {
          title: 'सामुदायिक विकास में छात्रों की भूमिका',
          description:
            'कॉलेज के छात्र सहानुभूति और डिजिटल साधनों की मदद से जटिल सरकारी जानकारी और गाँव की सीधी बातचीत के बीच की दूरी को कम करते हैं।',
        },
      ],
    },
    recommendations: {
      eyebrow: 'व्यावहारिक सुझाव',
      heading: 'हम जागरूकता कैसे बढ़ा सकते हैं?',
      subtitle:
        'स्थानीय संवाद और सरल डिजिटल जानकारी को जोड़ने वाले व्यावहारिक कदम।',
      items: [
        'माता-पिता, बुजुर्गों और स्थानीय समुदाय के प्रमुख लोगों के साथ गाँव स्तर पर जागरूकता बैठकें आयोजित करें।',
        'हिंदी और स्थानीय भाषाओं में सरल जानकारी वाले पैंफलेट वितरित करें।',
        'स्कूलों और पंचायत स्थलों पर पोस्टर तथा विश्वसनीय स्थानीय संवाद माध्यमों का उपयोग करें।',
        'पात्रता, जमा सीमा और लाभों को रोज़मर्रा की आसान भाषा में समझाएँ।',
        'परिवारों को आधिकारिक जानकारी के लिए अधिकृत डाकघरों और बैंकों में जाने के लिए प्रेरित करें।',
        'जागरूकता में हुए वास्तविक सुधार को मापने के लिए बाद में अनुवर्ती (Follow-up) सर्वेक्षण करें।',
        'सरकारी योजनाओं की सही जानकारी को सुलभ बनाने के लिए द्विभाषी वेबसाइट जैसे डिजिटल माध्यमों का उपयोग करें।',
      ],
      techTitle: 'तकनीक के माध्यम से BCA छात्रों का योगदान',
      techDescription:
        'बैचलर ऑफ कंप्यूटर एप्लीकेशन्स के छात्र होने के नाते, हमने वेब डेवलपमेंट, रेस्पॉन्सिव डिज़ाइन, द्विभाषी सामग्री और डेटा विज़ुअलाइज़ेशन कौशल का उपयोग करके योजना की जानकारी को एक आसान पोर्टल में बदला है जिसे कोई भी स्मार्टफोन पर पढ़ सकता है।',
      imageAlt:
        'गाँव के एक छायादार पेड़ के नीचे आयोजित सामुदायिक जागरूकता सत्र जहाँ छात्र चार्ट की मदद से ग्रामीण परिवारों को बचत योजना समझा रहे हैं।',
      imageCaption: 'सरल चार्ट और आत्मीय भाषा के साथ सामुदायिक जागरूकता सत्र।',
    },
    faq: {
      eyebrow: 'सामान्य प्रश्न',
      heading: 'अक्सर पूछे जाने वाले सवाल',
      subtitle:
        'सुकन्या समृद्धि योजना के बारे में परिवारों द्वारा पूछे जाने वाले प्रमुख सवालों के संक्षिप्त और सटीक उत्तर।',
      items: [
        {
          question: '1. सुकन्या समृद्धि योजना क्या है?',
          answer:
            'सुकन्या समृद्धि योजना (SSY) भारत सरकार की एक लघु बचत योजना है, जिसका उद्देश्य माता-पिता और अभिभावकों को बेटी की उच्च शिक्षा और सुरक्षित भविष्य के लिए बचत करने में मदद करना है।',
        },
        {
          question: '2. SSY खाता कौन खोल सकता है?',
          answer:
            'माता-पिता या कानूनी अभिभावक 10 वर्ष से कम उम्र की बालिका के नाम पर सुकन्या समृद्धि खाता खोल सकते हैं।',
        },
        {
          question: '3. न्यूनतम वार्षिक जमा राशि कितनी है?',
          answer:
            'खाते को सक्रिय रखने के लिए एक वित्त वर्ष में न्यूनतम ₹250 जमा करना आवश्यक है।',
        },
        {
          question: '4. अधिकतम वार्षिक जमा राशि कितनी है?',
          answer:
            'एक वित्त वर्ष में SSY खाते में अधिकतम ₹1,50,000 तक जमा किए जा सकते हैं।',
        },
        {
          question: '5. खाते की परिपक्वता अवधि क्या है?',
          answer:
            'यह खाता सामान्यतः खोलने की तारीख से 21 वर्ष बाद परिपक्व होता है, जबकि जमा राशि पहले 15 वर्षों तक भरनी होती है।',
        },
        {
          question: '6. खाता कहाँ खोला जा सकता है?',
          answer:
            'SSY खाता किसी भी अधिकृत भारतीय डाकघर या भाग लेने वाली सरकारी व निजी बैंक शाखा में खोला जा सकता है।',
        },
        {
          question: '7. कौन-कौन से दस्तावेज आवश्यक होते हैं?',
          answer:
            'सामान्यतः बेटी का जन्म प्रमाण पत्र, माता-पिता या अभिभावक का पहचान पत्र व पते का प्रमाण, और भरा हुआ खाता खोलने का फॉर्म आवश्यक होता है।',
        },
        {
          question: '8. क्या परिपक्वता से पहले पैसे निकाले जा सकते हैं?',
          answer:
            'हाँ, योजना के आधिकारिक नियमों और पात्रता शर्तों के अनुसार बेटी की उच्च शिक्षा के लिए आंशिक निकासी की अनुमति है।',
        },
        {
          question: '9. क्या सरकार ब्याज दर में बदलाव करती है?',
          answer:
            'हाँ। सुकन्या समृद्धि योजना की ब्याज दर भारत सरकार द्वारा अधिसूचित की जाती है और समय-समय पर इसकी समीक्षा की जाती है।',
        },
        {
          question: '10. SSY और बेटी बचाओ बेटी पढ़ाओ के बीच क्या संबंध है?',
          answer:
            'सुकन्या समृद्धि योजना की शुरुआत 2015 में "बेटी बचाओ बेटी पढ़ाओ" अभियान के वित्तीय स्तंभ के रूप में हुई थी, ताकि परिवार बेटियों की शिक्षा और भविष्य में निवेश करने के लिए प्रेरित हों।',
        },
      ],
    },
    team: {
      eyebrow: 'शैक्षणिक परियोजना दल',
      heading: 'परियोजना टीम से मिलें',
      description:
        'यह परियोजना एक सामाजिक-सामुदायिक विषय को समझने और तकनीक के माध्यम से जागरूकता फैलाने के हमारे सामूहिक प्रयास को दर्शाती है।',
      metaLabels: {
        college: 'कॉलेज',
        course: 'पाठ्यक्रम',
        subject: 'विषय',
        project: 'परियोजना',
        facultyGuide: 'फैकल्टी गाइड',
      },
      projectNameValue: 'सुकन्या समृद्धि योजना जागरूकता अभियान',
      outcomesEyebrow: 'शैक्षणिक अनुभव',
      outcomesHeading: 'हमारी सीख और परियोजना परिणाम',
      outcomesIntro:
        'वेबसाइट निर्माण के साथ-साथ इस सामुदायिक विकास परियोजना ने हमारी टीम को कई व्यावहारिक अनुभव प्रदान किए:',
      outcomesList: [
        'ग्रामीण समुदाय से संवाद करके जमीनी स्तर की वास्तविक समस्याओं को समझना।',
        'अलग-अलग आयु वर्ग के निवासियों के साथ स्पष्ट और सहज संवाद कौशल विकसित करना।',
        'सरकारी वित्तीय समावेशन पहलों और लघु बचत योजनाओं की जानकारी प्राप्त करना।',
        'Google Forms के माध्यम से व्यवस्थित प्रश्नावली आधारित डेटा संग्रह को समझना।',
        'बुनियादी डेटा विश्लेषण, प्रतिशत जांच और चार्ट विज़ुअलाइज़ेशन सीखना।',
        'एक सामाजिक जागरूकता परियोजना पर BCA वेब डेवलपमेंट कौशल (React, TypeScript, Tailwind) लागू करना।',
        'सामुदायिक विकास में डिजिटल तकनीक की व्यावहारिक भूमिका को समझना।',
      ],
    },
    references: {
      eyebrow: 'आधिकारिक स्रोत',
      heading: 'संदर्भ और आधिकारिक जानकारी',
      subtitle:
        'नवीनतम ब्याज दरों, कर नियमों और फॉर्म की पुष्टि हमेशा भारत सरकार के आधिकारिक पोर्टल से करें।',
      distinctionNote:
        'शैक्षणिक स्पष्टीकरण: इस वेबसाइट की सामग्री BCA छात्रों द्वारा शैक्षणिक जागरूकता के लिए तैयार की गई है। नीचे दिए गए लिंक आधिकारिक सरकारी पोर्टलों पर ले जाते हैं।',
      visitLinkText: 'आधिकारिक पोर्टल देखें',
    },
    footer: {
      description:
        'सुकन्या समृद्धि योजना को सरल हिंदी और अंग्रेज़ी में समझाने के लिए समर्पित एक शैक्षणिक सामुदायिक विकास परियोजना।',
      quickLinksTitle: 'त्वरित लिंक',
      officialLinksTitle: 'आधिकारिक जानकारी',
      academicInfoTitle: 'शैक्षणिक विवरण',
      disclaimer:
        'यह वेबसाइट एसजीटी विश्वविद्यालय के BCA छात्रों द्वारा विकसित एक शैक्षणिक जागरूकता पहल है। यह कोई आधिकारिक सरकारी पोर्टल नहीं है। योजना के विवरण की पुष्टि अधिकृत सरकारी स्रोतों से की जानी चाहिए।',
      copyright: '© 2026 बेटी का भविष्य | BCA सामुदायिक विकास परियोजना।',
    },
  },
};
