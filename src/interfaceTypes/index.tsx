import {NavigationProp} from '@react-navigation/native';
import {Dispatch, SetStateAction} from 'react';
import {RootParamList} from '../App';
import {
  CreateBulkSignupSurveyResponseInput,
  VerifyResponsePayload,
} from '../generated';
import {GraphQLErrorExtensions} from 'graphql';

export interface BasicDetailPropsType {
  step?: number;
  setStep: Dispatch<SetStateAction<number>>;
  surveyResponse: RegisterPanelistWithLucidJoiner | null;
  setSurveyResponse: Dispatch<
    SetStateAction<RegisterPanelistWithLucidJoiner | null>
  >;
  setSurveyResponseFusion: Dispatch<SetStateAction<CompleteProfile | null>>;
  setMobileNumberVerifyResponse?: Dispatch<
    SetStateAction<VerifyResponsePayload | null>
  >;
}
export interface countryDetailPropsType {
  setStep: Dispatch<SetStateAction<number>>;
  surveyResponse: CompleteProfile | null;
  setSurveyResponse: Dispatch<SetStateAction<CompleteProfile | null>>;
}

export interface privatePolicyPropsType {
  surveyform: QuestionAnswerResponseType[];
  setStep: Dispatch<SetStateAction<number>>;
  setSurveyForm: Dispatch<SetStateAction<QuestionAnswerResponseType[]>>;
}

export interface countryDetailPropsType {
  setStep: Dispatch<SetStateAction<number>>;
}

export interface BasicInformationType {
  // country: string;
  state: string;
  // state: {
  //   value: string;
  //   state: string;
  // };
  phone: string;
  city: string;
  address: string;
  gender: string;
  // zipCode: string;
}

export interface OtherDetailsPropsType {
  surveyResponse: CompleteProfile | null;
  setStep: Dispatch<SetStateAction<number>>;
  setSurveyResponse: Dispatch<SetStateAction<CompleteProfile | null>>;
  mobileNumberVerifyResponse?: VerifyResponsePayload | null;
  // surveyform: QuestionAnswerResponseType[];
  // setSurveyForm: Dispatch<SetStateAction<QuestionAnswerResponseType[]>>;
}

export interface LucidSurveyPropsType {
  surveyResponse: RegisterPanelistWithLucidJoiner | null;
  setSurveyResponse: Dispatch<
    SetStateAction<RegisterPanelistWithLucidJoiner | null>
  >;
  setStep: Dispatch<SetStateAction<number>>;
  step?: number;
  mobileNumberVerifyResponse?: VerifyResponsePayload | null;
}
export interface QuestionAnswerResponseType {
  code: string;
  question: string;
  options: string[];
  text?: string;
}

export interface CompleteProfile extends BasicInformationType {
  responses?: QuestionAnswerResponseType[];
}

export interface States {
  value: string;
  label: string;
}

export interface QuestionDataType {
  questionId: string;
  question: string;
  options: {
    label: string;
    value: string;
  }[];
  type: QuestionType;
  textLinkedWithOther?: string;
  linked?: {
    questionCode: string;
    options: {
      label: string;
      value: string;
    }[];
  };
}

export interface OtherDetailsQuestionDataType {
  code: string;
  questions: string;
  options: {
    label: string;
    value: string;
  }[];
  type: string[];
  textLinkedWithOther?: string;
  linked?: {
    questionCode: string;
    options: Array<string>;
  };
}

export interface QuestionComponentPropsType {
  question: OtherDetailsQuestionDataType;
  formCheck: string[];
  setFormCheck: Dispatch<SetStateAction<string[]>>;
  sortedQuestionList: OtherDetailsQuestionDataType[];
  surveyResponse: CompleteProfile | null;
  setSurveyResponse: Dispatch<SetStateAction<CompleteProfile | null>>;
}

export type CustomCreateBulkSignupSurveyResponseInput = Omit<
  CreateBulkSignupSurveyResponseInput,
  'answer'
> & {
  answer: string | string[];
};
export interface RegisterPanelistWithLucidJoiner extends BasicInformationType {
  responses: CustomCreateBulkSignupSurveyResponseInput[];
}
export interface RadioPropsType {
  options: {
    label: string;
    value: string;
  }[];
  questionCode: string;
  question: string;
  sortedQuestionList: OtherDetailsQuestionDataType[];
  surveyResponse: CompleteProfile | null;
  setSurveyResponse: Dispatch<SetStateAction<CompleteProfile | null>>;
}

export type SelectPropsType = RadioPropsType & {
  isMulti?: false | undefined;
};

export type INavigation = NavigationProp<RootParamList>;

export type LucidFormType = {[key: string]: string | string[]};

export enum QuestionType {
  TEXTFIELD = 'TextField',
  NUMERICFIELD = 'NumericField',
  RADIO = 'Radio',
  CHECKBOX = 'CheckBox',
  AUTOCOMPLETE = 'AutoComplete',
  SELECT = 'Select',
  MULTISELECT = 'MultiSelect',
  SEARCHINPUT = 'SearchInput',
}

export type OptionType = {label: string; value: string};
export interface LucidQuestionPropsType {
  questionItem: {
    questionId: string;
    question: string;
    type: QuestionType;
    options: {
      label: string;
      value: string;
    }[];
  };
  setPostCodeDependentQue?: any;
}

export interface ErrorResponseType {
  error: string;
  message: string;
  status: number;
  response: ErrorResponseType;
}
export interface ErrorException extends GraphQLErrorExtensions {
  message: string;
  name: string;

  response: {
    error: string;
    message: string;
    status: number;
    response: ErrorResponseType;
  };
}

export type LabelValuePair = {
  label: string;
  value: string;
};

export type IPostCodeData = {
  [key: string]: {
    country: LabelValuePair;
    region: LabelValuePair;
    areaType: LabelValuePair;
  };
};

export type IPostCodeDependentQue = {
  question: string;
  answer: string;
};

export type IZipCodeUSJoinerData = {
  [key: string]: {
    state: LabelValuePair;
    region: LabelValuePair;
    division: LabelValuePair;
  };
};
