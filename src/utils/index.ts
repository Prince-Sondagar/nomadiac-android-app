import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AUSTRALIA,
  AUTH_TOKEN,
  CANADA,
  DIVISION,
  DIVISION_2,
  DIVISION_3,
  DIVISION_4,
  DIVISION_5,
  DIVISION_6,
  DIVISION_7,
  DIVISION_8,
  DIVISION_9,
  NEW_ZEALAND,
  POSTCODE_DEPENDENT_QUE,
  SURVEY_FORM,
  SURVEY_RESPONSE,
  SURVEY_STEP,
  UNITED_KINGDOM,
  UNITED_STATES,
} from '../constants';
import {PaymentWithdrawalStatus} from '../generated';
import {CompleteProfile, States} from '../interfaceTypes';
import {
  NewZealandStates,
  UKStates,
  USState,
  australiaState,
  canadaStates,
} from './faqConstants';
import {
  UnitedStatesInitialValue,
  UnitedStatesPrimaryCriticalQuestions,
} from '../constants/united-states-primary-critical-questions';
import {
  AustraliaInitialValue,
  AustraliaLucidQuestions,
} from '../constants/australia-primary-questions';
import {
  CanadaInitialValue,
  CanadaPrimaryQuestions,
} from '../constants/canada-primary-questions';
import {
  EnglandInitialValue,
  EnglandPrimaryQuestions,
} from '../constants/england-primary-questions';
import {
  NewZealandInitialValue,
  NewZealandPrimaryQuestions,
} from '../constants/new-zealand-primary-questions';
import {
  lucidAustraliaValidationSchema,
  lucidCanadaValidationSchema,
  lucidEnglandValidationSchema,
  lucidNewZealandValidationSchema,
  lucidUnitedStatesValidationSchema,
} from './yupSchema';

// export function setToken(token: string) {
//   return AsyncStorage.setItem(AUTH_TOKEN, token);
// }
export const setToken = async (token: string) => {
  try {
    await AsyncStorage.setItem(AUTH_TOKEN, token);
    return token;
  } catch (error) {
    console.log(error);
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(AUTH_TOKEN);
  } catch (error) {
    console.log(error);
  }
};

export const getToken = async () => {
  try {
    const tokens = await AsyncStorage.getItem(AUTH_TOKEN);
    return tokens;
  } catch (error) {
    console.log(error);
  }
};

export const getSurveyPostCodeQueStep = async () => {
  try {
    return await AsyncStorage.getItem(POSTCODE_DEPENDENT_QUE);
  } catch (error) {
    return null;
  }
};

export const setPostCodeDependentQueLocalStorage = async (
  responses: string,
) => {
  try {
    await AsyncStorage.setItem(POSTCODE_DEPENDENT_QUE, responses);
    return responses;
  } catch (error) {
    console.log(error);
  }
};

export const capitalizeFirstLetter = (item: string) =>
  item.charAt(0).toUpperCase() + item.toLowerCase().slice(1);

export const formatDate = (date: Date | string | number) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

export const getColorForPaymentRequestStatus = (
  status: PaymentWithdrawalStatus,
) => {
  switch (status) {
    case PaymentWithdrawalStatus.Delivered:
      return 'success';
    case PaymentWithdrawalStatus.Cancelled:
      return 'primary';
    case PaymentWithdrawalStatus.Requested:
      return 'info';
  }
};

// export function getToken() {
//   return AsyncStorage.getItem(AUTH_TOKEN);
// }

export const requiredMessage = (fieldName: string) =>
  `${fieldName} is required.`;

export const CPIRounding = (e: number) => Math.ceil(e * 100 * 0.6);

export const maxLength = (fieldName: string, length: number) =>
  `${fieldName} can be up to ${length} characters long.`;
export const minLength = (fieldName: string, length: number) =>
  `${fieldName} should be at least ${length} characters long.`;

export const getColorBasedOnStatus = (status: PaymentWithdrawalStatus) => {
  switch (status) {
    case PaymentWithdrawalStatus.Requested:
      return '#0288d1';
    case PaymentWithdrawalStatus.Cancelled:
      return '#0d1a26';
    case PaymentWithdrawalStatus.Delivered:
      return '#2e7d32';
  }
};

//SurveyResponse
export const setSurveyResponseLocalStorage = async (responses: any) => {
  try {
    await AsyncStorage.setItem(SURVEY_RESPONSE, responses);
    return responses;
  } catch (error) {
    console.log(error);
  }
};

export const getSurveyResponse = async (): Promise<CompleteProfile | null> => {
  try {
    const survey: any = await AsyncStorage.getItem(SURVEY_RESPONSE ?? '{}');
    return survey;
  } catch (error) {
    console.log(error);
  }
  return null;
};

//Survey Step
export const setSurveyStep = async (step: string) => {
  try {
    await AsyncStorage.setItem(SURVEY_STEP, step.toString());
    return step;
  } catch (error) {
    console.log(error);
  }
};

export const getSurveyStep = async () => {
  try {
    const surveystep = await AsyncStorage.getItem(SURVEY_STEP ?? '1');
    return surveystep ? parseInt(surveystep) : 1;
  } catch (error) {
    console.log(error);
  }
};

//Survey Form
export const setSurveyFormLocalStorage = async (responses: any) => {
  try {
    await AsyncStorage.setItem(SURVEY_FORM, responses);
    return responses;
  } catch (error) {
    console.log(error);
  }
};

export const removeSurveyResponse = async () => {
  await AsyncStorage.removeItem(SURVEY_RESPONSE);
  await AsyncStorage.removeItem(SURVEY_STEP);
  await AsyncStorage.removeItem(SURVEY_FORM);
};

export const ClearAsyncStorage = async () => {
  await AsyncStorage.clear();
};

export const CountryToStates = (country: string): States[] => {
  switch (country) {
    case 'United States':
      return USState;

    case 'Australia':
      return australiaState;

    case 'Canada':
      return canadaStates;

    case 'United Kingdom':
      return UKStates;

    case 'New Zealand':
      return NewZealandStates;

    default:
      return [];
  }
};

export const RenderLucidQuestionsInitialValue = (
  country: string,
  old = false,
) => {
  switch (country) {
    case 'United States':
      return UnitedStatesInitialValue(old);

    case 'Australia':
      return AustraliaInitialValue;

    case 'Canada':
      return CanadaInitialValue;

    case 'United Kingdom':
      return EnglandInitialValue(old);

    case 'New Zealand':
      return NewZealandInitialValue;

    default:
      return undefined;
  }
};

export const RenderLucidQuestionsSchema = (country: string) => {
  switch (country) {
    case 'United States':
      return lucidUnitedStatesValidationSchema;

    case 'Australia':
      return lucidAustraliaValidationSchema;

    case 'Canada':
      return lucidCanadaValidationSchema;

    case 'United Kingdom':
      return lucidEnglandValidationSchema;

    case 'New Zealand':
      return lucidNewZealandValidationSchema;

    default:
      return undefined;
  }
};

export const RenderQuestion = (country: string, old = false) => {
  switch (country) {
    case 'United States':
      return UnitedStatesPrimaryCriticalQuestions(old);

    case 'Australia':
      return AustraliaLucidQuestions;

    case 'Canada':
      return CanadaPrimaryQuestions;

    case 'United Kingdom':
      return EnglandPrimaryQuestions(old);

    case 'New Zealand':
      return NewZealandPrimaryQuestions;

    default:
      return [];
  }
};

export const getCodeToCountry = (country: string) => {
  switch (country) {
    case 'United States':
      return 'US';

    case 'Australia':
      return 'AU';

    case 'Canada':
      return 'CA';

    case 'United Kingdom':
      return 'GB';

    case 'New Zealand':
      return 'NZ';

    default:
      return 'US';
  }
};

export const CountrySpellAdjustment = (country: string): string => {
  switch (country) {
    case 'united states':
      return UNITED_STATES;
    case 'united kingdom':
      return UNITED_KINGDOM;
    case 'australia':
      return AUSTRALIA;
    case 'canada':
      return CANADA;
    case 'new zealand':
      return NEW_ZEALAND;
    default:
      return '';
  }
};

export const StateToDivision = (state: string) => {
  if (DIVISION.includes(state)) {
    return 'New England';
  }

  if (DIVISION_2.includes(state)) {
    return 'Middle Atlantic';
  }

  if (DIVISION_3.includes(state)) {
    return 'East North Central';
  }

  if (DIVISION_4.includes(state)) {
    return 'West North Central';
  }

  if (DIVISION_5.includes(state)) {
    return 'South Atlantic';
  }

  if (DIVISION_6.includes(state)) {
    return 'East South Central';
  }

  if (DIVISION_7.includes(state)) {
    return 'West South Central';
  }

  if (DIVISION_8.includes(state)) {
    return 'Mountain';
  }

  if (DIVISION_9.includes(state)) {
    return 'Pacific';
  }

  return '';
};

export const StateToRegion = (state: string) => {
  if ([...DIVISION, ...DIVISION_2].includes(state)) {
    return 'Northeast';
  }

  if ([...DIVISION_3, ...DIVISION_4].includes(state)) {
    return 'Midwest';
  }

  if ([...DIVISION_5, ...DIVISION_6, ...DIVISION_7].includes(state)) {
    return 'South';
  }

  if ([...DIVISION_8, ...DIVISION_9].includes(state)) {
    return 'West';
  }

  return '';
};

export const getTelePhoneCodeToCountry = (country: string) => {
  switch (country) {
    case 'United States':
      return '+1';

    case 'Australia':
      return '+61';

    case 'Canada':
      return '+1';

    case 'United Kingdom':
      return '+44';

    case 'New Zealand':
      return '+64';

    default:
      return '+1';
  }
};

export const sortOptionLabel = (statesArray: States[]) =>
  statesArray.sort((stateA, stateB) =>
    stateA.label.localeCompare(stateB.label),
  );
