import {OtherDetailsQuestionDataType} from '../interfaceTypes';
import {dieses} from './faqConstants';

export const QuestionData: Array<OtherDetailsQuestionDataType> = [
  {
    code: 'P3Q3',
    questions: 'What is your ethnicity?',
    options: [
      {
        label: 'White',
        value: 'White',
      },
      {
        label: 'Black or African',
        value: 'Black or African',
      },
      {
        label: 'American Indian or Alaska Native',
        value: 'American Indian or Alaska Native',
      },
      {
        label: 'Asian',
        value: 'Asian',
      },
      {
        label: 'Native Hawaiian and Other Pacific Islander',
        value: 'Native Hawaiian and Other Pacific Islander',
      },
      {
        label: 'Latino/Hispanic',
        value: 'Latino/Hispanic',
      },
      {
        label: 'Other',
        value: 'Other',
      },
    ],
    textLinkedWithOther: 'Other',
    type: ['SELECT', 'TEXT'],
  },
  {
    code: 'P3Q4',
    questions: 'What is your marital status?',
    options: [
      {
        label: 'Never Married',
        value: 'Never Married',
      },
      {
        label: 'Married',
        value: 'Married',
      },
      {
        label: 'Separated',
        value: 'Separated',
      },
      {
        label: 'Divorced',
        value: 'Divorced',
      },
      {
        label: 'Widowed',
        value: 'Widowed',
      },
    ],
    type: ['SELECT'],
  },
  {
    code: 'P4Q5',
    questions: 'What is your religious affiliation?',
    options: [
      {
        label:
          'Catholic(incl.Roman Catholic, Anglican, Orthodox, Baptist, Lutheran)',
        value:
          'Catholic(incl.Roman Catholic, Anglican, Orthodox, Baptist, Lutheran)',
      },
      {
        label: 'Muslim',
        value: 'Muslim',
      },
      {
        label: 'Jewish',
        value: 'Jewish',
      },
      {
        label: 'Hindu',
        value: 'Hindu',
      },
      {
        label: 'Buddhist',
        value: 'Buddhist',
      },
      {
        label: 'Sikh',
        value: 'Sikh',
      },
      {
        label: 'Agnostic (not sure if there is a God)',
        value: 'Agnostic (not sure if there is a God)',
      },
      {
        label: 'Atheist (do not believe in god)',
        value: 'Atheist (do not believe in god)',
      },
      {
        label: 'Nothing in particular',
        value: 'Nothing in particular',
      },
      {
        label: 'Prefer not to Answer',
        value: 'Prefer not to Answer',
      },
      {
        label: 'Christian',
        value: 'Christian',
      },
      {
        label: 'Other',
        value: 'Other',
      },
    ],
    textLinkedWithOther: 'Other',
    type: ['SELECT', 'TEXT'],
  },
  {
    code: 'P4Q1',
    questions: 'Do you personally own any of the following?',
    options: [
      {
        label: 'Dog',
        value: 'Dog',
      },
      {
        label: 'Cat',
        value: 'Cat',
      },
      {
        label: 'Credit Card',
        value: 'Credit Card',
      },
      {
        label: 'House (own outright or with a mortgage)',
        value: 'House (own outright or with a mortgage)',
      },
      {
        label: 'Car (own outright, with a loan, or through a lease)',
        value: 'Car (own outright, with a loan, or through a lease)',
      },
      {
        label: 'An Android mobile phone',
        value: 'An Android mobile phone',
      },
      {
        label: 'An Apple mobile phone',
        value: 'An Apple mobile phone',
      },
      {
        label: 'None of the above',
        value: 'None of the above',
      },
    ],
    type: ['MULTISELECT'],
  },
  {
    code: 'P4Q2',
    questions: 'What is your current employment status?',
    options: [
      {
        label: 'Employed Full-Time (35 Hours or more each week)',
        value: 'Employed Full-Time (35 Hours or more each week)',
      },
      {
        label: 'Part-Time (34 Hours or less search week)',
        value: 'Part-Time (34 Hours or less search week)',
      },
      {
        label: 'Self-Employed',
        value: 'Self-Employed',
      },
      {
        label: 'Retired',
        value: 'Retired',
      },
      {
        label: 'Student',
        value: 'Student',
      },
      {
        label: 'Unemployed',
        value: 'Unemployed',
      },
      {
        label: 'Homemaker',
        value: 'Homemaker',
      },
    ],
    type: ['SELECT'],
  },
  {
    code: 'P4Q3',
    questions:
      'What industry do you work in? Please enter three characters to search for your industry.',
    options: [
      {
        label: 'Advertising',
        value: 'Advertising',
      },
      {
        label: 'Aerospace/Defense',
        value: 'Aerospace/Defense',
      },
      {
        label: 'Agriculture/Forestry/Fishing',
        value: 'Agriculture/Forestry/Fishing',
      },
      {
        label: 'Architecture',
        value: 'Architecture',
      },
      {
        label: 'Automotive',
        value: 'Automotive',
      },
      {
        label: 'Business Services',
        value: 'Business Services',
      },
      {
        label: 'Computer/Electronic Equipment',
        value: 'Computer/Electronic Equipment',
      },
      {
        label: 'Computer Related Products or Services',
        value: 'Computer Related Products or Services',
      },
      {
        label: 'Consumer Products',
        value: 'Consumer Products',
      },
      {
        label: 'Education',
        value: 'Education',
      },
      {
        label: 'Engineering',
        value: 'Engineering',
      },
      {
        label: 'Entertainment/Recreation',
        value: 'Entertainment/Recreation',
      },
      {
        label: 'Food/Beverage/Restaurants',
        value: 'Food/Beverage/Restaurants',
      },
      {
        label: 'Healthcare/Medical',
        value: 'Healthcare/Medical',
      },
      {
        label: 'Hotel/Hospitality',
        value: 'Hotel/Hospitality',
      },
      {
        label: 'Internet Services',
        value: 'Internet Services',
      },
      {
        label: 'Legal',
        value: 'Legal',
      },
      {
        label: 'Life Sciences',
        value: 'Life Sciences',
      },
      {
        label: 'Machinery/Equipment',
        value: 'Machinery/Equipment',
      },
      {
        label: 'Manufacturing/Production',
        value: 'Manufacturing/Production',
      },
      {
        label: 'Marketing services',
        value: 'Marketing services',
      },
      {
        label: 'Market Research',
        value: 'Market Research',
      },
      {
        label: 'Media/Marketing/Advertising',
        value: 'Media/Marketing/Advertising',
      },
      {
        label: 'Medical Devices',
        value: 'Medical Devices',
      },
      {
        label: 'Military',
        value: 'Military',
      },
      {
        label: 'Non-profit or Religious Organization',
        value: 'Non-profit or Religious Organization',
      },
      {
        label: 'Paper Products',
        value: 'Paper Products',
      },
      {
        label: 'Petroleum/Petrochemicals',
        value: 'Petroleum/Petrochemicals',
      },
      {
        label: 'Pharma/Biotech',
        value: 'Pharma/Biotech',
      },
      {
        label: 'Printing/Publishing',
        value: 'Printing/Publishing',
      },
      {
        label: 'Real Estate',
        value: 'Real Estate',
      },
      {
        label: 'Printing/Publishing of computer industry information',
        value: 'Printing/Publishing of computer industry information',
      },
      {
        label: 'Retail',
        value: 'Retail',
      },
      {
        label: 'Technology',
        value: 'Technology',
      },
      {
        label: 'Technology',
        value: 'Technology',
      },
      {
        label: 'Telecommunications',
        value: 'Telecommunications',
      },
      {
        label: 'Textiles/Apparel',
        value: 'Textiles/Apparel',
      },
      {
        label: 'Trade Services',
        value: 'Trade Services',
      },
      {
        label: 'Transportation',
        value: 'Transportation',
      },
      {
        label: 'Travel',
        value: 'Travel',
      },
      {
        label: 'Trucking/Warehousing',
        value: 'Trucking/Warehousing',
      },
      {
        label: 'Utilities',
        value: 'Utilities',
      },
      {
        label: 'Value Added Reseller(VAR)/Systems Integrator',
        value: 'Value Added Reseller(VAR)/Systems Integrator',
      },
      {
        label: 'Wholesale',
        value: 'Wholesale',
      },
      {
        label: 'Other',
        value: 'Other',
      },
    ],
    type: ['SELECT', 'TEXT'],
    textLinkedWithOther: 'Other',
    linked: {
      questionCode: 'P4Q2',
      options: [
        'Employed Full-Time (35 Hours or more each week)',
        'Part-Time (34 Hours or less search week)',
        'Self-Employed',
      ],
    },
  },
  {
    code: 'P4Q4',
    questions:
      'What best describes your current job title? Please enter three characters to search if you cant find your title please select other.',
    options: [
      {
        label: 'Account Executive/Senior Account Executive',
        value: 'Account Executive/Senior Account Executive',
      },
      {
        label: 'Account Manager/ Account Director',
        value: 'Account Manager/ Account Director',
      },
      {
        label: 'Administrative Assistant / Executive Assistant',
        value: 'Administrative Assistant / Executive Assistant',
      },
      {
        label: 'Analyst / Senior Analyst',
        value: 'Analyst / Senior Analyst',
      },
      {
        label: 'Assistant Manager / Assistant Director',
        value: 'Assistant Manager / Assistant Director',
      },
      {
        label: 'Associate / Senior Associate',
        value: 'Associate / Senior Associate',
      },
      {
        label: 'Business Development Director',
        value: 'Business Development Director',
      },
      {
        label: 'Certified Public Accountant',
        value: 'Certified Public Accountant',
      },
      {
        label: 'Chairman / Board Member',
        value: 'Chairman / Board Member',
      },
      {
        label: 'Chemist / Scientist',
        value: 'Chemist / Scientist',
      },
      {
        label: 'Chief Executive Officer',
        value: 'Chief Executive Officer',
      },
      {
        label: 'Chief Financial Officer',
        value: 'Chief Financial Officer',
      },
      {
        label: 'Chief Information Officer',
        value: 'Chief Information Officer',
      },
      {
        label: 'Chief Operations Officer',
        value: 'Chief Operations Officer',
      },
      {
        label: 'Chief Technology Officer',
        value: 'Chief Technology Officer',
      },
      {
        label: 'Computer Analyst',
        value: 'Computer Analyst',
      },
      {
        label: 'Customer Service Representative',
        value: 'Customer Service Representative',
      },
      {
        label: 'Database Administrator',
        value: 'Database Administrator',
      },
      {
        label: 'Dentist / Dental Hygienenist',
        value: 'Dentist / Dental Hygienenist',
      },
      {
        label: 'Director / Department Head',
        value: 'Director / Department Head',
      },
      {
        label: 'Executive Officer',
        value: 'Executive Officer',
      },
      {
        label: 'Executive VP / Senior VP',
        value: 'Executive VP / Senior VP',
      },
      {
        label: 'Financial Advisor',
        value: 'Financial Advisor',
      },
      {
        label: 'General Manager',
        value: 'General Manager',
      },
      {
        label: 'Graphic Designer',
        value: 'Graphic Designer',
      },
      {
        label: 'Human Resources Director',
        value: 'Human Resources Director',
      },
      {
        label: 'IT Consultant',
        value: 'IT Consultant',
      },
      {
        label: 'Manager/Senior Manager',
        value: 'Manager/Senior Manager',
      },
      {
        label: 'Marketing Manager/Director',
        value: 'Marketing Manager/Director',
      },
      {
        label: 'Military/Government',
        value: 'Military/Government',
      },
      {
        label: 'MIS Director',
        value: 'MIS Director',
      },
      {
        label: 'Occupational/Physical Therapist',
        value: 'Occupational/Physical Therapist',
      },
      {
        label: 'Opticians/Optomestrist',
        value: 'Opticians/Optomestrist',
      },
      {
        label: 'Owner/Proprietor/Principal',
        value: 'Owner/Proprietor/Principal',
      },
      {
        label: 'Planner / Scheduler',
        value: 'Planner / Scheduler',
      },
      {
        label: 'Police Officer / Fireman',
        value: 'Police Officer / Fireman',
      },
      {
        label: 'Product Manager',
        value: 'Product Manager',
      },
      {
        label: 'Project Manager',
        value: 'Project Manager',
      },
      {
        label: 'Publisher / Producer',
        value: 'Publisher / Producer',
      },
      {
        label: 'Secretary / Treasurer',
        value: 'Secretary / Treasurer',
      },
      {
        label: 'Server Architect',
        value: 'Server Architect',
      },
      {
        label: 'Social Worker',
        value: 'Social Worker',
      },
      {
        label: 'Software Developer',
        value: 'Software Developer',
      },
      {
        label: 'Speech Pathologist/Audiologist',
        value: 'Speech Pathologist/Audiologist',
      },
      {
        label: 'Staffing / Hiring',
        value: 'Staffing / Hiring',
      },
      {
        label: 'Systems Administrator',
        value: 'Systems Administrator',
      },
      {
        label: 'Technicians / Technician Specialists',
        value: 'Technicians / Technician Specialists',
      },
      {
        label: 'Tradesman / Trade Specialist',
        value: 'Tradesman / Trade Specialist',
      },
      {
        label: 'Vice President / Assistant VP',
        value: 'Vice President / Assistant VP',
      },
      {
        label: 'Web Developer',
        value: 'Web Developer',
      },
    ],
    type: ['SELECT'],
    linked: {
      questionCode: 'P4Q2',
      options: [
        'Employed Full-Time (35 Hours or more each week)',
        'Part-Time (34 Hours or less search week)',
        'Self-Employed',
      ],
    },
  },
  {
    code: 'P5Q5',
    questions: 'What department do you work in?',
    options: [
      {
        label: 'Account/Finance',
        value: 'Account/Finance',
      },
      {
        label: 'Administration',
        value: 'Administration',
      },
      {
        label: 'Clerical',
        value: 'Clerical',
      },
      {
        label: 'Communications/PR',
        value: 'Communications/PR',
      },
      {
        label: 'Creative Services',
        value: 'Creative Services',
      },
      {
        label: 'Customer Services',
        value: 'Customer Services',
      },
      {
        label: 'Design/Engineering',
        value: 'Design/Engineering',
      },
      {
        label: 'Executive/Owner',
        value: 'Executive/Owner',
      },
      {
        label: 'General Management',
        value: 'General Management',
      },
      {
        label: 'Human Resource',
        value: 'Human Resource',
      },
      {
        label: 'Information Technology',
        value: 'Information Technology',
      },
      {
        label: 'Infrastructure (Non-IT)',
        value: 'Infrastructure (Non-IT)',
      },
      {
        label: 'Interior Design',
        value: 'Interior Design',
      },
      {
        label: 'Janitorial',
        value: 'Janitorial',
      },
      {
        label: 'Legal',
        value: 'Legal',
      },
      {
        label: 'Manufacturing',
        value: 'Manufacturing',
      },
      {
        label: 'Marketing/Advertising',
        value: 'Marketing/Advertising',
      },
      {
        label: 'Operations/Production',
        value: 'Operations/Production',
      },
      {
        label: 'Planing',
        value: 'Planing',
      },
      {
        label: 'Project Management',
        value: 'Project Management',
      },
      {
        label: 'Quality Control',
        value: 'Quality Control',
      },
      {
        label: 'Research and Development',
        value: 'Research and Development',
      },
      {
        label: 'Sales/Business Development',
        value: 'Sales/Business Development',
      },
      {
        label: 'Security',
        value: 'Security',
      },
      {
        label: 'Supply Chain/Demand Management',
        value: 'Supply Chain/Demand Management',
      },
      {
        label: 'Warehouse/Transportation/Shipping',
        value: 'Warehouse/Transportation/Shipping',
      },
      {
        label: 'Other',
        value: 'Other',
      },
    ],
    textLinkedWithOther: 'Other',
    type: ['SELECT', 'TEXT'],
    linked: {
      questionCode: 'P4Q2',
      options: [
        'Employed Full-Time (35 Hours or more each week)',
        'Part-Time (34 Hours or less search week)',
        'Self-Employed',
      ],
    },
  },
  {
    code: 'P601',
    questions: 'What is your level of education?',
    options: [
      {
        label: 'Some high school, no diploma',
        value: 'Some high school, no diploma',
      },
      {
        label:
          'High school graduate, diploma or the equivalent (for example: GED)',
        value:
          'High school graduate, diploma or the equivalent (for example: GED)',
      },
      {
        label: 'Some college credit, no degree',
        value: 'Some college credit, no degree',
      },
      {
        label: 'Trade/technical/vocational training',
        value: 'Trade/technical/vocational training',
      },
      {
        label: 'Associate degree',
        value: 'Associate degree',
      },
      {
        label: "Bachelor's degree",
        value: "Bachelor's degree",
      },
      {
        label: "Master's degree",
        value: "Master's degree",
      },
      {
        label: 'Professional degree',
        value: 'Professional degree',
      },
      {
        label: 'Doctorate degree',
        value: 'Doctorate degree',
      },
    ],
    type: ['SELECT'],
  },
  {
    code: 'P602',
    questions: 'What is your household income?',
    options: [
      {
        label: 'Less than $25,000',
        value: 'Less than $25,000',
      },
      {
        label: '$25,000 - $50,000',
        value: '$25,000 - $50,000',
      },
      {
        label: '$50,000 - $100,000',
        value: '$50,000 - $100,000',
      },
      {
        label: '$100,000 - $200,000',
        value: '$100,000 - $200,000',
      },
      {
        label: 'More than $200,000',
        value: 'More than $200,000',
      },
    ],
    type: ['SELECT'],
  },
  {
    code: 'P603',
    questions:
      'Do you suffer from any chronic medical conditions? Enter three characters to search for your condition. Please choose none if this doesnt apply to you.',
    options: [
      ...dieses,
      {
        label: 'None',
        value: 'None',
      },
    ],
    type: ['MULTISELECT'],
  },
  {
    code: 'P604. ',
    questions:
      'Are you a caregiver for a loved one with a chronic medical condition? Enter three characters to search for the condition of your loved one. Please choose none if this doesnt apply to you.',
    options: [
      ...dieses,
      {
        label: 'None',
        value: 'None',
      },
    ],
    type: ['MULTISELECT'],
  },
  // { "code": "SUS", "questions": "SUS.", "type": [], "options": ["TEXT"], },
  {
    code: 'P6Q5',
    questions: 'What type of diabetes do you have?',
    options: [
      {
        label: 'Type | Diabetes',
        value: 'Type | Diabetes',
      },
      {
        label: 'Type || Diabetes',
        value: 'Type || Diabetes',
      },
    ],
    type: ['SELECT'],
    linked: {
      questionCode: 'P603',
      options: ['Diabetes (DM)'],
    },
  },
  {
    code: 'P6Q6',
    questions: 'What kind of multiple sclerosis do you have?',
    options: [
      {
        label: 'Multiple Sclerosis (MS): Clinically Isolated Syndrome (CIS)',
        value: 'Multiple Sclerosis (MS): Clinically Isolated Syndrome (CIS)',
      },
      {
        label: 'Multiple Sclerosis (MS): Primary Progressive  MS (PPMS)',
        value: 'Multiple Sclerosis (MS): Primary Progressive  MS (PPMS)',
      },
      {
        label: 'Multiple Sclerosis (MS): Progressive Relapsing MS (PRMS)',
        value: 'Multiple Sclerosis (MS): Progressive Relapsing MS (PRMS)',
      },
      {
        label: 'Multiple Sclerosis (MS): Relapsing Remitting MS (RRMS)',
        value: 'Multiple Sclerosis (MS): Relapsing Remitting MS (RRMS)',
      },
      {
        label: 'Multiple Sclerosis (MS): Secondary Progressive MS (SPMS)',
        value: 'Multiple Sclerosis (MS): Secondary Progressive MS (SPMS)',
      },
      {
        label: "None or I don't know",
        value: "None or I don't know",
      },
      {
        label:
          "Other: Please specify, if nothing is listed or leave empty if you don't know.",
        value:
          "Other: Please specify, if nothing is listed or leave empty if you don't know.",
      },
    ],
    textLinkedWithOther:
      "Other: Please specify, if nothing is listed or leave empty if you don't know.",
    type: ['SELECT', 'TEXT'],
    linked: {
      questionCode: 'P603',
      options: ['Multiple Scleros2is (MS)'],
    },
  },
  {
    code: 'P6Q7',
    questions: 'Please let us know your survey & research preferences',
    options: [
      {
        label: 'Patient & Caregiver Surveys & Interviews',
        value: 'Patient & Caregiver Surveys & Interviews',
      },
      {
        label: 'Online Interviews',
        value: 'Online Interviews',
      },
      {
        label: 'Business Surveys & Interviews',
        value: 'Business Surveys & Interviews',
      },
      {
        label: 'Consumer Surveys',
        value: 'Consumer Surveys',
      },
    ],
    type: ['MULTISELECT'],
  },
];

export const OtherDetailsQuestionInitialValue = {
  'What is your ethnicity?': '',
  'What is your marital status?': '',
  'What is your religious affiliation?': '',
  'Do you personally own any of the following?': [],
  'What is your current employment status?': '',
  'What industry do you work in? Please enter three characters to search for your industry.':
    '',
  'What best describes your current job title? Please enter three characters to search, if you cant find your title please select other.':
    '',
  'What department do you work in?': '',
  'What is your level of education?': '',
  'What is your household income?': '',
  'What type of diabetes do you have?': '',
  'What kind of multiple sclerosis do you have?': '',
  'Please let us know your survey & research preferences': [],
  'Are you a caregiver for a loved one with a chronic medical condition? Enter three characters to search for the condition of your loved one. Please choose none if this doesnt apply to you.':
    [],
  'Do you suffer from any chronic medical conditions? Enter three characters to search for your condition. Please choose none if this doesnt apply to you.':
    [],
};
