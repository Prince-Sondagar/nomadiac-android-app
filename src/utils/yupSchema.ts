import {maxLength, minLength, requiredMessage} from './index';
import * as yup from 'yup';
import {
  ALPHABETS_REGEX,
  NUMBER_REGEX,
  PASSWORD_REGEX,
  PASSWORD_VALIDATION_MESSAGE,
} from '../constants';

export const emailValidationSchema = {
  email: yup.string().email().required(requiredMessage('Email')),
};

export const passwordValidationSchema = {
  password: yup.string().required(requiredMessage('Password')),
};

export const loginValidationSchema = yup.object({
  ...emailValidationSchema,
  ...passwordValidationSchema,
});

export const signupValidationSchema: any = yup.object({
  ...emailValidationSchema,
  firstName: yup.string().required(requiredMessage('First Name')),
  lastName: yup.string().required(requiredMessage('Last Name')),
  dob: yup.date().required(requiredMessage('Date of Birth')),
  zipCode: yup
    .string()
    .required(requiredMessage('zipCode'))
    .matches(NUMBER_REGEX, 'Please enter valid zipCode'),
});

export const updateUserSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, minLength('First name', 2))
    .max(30, maxLength('First name', 30))
    .matches(ALPHABETS_REGEX, 'Please add valid first name')
    .required(requiredMessage('First name')),
  lastName: yup
    .string()
    .min(2, minLength('Last name', 2))
    .max(30, maxLength('Last name', 30))
    .matches(ALPHABETS_REGEX, 'Please add valid last name')
    .required(requiredMessage('Last name')),
  email: yup.string().email().required(requiredMessage('Email')),
});

export const passwordAndRepeatPasswordSchema = {
  password: yup
    .string()
    .required(requiredMessage('Password'))
    .matches(PASSWORD_REGEX, PASSWORD_VALIDATION_MESSAGE),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm your Password'),
};

export const updatePasswordSchema = yup.object().shape({
  ...passwordAndRepeatPasswordSchema,
});

export const createPanelistPersonalInfoSchema = yup.object().shape({
  phone: yup
    .string()
    .required()
    // .matches(PHONE_REGEX, 'Invalid phone number format')
    // .test('phone-format', 'Did you mean (123) 456-7890?', value => {
    //   if (!value) return true;
    //   return PHONE_REGEX.test(value);
    // }),
    // .string()
    // .required('Phone No is required')
    .matches(NUMBER_REGEX, 'Phone number contains only Numeric Value')
    .min(10, minLength('phone number', 10))
    .max(10, maxLength('phone number not', 10)),
  gender: yup.string().required('Please select  a gender'),
  city: yup
    .string()
    .required('City is required')
    .matches(ALPHABETS_REGEX, 'Please Enter valid city name'),
  // state: yup
  //   .object()
  //   .shape({
  //     state: yup.string().required('State is Required.'),
  //     value: yup.string().required('State is Required.'),
  //   })
  //   .required('State is Required.'),
  state: yup.string().required('State is Required.'),
  // country: yup.string().required('country is required'),
  address: yup.string().required(),
  // zipCode: yup.string().required('zip Code is required'),
});

export const lucidUnitedStatesValidationSchema = yup.object().shape({
  'Are you of Hispanic, Latino, or Spanish origin?': yup
    .string()
    .required(requiredMessage('This Field')),
  'What is your DMA?': yup.string().required(requiredMessage('This Field')),
  'What is your Division?': yup
    .string()
    .required(requiredMessage('This Field')),
  'what is your MSA?': yup.string().required(requiredMessage('This Field')),
  'What is your REGION?': yup.string().required(requiredMessage('This Field')),
  'Are you registered to vote?': yup
    .string()
    .required(requiredMessage('This Field')),
  'In your household, are you the person who makes most of the daily purchasing decisions?':
    yup.string().required(requiredMessage('This Field')),
  'What is your sexual orientation?': yup
    .string()
    .required(requiredMessage('This Field')),
  'How many people live in your household including yourself?': yup
    .string()
    .required(requiredMessage('This Field')),
  'What best describes your current household?': yup
    .string()
    .required(requiredMessage('This Field')),
  'Which department do you primarily work within at your organization?': yup
    .string()
    .required(requiredMessage('This Field')),
  'Please indicate the age and gender of your child or children:': yup
    .array()
    .of(yup.string())
    .required(requiredMessage('This Field')),
  'Please choose which departments/products you have influence or decision making authority over regarding spending/purchasing.':
    yup.array().of(yup.string()).required(requiredMessage('This Field')),
  'How many children do you have under the age of 18?': yup
    .number()
    .required(requiredMessage('This Field')),
  'Please choose the options that best describe your household:': yup
    .array()
    .of(yup.string())
    .required(requiredMessage('This Field')),
  'What is your job title, level or responsibility?': yup
    .string()
    .required(requiredMessage('This Field')),
  'Which of the following religions do you most closely identify with?': yup
    .string()
    .required(requiredMessage('This Field')),
  'In politics today, do you consider yourself a Democrat, Republican, or Independent?':
    yup.string().required(requiredMessage('This Field')),
  'Would you say that in your household you speak…? / ¿Diría que en su hogar usted habla…?':
    yup.string().required(requiredMessage('This Field')),
  'Do you have a webcam and are you willing to use it for an online research opportunity?':
    yup.string().required(requiredMessage('This Field')),
  'What is your current annual household income before taxes?': yup
    .string()
    .required(requiredMessage('This Field')),
  'Do you, or have you ever, served in the United States Military?': yup
    .string()
    .required(requiredMessage('This Field')),
  'Which of the following best describes the area you live in?': yup
    .string()
    .required(requiredMessage('This Field')),
  'In terms of your political views, do you consider yourself…': yup
    .string()
    .required(requiredMessage('This Field')),
  'How do you identify? (Check all that apply)': yup
    .array()
    .of(yup.string())
    .required(requiredMessage('This Field')),
});

export const lucidAustraliaValidationSchema = yup.object().shape({
  'In your household, are you the person who makes most of the daily purchasing decisions?':
    yup.string().required(requiredMessage('This Field')),
  'How do you identify?': yup.string().required(requiredMessage('This Field')),
  'How many people live in your household including yourself?': yup
    .string()
    .required(requiredMessage('This Field')),
  'What best describes your current household?': yup
    .string()
    .required(requiredMessage('This Field')),
  'Which department do you primarily work within at your organization?': yup
    .string()
    .required(requiredMessage('This Field')),
  'Please indicate the age and gender of your child or children:': yup
    .array()
    .of(yup.string())
    .required(requiredMessage('This Field')),
  'Please choose which departments/products you have influence or decision making authority over regarding spending/purchasing.':
    yup.array().of(yup.string()).required(requiredMessage('This Field')),
  'How many children do you have under the age of 18?': yup
    .number()
    .required(requiredMessage('This Field')),
  'Please choose the options that best describe your household:': yup
    .string()
    .required(requiredMessage('This Field')),
  'What is your job title, level or responsibility?': yup
    .string()
    .required(requiredMessage('This Field')),
  'What is your yearly household income?': yup
    .string()
    .required(requiredMessage('This Field')),
  'What state do you live in?': yup
    .string()
    .required(requiredMessage('This Field')),
  'Which of the following best describes the area you live in?': yup
    .string()
    .required(requiredMessage('This Field')),
});

export const lucidCanadaValidationSchema = yup.object().shape({
  'In your household, are you the person who makes most of the daily purchasing decisions?':
    yup.string().required(requiredMessage('This Field')),
  'How do you identify?': yup.string().required(requiredMessage('This Field')),
  'How many people live in your household including yourself?': yup
    .string()
    .required(requiredMessage('This Field')),
  'What best describes your current household?': yup
    .string()
    .required(requiredMessage('This Field')),
  'Which department do you primarily work within at your organization?': yup
    .string()
    .required(requiredMessage('This Field')),
  'Please indicate the age and gender of your child or children:': yup
    .array()
    .of(yup.string())
    .required(requiredMessage('This Field')),
  'Please choose which departments/products you have influence or decision making authority over regarding spending/purchasing.':
    yup.array().of(yup.string()).required(requiredMessage('This Field')),
  'How many children do you have under the age of 18?': yup
    .number()
    .required(requiredMessage('This Field')),
  "Please choose the options that best describe your household: / S'il vous plaît choisir les options qui décrivent le mieux votre ménage:":
    yup.string().required(requiredMessage('This Field')),
  'What is your job title, level or responsibility?': yup
    .string()
    .required(requiredMessage('This Field')),
  'What is your current annual household income after taxes?': yup
    .string()
    .required(requiredMessage('This Field')),
  'What province do you live in?': yup
    .string()
    .required(requiredMessage('This Field')),
  'Which of the following best describes the area you live in?': yup
    .string()
    .required(requiredMessage('This Field')),
});

export const lucidEnglandValidationSchema = yup.object().shape({
  'In your household, are you the person who makes most of the daily purchasing decisions?':
    yup.string().required(requiredMessage('This Field')),
  'How do you identify?': yup.string().required(requiredMessage('This Field')),
  'How many people live in your household including yourself?': yup
    .string()
    .required(requiredMessage('This Field')),
  'What best describes your current household?': yup
    .string()
    .required(requiredMessage('This Field')),
  'Do you, or does anyone in your household, work in any of the following industries?':
    yup.string().required(requiredMessage('This Field')),
  'Approximately what is the annual revenue for your organization?': yup
    .string()
    .required(requiredMessage('This Field')),
  'Which department do you primarily work within at your organization?': yup
    .string()
    .required(requiredMessage('This Field')),
});

export const lucidNewZealandValidationSchema = yup.object().shape({
  'In your household, are you the person who makes most of the daily purchasing decisions?':
    yup.string().required(requiredMessage('This Field')),
  'Which department do you primarily work within at your organization?': yup
    .string()
    .required(requiredMessage('This Field')),
  'Please indicate the age and gender of your child or children:': yup
    .string()
    .required(requiredMessage('This Field')),
  'What is your current employment status?': yup
    .array()
    .of(yup.string())
    .required(requiredMessage('This Field')),
  'Please choose which departments/products you have influence or decision making authority over regarding spending/purchasing.':
    yup.array().of(yup.string()).required(requiredMessage('This Field')),
  'How many children do you have under the age of 18?': yup
    .number()
    .required(requiredMessage('This Field')),
  'Please choose the options that best describe your household:': yup
    .string()
    .required(requiredMessage('This Field')),
  'What is your job title, level or responsibility?': yup
    .string()
    .required(requiredMessage('This Field')),
  'In order to qualify for this survey you may be asked to download an app or plug-in. Would you like to continue?':
    yup.string().required(requiredMessage('This Field')),
  'How much total combined annual income do all members of your household earn before taxes?':
    yup.string().required(requiredMessage('This Field')),
  'Which of the following best describes the area you live in?': yup
    .string()
    .required(requiredMessage('This Field')),
});
