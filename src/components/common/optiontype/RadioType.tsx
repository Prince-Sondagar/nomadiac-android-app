import React, {ChangeEvent, FC} from 'react';
import {
  CompleteProfile,
  QuestionAnswerResponseType,
  RadioPropsType,
} from '../../../interfaceTypes';
import {View, StyleSheet} from 'react-native';
import {HelperText, RadioButton, Text} from 'react-native-paper';
import {Controller, useFormContext} from 'react-hook-form';

const RadioType: FC<RadioPropsType> = ({
  options,
  question,
  questionCode,
  surveyResponse,
  sortedQuestionList,
  setSurveyResponse,
}) => {
  const {responses = []} = surveyResponse || {};
  const resOption = responses
    ?.find(qs => qs?.code === questionCode)
    ?.options?.find(ws => ws);

  const {setValue} = useFormContext();

  const checkedHandle = (value: string) => {
    const response = responses?.find(
      (qs: QuestionAnswerResponseType) => qs?.code === questionCode,
    );
    let updatedResponse: QuestionAnswerResponseType[] = [];
    if (response) {
      updatedResponse = responses.map((item: QuestionAnswerResponseType) =>
        item.code === questionCode
          ? {
              code: questionCode,
              question: response?.question || '',
              options: [value],
            }
          : item,
      );
    } else {
      updatedResponse = [
        ...(responses || []),
        {code: questionCode, question: question, options: [value]},
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

        if (!linkedQuestion.linked?.options.some(option => option === value)) {
          setValue(linkedQuestion?.questions?.trim(), '', {
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

  const {control} = useFormContext();
  return (
    <View>
      <Controller
        control={control}
        name={question.trim() as never}
        rules={{required: 'This Field is required'}}
        render={({field, fieldState: {error: {message} = {}} = {}}) => {
          return (
            <View>
              <RadioButton.Group
                value={resOption || ''}
                onValueChange={value => {
                  checkedHandle(value);
                  field.onChange(
                    value as unknown as ChangeEvent<HTMLInputElement>,
                  );
                }}>
                {options.map(optionItem => {
                  const {value, label} = optionItem;
                  return (
                    <View key={value} style={styles.RadioContainer}>
                      <RadioButton value={value} />
                      <Text style={styles.option}>{label}</Text>
                    </View>
                  );
                })}
              </RadioButton.Group>
              {message && <HelperText type="error">{message}</HelperText>}
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  option: {
    fontSize: 16,
    paddingTop: 7,
  },
  RadioContainer: {
    flexDirection: 'row',
  },
});
export default RadioType;
