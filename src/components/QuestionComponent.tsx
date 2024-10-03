import React, {FC, useCallback, useContext} from 'react';
import {
  OtherDetailsQuestionDataType,
  QuestionComponentPropsType,
} from '../interfaceTypes';
import {StyleSheet, View} from 'react-native';
import RadioType from './common/optiontype/RadioType';
import CheckBoxType from './common/optiontype/CheckBoxType';
import TextType from './common/optiontype/TextType';
import SelectType from './common/optiontype/SelectType';
import {ThemeContext} from '../contexts/ThemeContext';
import MultiSelectType from './common/optiontype/MultiSelectType';
import {MD3Theme, Text} from 'react-native-paper';

const QuestionComponent: FC<QuestionComponentPropsType> = ({
  question,
  surveyResponse,
  setSurveyResponse,
  setFormCheck,
  formCheck,
  sortedQuestionList,
}) => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  const {
    type,
    options: QuestionOption,
    questions,
    code,
    textLinkedWithOther,
  } = question;

  const optiontype = type?.find(ts => ts === 'TEXT');
  const othertype = type?.find(ts => !(ts === 'TEXT'));

  const isShowLinkedQuestion = useCallback(
    (question: OtherDetailsQuestionDataType) => {
      if (!question.linked) return false;
      const {responses} = surveyResponse || {};
      const linkedQuestion = responses?.find(
        qs => qs?.code === question?.linked?.questionCode,
      );
      const linkedOption = linkedQuestion?.options?.find(qs =>
        question.linked?.options.includes(qs),
      );
      return question.linked ? !linkedOption : true;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [surveyResponse],
  );

  if (isShowLinkedQuestion(question)) return <View />;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.card}>
        <Text style={styles.questionsText}>{questions}</Text>
        {othertype === 'RADIO' && (
          <RadioType
            questionCode={code}
            question={questions}
            options={QuestionOption}
            surveyResponse={surveyResponse}
            setSurveyResponse={setSurveyResponse}
            sortedQuestionList={sortedQuestionList}
          />
        )}

        {othertype === 'CHECKBOX' && (
          <CheckBoxType
            questionCode={code}
            question={questions}
            options={QuestionOption}
            surveyResponse={surveyResponse}
            setSurveyResponse={setSurveyResponse}
            sortedQuestionList={sortedQuestionList}
          />
        )}

        {othertype === 'SELECT' && (
          <SelectType
            options={QuestionOption}
            questionCode={code}
            question={questions}
            surveyResponse={surveyResponse}
            setSurveyResponse={setSurveyResponse}
            sortedQuestionList={sortedQuestionList}
          />
        )}

        {othertype === 'MULTISELECT' && (
          <MultiSelectType
            options={QuestionOption}
            questionCode={code}
            question={questions}
            surveyResponse={surveyResponse}
            setSurveyResponse={setSurveyResponse}
            sortedQuestionList={sortedQuestionList}
          />
        )}

        {!!optiontype && (
          <TextType
            options={QuestionOption}
            textLinkedWithOther={textLinkedWithOther}
            question={questions}
            questionCode={code}
            surveyResponse={surveyResponse}
            formCheck={formCheck}
            setFormCheck={setFormCheck}
            setSurveyResponse={setSurveyResponse}
            sortedQuestionList={sortedQuestionList}
          />
        )}
      </View>
    </View>
  );
};

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    mainContainer: {
      paddingTop: 10,
    },
    card: {
      backgroundColor: theme.colors.background,
      borderRadius: 10,
      elevation: 2,
      minWidth: 230,
      marginTop: 3,
      padding: 10,
    },
    questionsText: {
      fontWeight: 'bold',
      fontSize: 17,
      paddingLeft: 5,
    },
  });

export default QuestionComponent;
