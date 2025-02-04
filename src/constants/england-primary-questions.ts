import {IPostCodeData, QuestionType} from '../interfaceTypes';

export const EnglandPrimaryQuestions = (old = false) => [
  ...(!old
    ? [
        {
          questionId: '2189',
          question: 'What is your current employment status?',
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

          type: QuestionType.SELECT,
        },
        {
          questionId: '632',
          question: 'What is your marital status?',
          type: QuestionType.SELECT,
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
        },
        {
          questionId: '48741',
          question: 'What is your level of education?',
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
          type: QuestionType.SELECT,
        },
      ]
    : []),

  {
    questionId: '638',
    question:
      'In your household, are you the person who makes most of the daily purchasing decisions?',
    type: QuestionType.SELECT,
    options: [
      {
        label: 'Yes',
        value: '1',
      },
      {
        label: 'No',
        value: '2',
      },
      {
        label: 'Share decisions equally',
        value: '3',
      },
    ],
  },
  {
    questionId: '640',
    question: 'What is your sexual orientation?',
    type: QuestionType.SELECT,
    options: [
      {label: 'Heterosexual', value: '1'},
      {label: 'Lesbian/Gay', value: '2'},
      {label: 'Bisexual/Pansexual', value: '3'},
      {label: 'Asexual', value: '4'},
      {label: 'Other', value: '5'},
      {label: 'Unsure', value: '6'},
      {label: 'Prefer not to answer', value: '-3105'},
    ],
  },
  {
    questionId: '641',
    question: 'How many people live in your household including yourself?',
    type: QuestionType.SELECT,
    options: [
      {
        label: '1 person',
        value: '1',
      },
      {
        label: '2 persons',
        value: '2',
      },
      {
        label: '3 persons',
        value: '3',
      },
      {
        label: '4 persons',
        value: '4',
      },
      {
        label: '5 persons',
        value: '5',
      },
      {
        label: 'More than 5 persons',
        value: '6',
      },
      {
        label: 'Prefer not to answer',
        value: '7',
      },
    ],
  },
  {
    questionId: '642',
    question: 'What best describes your current household?',
    type: QuestionType.SELECT,
    options: [
      {
        label: 'Rented apartment',
        value: '1',
      },
      {
        label: 'Owned apartment',
        value: '2',
      },
      {
        label: 'Rented house',
        value: '3',
      },
      {
        label: 'Owned house',
        value: '4',
      },
      {
        label: 'Farm',
        value: '5',
      },
      {
        label: 'University Residence',
        value: '6',
      },
      {
        label: 'Living with parents',
        value: '7',
      },
      {
        label: 'Other',
        value: '8',
      },
    ],
  },
  {
    questionId: '643',
    question:
      'Do you, or does anyone in your household, work in any of the following industries?',
    type: QuestionType.MULTISELECT,
    options: [
      {
        label: 'Accounting',
        value: '1',
      },
      {
        label: 'Advertising',
        value: '2',
      },
      {
        label: 'Agriculture/Fishing',
        value: '3',
      },
      {
        label: 'Architecture',
        value: '4',
      },
      {
        label: 'Automotive',
        value: '5',
      },
      {
        label: 'Aviation',
        value: '6',
      },
      {
        label: 'Banking/Financial',
        value: '7',
      },
      {
        label: 'Bio-Tech',
        value: '8',
      },
      {
        label: 'Brokerage',
        value: '9',
      },
      {
        label: 'Carpenting/Electrical installations/VVS',
        value: '10',
      },
      {
        label: 'Chemicals/Plastics/Rubber',
        value: '11',
      },
      {
        label: 'Communications/Information',
        value: '12',
      },
      {
        label: 'Computer Hardware',
        value: '13',
      },
      {
        label: 'Computer Reseller (software/hardware)',
        value: '14',
      },
      {
        label: 'Computer Software',
        value: '15',
      },
      {
        label: 'Construction',
        value: '16',
      },
      {
        label: 'Consulting',
        value: '17',
      },
      {
        label: 'Consumer Electronics',
        value: '18',
      },
      {
        label: 'Consumer Packaged Goods',
        value: '19',
      },
      {
        label: 'Education',
        value: '20',
      },
      {
        label: 'Energy/Utilities/Oil and Gas',
        value: '21',
      },
      {
        label: 'Engineering',
        value: '22',
      },
      {
        label: 'Environmental Services',
        value: '23',
      },
      {
        label: 'Fashion/Apparel',
        value: '24',
      },
      {
        label: 'Food/Beverage',
        value: '25',
      },
      {
        label: 'Government/Public Sector',
        value: '26',
      },
      {
        label: 'Healthcare',
        value: '27',
      },
      {
        label: 'Hospitality/Tourism',
        value: '28',
      },
      {
        label: 'Human Resources',
        value: '29',
      },
      {
        label: 'Information Technology/IT',
        value: '30',
      },
      {
        label: 'Insurance',
        value: '31',
      },
      {
        label: 'Internet',
        value: '32',
      },
      {
        label: 'Legal/Law',
        value: '33',
      },
      {
        label: 'Manufacturing',
        value: '34',
      },
      {
        label: 'Market Research',
        value: '35',
      },
      {
        label: 'Marketing/Sales',
        value: '36',
      },
      {
        label: 'Media/Entertainment',
        value: '37',
      },
      {
        label: 'Military',
        value: '38',
      },
      {
        label: 'Non Profit/Social services',
        value: '39',
      },
      {
        label: 'Personal Services',
        value: '40',
      },
      {
        label: 'Pharmaceuticals',
        value: '41',
      },
      {
        label: 'Printing Publishing',
        value: '42',
      },
      {
        label: 'Public Relations',
        value: '43',
      },
      {
        label: 'Real Estate/Property',
        value: '44',
      },
      {
        label: 'Retail/Wholesale trade',
        value: '45',
      },
      {
        label: 'Security',
        value: '46',
      },
      {
        label: 'Shipping/Distribution',
        value: '47',
      },
      {
        label: 'Telecommunications',
        value: '48',
      },
      {
        label: 'Transportation',
        value: '49',
      },
      {
        label: 'Other',
        value: '50',
      },
      {
        label: "I don't work",
        value: '51',
      },
    ],
  },
  {
    questionId: '646',
    question:
      'Which department do you primarily work within at your organization?',
    type: QuestionType.SELECT,
    options: [
      {
        label: 'Administration/General Staff',
        value: '1',
      },
      {
        label: 'Customer Service/Client Service',
        value: '2',
      },
      {
        label: 'Executive Leadership',
        value: '3',
      },
      {
        label: 'Finance/Accounting',
        value: '4',
      },
      {
        label: 'Human Resources',
        value: '5',
      },
      {
        label: 'Legal/Law',
        value: '6',
      },
      {
        label: 'Marketing',
        value: '7',
      },
      {
        label: 'Operations',
        value: '8',
      },
      {
        label: 'Procurement',
        value: '9',
      },
      {
        label: 'Sales/Business Development',
        value: '10',
      },
      {
        label: 'Technology Development Hardware (not only IT)',
        value: '11',
      },
      {
        label: 'Technology Development Software (not only IT)',
        value: '12',
      },
      {
        label: 'Technology Implementation',
        value: '13',
      },
      {
        label: 'Other',
        value: '14',
      },
      {
        label: "I don't work",
        value: '15',
      },
    ],
  },
  {
    questionId: '1249',
    question: 'Please indicate the age and gender of your child or children',
    type: QuestionType.MULTISELECT,
    options: [
      {
        label: 'Boy under age 1',
        value: '1',
      },
      {
        label: 'Girl under age 1',
        value: '2',
      },
      {
        label: 'Boy age 1',
        value: '3',
      },
      {
        label: 'Girl age 1',
        value: '4',
      },
      {
        label: 'Boy age 2',
        value: '5',
      },
      {
        label: 'Girl age 2',
        value: '6',
      },
      {
        label: 'Boy age 3',
        value: '7',
      },
      {
        label: 'Girl age 3',
        value: '8',
      },
      {
        label: 'Boy age 4',
        value: '9',
      },
      {
        label: 'Girl age 4',
        value: '10',
      },
      {
        label: 'Boy age 5',
        value: '11',
      },
      {
        label: 'Girl age 5',
        value: '12',
      },
      {
        label: 'Boy age 6',
        value: '13',
      },
      {
        label: 'Girl age 6',
        value: '14',
      },
      {
        label: 'Boy age 7',
        value: '15',
      },
      {
        label: 'Girl age 7',
        value: '16',
      },
      {
        label: 'Boy age 8',
        value: '17',
      },
      {
        label: 'Girl age 8',
        value: '18',
      },
      {
        label: 'Boy age 9',
        value: '19',
      },
      {
        label: 'Girl age 9',
        value: '20',
      },
      {
        label: 'Boy age 10',
        value: '21',
      },
      {
        label: 'Girl age 10',
        value: '22',
      },
      {
        label: 'Boy age 11',
        value: '23',
      },
      {
        label: 'Girl age 11',
        value: '24',
      },
      {
        label: 'Boy age 12',
        value: '25',
      },
      {
        label: 'Girl age 12',
        value: '26',
      },
      {
        label: 'Male teen age 13',
        value: '27',
      },
      {
        label: 'Female teen age 13',
        value: '28',
      },
      {
        label: 'Male teen age 14',
        value: '29',
      },
      {
        label: 'Female teen age 14',
        value: '30',
      },
      {
        label: 'Male teen age 15',
        value: '31',
      },
      {
        label: 'Female teen age 15',
        value: '32',
      },
      {
        label: 'Male teen age 16',
        value: '33',
      },
      {
        label: 'Female teen age 16',
        value: '34',
      },
      {
        label: 'Male teen age 17',
        value: '35',
      },
      {
        label: 'Female teen age 17',
        value: '36',
      },
      {
        label: 'None of the above',
        value: '-3105',
      },
    ],
  },
  {
    questionId: '3546',
    type: QuestionType.MULTISELECT,
    question:
      'Please choose which departments/products you have influence or decision making authority over regarding spending/purchasing',
    options: [
      {
        label: 'IT Hardware',
        value: '1',
      },
      {
        label: 'IT Software',
        value: '2',
      },
      {
        label: 'Printers and copiers',
        value: '3',
      },
      {
        label: 'Financial Department',
        value: '4',
      },
      {
        label: 'Human Resources',
        value: '5',
      },
      {
        label: 'Office supplies',
        value: '6',
      },
      {
        label: 'Corporate travel',
        value: '7',
      },
      {
        label: 'Telecommunications',
        value: '8',
      },
      {
        label: 'Sales',
        value: '9',
      },
      {
        label: 'Shipping',
        value: '10',
      },
      {
        label: 'Operations',
        value: '11',
      },
      {
        label: 'Legal services',
        value: '12',
      },
      {
        label: 'Marketing/Advertising',
        value: '13',
      },
      {
        label: 'Security',
        value: '14',
      },
      {
        label: 'Food services',
        value: '15',
      },
      {
        label: 'Auto leasing/purchasing',
        value: '16',
      },
      {
        label: 'Procurement',
        value: '19',
      },
      {
        label: 'Other',
        value: '17',
      },
      {
        label: 'I don’t have influence or decision making authority',
        value: '18',
      },
    ],
  },
  {
    questionId: '3708',
    question: 'How many children do you have under the age of 18?',
    type: QuestionType.NUMERICFIELD,
    options: [],
  },
  {
    questionId: '7064',
    question: 'Please choose the options that best describe your household',
    type: QuestionType.MULTISELECT,
    options: [
      {
        label: 'I am pregnant/expecting a child within the next 9 months',
        value: '1',
      },
      {
        label:
          'I have one or more children under the age of 18 living in my household',
        value: '2',
      },
      {
        label:
          'I have one or more children aged 18 or older living in my household',
        value: '3',
      },
      {
        label:
          'I have no children living in my household and I am not pregnant/expecting a child within the next 9 months',
        value: '4',
      },
    ],
  },
  {
    questionId: '79362',
    question: 'Please enter the first half of your postcode below',
    type: QuestionType.SEARCHINPUT,
    options: [],
  },
  // {
  //   questionId: "79335",
  //   question: "What part of the United Kingdom do you live in?",
  //   type: QuestionType.SELECT,
  //   options: [
  //     {
  //       label: "Alderney (Guernsey)",
  //       value: "1",
  //     },
  //     {
  //       label: "Ayre (Isle of Man)",
  //       value: "2",
  //     },
  //     {
  //       label: "England",
  //       value: "3",
  //     },
  //     {
  //       label: "Glenfaba (Isle of Man)",
  //       value: "4",
  //     },
  //     {
  //       label: "Michael (Isle of Man)",
  //       value: "5",
  //     },
  //     {
  //       label: "Middle (Isle of Man)",
  //       value: "6",
  //     },
  //     {
  //       label: "Northern Ireland",
  //       value: "7",
  //     },
  //     {
  //       label: "Rushen (Isle of Man)",
  //       value: "8",
  //     },
  //     {
  //       label: "Scotland",
  //       value: "9",
  //     },
  //     {
  //       label: "St. Andrew (Guernsey)",
  //       value: "10",
  //     },
  //     {
  //       label: "St. Helier (Jersey)",
  //       value: "11",
  //     },
  //     {
  //       label: "St. Martin (Guernsey)",
  //       value: "12",
  //     },
  //     {
  //       label: "St. Ouen (Jersey)",
  //       value: "13",
  //     },
  //     {
  //       label: "St. Peter Port (Guernsey)",
  //       value: "14",
  //     },
  //     {
  //       label: "Wales",
  //       value: "15",
  //     },
  //   ],
  //   // isDisplay: false,
  // },
  // {
  //   questionId: "79388",
  //   question: "What region do you live in?",
  //   type: QuestionType.SELECT,
  //   options: [{
  //     "label": "Alderney",
  //     "value": "1"
  //   }, {
  //     "label": "Ayre",
  //     "value": "2"
  //   }, {
  //     "label": "East Midlands",
  //     "value": "3"
  //   }, {
  //     "label": "East of England",
  //     "value": "4"
  //   }, {
  //     "label": "Glenfaba",
  //     "value": "5"
  //   }, {
  //     "label": "Greater London",
  //     "value": "6"
  //   }, {
  //     "label": "Michael",
  //     "value": "7"
  //   }, {
  //     "label": "Middle",
  //     "value": "8"
  //   }, {
  //     "label": "North East England",
  //     "value": "9"
  //   }, {
  //     "label": "North West England",
  //     "value": "10"
  //   }, {
  //     "label": "Northern Ireland",
  //     "value": "11"
  //   }, {
  //     "label": "Rushen",
  //     "value": "12"
  //   }, {
  //     "label": "Scotland",
  //     "value": "13"
  //   }, {
  //     "label": "South East England",
  //     "value": "14"
  //   }, {
  //     "label": "South West England",
  //     "value": "15"
  //   }, {
  //     "label": "St. Andrew",
  //     "value": "16"
  //   }, {
  //     "label": "St. Helier",
  //     "value": "17"
  //   }, {
  //     "label": "St. Martin",
  //     "value": "18"
  //   }, {
  //     "label": "St. Ouen",
  //     "value": "19"
  //   }, {
  //     "label": "St. Peter Port",
  //     "value": "20"
  //   }, {
  //     "label": "Wales",
  //     "value": "21"
  //   }, {
  //     "label": "West Midlands",
  //     "value": "22"
  //   }, {
  //     "label": "Yorkshire and the Humber",
  //     "value": "23"
  //   }],
  //   // isDisplay: false,
  // },
  // {
  //   questionId: "79336",
  //   question: "What county do you live in?",
  //   type: QuestionType.SELECT,
  //   options: [{
  //     "label": "Aberdeen City",
  //     "value": "1"
  //   }, {
  //     "label": "Aberdeenshire",
  //     "value": "2"
  //   }, {
  //     "label": "Alderney",
  //     "value": "3"
  //   }, {
  //     "label": "Angus",
  //     "value": "4"
  //   }, {
  //     "label": "Antrim and Newtownabbey",
  //     "value": "5"
  //   }, {
  //     "label": "Ards and North Down",
  //     "value": "6"
  //   }, {
  //     "label": "Argyll and Bute",
  //     "value": "7"
  //   }, {
  //     "label": "Bath and North East Somerset",
  //     "value": "8"
  //   }, {
  //     "label": "Bedford",
  //     "value": "9"
  //   }, {
  //     "label": "Belfast",
  //     "value": "10"
  //   }, {
  //     "label": "Blackburn with Darwen",
  //     "value": "11"
  //   }, {
  //     "label": "Blackpool",
  //     "value": "12"
  //   }, {
  //     "label": "Blaenau Gwent",
  //     "value": "13"
  //   }, {
  //     "label": "Bournemouth",
  //     "value": "14"
  //   }, {
  //     "label": "Bracknell Forest",
  //     "value": "15"
  //   }, {
  //     "label": "Bridgend (Pen-y-bont ar Ogwr)",
  //     "value": "16"
  //   }, {
  //     "label": "Buckinghamshire",
  //     "value": "17"
  //   }, {
  //     "label": "Caerphilly (Caerffili)",
  //     "value": "18"
  //   }, {
  //     "label": "Cambridgeshire",
  //     "value": "19"
  //   }, {
  //     "label": "Cardiff (Caerdydd)",
  //     "value": "20"
  //   }, {
  //     "label": "Carmarthenshire (Sir Gaerfyrddin)",
  //     "value": "21"
  //   }, {
  //     "label": "Castletown",
  //     "value": "22"
  //   }, {
  //     "label": "Causeway Coast and Glens",
  //     "value": "23"
  //   }, {
  //     "label": "Central Bedfordshire",
  //     "value": "24"
  //   }, {
  //     "label": "Ceredigion (Sir Ceredigion)",
  //     "value": "25"
  //   }, {
  //     "label": "Cheshire East",
  //     "value": "26"
  //   }, {
  //     "label": "Cheshire West and Chester",
  //     "value": "27"
  //   }, {
  //     "label": "City of Brighton and Hove",
  //     "value": "28"
  //   }, {
  //     "label": "City of Bristol",
  //     "value": "29"
  //   }, {
  //     "label": "City of Derby",
  //     "value": "30"
  //   }, {
  //     "label": "City of Edinburgh",
  //     "value": "31"
  //   }, {
  //     "label": "City of Kingston upon Hull",
  //     "value": "32"
  //   }, {
  //     "label": "City of Leicester",
  //     "value": "33"
  //   }, {
  //     "label": "City of Nottingham",
  //     "value": "34"
  //   }, {
  //     "label": "City of Peterborough",
  //     "value": "35"
  //   }, {
  //     "label": "City of Plymouth",
  //     "value": "36"
  //   }, {
  //     "label": "City of Portsmouth",
  //     "value": "37"
  //   }, {
  //     "label": "City of Southampton",
  //     "value": "38"
  //   }, {
  //     "label": "City of Stoke-on-Trent",
  //     "value": "39"
  //   }, {
  //     "label": "Clackmannanshire",
  //     "value": "40"
  //   }, {
  //     "label": "Conwy",
  //     "value": "41"
  //   }, {
  //     "label": "Cornwall",
  //     "value": "42"
  //   }, {
  //     "label": "County Durham",
  //     "value": "43"
  //   }, {
  //     "label": "County of Herefordshire",
  //     "value": "44"
  //   }, {
  //     "label": "Cumbria",
  //     "value": "45"
  //   }, {
  //     "label": "Darlington",
  //     "value": "46"
  //   }, {
  //     "label": "Denbighshire (Sir Ddinbych)",
  //     "value": "47"
  //   }, {
  //     "label": "Derbyshire",
  //     "value": "48"
  //   }, {
  //     "label": "Derry and Strabane",
  //     "value": "49"
  //   }, {
  //     "label": "Devon",
  //     "value": "50"
  //   }, {
  //     "label": "Dorset",
  //     "value": "51"
  //   }, {
  //     "label": "Douglas",
  //     "value": "52"
  //   }, {
  //     "label": "Dumfries and Galloway",
  //     "value": "53"
  //   }, {
  //     "label": "Dundee City",
  //     "value": "54"
  //   }, {
  //     "label": "East Ayrshire",
  //     "value": "55"
  //   }, {
  //     "label": "East Dunbartonshire",
  //     "value": "56"
  //   }, {
  //     "label": "East Lothian",
  //     "value": "57"
  //   }, {
  //     "label": "East Renfrewshire",
  //     "value": "58"
  //   }, {
  //     "label": "East Riding of Yorkshire",
  //     "value": "59"
  //   }, {
  //     "label": "East Sussex",
  //     "value": "60"
  //   }, {
  //     "label": "Eilean Siar",
  //     "value": "61"
  //   }, {
  //     "label": "Essex",
  //     "value": "62"
  //   }, {
  //     "label": "Falkirk",
  //     "value": "63"
  //   }, {
  //     "label": "Fermanagh and Omagh",
  //     "value": "64"
  //   }, {
  //     "label": "Fife",
  //     "value": "65"
  //   }, {
  //     "label": "Flintshire (Sir y Fflint)",
  //     "value": "66"
  //   }, {
  //     "label": "German",
  //     "value": "67"
  //   }, {
  //     "label": "Glasgow City",
  //     "value": "68"
  //   }, {
  //     "label": "Gloucestershire",
  //     "value": "69"
  //   }, {
  //     "label": "Greater London",
  //     "value": "70"
  //   }, {
  //     "label": "Greater Manchester",
  //     "value": "71"
  //   }, {
  //     "label": "Gwynedd",
  //     "value": "72"
  //   }, {
  //     "label": "Halton",
  //     "value": "73"
  //   }, {
  //     "label": "Hampshire",
  //     "value": "74"
  //   }, {
  //     "label": "Hartlepool",
  //     "value": "75"
  //   }, {
  //     "label": "Hertfordshire",
  //     "value": "76"
  //   }, {
  //     "label": "Highland",
  //     "value": "77"
  //   }, {
  //     "label": "Inverclyde",
  //     "value": "78"
  //   }, {
  //     "label": "Isle of Anglesey (Sir Ynys Mon)",
  //     "value": "79"
  //   }, {
  //     "label": "Isle of Wight",
  //     "value": "80"
  //   }, {
  //     "label": "Isles of Scilly",
  //     "value": "81"
  //   }, {
  //     "label": "Kent",
  //     "value": "82"
  //   }, {
  //     "label": "Lancashire",
  //     "value": "83"
  //   }, {
  //     "label": "Leicestershire",
  //     "value": "84"
  //   }, {
  //     "label": "Lincolnshire",
  //     "value": "85"
  //   }, {
  //     "label": "Lisburn and Castlereagh",
  //     "value": "86"
  //   }, {
  //     "label": "Luton",
  //     "value": "87"
  //   }, {
  //     "label": "Medway",
  //     "value": "88"
  //   }, {
  //     "label": "Merseyside",
  //     "value": "89"
  //   }, {
  //     "label": "Merthyr Tydfil (Merthyr Tudful)",
  //     "value": "90"
  //   }, {
  //     "label": "Michael",
  //     "value": "91"
  //   }, {
  //     "label": "Mid and East Antrim",
  //     "value": "92"
  //   }, {
  //     "label": "Mid Ulster",
  //     "value": "93"
  //   }, {
  //     "label": "Middlesbrough",
  //     "value": "94"
  //   }, {
  //     "label": "Midlothian",
  //     "value": "95"
  //   }, {
  //     "label": "Milton Keynes",
  //     "value": "96"
  //   }, {
  //     "label": "Monmouthshire (Sir Fynwy)",
  //     "value": "97"
  //   }, {
  //     "label": "Moray",
  //     "value": "98"
  //   }, {
  //     "label": "Neath Port Talbot (Castell-nedd Port Talbot)",
  //     "value": "99"
  //   }, {
  //     "label": "Newport (Casnewydd)",
  //     "value": "100"
  //   }, {
  //     "label": "Norfolk",
  //     "value": "101"
  //   }, {
  //     "label": "North Ayrshire",
  //     "value": "102"
  //   }, {
  //     "label": "North East Lincolnshire",
  //     "value": "103"
  //   }, {
  //     "label": "North Lanarkshire",
  //     "value": "104"
  //   }, {
  //     "label": "North Lincolnshire",
  //     "value": "105"
  //   }, {
  //     "label": "North Somerset",
  //     "value": "106"
  //   }, {
  //     "label": "North Yorkshire",
  //     "value": "107"
  //   }, {
  //     "label": "Northamptonshire",
  //     "value": "108"
  //   }, {
  //     "label": "Northumberland",
  //     "value": "109"
  //   }, {
  //     "label": "Nottinghamshire",
  //     "value": "110"
  //   }, {
  //     "label": "Onchan",
  //     "value": "111"
  //   }, {
  //     "label": "Orkney Islands",
  //     "value": "112"
  //   }, {
  //     "label": "Oxfordshire",
  //     "value": "113"
  //   }, {
  //     "label": "Peel",
  //     "value": "114"
  //   }, {
  //     "label": "Pembrokeshire (Sir Benfro)",
  //     "value": "115"
  //   }, {
  //     "label": "Perth and Kinross",
  //     "value": "116"
  //   }, {
  //     "label": "Poole",
  //     "value": "117"
  //   }, {
  //     "label": "Powys",
  //     "value": "118"
  //   }, {
  //     "label": "Ramsey",
  //     "value": "119"
  //   }, {
  //     "label": "Reading",
  //     "value": "120"
  //   }, {
  //     "label": "Redcar and Cleveland",
  //     "value": "121"
  //   }, {
  //     "label": "Renfrewshire",
  //     "value": "122"
  //   }, {
  //     "label": "Rhondda Cynon Taf",
  //     "value": "123"
  //   }, {
  //     "label": "Rutland",
  //     "value": "124"
  //   }, {
  //     "label": "Scottish Borders",
  //     "value": "125"
  //   }, {
  //     "label": "Shetland Islands",
  //     "value": "126"
  //   }, {
  //     "label": "Shropshire",
  //     "value": "127"
  //   }, {
  //     "label": "Slough",
  //     "value": "128"
  //   }, {
  //     "label": "Somerset",
  //     "value": "129"
  //   }, {
  //     "label": "South Ayrshire",
  //     "value": "130"
  //   }, {
  //     "label": "South Gloucestershire",
  //     "value": "131"
  //   }, {
  //     "label": "South Lanarkshire",
  //     "value": "132"
  //   }, {
  //     "label": "South Yorkshire",
  //     "value": "133"
  //   }, {
  //     "label": "Southend-on-Sea",
  //     "value": "134"
  //   }, {
  //     "label": "St. Andrew",
  //     "value": "135"
  //   }, {
  //     "label": "St. Helier",
  //     "value": "136"
  //   }, {
  //     "label": "St. Martin",
  //     "value": "137"
  //   }, {
  //     "label": "St. Ouen",
  //     "value": "138"
  //   }, {
  //     "label": "St. Peter Port",
  //     "value": "139"
  //   }, {
  //     "label": "Staffordshire",
  //     "value": "140"
  //   }, {
  //     "label": "Stirling",
  //     "value": "141"
  //   }, {
  //     "label": "Stockton-on-Tees",
  //     "value": "142"
  //   }, {
  //     "label": "Suffolk",
  //     "value": "143"
  //   }, {
  //     "label": "Surrey",
  //     "value": "144"
  //   }, {
  //     "label": "Swansea (Abertawe)",
  //     "value": "145"
  //   }, {
  //     "label": "Swindon",
  //     "value": "146"
  //   }, {
  //     "label": "Telford and Wrekin",
  //     "value": "147"
  //   }, {
  //     "label": "Thurrock",
  //     "value": "148"
  //   }, {
  //     "label": "Torbay",
  //     "value": "149"
  //   }, {
  //     "label": "Torfaen (Tor-faen)",
  //     "value": "150"
  //   }, {
  //     "label": "Tyne and Wear",
  //     "value": "151"
  //   }, {
  //     "label": "Vale of Glamorgan (Bro Morgannwg)",
  //     "value": "152"
  //   }, {
  //     "label": "Warrington",
  //     "value": "153"
  //   }, {
  //     "label": "Warwickshire",
  //     "value": "154"
  //   }, {
  //     "label": "West Berkshire",
  //     "value": "155"
  //   }, {
  //     "label": "West Dunbartonshire",
  //     "value": "156"
  //   }, {
  //     "label": "West Lothian",
  //     "value": "157"
  //   }, {
  //     "label": "West Midlands",
  //     "value": "158"
  //   }, {
  //     "label": "West Sussex",
  //     "value": "159"
  //   }, {
  //     "label": "West Yorkshire",
  //     "value": "160"
  //   }, {
  //     "label": "Wiltshire",
  //     "value": "161"
  //   }, {
  //     "label": "Windsor and Maidenhead",
  //     "value": "162"
  //   }, {
  //     "label": "Wokingham",
  //     "value": "163"
  //   }, {
  //     "label": "Worcestershire",
  //     "value": "164"
  //   }, {
  //     "label": "Wrexham (Wrecsam)",
  //     "value": "165"
  //   }, {
  //     "label": "York",
  //     "value": "166"
  //   }],
  //   // isDisplay: false,
  // },
  // {
  //   questionId: "12452",
  //   question: "In which region do you live?",
  //   type: QuestionType.SELECT,
  //   options: [{
  //     "label": "East Midlands (England)",
  //     "value": "1"
  //   }, {
  //     "label": "East Of England",
  //     "value": "2"
  //   }, {
  //     "label": "London",
  //     "value": "3"
  //   }, {
  //     "label": "North East (England)",
  //     "value": "4"
  //   }, {
  //     "label": "North West (England)",
  //     "value": "5"
  //   }, {
  //     "label": "Northern Ireland",
  //     "value": "6"
  //   }, {
  //     "label": "Scotland",
  //     "value": "7"
  //   }, {
  //     "label": "South East (England)",
  //     "value": "8"
  //   }, {
  //     "label": "South West (England)",
  //     "value": "9"
  //   }, {
  //     "label": "Wales",
  //     "value": "10"
  //   }, {
  //     "label": "West Midlands (England)",
  //     "value": "11"
  //   }, {
  //     "label": "Yorkshire And The Humber",
  //     "value": "12"
  //   }],
  // },
  // {
  //   questionId: "12453",
  //   question: "In which county do you live?",
  //   type: QuestionType.SELECT,
  //   options: [{
  //     "label": "Bedfordshire and Hertfordshire",
  //     "value": "1"
  //   }, {
  //     "label": "Berkshire, Buckinghamshire and Oxfordshire",
  //     "value": "2"
  //   }, {
  //     "label": "Cornwall and Isles of Scilly",
  //     "value": "3"
  //   }, {
  //     "label": "Cumbria",
  //     "value": "4"
  //   }, {
  //     "label": "Cheshire",
  //     "value": "5"
  //   }, {
  //     "label": "Derbyshire and Nottinghamshire",
  //     "value": "6"
  //   }, {
  //     "label": "Devon",
  //     "value": "7"
  //   }, {
  //     "label": "Dorset and Somerset",
  //     "value": "8"
  //   }, {
  //     "label": "East Anglia",
  //     "value": "9"
  //   }, {
  //     "label": "East Wales",
  //     "value": "10"
  //   }, {
  //     "label": "East Yorkshire and Northern Lincolnshire",
  //     "value": "11"
  //   }, {
  //     "label": "Eastern Scotland",
  //     "value": "12"
  //   }, {
  //     "label": "Essex",
  //     "value": "13"
  //   }, {
  //     "label": "Gloucestershire, Wiltshire and Bristol/Bath area",
  //     "value": "14"
  //   }, {
  //     "label": "Greater Manchester",
  //     "value": "15"
  //   }, {
  //     "label": "Hampshire and Isle of Wight",
  //     "value": "16"
  //   }, {
  //     "label": "Herefordshire, Worcestershire and Warwickshire",
  //     "value": "17"
  //   }, {
  //     "label": "Highlands and Islands",
  //     "value": "18"
  //   }, {
  //     "label": "Inner London",
  //     "value": "19"
  //   }, {
  //     "label": "Kent",
  //     "value": "20"
  //   }, {
  //     "label": "Lancashire",
  //     "value": "21"
  //   }, {
  //     "label": "Leicestershire, Rutland and Northamptonshire",
  //     "value": "22"
  //   }, {
  //     "label": "Lincolnshire",
  //     "value": "23"
  //   }, {
  //     "label": "Merseyside",
  //     "value": "24"
  //   }, {
  //     "label": "North Eastern Scotland",
  //     "value": "25"
  //   }, {
  //     "label": "North Yorkshire",
  //     "value": "26"
  //   }, {
  //     "label": "Northern Ireland",
  //     "value": "27"
  //   }, {
  //     "label": "Northumberland and Tyne and Wear",
  //     "value": "28"
  //   }, {
  //     "label": "Outer London",
  //     "value": "29"
  //   }, {
  //     "label": "Shropshire and Staffordshire",
  //     "value": "30"
  //   }, {
  //     "label": "South Western Scotland",
  //     "value": "31"
  //   }, {
  //     "label": "South Yorkshire",
  //     "value": "32"
  //   }, {
  //     "label": "Surrey, East and West Sussex",
  //     "value": "33"
  //   }, {
  //     "label": "Tees Valley and Durham",
  //     "value": "34"
  //   }, {
  //     "label": "West Midlands",
  //     "value": "35"
  //   }, {
  //     "label": "West Wales and The Valleys",
  //     "value": "36"
  //   }, {
  //     "label": "West Yorkshire",
  //     "value": "37"
  //   }],
  // },
  {
    questionId: '15297',
    question: 'What is your job title, level or responsibility?',
    type: QuestionType.SELECT,
    options: [
      {
        label: 'C-Level (e.g. CEO, CFO), Owner, Partner, President',
        value: '1',
      },
      {
        label: 'Vice President (EVP, SVP, AVP, VP)',
        value: '2',
      },
      {
        label: 'Director (Group Director, Sr. Director, Director)',
        value: '3',
      },
      {
        label: 'Manager (Group Manager, Sr. Manager, Manager, Program Manager)',
        value: '4',
      },
      {
        label: 'Analyst',
        value: '5',
      },
      {
        label: 'Assistant or Associate',
        value: '6',
      },
      {
        label: 'Administrative (Clerical or Support Staff)',
        value: '7',
      },
      {
        label: 'Consultant',
        value: '8',
      },
      {
        label: 'Intern',
        value: '9',
      },
      {
        label: 'Volunteer',
        value: '10',
      },
      {
        label: 'None of the above',
        value: '11',
      },
    ],
  },
  {
    questionId: '23415',
    question:
      'Which of the following religions do you most closely identify With?',
    type: QuestionType.SELECT,
    options: [
      {
        label: 'Agnostic',
        value: '1',
      },
      {
        label: 'Atheist',
        value: '2',
      },
      {
        label: 'Buddhist',
        value: '3',
      },
      {
        label: 'Christian (all denominations)',
        value: '4',
      },
      {
        label: 'Hindu',
        value: '5',
      },
      {
        label: 'Jewish',
        value: '6',
      },
      {
        label: 'Muslim',
        value: '7',
      },
      {
        label: 'Other',
        value: '8',
      },
      {
        label: 'None of the above',
        value: '-3105',
      },
    ],
  },
  ...(!old
    ? [
        {
          questionId: '34430',
          type: QuestionType.SELECT,
          question: 'What is your ethnicity?',
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
        },
      ]
    : []),
  {
    questionId: '43501',
    question:
      'Do you have a webcam and are you willing to use it for an online research opportunity?',
    type: QuestionType.SELECT,
    options: [
      {
        label:
          'I have a webcam and I am willing to use it for an online research opportunity.',
        value: '1',
      },
      {
        label:
          'I have a webcam but I am not willing to use it for an online research opportunity.',
        value: '2',
      },
      {
        label: 'I do not have a webcam.',
        value: '3',
      },
    ],
  },
  {
    questionId: '61076',
    question: 'What is your current annual household income before taxes?',
    type: QuestionType.SELECT,
    options: [
      {
        label: 'Less than £5,000',
        value: '1',
      },
      {
        label: '£5,000 to £9,999',
        value: '2',
      },
      {
        label: '£10,000 to £14,999',
        value: '3',
      },
      {
        label: '£15,000 to £17,499',
        value: '4',
      },
      {
        label: '£17,500 to £19,999',
        value: '5',
      },
      {
        label: '£20,000 to £22,499',
        value: '6',
      },
      {
        label: '£22,500 to £24,999',
        value: '7',
      },
      {
        label: '£25,000 to £27,499',
        value: '8',
      },
      {
        label: '£27,500 to £29,999',
        value: '9',
      },
      {
        label: '£30,000 to £32,499',
        value: '10',
      },
      {
        label: '£32,500 to £34,999',
        value: '11',
      },
      {
        label: '£35,000 to £37,499',
        value: '12',
      },
      {
        label: '£37,500 to £39,999',
        value: '13',
      },
      {
        label: '£40,000 to £42,499',
        value: '14',
      },
      {
        label: '£42,500 to £44,999',
        value: '15',
      },
      {
        label: '£45,000 to £47,499',
        value: '16',
      },
      {
        label: '£47,500 to £49,999',
        value: '16',
      },
      {
        label: '£50,000 to £54,999',
        value: '17',
      },
      {
        label: '£55,000 to £59,999',
        value: '18',
      },
      {
        label: '£45,000 to £47,499',
        value: '19',
      },
      {
        label: '£60,000 to £64,999',
        value: '20',
      },
      {
        label: '£65,000 to £69,999',
        value: '21',
      },
      {
        label: '£70,000 to £74,999',
        value: '22',
      },
      {
        label: '£75,000 to £99,999',
        value: '23',
      },
      {
        label: '£100,000 and above',
        value: '24',
      },
      {
        label: 'Prefer not to answer',
        value: '-3105',
      },
    ],
  },
  {
    questionId: '74808',
    question:
      'Please indicate which one of the following best describes the occupation of the CHIEF INCOME EARNER in your household?',
    type: QuestionType.SELECT,
    options: [
      {
        label: 'Higher managerial, administrative and professional',
        value: '1',
      },
      {
        label: 'Intermediate managerial, administrative and professional',
        value: '2',
      },
      {
        label:
          'Supervisory, clerical and junior managerial, administrative and professional',
        value: '3',
      },
      {
        label: 'Skilled manual worker',
        value: '4',
      },
      {
        label: 'Semi-skilled manual worker',
        value: '5',
      },
      {
        label: 'Unskilled manual worker',
        value: '6',
      },
      {
        label: 'State pensioners',
        value: '7',
      },
      {
        label: 'Casual worker',
        value: '8',
      },
      {
        label: 'Unemployed with state benefits',
        value: '9',
      },
      {
        label: 'None of the above',
        value: '-3105',
      },
    ],
  },
  ...(!old
    ? [
        {
          questionId: 'P6Q7',
          type: QuestionType.MULTISELECT,
          question: 'Please let us know your survey and research preferences',
          options: [
            {
              label: 'Patient & Caregiver Surveys & Interviews',
              value: 'Patient & Caregiver Surveys & Interviews',
            },
            {label: 'Online Interviews', value: 'Online Interviews'},
            {
              label: 'Business Surveys & Interviews',
              value: 'Business Surveys & Interviews',
            },
            {label: 'Consumer Surveys', value: 'Consumer Surveys'},
          ],
        },
      ]
    : []),
];

export const EnglandInitialValue = (old = false) => ({
  ...(!old
    ? {
        'What is your marital status?': '',
        'What is your current employment status?': '',
        'What is your level of education?': '',
        'What is your ethnicity?': '',
        'Please let us know your survey and research preferences': [],
      }
    : {}),

  'In your household, are you the person who makes most of the daily purchasing decisions?':
    '',
  'What is your sexual orientation?': '',
  'How many people live in your household including yourself?': '',
  'What best describes your current household?': '',
  'Do you, or does anyone in your household, work in any of the following industries?':
    '',
  'Which department do you primarily work within at your organization?': '',
  'Please indicate the age and gender of your child or children': [],
  'Please choose which departments/products you have influence or decision making authority over regarding spending/purchasing':
    [],
  'How many children do you have under the age of 18?': '',
  'Please choose the options that best describe your household': [],
  'Please enter the first half of your postcode below': '',
  'What is your job title, level or responsibility?': '',
  'Which of the following religions do you most closely identify With?': '',
  'Do you have a webcam and are you willing to use it for an online research opportunity?':
    '',
  'What is your current annual household income before taxes?': '',
  'Please indicate which one of the following best describes the occupation of the CHIEF INCOME EARNER in your household?':
    '',
});

export const PostCodeData: IPostCodeData = {
  GY9: {
    areaType: {label: 'Alderney (Guernsey)', value: '1'},
    region: {label: 'Alderney', value: '1'},
    country: {label: 'Alderney', value: '3'},
  },
  IM7: {
    areaType: {label: 'Ayre (Isle of Man)', value: '2'},
    region: {label: 'Ayre', value: '2'},
    country: {label: 'Ramsey', value: '119'},
  },
  IM8: {
    areaType: {label: 'Ayre (Isle of Man)', value: '2'},
    region: {label: 'Ayre', value: '2'},
    country: {label: 'Ramsey', value: '119'},
  },
  BA1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Bath and North East Somerset', value: '8'},
  },
  BA2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Bath and North East Somerset', value: '8'},
  },
  BA3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Bath and North East Somerset', value: '8'},
  },
  BS14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Bath and North East Somerset', value: '8'},
  },
  BS31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Bath and North East Somerset', value: '8'},
  },
  BS39: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Bath and North East Somerset', value: '8'},
  },
  BS40: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Bath and North East Somerset', value: '8'},
  },
  MK40: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Bedford', value: '9'},
  },
  MK41: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Bedford', value: '9'},
  },
  MK42: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Bedford', value: '9'},
  },
  MK43: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Bedford', value: '9'},
  },
  MK44: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Bedford', value: '9'},
  },
  MK45: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Bedford', value: '9'},
  },
  PE19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Bedford', value: '9'},
  },
  PE28: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Bedford', value: '9'},
  },
  BB1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Blackburn with Darwen', value: '11'},
  },
  BB2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Blackburn with Darwen', value: '11'},
  },
  BB3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Blackburn with Darwen', value: '11'},
  },
  BL7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Blackburn with Darwen', value: '11'},
  },
  FY1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Blackpool', value: '12'},
  },
  FY2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Blackpool', value: '12'},
  },
  FY3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Blackpool', value: '12'},
  },
  FY4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Blackpool', value: '12'},
  },
  BH1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Bournemouth', value: '14'},
  },
  BH10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Bournemouth', value: '14'},
  },
  BH11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Bournemouth', value: '14'},
  },
  BH2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Bournemouth', value: '14'},
  },
  BH3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Bournemouth', value: '14'},
  },
  BH4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Bournemouth', value: '14'},
  },
  BH5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Bournemouth', value: '14'},
  },
  BH6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Bournemouth', value: '14'},
  },
  BH7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Bournemouth', value: '14'},
  },
  BH8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Bournemouth', value: '14'},
  },
  BH9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Bournemouth', value: '14'},
  },
  GU47: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Bracknell Forest', value: '15'},
  },
  RG12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Bracknell Forest', value: '15'},
  },
  RG42: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Bracknell Forest', value: '15'},
  },
  RG45: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Bracknell Forest', value: '15'},
  },
  SL4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Bracknell Forest', value: '15'},
  },
  HP10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  HP11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  HP12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  HP13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  HP14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  HP15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  HP16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  HP17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  HP18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  HP19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  HP20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  HP21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  HP22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  HP23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  HP27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  HP5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  HP6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  HP7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  HP8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  HP9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  LU6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  LU7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  MK17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  MK18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  MK19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  NN13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  OX27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  RG9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  SL0: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  SL1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  SL2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  SL3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  SL6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  SL7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  SL8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  SL9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  UB8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  UB9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Buckinghamshire', value: '17'},
  },
  CB1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  CB10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  CB2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  CB21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  CB22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  CB23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  CB24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  CB25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  CB3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  CB4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  CB5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  CB6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  CB7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  CB8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  PE13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  PE14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  PE15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  PE16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  PE26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  PE27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  PE29: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  PE7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  PE8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  SG19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  SG8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Cambridgeshire', value: '19'},
  },
  LU1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Central Bedfordshire', value: '24'},
  },
  LU2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Central Bedfordshire', value: '24'},
  },
  LU5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Central Bedfordshire', value: '24'},
  },
  SG15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Central Bedfordshire', value: '24'},
  },
  SG16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Central Bedfordshire', value: '24'},
  },
  SG17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Central Bedfordshire', value: '24'},
  },
  SG18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Central Bedfordshire', value: '24'},
  },
  SG5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Central Bedfordshire', value: '24'},
  },
  CW1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  CW10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  CW11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  CW12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  CW2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  CW3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  CW4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  CW5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  CW6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  CW7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  CW9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  CW98: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  SK10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  SK11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  SK12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  SK9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  ST7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  SY14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  WA14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  WA16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire East', value: '26'},
  },
  CH1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire West and Chester', value: '27'},
  },
  CH2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire West and Chester', value: '27'},
  },
  CH3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire West and Chester', value: '27'},
  },
  CH33: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire West and Chester', value: '27'},
  },
  CH34: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire West and Chester', value: '27'},
  },
  CH64: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire West and Chester', value: '27'},
  },
  CH65: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire West and Chester', value: '27'},
  },
  CH66: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire West and Chester', value: '27'},
  },
  CH70: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire West and Chester', value: '27'},
  },
  CH88: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire West and Chester', value: '27'},
  },
  CH99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire West and Chester', value: '27'},
  },
  CW8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire West and Chester', value: '27'},
  },
  WA6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire West and Chester', value: '27'},
  },
  WA7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cheshire West and Chester', value: '27'},
  },
  BN1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Brighton and Hove', value: '28'},
  },
  BN2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Brighton and Hove', value: '28'},
  },
  BN3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Brighton and Hove', value: '28'},
  },
  BN41: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Brighton and Hove', value: '28'},
  },
  BN50: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Brighton and Hove', value: '28'},
  },
  BN51: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Brighton and Hove', value: '28'},
  },
  BN52: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Brighton and Hove', value: '28'},
  },
  BN88: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Brighton and Hove', value: '28'},
  },
  BS1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Bristol', value: '29'},
  },
  BS10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Bristol', value: '29'},
  },
  BS11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Bristol', value: '29'},
  },
  BS13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Bristol', value: '29'},
  },
  BS16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Bristol', value: '29'},
  },
  BS2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Bristol', value: '29'},
  },
  BS3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Bristol', value: '29'},
  },
  BS4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Bristol', value: '29'},
  },
  BS5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Bristol', value: '29'},
  },
  BS6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Bristol', value: '29'},
  },
  BS7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Bristol', value: '29'},
  },
  BS8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Bristol', value: '29'},
  },
  BS9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Bristol', value: '29'},
  },
  BS98: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Bristol', value: '29'},
  },
  BS99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Bristol', value: '29'},
  },
  DE1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Derby', value: '30'},
  },
  DE21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Derby', value: '30'},
  },
  DE22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Derby', value: '30'},
  },
  DE23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Derby', value: '30'},
  },
  DE24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Derby', value: '30'},
  },
  DE3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Derby', value: '30'},
  },
  DE65: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Derby', value: '30'},
  },
  DE72: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Derby', value: '30'},
  },
  DE73: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Derby', value: '30'},
  },
  DE99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Derby', value: '30'},
  },
  HU1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'City of Kingston upon Hull', value: '32'},
  },
  HU10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'City of Kingston upon Hull', value: '32'},
  },
  HU2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'City of Kingston upon Hull', value: '32'},
  },
  HU3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'City of Kingston upon Hull', value: '32'},
  },
  HU4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'City of Kingston upon Hull', value: '32'},
  },
  HU5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'City of Kingston upon Hull', value: '32'},
  },
  HU6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'City of Kingston upon Hull', value: '32'},
  },
  HU7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'City of Kingston upon Hull', value: '32'},
  },
  HU8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'City of Kingston upon Hull', value: '32'},
  },
  HU9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'City of Kingston upon Hull', value: '32'},
  },
  LE1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Leicester', value: '33'},
  },
  LE2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Leicester', value: '33'},
  },
  LE3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Leicester', value: '33'},
  },
  LE4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Leicester', value: '33'},
  },
  LE5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Leicester', value: '33'},
  },
  LE87: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Leicester', value: '33'},
  },
  NG1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Nottingham', value: '34'},
  },
  NG11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Nottingham', value: '34'},
  },
  NG13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Nottingham', value: '34'},
  },
  NG2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Nottingham', value: '34'},
  },
  NG3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Nottingham', value: '34'},
  },
  NG5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Nottingham', value: '34'},
  },
  NG6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Nottingham', value: '34'},
  },
  NG7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Nottingham', value: '34'},
  },
  NG8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'City of Nottingham', value: '34'},
  },
  PE1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'City of Peterborough', value: '35'},
  },
  PE2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'City of Peterborough', value: '35'},
  },
  PE3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'City of Peterborough', value: '35'},
  },
  PE4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'City of Peterborough', value: '35'},
  },
  PE5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'City of Peterborough', value: '35'},
  },
  PE6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'City of Peterborough', value: '35'},
  },
  PL1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Plymouth', value: '36'},
  },
  PL2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Plymouth', value: '36'},
  },
  PL3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Plymouth', value: '36'},
  },
  PL4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Plymouth', value: '36'},
  },
  PL5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Plymouth', value: '36'},
  },
  PL6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Plymouth', value: '36'},
  },
  PL7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Plymouth', value: '36'},
  },
  PL9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Plymouth', value: '36'},
  },
  PL95: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'City of Plymouth', value: '36'},
  },
  PO1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Portsmouth', value: '37'},
  },
  PO2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Portsmouth', value: '37'},
  },
  PO3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Portsmouth', value: '37'},
  },
  PO4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Portsmouth', value: '37'},
  },
  PO5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Portsmouth', value: '37'},
  },
  PO6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Portsmouth', value: '37'},
  },
  SO14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Southampton', value: '38'},
  },
  SO15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Southampton', value: '38'},
  },
  SO16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Southampton', value: '38'},
  },
  SO17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Southampton', value: '38'},
  },
  SO18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Southampton', value: '38'},
  },
  SO19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Southampton', value: '38'},
  },
  SO30: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Southampton', value: '38'},
  },
  SO31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Southampton', value: '38'},
  },
  SO40: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Southampton', value: '38'},
  },
  SO45: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'City of Southampton', value: '38'},
  },
  ST1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'City of Stoke-on-Trent', value: '39'},
  },
  ST11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'City of Stoke-on-Trent', value: '39'},
  },
  ST2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'City of Stoke-on-Trent', value: '39'},
  },
  ST3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'City of Stoke-on-Trent', value: '39'},
  },
  ST4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'City of Stoke-on-Trent', value: '39'},
  },
  ST6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'City of Stoke-on-Trent', value: '39'},
  },
  ST9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'City of Stoke-on-Trent', value: '39'},
  },
  EX23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL28: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL30: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL33: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  PL34: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  TR9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Cornwall', value: '42'},
  },
  DH1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  DH2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  DH3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  DH6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  DH7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  DH8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  DH9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  DH97: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  DH99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  DL12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  DL13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  DL14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  DL15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  DL16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  DL17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  DL2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  DL4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  DL5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  NE16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  NE17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  NE39: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  SR7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  SR8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  TS21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  TS27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  TS28: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  TS29: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'County Durham', value: '43'},
  },
  HR1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'County of Herefordshire', value: '44'},
  },
  HR2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'County of Herefordshire', value: '44'},
  },
  HR4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'County of Herefordshire', value: '44'},
  },
  HR5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'County of Herefordshire', value: '44'},
  },
  HR6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'County of Herefordshire', value: '44'},
  },
  HR7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'County of Herefordshire', value: '44'},
  },
  HR8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'County of Herefordshire', value: '44'},
  },
  HR9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'County of Herefordshire', value: '44'},
  },
  SY8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'County of Herefordshire', value: '44'},
  },
  WR13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'County of Herefordshire', value: '44'},
  },
  WR6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'County of Herefordshire', value: '44'},
  },
  CA1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA28: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA95: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  CA99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  LA10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  LA11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  LA12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  LA13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  LA14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  LA15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  LA17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  LA18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  LA19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  LA20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  LA22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  LA23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  LA6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  LA7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  LA8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  LA9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Cumbria', value: '45'},
  },
  DL1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Darlington', value: '46'},
  },
  DL3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Darlington', value: '46'},
  },
  DL98: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Darlington', value: '46'},
  },
  DE11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  DE12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  DE15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  DE4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  DE45: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  DE5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  DE55: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  DE56: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  DE6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  DE7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  DE75: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  NG10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  NG16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  NG19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  NG20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  S18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  S21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  S32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  S33: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  S40: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  S41: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  S42: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  S43: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  S44: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  S45: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  S49: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  S80: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  SK13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  SK17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  SK22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  SK23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Derbyshire', value: '48'},
  },
  EX1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX33: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX34: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX35: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX36: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX37: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX38: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX39: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  EX9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  PL16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  PL19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  PL20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  PL21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  PL8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  TQ11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  TQ12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  TQ13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  TQ14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  TQ3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  TQ6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  TQ7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  TQ8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  TQ9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Devon', value: '50'},
  },
  BH16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  BH19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  BH20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  BH21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  BH22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  BH23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  BH24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  BH31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  DT1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  DT10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  DT11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  DT2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  DT3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  DT4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  DT5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  DT6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  DT7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  DT8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  DT9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  SP5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  SP6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  SP7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  SP8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  TA18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Dorset', value: '51'},
  },
  DN14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'East Riding of Yorkshire', value: '59'},
  },
  HU11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'East Riding of Yorkshire', value: '59'},
  },
  HU12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'East Riding of Yorkshire', value: '59'},
  },
  HU13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'East Riding of Yorkshire', value: '59'},
  },
  HU14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'East Riding of Yorkshire', value: '59'},
  },
  HU15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'East Riding of Yorkshire', value: '59'},
  },
  HU16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'East Riding of Yorkshire', value: '59'},
  },
  HU17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'East Riding of Yorkshire', value: '59'},
  },
  HU18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'East Riding of Yorkshire', value: '59'},
  },
  HU19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'East Riding of Yorkshire', value: '59'},
  },
  HU20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'East Riding of Yorkshire', value: '59'},
  },
  YO15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'East Riding of Yorkshire', value: '59'},
  },
  YO16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'East Riding of Yorkshire', value: '59'},
  },
  YO25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'East Riding of Yorkshire', value: '59'},
  },
  YO41: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'East Riding of Yorkshire', value: '59'},
  },
  YO42: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'East Riding of Yorkshire', value: '59'},
  },
  YO43: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'East Riding of Yorkshire', value: '59'},
  },
  BN10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  BN20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  BN21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  BN22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  BN23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  BN24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  BN25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  BN26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  BN27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  BN7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  BN8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  BN9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  RH17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  RH18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  RH19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  TN19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  TN2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  TN20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  TN21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  TN22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  TN3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  TN31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  TN32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  TN33: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  TN34: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  TN35: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  TN36: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  TN37: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  TN38: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  TN39: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  TN40: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  TN5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  TN6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  TN7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'East Sussex', value: '60'},
  },
  CB11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CB9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM0: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM77: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM92: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM98: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CM99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CO1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CO10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CO11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CO12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CO13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CO14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CO15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CO16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CO2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CO3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CO4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CO5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CO6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CO7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CO8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  CO9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  EN8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  EN9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  IG10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  IG7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  IG8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  IG9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  RM4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  SS11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  SS12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  SS13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  SS14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  SS15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  SS16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  SS2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  SS3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  SS4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  SS5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  SS6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  SS7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  SS8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Essex', value: '62'},
  },
  GL1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL50: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL51: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL52: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL53: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL54: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL55: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL56: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  GL8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  OX18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  WR12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Gloucestershire', value: '69'},
  },
  BL0: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  BL1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  BL11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  BL2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  BL3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  BL4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  BL5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  BL6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  BL78: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  BL8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  BL9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M28: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M29: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M30: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M33: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M34: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M35: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M38: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M40: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M41: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M43: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M44: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M45: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M46: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M50: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M60: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M61: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M90: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  M99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  OL1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  OL10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  OL11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  OL12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  OL15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  OL16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  OL2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  OL3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  OL4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  OL5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  OL6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  OL7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  OL8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  OL9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  OL95: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  SK1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  SK14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  SK15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  SK16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  SK2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  SK3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  SK4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  SK5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  SK6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  SK7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  SK8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  WA13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  WA15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  WA3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  WN1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  WN2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  WN3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  WN4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  WN5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  WN6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  WN7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Greater Manchester', value: '71'},
  },
  L24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Halton', value: '73'},
  },
  WA4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Halton', value: '73'},
  },
  WA8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Halton', value: '73'},
  },
  WA88: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Halton', value: '73'},
  },
  BH25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  GU10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  GU11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  GU12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  GU14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  GU17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  GU26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  GU30: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  GU31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  GU32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  GU33: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  GU34: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  GU35: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  GU46: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  GU51: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  GU52: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  PO10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  PO11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  PO12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  PO13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  PO14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  PO15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  PO16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  PO17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  PO7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  PO8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  PO9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  RG19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  RG20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  RG21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  RG22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  RG23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  RG24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  RG25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  RG26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  RG27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  RG28: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  RG29: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  RG7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  SO20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  SO21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  SO22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  SO23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  SO24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  SO25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  SO32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  SO41: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  SO42: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  SO43: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  SO50: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  SO51: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  SO53: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  SO97: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  SP10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  SP11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  SP9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Hampshire', value: '74'},
  },
  TS24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Hartlepool', value: '75'},
  },
  TS25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Hartlepool', value: '75'},
  },
  TS26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Hartlepool', value: '75'},
  },
  AL1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  AL10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  AL2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  AL3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  AL4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  AL5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  AL6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  AL7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  AL8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  AL9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  CM21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  EN10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  EN11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  EN6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  EN7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  EN77: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  HP1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  HP2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  HP3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  HP4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  SG1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  SG10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  SG11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  SG12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  SG13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  SG14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  SG2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  SG3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  SG4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  SG6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  SG7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  SG9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  WD17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  WD18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  WD19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  WD23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  WD24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  WD25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  WD3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  WD4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  WD5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  WD6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  WD7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  WD99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Hertfordshire', value: '76'},
  },
  PO30: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Isle of Wight', value: '80'},
  },
  PO31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Isle of Wight', value: '80'},
  },
  PO32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Isle of Wight', value: '80'},
  },
  PO33: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Isle of Wight', value: '80'},
  },
  PO35: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Isle of Wight', value: '80'},
  },
  PO36: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Isle of Wight', value: '80'},
  },
  PO37: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Isle of Wight', value: '80'},
  },
  PO38: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Isle of Wight', value: '80'},
  },
  PO40: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Isle of Wight', value: '80'},
  },
  PO41: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Isle of Wight', value: '80'},
  },
  TR21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Isles of Scilly', value: '81'},
  },
  TR23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Isles of Scilly', value: '81'},
  },
  TR24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Isles of Scilly', value: '81'},
  },
  BR8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT50: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  CT9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  DA1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  DA10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  DA11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  DA12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  DA13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  DA2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  DA3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  DA4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  DA9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  ME1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  ME10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  ME11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  ME12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  ME13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  ME14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  ME15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  ME16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  ME17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  ME18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  ME19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  ME20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  ME5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  ME6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  ME9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  ME99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN28: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN29: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN30: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  TN9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Kent', value: '82'},
  },
  BB10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  BB11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  BB12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  BB18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  BB4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  BB5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  BB6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  BB7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  BB8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  BB9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  BB94: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  FY0: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  FY5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  FY6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  FY7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  FY8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  L33: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  L37: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  L39: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  L40: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  LA1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  LA2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  LA3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  LA4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  LA5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  OL13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  PR0: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  PR1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  PR11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  PR2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  PR25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  PR26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  PR3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  PR4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  PR5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  PR6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  PR7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  PR8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  WN8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Lancashire', value: '83'},
  },
  CV13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  CV9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  DE74: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE41: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE55: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE65: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE67: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE94: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  LE95: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  NG32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  NG33: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Leicestershire', value: '84'},
  },
  DN21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  DN36: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  DN37: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  DN41: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  LN1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  LN10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  LN11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  LN12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  LN13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  LN2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  LN3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  LN4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  LN5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  LN6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  LN7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  LN8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  LN9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  NG23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  NG31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  NG34: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  PE10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  PE11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  PE12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  PE20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  PE21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  PE22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  PE23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  PE24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  PE25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  PE9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Lincolnshire', value: '85'},
  },
  LU3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Luton', value: '87'},
  },
  LU4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Luton', value: '87'},
  },
  ME2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Medway', value: '88'},
  },
  ME3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Medway', value: '88'},
  },
  ME4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Medway', value: '88'},
  },
  ME7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Medway', value: '88'},
  },
  ME8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Medway', value: '88'},
  },
  CH25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH28: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH29: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH30: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH41: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH42: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH43: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH44: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH45: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH46: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH47: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH48: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH49: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH60: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH61: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH62: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  CH63: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L28: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L30: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L34: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L35: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L36: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L38: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L67: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L68: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L69: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L70: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L71: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L72: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L73: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L74: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L75: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L80: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  L9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  PR9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  WA10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  WA11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  WA12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  WA9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Merseyside', value: '89'},
  },
  TS1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Middlesbrough', value: '94'},
  },
  TS2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Middlesbrough', value: '94'},
  },
  TS3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Middlesbrough', value: '94'},
  },
  TS4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Middlesbrough', value: '94'},
  },
  TS5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Middlesbrough', value: '94'},
  },
  TS7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Middlesbrough', value: '94'},
  },
  TS8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Middlesbrough', value: '94'},
  },
  MK1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Milton Keynes', value: '96'},
  },
  MK10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Milton Keynes', value: '96'},
  },
  MK11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Milton Keynes', value: '96'},
  },
  MK12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Milton Keynes', value: '96'},
  },
  MK13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Milton Keynes', value: '96'},
  },
  MK14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Milton Keynes', value: '96'},
  },
  MK15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Milton Keynes', value: '96'},
  },
  MK16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Milton Keynes', value: '96'},
  },
  MK2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Milton Keynes', value: '96'},
  },
  MK3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Milton Keynes', value: '96'},
  },
  MK4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Milton Keynes', value: '96'},
  },
  MK46: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Milton Keynes', value: '96'},
  },
  MK5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Milton Keynes', value: '96'},
  },
  MK6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Milton Keynes', value: '96'},
  },
  MK7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Milton Keynes', value: '96'},
  },
  MK77: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Milton Keynes', value: '96'},
  },
  MK8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Milton Keynes', value: '96'},
  },
  MK9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Milton Keynes', value: '96'},
  },
  IP20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  IP21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  IP22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  IP24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  IP25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  IP26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  IP27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  IP98: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR28: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR29: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR30: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR34: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR35: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  NR99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  PE30: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  PE31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  PE32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  PE33: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  PE34: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  PE35: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  PE36: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  PE37: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  PE38: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Norfolk', value: '101'},
  },
  DN31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North East Lincolnshire', value: '103'},
  },
  DN32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North East Lincolnshire', value: '103'},
  },
  DN33: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North East Lincolnshire', value: '103'},
  },
  DN34: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North East Lincolnshire', value: '103'},
  },
  DN35: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North East Lincolnshire', value: '103'},
  },
  DN40: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North East Lincolnshire', value: '103'},
  },
  DN15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Lincolnshire', value: '105'},
  },
  DN16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Lincolnshire', value: '105'},
  },
  DN17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Lincolnshire', value: '105'},
  },
  DN18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Lincolnshire', value: '105'},
  },
  DN19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Lincolnshire', value: '105'},
  },
  DN20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Lincolnshire', value: '105'},
  },
  DN38: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Lincolnshire', value: '105'},
  },
  DN39: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Lincolnshire', value: '105'},
  },
  DN8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Lincolnshire', value: '105'},
  },
  DN9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Lincolnshire', value: '105'},
  },
  BS0: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'North Somerset', value: '106'},
  },
  BS20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'North Somerset', value: '106'},
  },
  BS21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'North Somerset', value: '106'},
  },
  BS22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'North Somerset', value: '106'},
  },
  BS23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'North Somerset', value: '106'},
  },
  BS24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'North Somerset', value: '106'},
  },
  BS25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'North Somerset', value: '106'},
  },
  BS29: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'North Somerset', value: '106'},
  },
  BS36: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'North Somerset', value: '106'},
  },
  BS41: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'North Somerset', value: '106'},
  },
  BS48: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'North Somerset', value: '106'},
  },
  BS49: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'North Somerset', value: '106'},
  },
  BD20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  BD23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  BD24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  DL10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  DL11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  DL6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  DL7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  DL8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  DL9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  HG1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  HG2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  HG3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  HG4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  HG5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  LS22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  LS24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  LS25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  TS15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  TS9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  WF11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  YO11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  YO12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  YO13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  YO14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  YO17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  YO18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  YO19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  YO21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  YO22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  YO23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  YO26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  YO30: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  YO51: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  YO60: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  YO61: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  YO62: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  YO7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  YO8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'North Yorkshire', value: '107'},
  },
  NN1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Northamptonshire', value: '108'},
  },
  NN10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Northamptonshire', value: '108'},
  },
  NN11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Northamptonshire', value: '108'},
  },
  NN12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Northamptonshire', value: '108'},
  },
  NN14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Northamptonshire', value: '108'},
  },
  NN15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Northamptonshire', value: '108'},
  },
  NN16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Northamptonshire', value: '108'},
  },
  NN17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Northamptonshire', value: '108'},
  },
  NN18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Northamptonshire', value: '108'},
  },
  NN2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Northamptonshire', value: '108'},
  },
  NN29: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Northamptonshire', value: '108'},
  },
  NN3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Northamptonshire', value: '108'},
  },
  NN4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Northamptonshire', value: '108'},
  },
  NN5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Northamptonshire', value: '108'},
  },
  NN6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Northamptonshire', value: '108'},
  },
  NN7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Northamptonshire', value: '108'},
  },
  NN8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Northamptonshire', value: '108'},
  },
  NN9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Northamptonshire', value: '108'},
  },
  OX17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Northamptonshire', value: '108'},
  },
  NE15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE42: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE43: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE45: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE46: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE47: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE48: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE49: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE61: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE62: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE63: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE64: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE65: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE66: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE67: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE69: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE70: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  NE71: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  TD15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Northumberland', value: '109'},
  },
  DN10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Nottinghamshire', value: '110'},
  },
  DN11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Nottinghamshire', value: '110'},
  },
  DN22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Nottinghamshire', value: '110'},
  },
  NG12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Nottinghamshire', value: '110'},
  },
  NG14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Nottinghamshire', value: '110'},
  },
  NG15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Nottinghamshire', value: '110'},
  },
  NG17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Nottinghamshire', value: '110'},
  },
  NG18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Nottinghamshire', value: '110'},
  },
  NG21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Nottinghamshire', value: '110'},
  },
  NG22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Nottinghamshire', value: '110'},
  },
  NG24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Nottinghamshire', value: '110'},
  },
  NG25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Nottinghamshire', value: '110'},
  },
  NG4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Nottinghamshire', value: '110'},
  },
  NG70: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Nottinghamshire', value: '110'},
  },
  NG80: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Nottinghamshire', value: '110'},
  },
  NG9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Nottinghamshire', value: '110'},
  },
  NG90: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Nottinghamshire', value: '110'},
  },
  S81: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Nottinghamshire', value: '110'},
  },
  OX1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX28: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX29: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX33: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX39: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX44: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX49: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  OX9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  RG4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  RG8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  SN6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  SN7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Oxfordshire', value: '113'},
  },
  BH12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Poole', value: '117'},
  },
  BH13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Poole', value: '117'},
  },
  BH14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Poole', value: '117'},
  },
  BH15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Poole', value: '117'},
  },
  BH17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Poole', value: '117'},
  },
  BH18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Poole', value: '117'},
  },
  RG1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Reading', value: '120'},
  },
  RG2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Reading', value: '120'},
  },
  RG30: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Reading', value: '120'},
  },
  RG31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Reading', value: '120'},
  },
  TS10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Redcar and Cleveland', value: '121'},
  },
  TS11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Redcar and Cleveland', value: '121'},
  },
  TS12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Redcar and Cleveland', value: '121'},
  },
  TS13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Redcar and Cleveland', value: '121'},
  },
  TS14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Redcar and Cleveland', value: '121'},
  },
  TS6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Redcar and Cleveland', value: '121'},
  },
  LE15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East Midlands', value: '3'},
    country: {label: 'Rutland', value: '124'},
  },
  DY14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  SY1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  SY11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  SY12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  SY2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  SY3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  SY4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  SY6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  SY7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  SY9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  SY99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  TF11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  TF12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  TF13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  TF2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  TF6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  TF7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  TF8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  TF9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  WV15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  WV16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  WV7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  WV8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Shropshire', value: '127'},
  },
  SL95: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Slough', value: '128'},
  },
  BA10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  BA11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  BA16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  BA20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  BA21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  BA22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  BA4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  BA5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  BA6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  BA7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  BA8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  BA9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  BS26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  BS27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  BS28: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  TA9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Somerset', value: '129'},
  },
  BS15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'South Gloucestershire', value: '131'},
  },
  BS30: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'South Gloucestershire', value: '131'},
  },
  BS32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'South Gloucestershire', value: '131'},
  },
  BS34: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'South Gloucestershire', value: '131'},
  },
  BS35: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'South Gloucestershire', value: '131'},
  },
  BS37: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'South Gloucestershire', value: '131'},
  },
  GL9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'South Gloucestershire', value: '131'},
  },
  SN14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'South Gloucestershire', value: '131'},
  },
  DN1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  DN12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  DN2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  DN3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  DN4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  DN5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  DN55: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  DN6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  DN7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S35: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S36: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S60: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S61: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S62: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S63: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S64: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S65: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S66: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S70: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S71: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S72: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S73: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S74: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S75: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S95: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S96: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S97: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S98: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  S99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'South Yorkshire', value: '133'},
  },
  SS0: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Southend-on-Sea', value: '134'},
  },
  SS1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Southend-on-Sea', value: '134'},
  },
  SS22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Southend-on-Sea', value: '134'},
  },
  SS9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Southend-on-Sea', value: '134'},
  },
  SS99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Southend-on-Sea', value: '134'},
  },
  B74: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  B75: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  B77: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  B78: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  B79: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  DE13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  DE14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  DY3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  DY7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  ST10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  ST12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  ST13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  ST14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  ST15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  ST16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  ST17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  ST18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  ST19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  ST20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  ST21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  ST5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  ST55: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  ST8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  WS11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  WS12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  WS13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  WS14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  WS15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  WS6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  WS7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  WS9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  WV10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  WV11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  WV5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  WV6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Staffordshire', value: '140'},
  },
  TS16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Stockton-on-Tees', value: '142'},
  },
  TS17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Stockton-on-Tees', value: '142'},
  },
  TS18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Stockton-on-Tees', value: '142'},
  },
  TS19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Stockton-on-Tees', value: '142'},
  },
  TS20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Stockton-on-Tees', value: '142'},
  },
  TS22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Stockton-on-Tees', value: '142'},
  },
  TS23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Stockton-on-Tees', value: '142'},
  },
  IP1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP28: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP29: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP30: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP33: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  IP9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  NR32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  NR33: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Suffolk', value: '143'},
  },
  CR3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  CR5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  CR6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  GU95: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  KT1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  KT10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  KT11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  KT12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  KT13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  KT14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  KT15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  KT16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  KT17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  KT18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  KT19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  KT20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  KT21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  KT22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  KT23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  KT24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  KT6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  KT7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  KT8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  RH1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  RH2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  RH3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  RH4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  RH5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  RH6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  RH7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  RH8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  RH9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  SM7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  TW15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  TW16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  TW17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  TW18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  TW19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  TW20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Surrey', value: '144'},
  },
  SN1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Swindon', value: '146'},
  },
  SN2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Swindon', value: '146'},
  },
  SN25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Swindon', value: '146'},
  },
  SN26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Swindon', value: '146'},
  },
  SN3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Swindon', value: '146'},
  },
  SN38: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Swindon', value: '146'},
  },
  SN4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Swindon', value: '146'},
  },
  SN5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Swindon', value: '146'},
  },
  SN99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Swindon', value: '146'},
  },
  TF1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Telford and Wrekin', value: '147'},
  },
  TF10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Telford and Wrekin', value: '147'},
  },
  TF3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Telford and Wrekin', value: '147'},
  },
  TF4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Telford and Wrekin', value: '147'},
  },
  TF5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Telford and Wrekin', value: '147'},
  },
  WV99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Telford and Wrekin', value: '147'},
  },
  RM14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Thurrock', value: '148'},
  },
  RM15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Thurrock', value: '148'},
  },
  RM16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Thurrock', value: '148'},
  },
  RM17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Thurrock', value: '148'},
  },
  RM18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Thurrock', value: '148'},
  },
  RM19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Thurrock', value: '148'},
  },
  RM20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Thurrock', value: '148'},
  },
  SS17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'East of England', value: '4'},
    country: {label: 'Thurrock', value: '148'},
  },
  TQ1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Torbay', value: '149'},
  },
  TQ2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Torbay', value: '149'},
  },
  TQ4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Torbay', value: '149'},
  },
  TQ5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Torbay', value: '149'},
  },
  DH4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  DH5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  DH98: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE28: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE29: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE30: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE33: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE34: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE35: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE36: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE37: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE38: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE40: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE82: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE83: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE85: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE88: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE92: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE98: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  NE99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  SR1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  SR2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  SR3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  SR4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  SR5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  SR6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  SR9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North East England', value: '9'},
    country: {label: 'Tyne and Wear', value: '151'},
  },
  WA1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Warrington', value: '153'},
  },
  WA2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Warrington', value: '153'},
  },
  WA5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Warrington', value: '153'},
  },
  WA55: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'North West England', value: '10'},
    country: {label: 'Warrington', value: '153'},
  },
  B46: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  B49: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  B50: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  B76: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  B80: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  B94: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  B95: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  CV10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  CV11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  CV12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  CV21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  CV22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  CV23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  CV3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  CV31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  CV32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  CV33: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  CV34: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  CV35: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  CV36: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  CV37: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  CV47: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  CV7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  CV8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Warwickshire', value: '154'},
  },
  RG14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Berkshire', value: '155'},
  },
  RG17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Berkshire', value: '155'},
  },
  RG18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Berkshire', value: '155'},
  },
  B1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B28: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B29: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B30: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B33: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B34: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B35: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B36: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B37: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B38: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B40: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B42: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B43: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B44: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B45: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B62: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B63: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B64: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B65: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B66: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B67: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B68: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B69: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B70: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B71: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B72: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B73: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B90: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B91: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B92: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B93: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  B99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  CV1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  CV2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  CV4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  CV5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  CV6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  DY1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  DY2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  DY4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  DY5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  DY6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  DY8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  DY9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  WS1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  WS10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  WS2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  WS3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  WS4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  WS5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  WS8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  WV1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  WV12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  WV13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  WV14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  WV2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  WV3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  WV4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  WV9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'West Midlands', value: '158'},
  },
  BN11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  BN12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  BN13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  BN14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  BN15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  BN16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  BN17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  BN18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  BN42: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  BN43: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  BN44: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  BN5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  BN6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  BN91: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  BN99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  GU28: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  GU29: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  PO18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  PO19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  PO20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  PO21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  PO22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  RH10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  RH11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  RH12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  RH13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  RH14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  RH15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  RH16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  RH20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  RH77: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'West Sussex', value: '159'},
  },
  BD1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD97: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD98: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BD99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  HD1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  HD2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  HD3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  HD4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  HD5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  HD6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  HD7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  HD8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  HD9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  HX1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  HX2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  HX3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  HX4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  HX5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  HX6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  HX7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS28: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS29: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS88: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS98: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  LS99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  OL14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  WF1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  WF10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  WF12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  WF13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  WF14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  WF15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  WF16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  WF17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  WF2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  WF3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  WF4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  WF5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  WF6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  WF7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  WF8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  WF9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  WF90: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'West Yorkshire', value: '160'},
  },
  BA12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Wiltshire', value: '161'},
  },
  BA13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Wiltshire', value: '161'},
  },
  BA14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Wiltshire', value: '161'},
  },
  BA15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Wiltshire', value: '161'},
  },
  SN10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Wiltshire', value: '161'},
  },
  SN11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Wiltshire', value: '161'},
  },
  SN12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Wiltshire', value: '161'},
  },
  SN13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Wiltshire', value: '161'},
  },
  SN15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Wiltshire', value: '161'},
  },
  SN16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Wiltshire', value: '161'},
  },
  SN8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Wiltshire', value: '161'},
  },
  SN9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Wiltshire', value: '161'},
  },
  SP1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Wiltshire', value: '161'},
  },
  SP2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Wiltshire', value: '161'},
  },
  SP3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Wiltshire', value: '161'},
  },
  SP4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South West England', value: '15'},
    country: {label: 'Wiltshire', value: '161'},
  },
  RG10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Windsor and Maidenhead', value: '162'},
  },
  SL5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Windsor and Maidenhead', value: '162'},
  },
  SL60: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Windsor and Maidenhead', value: '162'},
  },
  RG40: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Wokingham', value: '163'},
  },
  RG41: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Wokingham', value: '163'},
  },
  RG5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Wokingham', value: '163'},
  },
  RG6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'South East England', value: '14'},
    country: {label: 'Wokingham', value: '163'},
  },
  B47: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  B48: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  B60: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  B61: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  B96: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  B97: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  B98: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  DY10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  DY11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  DY12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  DY13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  WR1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  WR10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  WR11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  WR14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  WR15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  WR2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  WR3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  WR4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  WR5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  WR7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  WR8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  WR9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  WR99: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  WV98: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'West Midlands', value: '22'},
    country: {label: 'Worcestershire', value: '164'},
  },
  YO1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'York', value: '166'},
  },
  YO10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'York', value: '166'},
  },
  YO24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'York', value: '166'},
  },
  YO31: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'York', value: '166'},
  },
  YO32: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'York', value: '166'},
  },
  YO90: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'York', value: '166'},
  },
  YO91: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Yorkshire and the Humber', value: '23'},
    country: {label: 'York', value: '166'},
  },
  BR1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  BR2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  BR3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  BR4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  BR5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  BR6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  BR7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  CR0: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  CR2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  CR4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  CR44: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  CR7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  CR8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  CR9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  CR90: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  DA14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  DA15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  DA16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  DA17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  DA18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  DA5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  DA6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  DA7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  DA8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E1W: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  E98: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC1A: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC1M: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC1N: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC1P: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC1R: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC1V: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC1Y: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC2A: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC2M: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC2N: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC2P: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC2R: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC2V: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC2Y: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC3A: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC3M: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC3N: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC3P: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC3R: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC3V: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC4A: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC4M: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC4N: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC4P: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC4R: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC4V: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EC4Y: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EN1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EN2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EN3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EN4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  EN5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  HA0: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  HA1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  HA2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  HA3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  HA4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  HA5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  HA6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  HA7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  HA8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  HA9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  IG1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  IG11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  IG2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  IG3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  IG4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  IG5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  IG6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  KT2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  KT3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  KT4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  KT5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  KT9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N1C: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N1P: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N81: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  N9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  NW1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  NW10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  NW11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  NW1W: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  NW2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  NW26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  NW3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  NW4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  NW5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  NW6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  NW7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  NW8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  NW9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  RM1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  RM10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  RM11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  RM12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  RM13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  RM2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  RM3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  RM5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  RM6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  RM7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  RM8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  RM9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE1P: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE21: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE22: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE23: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE24: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE25: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE26: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE27: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE28: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SE9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SM1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SM2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SM3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SM4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SM5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SM6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW15: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW16: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW17: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW19: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW1A: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW1E: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW1H: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW1P: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW1V: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW1W: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW1X: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW1Y: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW20: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  SW95: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  TW1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  TW10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  TW11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  TW12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  TW13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  TW14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  TW2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  TW3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  TW4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  TW5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  TW6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  TW7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  TW8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  TW9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  UB1: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  UB10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  UB11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  UB18: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  UB2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  UB3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  UB4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  UB5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  UB6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  UB7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W10: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W11: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W12: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W13: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W14: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W1A: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W1B: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W1C: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W1D: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W1F: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W1G: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W1H: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W1J: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W1K: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W1S: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W1T: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W1U: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W1W: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W2: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W3: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W4: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W5: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W6: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W7: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W8: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  W9: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  WC1A: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  WC1B: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  WC1E: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  WC1H: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  WC1N: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  WC1R: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  WC1V: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  WC1X: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  WC2A: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  WC2B: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  WC2E: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  WC2H: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  WC2N: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  WC2R: {
    areaType: {label: 'England', value: '3'},
    region: {label: 'Greater London', value: '6'},
    country: {label: 'Greater London', value: '70'},
  },
  IM4: {
    areaType: {label: 'Glenfaba (Isle of Man)', value: '4'},
    region: {label: 'Glenfaba', value: '5'},
    country: {label: 'German', value: '67'},
  },
  IM5: {
    areaType: {label: 'Glenfaba (Isle of Man)', value: '4'},
    region: {label: 'Glenfaba', value: '5'},
    country: {label: 'Peel', value: '114'},
  },
  IM6: {
    areaType: {label: 'Michael (Isle of Man)', value: '5'},
    region: {label: 'Michael', value: '7'},
    country: {label: 'Michael', value: '91'},
  },
  IM1: {
    areaType: {label: 'Middle (Isle of Man)', value: '6'},
    region: {label: 'Middle', value: '8'},
    country: {label: 'Douglas', value: '52'},
  },
  IM2: {
    areaType: {label: 'Middle (Isle of Man)', value: '6'},
    region: {label: 'Middle', value: '8'},
    country: {label: 'Douglas', value: '52'},
  },
  IM99: {
    areaType: {label: 'Middle (Isle of Man)', value: '6'},
    region: {label: 'Middle', value: '8'},
    country: {label: 'Douglas', value: '52'},
  },
  IM3: {
    areaType: {label: 'Middle (Isle of Man)', value: '6'},
    region: {label: 'Middle', value: '8'},
    country: {label: 'Onchan', value: '111'},
  },
  BT29: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Antrim and Newtownabbey', value: '5'},
  },
  BT36: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Antrim and Newtownabbey', value: '5'},
  },
  BT37: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Antrim and Newtownabbey', value: '5'},
  },
  BT39: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Antrim and Newtownabbey', value: '5'},
  },
  BT41: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Antrim and Newtownabbey', value: '5'},
  },
  BT18: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Ards and North Down', value: '6'},
  },
  BT19: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Ards and North Down', value: '6'},
  },
  BT20: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Ards and North Down', value: '6'},
  },
  BT21: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Ards and North Down', value: '6'},
  },
  BT22: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Ards and North Down', value: '6'},
  },
  BT23: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Ards and North Down', value: '6'},
  },
  BT1: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Belfast', value: '10'},
  },
  BT10: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Belfast', value: '10'},
  },
  BT11: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Belfast', value: '10'},
  },
  BT12: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Belfast', value: '10'},
  },
  BT13: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Belfast', value: '10'},
  },
  BT14: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Belfast', value: '10'},
  },
  BT15: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Belfast', value: '10'},
  },
  BT2: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Belfast', value: '10'},
  },
  BT3: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Belfast', value: '10'},
  },
  BT4: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Belfast', value: '10'},
  },
  BT5: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Belfast', value: '10'},
  },
  BT6: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Belfast', value: '10'},
  },
  BT7: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Belfast', value: '10'},
  },
  BT9: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Belfast', value: '10'},
  },
  BT49: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Causeway Coast and Glens', value: '23'},
  },
  BT51: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Causeway Coast and Glens', value: '23'},
  },
  BT52: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Causeway Coast and Glens', value: '23'},
  },
  BT53: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Causeway Coast and Glens', value: '23'},
  },
  BT54: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Causeway Coast and Glens', value: '23'},
  },
  BT55: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Causeway Coast and Glens', value: '23'},
  },
  BT56: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Causeway Coast and Glens', value: '23'},
  },
  BT57: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Causeway Coast and Glens', value: '23'},
  },
  BT47: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Derry and Strabane', value: '49'},
  },
  BT48: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Derry and Strabane', value: '49'},
  },
  BT81: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Derry and Strabane', value: '49'},
  },
  BT82: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Derry and Strabane', value: '49'},
  },
  BT74: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Fermanagh and Omagh', value: '64'},
  },
  BT78: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Fermanagh and Omagh', value: '64'},
  },
  BT79: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Fermanagh and Omagh', value: '64'},
  },
  BT93: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Fermanagh and Omagh', value: '64'},
  },
  BT94: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Fermanagh and Omagh', value: '64'},
  },
  BT16: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Lisburn and Castlereagh', value: '86'},
  },
  BT17: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Lisburn and Castlereagh', value: '86'},
  },
  BT26: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Lisburn and Castlereagh', value: '86'},
  },
  BT27: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Lisburn and Castlereagh', value: '86'},
  },
  BT28: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Lisburn and Castlereagh', value: '86'},
  },
  BT67: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Lisburn and Castlereagh', value: '86'},
  },
  BT8: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Lisburn and Castlereagh', value: '86'},
  },
  BT38: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Mid and East Antrim', value: '92'},
  },
  BT40: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Mid and East Antrim', value: '92'},
  },
  BT42: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Mid and East Antrim', value: '92'},
  },
  BT43: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Mid and East Antrim', value: '92'},
  },
  BT44: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Mid and East Antrim', value: '92'},
  },
  BT45: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Mid Ulster', value: '93'},
  },
  BT46: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Mid Ulster', value: '93'},
  },
  BT68: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Mid Ulster', value: '93'},
  },
  BT69: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Mid Ulster', value: '93'},
  },
  BT70: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Mid Ulster', value: '93'},
  },
  BT71: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Mid Ulster', value: '93'},
  },
  BT75: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Mid Ulster', value: '93'},
  },
  BT76: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Mid Ulster', value: '93'},
  },
  BT80: {
    areaType: {label: 'Northern Ireland', value: '7'},
    region: {label: 'Northern Ireland', value: '11'},
    country: {label: 'Mid Ulster', value: '93'},
  },
  IM9: {
    areaType: {label: 'Rushen (Isle of Man)', value: '8'},
    region: {label: 'Rushen', value: '12'},
    country: {label: 'Castletown', value: '22'},
  },
  AB10: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeen City', value: '1'},
  },
  AB11: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeen City', value: '1'},
  },
  AB12: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeen City', value: '1'},
  },
  AB13: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeen City', value: '1'},
  },
  AB14: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeen City', value: '1'},
  },
  AB15: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeen City', value: '1'},
  },
  AB16: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeen City', value: '1'},
  },
  AB21: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeen City', value: '1'},
  },
  AB22: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeen City', value: '1'},
  },
  AB23: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeen City', value: '1'},
  },
  AB24: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeen City', value: '1'},
  },
  AB25: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeen City', value: '1'},
  },
  AB99: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeen City', value: '1'},
  },
  AB30: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeenshire', value: '2'},
  },
  AB31: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeenshire', value: '2'},
  },
  AB32: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeenshire', value: '2'},
  },
  AB33: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeenshire', value: '2'},
  },
  AB34: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeenshire', value: '2'},
  },
  AB35: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeenshire', value: '2'},
  },
  AB39: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeenshire', value: '2'},
  },
  AB41: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeenshire', value: '2'},
  },
  AB42: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeenshire', value: '2'},
  },
  AB43: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeenshire', value: '2'},
  },
  AB44: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeenshire', value: '2'},
  },
  AB45: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeenshire', value: '2'},
  },
  AB51: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeenshire', value: '2'},
  },
  AB52: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeenshire', value: '2'},
  },
  AB53: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeenshire', value: '2'},
  },
  AB54: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeenshire', value: '2'},
  },
  DD10: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Aberdeenshire', value: '2'},
  },
  DD11: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Angus', value: '4'},
  },
  DD3: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Angus', value: '4'},
  },
  DD4: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Angus', value: '4'},
  },
  DD7: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Angus', value: '4'},
  },
  DD8: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Angus', value: '4'},
  },
  DD9: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Angus', value: '4'},
  },
  G84: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA20: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA21: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA22: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA23: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA28: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA29: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA31: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA32: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA33: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA34: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA35: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA36: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA37: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA42: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA43: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA44: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA45: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA46: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA48: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA60: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA61: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA65: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA72: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA76: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA77: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  PA78: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Argyll and Bute', value: '7'},
  },
  EH1: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH10: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH11: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH12: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH13: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH14: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH15: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH16: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH17: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH2: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH28: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH29: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH3: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH30: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH4: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH5: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH6: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH7: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH8: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH9: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH91: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH95: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  EH99: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'City of Edinburgh', value: '31'},
  },
  FK10: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Clackmannanshire', value: '40'},
  },
  FK11: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Clackmannanshire', value: '40'},
  },
  FK12: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Clackmannanshire', value: '40'},
  },
  FK13: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Clackmannanshire', value: '40'},
  },
  FK14: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Clackmannanshire', value: '40'},
  },
  DG1: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Dumfries and Galloway', value: '53'},
  },
  DG10: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Dumfries and Galloway', value: '53'},
  },
  DG11: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Dumfries and Galloway', value: '53'},
  },
  DG12: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Dumfries and Galloway', value: '53'},
  },
  DG13: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Dumfries and Galloway', value: '53'},
  },
  DG14: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Dumfries and Galloway', value: '53'},
  },
  DG16: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Dumfries and Galloway', value: '53'},
  },
  DG2: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Dumfries and Galloway', value: '53'},
  },
  DG3: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Dumfries and Galloway', value: '53'},
  },
  DG4: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Dumfries and Galloway', value: '53'},
  },
  DG5: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Dumfries and Galloway', value: '53'},
  },
  DG6: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Dumfries and Galloway', value: '53'},
  },
  DG7: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Dumfries and Galloway', value: '53'},
  },
  DG8: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Dumfries and Galloway', value: '53'},
  },
  DG9: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Dumfries and Galloway', value: '53'},
  },
  DD1: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Dundee City', value: '54'},
  },
  DD2: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Dundee City', value: '54'},
  },
  DD5: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Dundee City', value: '54'},
  },
  KA1: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Ayrshire', value: '55'},
  },
  KA16: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Ayrshire', value: '55'},
  },
  KA17: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Ayrshire', value: '55'},
  },
  KA18: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Ayrshire', value: '55'},
  },
  KA2: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Ayrshire', value: '55'},
  },
  KA3: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Ayrshire', value: '55'},
  },
  KA4: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Ayrshire', value: '55'},
  },
  KA5: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Ayrshire', value: '55'},
  },
  G61: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Dunbartonshire', value: '56'},
  },
  G62: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Dunbartonshire', value: '56'},
  },
  G64: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Dunbartonshire', value: '56'},
  },
  G66: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Dunbartonshire', value: '56'},
  },
  EH21: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Lothian', value: '57'},
  },
  EH31: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Lothian', value: '57'},
  },
  EH32: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Lothian', value: '57'},
  },
  EH33: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Lothian', value: '57'},
  },
  EH34: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Lothian', value: '57'},
  },
  EH39: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Lothian', value: '57'},
  },
  EH41: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Lothian', value: '57'},
  },
  EH42: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Lothian', value: '57'},
  },
  G46: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Renfrewshire', value: '58'},
  },
  G76: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Renfrewshire', value: '58'},
  },
  G77: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Renfrewshire', value: '58'},
  },
  G78: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'East Renfrewshire', value: '58'},
  },
  HS1: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Eilean Siar', value: '61'},
  },
  HS2: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Eilean Siar', value: '61'},
  },
  HS7: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Eilean Siar', value: '61'},
  },
  HS9: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Eilean Siar', value: '61'},
  },
  EH51: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Falkirk', value: '63'},
  },
  FK1: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Falkirk', value: '63'},
  },
  FK2: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Falkirk', value: '63'},
  },
  FK3: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Falkirk', value: '63'},
  },
  FK4: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Falkirk', value: '63'},
  },
  FK5: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Falkirk', value: '63'},
  },
  FK6: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Falkirk', value: '63'},
  },
  DD6: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Fife', value: '65'},
  },
  KY1: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Fife', value: '65'},
  },
  KY10: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Fife', value: '65'},
  },
  KY11: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Fife', value: '65'},
  },
  KY12: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Fife', value: '65'},
  },
  KY14: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Fife', value: '65'},
  },
  KY15: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Fife', value: '65'},
  },
  KY16: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Fife', value: '65'},
  },
  KY2: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Fife', value: '65'},
  },
  KY3: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Fife', value: '65'},
  },
  KY4: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Fife', value: '65'},
  },
  KY5: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Fife', value: '65'},
  },
  KY6: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Fife', value: '65'},
  },
  KY7: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Fife', value: '65'},
  },
  KY8: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Fife', value: '65'},
  },
  KY9: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Fife', value: '65'},
  },
  KY99: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Fife', value: '65'},
  },
  G1: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G11: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G12: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G13: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G14: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G15: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G2: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G20: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G21: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G22: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G3: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G31: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G32: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G33: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G34: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G4: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G40: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G41: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G42: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G43: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G44: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G45: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G5: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G51: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G52: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G53: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G58: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G9: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  G90: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Glasgow City', value: '68'},
  },
  IV1: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV10: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV12: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV14: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV15: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV16: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV17: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV18: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV19: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV2: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV21: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV22: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV23: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV25: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV26: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV27: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV3: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV4: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV40: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV41: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV43: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV45: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV51: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV56: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV6: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV63: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV7: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV9: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  IV99: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  KW1: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  KW10: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  KW11: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  KW12: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  KW14: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  KW9: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  PA38: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  PH19: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  PH20: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  PH21: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  PH22: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  PH23: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  PH24: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  PH25: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  PH26: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  PH31: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  PH32: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  PH33: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  PH34: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  PH35: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  PH36: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  PH41: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  PH49: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  PH50: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Highland', value: '77'},
  },
  PA13: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Inverclyde', value: '78'},
  },
  PA14: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Inverclyde', value: '78'},
  },
  PA15: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Inverclyde', value: '78'},
  },
  PA16: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Inverclyde', value: '78'},
  },
  PA18: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Inverclyde', value: '78'},
  },
  PA19: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Inverclyde', value: '78'},
  },
  EH18: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Midlothian', value: '95'},
  },
  EH19: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Midlothian', value: '95'},
  },
  EH20: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Midlothian', value: '95'},
  },
  EH22: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Midlothian', value: '95'},
  },
  EH25: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Midlothian', value: '95'},
  },
  EH26: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Midlothian', value: '95'},
  },
  EH37: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Midlothian', value: '95'},
  },
  AB37: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Moray', value: '98'},
  },
  AB38: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Moray', value: '98'},
  },
  AB55: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Moray', value: '98'},
  },
  AB56: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Moray', value: '98'},
  },
  IV30: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Moray', value: '98'},
  },
  IV31: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Moray', value: '98'},
  },
  IV32: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Moray', value: '98'},
  },
  IV36: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Moray', value: '98'},
  },
  KA11: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Ayrshire', value: '102'},
  },
  KA12: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Ayrshire', value: '102'},
  },
  KA13: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Ayrshire', value: '102'},
  },
  KA15: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Ayrshire', value: '102'},
  },
  KA20: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Ayrshire', value: '102'},
  },
  KA21: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Ayrshire', value: '102'},
  },
  KA22: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Ayrshire', value: '102'},
  },
  KA23: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Ayrshire', value: '102'},
  },
  KA24: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Ayrshire', value: '102'},
  },
  KA25: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Ayrshire', value: '102'},
  },
  KA27: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Ayrshire', value: '102'},
  },
  KA28: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Ayrshire', value: '102'},
  },
  KA30: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Ayrshire', value: '102'},
  },
  PA17: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Ayrshire', value: '102'},
  },
  G65: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Lanarkshire', value: '104'},
  },
  G67: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Lanarkshire', value: '104'},
  },
  G68: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Lanarkshire', value: '104'},
  },
  G69: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Lanarkshire', value: '104'},
  },
  G70: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Lanarkshire', value: '104'},
  },
  G71: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Lanarkshire', value: '104'},
  },
  ML1: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Lanarkshire', value: '104'},
  },
  ML2: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Lanarkshire', value: '104'},
  },
  ML4: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Lanarkshire', value: '104'},
  },
  ML5: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Lanarkshire', value: '104'},
  },
  ML6: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Lanarkshire', value: '104'},
  },
  ML7: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'North Lanarkshire', value: '104'},
  },
  KW15: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Orkney Islands', value: '112'},
  },
  KW16: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Orkney Islands', value: '112'},
  },
  KY13: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Perth and Kinross', value: '116'},
  },
  PH1: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Perth and Kinross', value: '116'},
  },
  PH10: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Perth and Kinross', value: '116'},
  },
  PH12: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Perth and Kinross', value: '116'},
  },
  PH13: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Perth and Kinross', value: '116'},
  },
  PH14: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Perth and Kinross', value: '116'},
  },
  PH15: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Perth and Kinross', value: '116'},
  },
  PH16: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Perth and Kinross', value: '116'},
  },
  PH18: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Perth and Kinross', value: '116'},
  },
  PH2: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Perth and Kinross', value: '116'},
  },
  PH3: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Perth and Kinross', value: '116'},
  },
  PH5: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Perth and Kinross', value: '116'},
  },
  PH6: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Perth and Kinross', value: '116'},
  },
  PH7: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Perth and Kinross', value: '116'},
  },
  PH8: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Perth and Kinross', value: '116'},
  },
  PH9: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Perth and Kinross', value: '116'},
  },
  PA1: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Renfrewshire', value: '122'},
  },
  PA10: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Renfrewshire', value: '122'},
  },
  PA11: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Renfrewshire', value: '122'},
  },
  PA12: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Renfrewshire', value: '122'},
  },
  PA2: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Renfrewshire', value: '122'},
  },
  PA3: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Renfrewshire', value: '122'},
  },
  PA4: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Renfrewshire', value: '122'},
  },
  PA5: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Renfrewshire', value: '122'},
  },
  PA6: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Renfrewshire', value: '122'},
  },
  PA7: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Renfrewshire', value: '122'},
  },
  PA8: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Renfrewshire', value: '122'},
  },
  PA9: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Renfrewshire', value: '122'},
  },
  EH38: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Scottish Borders', value: '125'},
  },
  EH44: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Scottish Borders', value: '125'},
  },
  EH45: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Scottish Borders', value: '125'},
  },
  EH46: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Scottish Borders', value: '125'},
  },
  TD1: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Scottish Borders', value: '125'},
  },
  TD11: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Scottish Borders', value: '125'},
  },
  TD12: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Scottish Borders', value: '125'},
  },
  TD14: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Scottish Borders', value: '125'},
  },
  TD2: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Scottish Borders', value: '125'},
  },
  TD4: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Scottish Borders', value: '125'},
  },
  TD5: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Scottish Borders', value: '125'},
  },
  TD6: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Scottish Borders', value: '125'},
  },
  TD7: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Scottish Borders', value: '125'},
  },
  TD8: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Scottish Borders', value: '125'},
  },
  TD9: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Scottish Borders', value: '125'},
  },
  ZE1: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Shetland Islands', value: '126'},
  },
  ZE2: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Shetland Islands', value: '126'},
  },
  KA10: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'South Ayrshire', value: '130'},
  },
  KA19: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'South Ayrshire', value: '130'},
  },
  KA26: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'South Ayrshire', value: '130'},
  },
  KA6: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'South Ayrshire', value: '130'},
  },
  KA7: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'South Ayrshire', value: '130'},
  },
  KA8: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'South Ayrshire', value: '130'},
  },
  KA9: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'South Ayrshire', value: '130'},
  },
  G72: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'South Lanarkshire', value: '132'},
  },
  G73: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'South Lanarkshire', value: '132'},
  },
  G74: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'South Lanarkshire', value: '132'},
  },
  G75: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'South Lanarkshire', value: '132'},
  },
  G79: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'South Lanarkshire', value: '132'},
  },
  ML10: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'South Lanarkshire', value: '132'},
  },
  ML11: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'South Lanarkshire', value: '132'},
  },
  ML12: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'South Lanarkshire', value: '132'},
  },
  ML3: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'South Lanarkshire', value: '132'},
  },
  ML8: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'South Lanarkshire', value: '132'},
  },
  ML9: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'South Lanarkshire', value: '132'},
  },
  FK15: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Stirling', value: '141'},
  },
  FK16: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Stirling', value: '141'},
  },
  FK17: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Stirling', value: '141'},
  },
  FK19: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Stirling', value: '141'},
  },
  FK20: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Stirling', value: '141'},
  },
  FK21: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Stirling', value: '141'},
  },
  FK7: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Stirling', value: '141'},
  },
  FK8: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Stirling', value: '141'},
  },
  FK9: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Stirling', value: '141'},
  },
  G63: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'Stirling', value: '141'},
  },
  G60: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'West Dunbartonshire', value: '156'},
  },
  G81: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'West Dunbartonshire', value: '156'},
  },
  G82: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'West Dunbartonshire', value: '156'},
  },
  G83: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'West Dunbartonshire', value: '156'},
  },
  EH27: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'West Lothian', value: '157'},
  },
  EH47: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'West Lothian', value: '157'},
  },
  EH48: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'West Lothian', value: '157'},
  },
  EH49: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'West Lothian', value: '157'},
  },
  EH52: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'West Lothian', value: '157'},
  },
  EH53: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'West Lothian', value: '157'},
  },
  EH54: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'West Lothian', value: '157'},
  },
  EH55: {
    areaType: {label: 'Scotland', value: '9'},
    region: {label: 'Scotland', value: '13'},
    country: {label: 'West Lothian', value: '157'},
  },
  GY6: {
    areaType: {label: 'St. Andrew (Guernsey)', value: '10'},
    region: {label: 'St. Andrew', value: '16'},
    country: {label: 'St. Andrew', value: '135'},
  },
  JE1: {
    areaType: {label: 'St. Helier (Jersey)', value: '11'},
    region: {label: 'St. Helier', value: '17'},
    country: {label: 'St. Helier', value: '136'},
  },
  JE4: {
    areaType: {label: 'St. Helier (Jersey)', value: '11'},
    region: {label: 'St. Helier', value: '17'},
    country: {label: 'St. Helier', value: '136'},
  },
  GY4: {
    areaType: {label: 'St. Martin (Guernsey)', value: '12'},
    region: {label: 'St. Martin', value: '18'},
    country: {label: 'St. Martin', value: '137'},
  },
  JE3: {
    areaType: {label: 'St. Ouen (Jersey)', value: '13'},
    region: {label: 'St. Ouen', value: '19'},
    country: {label: 'St. Ouen', value: '138'},
  },
  GY1: {
    areaType: {label: 'St. Peter Port (Guernsey)', value: '14'},
    region: {label: 'St. Peter Port', value: '20'},
    country: {label: 'St. Peter Port', value: '139'},
  },
  NP13: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Blaenau Gwent', value: '13'},
  },
  NP22: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Blaenau Gwent', value: '13'},
  },
  NP23: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Blaenau Gwent', value: '13'},
  },
  CF31: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Bridgend (Pen-y-bont ar Ogwr)', value: '16'},
  },
  CF32: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Bridgend (Pen-y-bont ar Ogwr)', value: '16'},
  },
  CF33: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Bridgend (Pen-y-bont ar Ogwr)', value: '16'},
  },
  CF34: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Bridgend (Pen-y-bont ar Ogwr)', value: '16'},
  },
  CF35: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Bridgend (Pen-y-bont ar Ogwr)', value: '16'},
  },
  CF36: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Bridgend (Pen-y-bont ar Ogwr)', value: '16'},
  },
  CF46: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Caerphilly (Caerffili)', value: '18'},
  },
  CF81: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Caerphilly (Caerffili)', value: '18'},
  },
  CF82: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Caerphilly (Caerffili)', value: '18'},
  },
  CF83: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Caerphilly (Caerffili)', value: '18'},
  },
  NP11: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Caerphilly (Caerffili)', value: '18'},
  },
  NP12: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Caerphilly (Caerffili)', value: '18'},
  },
  NP24: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Caerphilly (Caerffili)', value: '18'},
  },
  CF10: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Cardiff (Caerdydd)', value: '20'},
  },
  CF11: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Cardiff (Caerdydd)', value: '20'},
  },
  CF14: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Cardiff (Caerdydd)', value: '20'},
  },
  CF15: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Cardiff (Caerdydd)', value: '20'},
  },
  CF23: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Cardiff (Caerdydd)', value: '20'},
  },
  CF24: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Cardiff (Caerdydd)', value: '20'},
  },
  CF3: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Cardiff (Caerdydd)', value: '20'},
  },
  CF30: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Cardiff (Caerdydd)', value: '20'},
  },
  CF5: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Cardiff (Caerdydd)', value: '20'},
  },
  CF91: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Cardiff (Caerdydd)', value: '20'},
  },
  CF95: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Cardiff (Caerdydd)', value: '20'},
  },
  CF99: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Cardiff (Caerdydd)', value: '20'},
  },
  SA14: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Carmarthenshire (Sir Gaerfyrddin)', value: '21'},
  },
  SA15: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Carmarthenshire (Sir Gaerfyrddin)', value: '21'},
  },
  SA16: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Carmarthenshire (Sir Gaerfyrddin)', value: '21'},
  },
  SA17: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Carmarthenshire (Sir Gaerfyrddin)', value: '21'},
  },
  SA19: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Carmarthenshire (Sir Gaerfyrddin)', value: '21'},
  },
  SA20: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Carmarthenshire (Sir Gaerfyrddin)', value: '21'},
  },
  SA31: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Carmarthenshire (Sir Gaerfyrddin)', value: '21'},
  },
  SA32: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Carmarthenshire (Sir Gaerfyrddin)', value: '21'},
  },
  SA33: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Carmarthenshire (Sir Gaerfyrddin)', value: '21'},
  },
  SA34: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Carmarthenshire (Sir Gaerfyrddin)', value: '21'},
  },
  SA38: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Carmarthenshire (Sir Gaerfyrddin)', value: '21'},
  },
  SA39: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Carmarthenshire (Sir Gaerfyrddin)', value: '21'},
  },
  SA4: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Carmarthenshire (Sir Gaerfyrddin)', value: '21'},
  },
  SA40: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Carmarthenshire (Sir Gaerfyrddin)', value: '21'},
  },
  SA43: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Ceredigion (Sir Ceredigion)', value: '25'},
  },
  SA44: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Ceredigion (Sir Ceredigion)', value: '25'},
  },
  SA45: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Ceredigion (Sir Ceredigion)', value: '25'},
  },
  SA46: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Ceredigion (Sir Ceredigion)', value: '25'},
  },
  SA48: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Ceredigion (Sir Ceredigion)', value: '25'},
  },
  SY23: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Ceredigion (Sir Ceredigion)', value: '25'},
  },
  SY24: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Ceredigion (Sir Ceredigion)', value: '25'},
  },
  SY25: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Ceredigion (Sir Ceredigion)', value: '25'},
  },
  LL22: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Conwy', value: '41'},
  },
  LL24: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Conwy', value: '41'},
  },
  LL26: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Conwy', value: '41'},
  },
  LL27: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Conwy', value: '41'},
  },
  LL28: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Conwy', value: '41'},
  },
  LL29: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Conwy', value: '41'},
  },
  LL30: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Conwy', value: '41'},
  },
  LL31: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Conwy', value: '41'},
  },
  LL32: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Conwy', value: '41'},
  },
  LL33: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Conwy', value: '41'},
  },
  LL34: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Conwy', value: '41'},
  },
  LL15: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Denbighshire (Sir Ddinbych)', value: '47'},
  },
  LL16: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Denbighshire (Sir Ddinbych)', value: '47'},
  },
  LL17: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Denbighshire (Sir Ddinbych)', value: '47'},
  },
  LL18: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Denbighshire (Sir Ddinbych)', value: '47'},
  },
  LL19: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Denbighshire (Sir Ddinbych)', value: '47'},
  },
  LL21: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Denbighshire (Sir Ddinbych)', value: '47'},
  },
  CH4: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Flintshire (Sir y Fflint)', value: '66'},
  },
  CH5: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Flintshire (Sir y Fflint)', value: '66'},
  },
  CH6: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Flintshire (Sir y Fflint)', value: '66'},
  },
  CH7: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Flintshire (Sir y Fflint)', value: '66'},
  },
  CH8: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Flintshire (Sir y Fflint)', value: '66'},
  },
  LL23: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Gwynedd', value: '72'},
  },
  LL35: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Gwynedd', value: '72'},
  },
  LL36: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Gwynedd', value: '72'},
  },
  LL40: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Gwynedd', value: '72'},
  },
  LL41: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Gwynedd', value: '72'},
  },
  LL42: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Gwynedd', value: '72'},
  },
  LL43: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Gwynedd', value: '72'},
  },
  LL44: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Gwynedd', value: '72'},
  },
  LL46: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Gwynedd', value: '72'},
  },
  LL48: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Gwynedd', value: '72'},
  },
  LL49: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Gwynedd', value: '72'},
  },
  LL52: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Gwynedd', value: '72'},
  },
  LL53: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Gwynedd', value: '72'},
  },
  LL54: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Gwynedd', value: '72'},
  },
  LL55: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Gwynedd', value: '72'},
  },
  LL56: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Gwynedd', value: '72'},
  },
  LL57: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Gwynedd', value: '72'},
  },
  LL58: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Isle of Anglesey (Sir Ynys Mon)', value: '79'},
  },
  LL59: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Isle of Anglesey (Sir Ynys Mon)', value: '79'},
  },
  LL60: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Isle of Anglesey (Sir Ynys Mon)', value: '79'},
  },
  LL61: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Isle of Anglesey (Sir Ynys Mon)', value: '79'},
  },
  LL62: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Isle of Anglesey (Sir Ynys Mon)', value: '79'},
  },
  LL63: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Isle of Anglesey (Sir Ynys Mon)', value: '79'},
  },
  LL65: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Isle of Anglesey (Sir Ynys Mon)', value: '79'},
  },
  LL67: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Isle of Anglesey (Sir Ynys Mon)', value: '79'},
  },
  LL68: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Isle of Anglesey (Sir Ynys Mon)', value: '79'},
  },
  LL74: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Isle of Anglesey (Sir Ynys Mon)', value: '79'},
  },
  LL77: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Isle of Anglesey (Sir Ynys Mon)', value: '79'},
  },
  CF47: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Merthyr Tydfil (Merthyr Tudful)', value: '90'},
  },
  CF48: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Merthyr Tydfil (Merthyr Tudful)', value: '90'},
  },
  NP15: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Monmouthshire (Sir Fynwy)', value: '97'},
  },
  NP16: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Monmouthshire (Sir Fynwy)', value: '97'},
  },
  NP25: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Monmouthshire (Sir Fynwy)', value: '97'},
  },
  NP26: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Monmouthshire (Sir Fynwy)', value: '97'},
  },
  NP7: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Monmouthshire (Sir Fynwy)', value: '97'},
  },
  SA10: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {
      label: 'Neath Port Talbot (Castell-nedd Port Talbot)',
      value: '99',
    },
  },
  SA11: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {
      label: 'Neath Port Talbot (Castell-nedd Port Talbot)',
      value: '99',
    },
  },
  SA12: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {
      label: 'Neath Port Talbot (Castell-nedd Port Talbot)',
      value: '99',
    },
  },
  SA13: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {
      label: 'Neath Port Talbot (Castell-nedd Port Talbot)',
      value: '99',
    },
  },
  SA18: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {
      label: 'Neath Port Talbot (Castell-nedd Port Talbot)',
      value: '99',
    },
  },
  SA8: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {
      label: 'Neath Port Talbot (Castell-nedd Port Talbot)',
      value: '99',
    },
  },
  NP10: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Newport (Casnewydd)', value: '100'},
  },
  NP19: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Newport (Casnewydd)', value: '100'},
  },
  NP20: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Newport (Casnewydd)', value: '100'},
  },
  SA35: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Pembrokeshire (Sir Benfro)', value: '115'},
  },
  SA61: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Pembrokeshire (Sir Benfro)', value: '115'},
  },
  SA62: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Pembrokeshire (Sir Benfro)', value: '115'},
  },
  SA64: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Pembrokeshire (Sir Benfro)', value: '115'},
  },
  SA65: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Pembrokeshire (Sir Benfro)', value: '115'},
  },
  SA66: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Pembrokeshire (Sir Benfro)', value: '115'},
  },
  SA67: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Pembrokeshire (Sir Benfro)', value: '115'},
  },
  SA69: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Pembrokeshire (Sir Benfro)', value: '115'},
  },
  SA70: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Pembrokeshire (Sir Benfro)', value: '115'},
  },
  SA71: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Pembrokeshire (Sir Benfro)', value: '115'},
  },
  SA72: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Pembrokeshire (Sir Benfro)', value: '115'},
  },
  SA73: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Pembrokeshire (Sir Benfro)', value: '115'},
  },
  HR3: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Powys', value: '118'},
  },
  LD1: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Powys', value: '118'},
  },
  LD2: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Powys', value: '118'},
  },
  LD3: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Powys', value: '118'},
  },
  LD5: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Powys', value: '118'},
  },
  LD6: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Powys', value: '118'},
  },
  LD7: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Powys', value: '118'},
  },
  LD8: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Powys', value: '118'},
  },
  NP8: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Powys', value: '118'},
  },
  SA9: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Powys', value: '118'},
  },
  SY10: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Powys', value: '118'},
  },
  SY16: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Powys', value: '118'},
  },
  SY17: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Powys', value: '118'},
  },
  SY18: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Powys', value: '118'},
  },
  SY19: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Powys', value: '118'},
  },
  SY20: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Powys', value: '118'},
  },
  SY21: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Powys', value: '118'},
  },
  SY22: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Powys', value: '118'},
  },
  SY5: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Powys', value: '118'},
  },
  CF37: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Rhondda Cynon Taf', value: '123'},
  },
  CF38: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Rhondda Cynon Taf', value: '123'},
  },
  CF39: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Rhondda Cynon Taf', value: '123'},
  },
  CF40: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Rhondda Cynon Taf', value: '123'},
  },
  CF41: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Rhondda Cynon Taf', value: '123'},
  },
  CF42: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Rhondda Cynon Taf', value: '123'},
  },
  CF43: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Rhondda Cynon Taf', value: '123'},
  },
  CF44: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Rhondda Cynon Taf', value: '123'},
  },
  CF45: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Rhondda Cynon Taf', value: '123'},
  },
  CF72: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Rhondda Cynon Taf', value: '123'},
  },
  SA1: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Swansea (Abertawe)', value: '145'},
  },
  SA2: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Swansea (Abertawe)', value: '145'},
  },
  SA3: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Swansea (Abertawe)', value: '145'},
  },
  SA5: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Swansea (Abertawe)', value: '145'},
  },
  SA6: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Swansea (Abertawe)', value: '145'},
  },
  SA7: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Swansea (Abertawe)', value: '145'},
  },
  SA80: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Swansea (Abertawe)', value: '145'},
  },
  SA99: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Swansea (Abertawe)', value: '145'},
  },
  NP18: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Torfaen (Tor-faen)', value: '150'},
  },
  NP4: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Torfaen (Tor-faen)', value: '150'},
  },
  NP44: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Torfaen (Tor-faen)', value: '150'},
  },
  CF61: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Vale of Glamorgan (Bro Morgannwg)', value: '152'},
  },
  CF62: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Vale of Glamorgan (Bro Morgannwg)', value: '152'},
  },
  CF63: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Vale of Glamorgan (Bro Morgannwg)', value: '152'},
  },
  CF64: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Vale of Glamorgan (Bro Morgannwg)', value: '152'},
  },
  CF71: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Vale of Glamorgan (Bro Morgannwg)', value: '152'},
  },
  LL11: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Wrexham (Wrecsam)', value: '165'},
  },
  LL12: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Wrexham (Wrecsam)', value: '165'},
  },
  LL13: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Wrexham (Wrecsam)', value: '165'},
  },
  LL14: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Wrexham (Wrecsam)', value: '165'},
  },
  LL20: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Wrexham (Wrecsam)', value: '165'},
  },
  SY13: {
    areaType: {label: 'Wales', value: '15'},
    region: {label: 'Wales', value: '21'},
    country: {label: 'Wrexham (Wrecsam)', value: '165'},
  },
};
