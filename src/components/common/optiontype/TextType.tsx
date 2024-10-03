import React, {FC, useEffect, Dispatch, SetStateAction} from 'react';
import {
  CompleteProfile,
  OtherDetailsQuestionDataType,
} from '../../../interfaceTypes';
import {StyleSheet, View} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import {Controller, useFormContext} from 'react-hook-form';

interface Props {
  options: {
    label: string;
    value: string;
  }[];
  questionCode: string;
  textLinkedWithOther: string | undefined;
  question: string;
  surveyResponse: CompleteProfile | null;
  setSurveyResponse: (value: CompleteProfile | null) => void;
  setFormCheck: Dispatch<SetStateAction<string[]>>;
  formCheck: string[];
  sortedQuestionList: OtherDetailsQuestionDataType[];
}

const TextType: FC<Props> = ({
  questionCode,
  textLinkedWithOther,
  question,
  surveyResponse,
  setSurveyResponse,
  setFormCheck,
  formCheck,
}): JSX.Element => {
  const {responses} = surveyResponse || {};
  const response = responses?.find(qs => qs?.code === questionCode);
  const checkOption = response?.options?.includes(textLinkedWithOther ?? '');

  useEffect(() => {
    if (checkOption && !response?.text) {
      setFormCheck([...formCheck, questionCode]);
    } else
      setFormCheck((prevState: string[]) =>
        prevState?.filter((qs: string) => qs !== questionCode),
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const handleChange = (value: string) => {
    const updatedResponse = responses?.map(item =>
      item?.code === questionCode ? {...item, text: value} : item,
    );
    const exist = responses?.find(qs => qs?.code === questionCode);
    const res = exist
      ? updatedResponse
      : [
          ...(responses || []),
          {code: questionCode, question, options: [], text: value},
        ];
    setSurveyResponse({
      ...((surveyResponse || {}) as CompleteProfile),
      responses: res,
    });
  };

  const {control} = useFormContext();

  return (
    <View style={styles.mainContainer}>
      {checkOption && (
        <>
          <Controller
            name={question.trim()}
            control={control}
            rules={{required: 'This Field is required'}}
            render={({fieldState: {error: {message} = {}}}) => (
              <>
                <TextInput
                  mode="outlined"
                  onChangeText={value => {
                    handleChange(value);
                  }}
                />
                {message && <HelperText type="error">{message}</HelperText>}
              </>
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    paddingTop: 0,
    width: '100%',
    flex: 1,
  },
});

export default TextType;
