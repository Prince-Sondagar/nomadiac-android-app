import React, {Dispatch, FC, SetStateAction} from 'react';

import {
  CompleteProfile,
  OtherDetailsQuestionDataType,
  QuestionAnswerResponseType,
} from '../../../interfaceTypes';
import Autocomplete from '../../AutoComplete';
import {useFormContext} from 'react-hook-form';

type Props = {
  options: {
    label: string;
    value: string;
  }[];
  isMulti?: boolean;
  surveyResponse: CompleteProfile | null;
  questionCode: string;
  question: string;
  sortedQuestionList: OtherDetailsQuestionDataType[];
  setSurveyResponse: Dispatch<SetStateAction<CompleteProfile | null>>;
};

const MultiSelectType: FC<Props> = ({
  options,
  questionCode,
  question,
  surveyResponse,
  sortedQuestionList,
  setSurveyResponse,
}) => {
  const {responses} = surveyResponse || {};
  const {setValue} = useFormContext();

  const onChangeSelectHandle = (value: string[] | string | null) => {
    const response = responses?.find(
      (qs: QuestionAnswerResponseType) => qs?.code === questionCode,
    );
    let updatedResponse: QuestionAnswerResponseType[] = [];
    if (response) {
      updatedResponse =
        responses?.map((item: QuestionAnswerResponseType) =>
          item.code === questionCode
            ? {
                ...item,
                question,
                code: questionCode,
                options: value ? (Array.isArray(value) ? value : [value]) : [],
              }
            : item,
        ) || [];
    } else {
      updatedResponse = [
        ...(responses || []),
        {
          code: questionCode,
          question,
          options: value ? (Array.isArray(value) ? value : [value]) : [],
        },
      ];
    }
    const isLinkedQuestion = sortedQuestionList?.filter(q =>
      q?.linked ? q.linked.questionCode === questionCode : false,
    );
    isLinkedQuestion?.map(linkedQuestion => {
      if (linkedQuestion) {
        const childLinkedQuestion = sortedQuestionList?.find(
          q => q.linked && q.linked.questionCode === linkedQuestion.code,
        );
        const linkedOptions = linkedQuestion.linked?.options || [];
        if (!linkedOptions.find((op: string) => value?.includes(op))) {
          setValue(linkedQuestion?.questions?.trim(), '');
          if (childLinkedQuestion) {
            setValue(childLinkedQuestion.questions.trim() as string, '');
          }
          updatedResponse = updatedResponse.filter(
            ur =>
              ur.code !== linkedQuestion.code &&
              ur.code !== childLinkedQuestion?.code,
          );
        }
      }

      return linkedQuestion;
    });
    setSurveyResponse?.({
      ...((surveyResponse || {}) as CompleteProfile),
      responses: updatedResponse,
    });
  };

  return (
    <>
      <Autocomplete
        options={options}
        controllerName={question.trim()}
        onValueChange={onChangeSelectHandle}
      />
    </>
  );
};

export default MultiSelectType;
