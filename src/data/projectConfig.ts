/**
 * Centralized Project & Survey Data Configuration
 * ------------------------------------------------
 * Edit this single file to update:
 * 1. Academic project details and team members
 * 2. Field survey metadata (Village Name, Date, Verified Respondent Count)
 * 3. Survey figures (automatically validates Aware + Unaware = Total Respondents)
 * 4. Question-wise response breakdowns
 * 5. Survey observation summaries
 * 6. Official government reference links
 */

export type Language = 'en' | 'hi';

export interface TeamMember {
  id: string;
  name: string;
  initials: string;
  roleEn: string;
  roleHi: string;
  imageUrl?: string;
}

export interface SurveyQuestionMetric {
  id: string;
  questionEn: string;
  questionHi: string;
  yesCount: number;
  noCount: number;
  unsureCount: number;
}

export interface SurveyDataset {
  /** Set to true ONLY after verified village survey figures are entered. */
  isVerifiedData: boolean;
  totalRespondents: number;
  awareCount: number;
  unawareCount: number;
  interestedCount: number;
  questions: SurveyQuestionMetric[];
}

export interface SurveyFieldRecord {
  villageNameEn: string;
  villageNameHi: string;
  surveyDateEn: string;
  surveyDateHi: string;
  totalRespondentsEn: string;
  totalRespondentsHi: string;
  surveyTeamEn: string;
  surveyTeamHi: string;
}

export interface ObservationArea {
  id: string;
  areaEn: string;
  areaHi: string;
  statusEn: string;
  statusHi: string;
  noteEn: string;
  noteHi: string;
}

export interface OfficialReference {
  id: string;
  titleEn: string;
  titleHi: string;
  subtitleEn: string;
  subtitleHi: string;
  url: string;
  domainLabel: string;
}

export const PROJECT_IMAGES = {
  heroMotherDaughter: '/src/assets/images/hero_mother_daughter_1795144727936.jpg',
  communityInteraction: '/src/assets/images/village_community_interaction_1795144728133.jpg',
  girlsEducation: '/src/assets/images/girls_education_future_1795144728445.jpg',
  awarenessMeeting: '/src/assets/images/rural_awareness_meeting_1795144728564.jpg',
} as const;

export const PROJECT_INFO = {
  brandName: 'BETI KA BHAVISHYA',
  brandNameHi: 'बेटी का भविष्य',
  collegeEn: 'SGT University, Gurugram, Haryana',
  collegeHi: 'एसजीटी विश्वविद्यालय, गुरुग्राम, हरियाणा',
  courseEn: 'Bachelor of Computer Applications (BCA)',
  courseHi: 'बैचलर ऑफ कंप्यूटर एप्लीकेशन्स (BCA)',
  subjectEn: 'Community Development Project (CDP)',
  subjectHi: 'सामुदायिक विकास परियोजना (CDP)',
  facultyGuide: 'Ms. Sanchita',
  year: '2026',
} as const;

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'adarsh',
    name: 'Adarsh Rathaur',
    initials: 'AR',
    roleEn: 'BCA Student · Project Team',
    roleHi: 'BCA छात्र · परियोजना टीम',
  },
  {
    id: 'tanmay',
    name: 'Tanmay',
    initials: 'TN',
    roleEn: 'BCA Student · Project Team',
    roleHi: 'BCA छात्र · परियोजना टीम',
  },
  {
    id: 'jaya',
    name: 'Jaya',
    initials: 'JY',
    roleEn: 'BCA Student · Project Team',
    roleHi: 'BCA छात्रा · परियोजना टीम',
  },
  {
    id: 'gunika',
    name: 'Gunika',
    initials: 'GN',
    roleEn: 'BCA Student · Project Team',
    roleHi: 'BCA छात्रा · परियोजना टीम',
  },
  {
    id: 'yuvraj',
    name: 'Yuvraj',
    initials: 'YR',
    roleEn: 'BCA Student · Project Team',
    roleHi: 'BCA छात्र · परियोजना टीम',
  },
  {
    id: 'kashish',
    name: 'Kashish',
    initials: 'KS',
    roleEn: 'BCA Student · Project Team',
    roleHi: 'BCA छात्रा · परियोजना टीम',
  },
];

/**
 * Editable Field Survey Record
 * Replace placeholder brackets when verified field records are finalized.
 */
export const FIELD_SURVEY_RECORD: SurveyFieldRecord = {
  villageNameEn: '[ENTER VILLAGE NAME]',
  villageNameHi: '[गाँव का नाम दर्ज करें]',
  surveyDateEn: '[ENTER DATE]',
  surveyDateHi: '[तारीख दर्ज करें]',
  totalRespondentsEn: '[ENTER VERIFIED NUMBER]',
  totalRespondentsHi: '[सत्यापित संख्या दर्ज करें]',
  surveyTeamEn: 'BCA Students, SGT University',
  surveyTeamHi: 'BCA छात्र, एसजीटी विश्वविद्यालय',
};

/**
 * Initial Illustrative Survey Dataset
 * Note: Keep isVerifiedData = false until verified survey responses are entered.
 */
export const INITIAL_SURVEY_DATA: SurveyDataset = {
  isVerifiedData: false,
  totalRespondents: 100,
  awareCount: 35,
  unawareCount: 65,
  interestedCount: 78,
  questions: [
    {
      id: 'q1',
      questionEn: 'Have you heard about Sukanya Samriddhi Yojana?',
      questionHi: 'क्या आपने सुकन्या समृद्धि योजना के बारे में सुना है?',
      yesCount: 35,
      noCount: 65,
      unsureCount: 0,
    },
    {
      id: 'q2',
      questionEn: 'Do you know the primary purpose of the SSY scheme?',
      questionHi: 'क्या आप SSY योजना का मुख्य उद्देश्य जानते हैं?',
      yesCount: 28,
      noCount: 58,
      unsureCount: 14,
    },
    {
      id: 'q3',
      questionEn: 'Are you aware of the ₹250 minimum deposit & age limit?',
      questionHi: 'क्या आप ₹250 न्यूनतम जमा और उम्र सीमा के बारे में जानते हैं?',
      yesCount: 19,
      noCount: 69,
      unsureCount: 12,
    },
    {
      id: 'q4',
      questionEn: 'Do you know where and how an SSY account can be opened?',
      questionHi: 'क्या आप जानते हैं कि SSY खाता कहाँ और कैसे खोला जाता है?',
      yesCount: 22,
      noCount: 64,
      unsureCount: 14,
    },
    {
      id: 'q5',
      questionEn: 'Would you like clear information about SSY in simple language?',
      questionHi: 'क्या आप सरल भाषा में SSY के बारे में अधिक जानकारी चाहेंगे?',
      yesCount: 78,
      noCount: 12,
      unsureCount: 10,
    },
  ],
};

export interface ComputedSurveyStats {
  total: number;
  aware: number;
  unaware: number;
  interested: number;
  awarePct: number;
  unawarePct: number;
  interestedPct: number;
  isValid: boolean;
  validationErrorEn?: string;
  validationErrorHi?: string;
}

/**
 * Computes percentages safely and verifies survey invariants:
 * - No negative values
 * - Aware + Unaware must equal Total Respondents
 */
export function computeSurveyStats(data: SurveyDataset): ComputedSurveyStats {
  const total = Math.max(0, Math.round(data.totalRespondents));
  const aware = Math.max(0, Math.round(data.awareCount));
  const unaware = Math.max(0, Math.round(data.unawareCount));
  const interested = Math.max(0, Math.min(total, Math.round(data.interestedCount)));

  const hasNegative =
    data.totalRespondents < 0 ||
    data.awareCount < 0 ||
    data.unawareCount < 0 ||
    data.interestedCount < 0;

  if (hasNegative) {
    return {
      total,
      aware,
      unaware,
      interested,
      awarePct: 0,
      unawarePct: 0,
      interestedPct: 0,
      isValid: false,
      validationErrorEn: 'Survey figures cannot contain negative values.',
      validationErrorHi: 'सर्वेक्षण के आँकड़ों में नकारात्मक मान नहीं हो सकते।',
    };
  }

  if (aware + unaware !== total) {
    return {
      total,
      aware,
      unaware,
      interested,
      awarePct: total > 0 ? Number(((aware / total) * 100).toFixed(1)) : 0,
      unawarePct: total > 0 ? Number(((unaware / total) * 100).toFixed(1)) : 0,
      interestedPct: total > 0 ? Number(((interested / total) * 100).toFixed(1)) : 0,
      isValid: false,
      validationErrorEn: `Aware (${aware}) + Unaware (${unaware}) must equal Total Respondents (${total}).`,
      validationErrorHi: `जागरूक (${aware}) + अनभिज्ञ (${unaware}) का योग कुल उत्तरदाताओं (${total}) के बराबर होना चाहिए।`,
    };
  }

  return {
    total,
    aware,
    unaware,
    interested,
    awarePct: total > 0 ? Number(((aware / total) * 100).toFixed(1)) : 0,
    unawarePct: total > 0 ? Number(((unaware / total) * 100).toFixed(1)) : 0,
    interestedPct: total > 0 ? Number(((interested / total) * 100).toFixed(1)) : 0,
    isValid: true,
  };
}

export const SURVEY_OBSERVATION_AREAS: ObservationArea[] = [
  {
    id: 'awareness',
    areaEn: 'Awareness of the Scheme',
    areaHi: 'योजना के बारे में सामान्य जागरूकता',
    statusEn: 'Awaiting Verified Field Count',
    statusHi: 'सत्यापित क्षेत्रीय आँकड़ों की प्रतीक्षा',
    noteEn:
      'Assesses how many village families have heard of Sukanya Samriddhi Yojana by name during direct household and community interactions.',
    noteHi:
      'यह आकलन करता है कि गाँव में प्रत्यक्ष बातचीत के दौरान कितने परिवारों ने सुकन्या समृद्धि योजना का नाम सुना है।',
  },
  {
    id: 'benefits',
    areaEn: 'Knowledge of Scheme Benefits',
    areaHi: 'योजना के लाभों की जानकारी',
    statusEn: 'Awaiting Verified Field Count',
    statusHi: 'सत्यापित क्षेत्रीय आँकड़ों की प्रतीक्षा',
    noteEn:
      'Evaluates whether residents understand long-term savings growth, government-backed security, and higher education support.',
    noteHi:
      'यह जांचता है कि क्या निवासी दीर्घकालिक बचत, सरकारी सुरक्षा और उच्च शिक्षा सहायता के लाभों को समझते हैं।',
  },
  {
    id: 'eligibility',
    areaEn: 'Knowledge of Eligibility',
    areaHi: 'पात्रता शर्तों की समझ',
    statusEn: 'Awaiting Verified Field Count',
    statusHi: 'सत्यापित क्षेत्रीय आँकड़ों की प्रतीक्षा',
    noteEn:
      'Measures awareness regarding the age limit (girl child below 10 years) and parent or legal guardian account opening rules.',
    noteHi:
      'यह देखता है कि क्या लोगों को बालिका की आयु सीमा (10 वर्ष से कम) और अभिभावक द्वारा खाता खोलने के नियमों की जानकारी है।',
  },
  {
    id: 'procedures',
    areaEn: 'Awareness of Account-Opening Procedures',
    areaHi: 'खाता खोलने की प्रक्रिया की जानकारी',
    statusEn: 'Awaiting Verified Field Count',
    statusHi: 'सत्यापित क्षेत्रीय आँकड़ों की प्रतीक्षा',
    noteEn:
      'Identifies gaps in knowing which documents (birth certificate, identity, address proof) and nearby post offices or banks are needed.',
    noteHi:
      'यह पहचानता है कि क्या परिवारों को आवश्यक दस्तावेजों (जन्म प्रमाण पत्र, पहचान व पता प्रमाण) और नजदीकी डाकघर/बैंक की जानकारी है।',
  },
  {
    id: 'interest',
    areaEn: 'Interest in Receiving More Information',
    areaHi: 'अधिक जानकारी प्राप्त करने में रुचि',
    statusEn: 'Awaiting Verified Field Count',
    statusHi: 'सत्यापित क्षेत्रीय आँकड़ों की प्रतीक्षा',
    noteEn:
      'Captures how eager families are to receive simple, vernacular guidance—both in person and through accessible digital resources.',
    noteHi:
      'यह दर्शाता है कि कितने परिवार सरल और स्थानीय भाषा में—व्यक्तिगत व डिजिटल माध्यम से—योजना की जानकारी पाने के इच्छुक हैं।',
  },
];

export const OFFICIAL_REFERENCES: OfficialReference[] = [
  {
    id: 'indiapost',
    titleEn: 'India Post – Small Savings Schemes',
    titleHi: 'भारतीय डाक – लघु बचत योजनाएँ',
    subtitleEn:
      'Official Department of Posts portal detailing Sukanya Samriddhi Account rules, forms, and branch services.',
    subtitleHi:
      'सुकन्या समृद्धि खाता नियमों, फॉर्म और डाकघर सेवाओं की आधिकारिक जानकारी वाला भारतीय डाक पोर्टल।',
    url: 'https://www.indiapost.gov.in/',
    domainLabel: 'indiapost.gov.in',
  },
  {
    id: 'nsi',
    titleEn: 'National Savings Institute (NSI)',
    titleHi: 'राष्ट्रीय बचत संस्थान (NSI)',
    subtitleEn:
      'Ministry of Finance resource for official notifications, deposit rules, and quarterly interest rate updates.',
    subtitleHi:
      'आधिकारिक अधिसूचनाओं, जमा नियमों और ब्याज दर अपडेट के लिए वित्त मंत्रालय का संस्थान।',
    url: 'https://nsiindia.gov.in/',
    domainLabel: 'nsiindia.gov.in',
  },
  {
    id: 'wcd',
    titleEn: 'Ministry of Women and Child Development',
    titleHi: 'महिला एवं बाल विकास मंत्रालय',
    subtitleEn:
      'Official ministry portal overseeing Beti Bachao Beti Padhao and welfare initiatives for girl children.',
    subtitleHi:
      'बेटी बचाओ बेटी पढ़ाओ और बालिकाओं के कल्याण से जुड़ी पहलों का आधिकारिक मंत्रालय पोर्टल।',
    url: 'https://wcd.gov.in/',
    domainLabel: 'wcd.gov.in',
  },
  {
    id: 'myscheme',
    titleEn: 'Government of India – Beti Bachao Beti Padhao & Schemes',
    titleHi: 'भारत सरकार – बेटी बचाओ बेटी पढ़ाओ और योजना जानकारी',
    subtitleEn:
      'Unified Government of India scheme discovery platform to verify eligibility and official guidelines.',
    subtitleHi:
      'पात्रता और आधिकारिक दिशानिर्देशों की पुष्टि के लिए भारत सरकार का एकीकृत योजना पोर्टल।',
    url: 'https://www.myscheme.gov.in/',
    domainLabel: 'myscheme.gov.in',
  },
];
