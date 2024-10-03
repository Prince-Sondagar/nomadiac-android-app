import React, {FC, useEffect} from 'react';
import {
  CompleteProfile,
  QuestionAnswerResponseType,
  RadioPropsType,
} from '../../../interfaceTypes';
import {StyleSheet, View} from 'react-native';
import {Checkbox, HelperText, Text} from 'react-native-paper';
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from 'react-hook-form';

const CheckBoxType: FC<RadioPropsType> = ({
  options,
  questionCode,
  question,
  surveyResponse,
  setSurveyResponse,
  sortedQuestionList,
}) => {
  const {responses} = surveyResponse || {};
  const optionExistence = (
    response: QuestionAnswerResponseType,
    value: string,
  ) => {
    const existOption = response?.options?.includes(value);
    const updatedResponse = responses?.map(item =>
      item?.code === questionCode
        ? {
            ...item,
            options: existOption
              ? item?.options?.filter(qs => qs !== value)
              : [...item?.options, value],
            text: undefined,
          }
        : item,
    );

    setSurveyResponse({
      ...((surveyResponse || {}) as CompleteProfile),
      responses: updatedResponse,
    });
  };

  useEffect(() => {
    const ansObj = responses?.find(ed => ed?.code === questionCode);
    if (!!ansObj && !ansObj.options.length) {
      const newResponse = responses?.filter(sd => !(sd?.code === ansObj?.code));
      setSurveyResponse({
        ...((surveyResponse || {}) as CompleteProfile),
        responses: newResponse,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionExistence]);

  const checkBoxHandle = (
    field: ControllerRenderProps<FieldValues, string>,
    checked: boolean,
    value: string,
  ) => {
    if (checked) {
      field.onChange([...field.value, value]);
    } else {
      field.onChange(
        field.value?.filter((selectedValue: string) => value !== selectedValue),
      );
    }

    const response = responses?.find(
      (qs: QuestionAnswerResponseType) => qs?.code === questionCode,
    );
    let updatedResponse: QuestionAnswerResponseType[] = [];
    if (response) {
      const updatedOptions = response.options.includes(value)
        ? response.options.filter((option: string) => option !== value)
        : [...response.options, value];
      updatedResponse =
        responses?.map((item: QuestionAnswerResponseType) =>
          item.code === questionCode
            ? {...item, options: updatedOptions}
            : item,
        ) || [];
    } else {
      updatedResponse = [
        ...(responses || []),
        {code: questionCode, question, options: [value]},
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
        if (linkedQuestion.linked?.options.some(option => option === value)) {
          setValue(linkedQuestion.questions.trim(), '', {
            shouldDirty: true,
            shouldValidate: true,
            shouldTouch: true,
          });

          if (childLinkedQuestion) {
            setValue(childLinkedQuestion?.questions?.trim() as string, '', {
              shouldDirty: true,
              shouldValidate: true,
              shouldTouch: true,
            });
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

  const {control, setValue} = useFormContext();
  return (
    <Controller
      control={control}
      name={question.trim() as string}
      rules={{required: 'This Field is required'}}
      render={({field, fieldState: {error: {message} = {}} = {}}) => {
        const values: string[] = field.value ?? [];
        return (
          <View>
            {options.map(optionItem => {
              const {value, label} = optionItem;
              const checked = values.includes(value);
              return (
                <View key={value} style={styles.RadioContainer}>
                  <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                      checkBoxHandle(field, !checked, value as string);
                    }}
                    color="#EDBB5F"
                  />
                  <Text>{label}</Text>
                </View>
              );
            })}
            {message && <HelperText type="error">{message}</HelperText>}
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  RadioContainer: {
    flexDirection: 'row',
  },
});

export default CheckBoxType;
