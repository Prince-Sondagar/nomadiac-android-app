// package block
import React, {FC, useContext} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {
  Checkbox,
  HelperText,
  MD3Theme,
  RadioButton,
  Text,
} from 'react-native-paper';

// custom components & values block
import {LucidQuestionPropsType, QuestionType} from '../../../interfaceTypes';
import TextInput from '../../../components/TextInput';
import {ThemeContext} from '../../../contexts/ThemeContext';
import Autocomplete from '../../../components/AutoComplete';
import Select from '../../../components/Select';
import {PostCodeData} from '../../../constants/england-primary-questions';

const Question: FC<LucidQuestionPropsType> = ({
  questionItem,
  setPostCodeDependentQue,
}): JSX.Element => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  const {control, setValue, getValues, setError} = useFormContext();
  const {options, question, type, questionId} = questionItem;

  const handleSearchPostCode = (value: string) => {
    const postCodeValue = value.split(' ')[0];
    const response = PostCodeData[postCodeValue];
    if (response) {
      const {areaType, country, region} = response;

      const dependentFields = [
        {
          question: 'What part of the United Kingdom do you live in?',
          answer: areaType.value,
        },
        {
          question: 'What county do you live in?',
          answer: country.value,
        },
        {
          question: 'What region do you live in?',
          answer: region.value,
        },
      ];
      if (setPostCodeDependentQue) {
        setPostCodeDependentQue(dependentFields);
      }
    } else {
      setError(
        question.trim(),
        {
          type: 'manual',
          message: 'Invalid PostCode',
        },
        {shouldFocus: true},
      );
    }
  };

  switch (type) {
    case QuestionType.TEXTFIELD:
    case QuestionType.NUMERICFIELD:
      return (
        <View style={styles.mainContainer}>
          <View style={styles.card}>
            <Text style={styles.questionsText}>{question}</Text>
            <View style={styles.cardContent}>
              <View style={styles.selectQuestionContainer}>
                <Controller
                  name={question.trim()}
                  control={control}
                  rules={{required: 'This Field is required'}}
                  render={({field}) => (
                    <View>
                      <TextInput
                        name={question.trim() as string}
                        value={field.value}
                        isNumeric={QuestionType.NUMERICFIELD === type}
                        onChangeText={field.onChange}
                      />
                    </View>
                  )}
                />
              </View>
            </View>
          </View>
        </View>
      );

    case QuestionType.SEARCHINPUT:
      return (
        <View style={styles.mainContainer}>
          <View style={styles.card}>
            <Text style={styles.questionsText}>{question}</Text>
            <View style={styles.cardContent}>
              <View style={styles.selectQuestionContainer}>
                <Controller
                  name={question.trim()}
                  control={control}
                  rules={
                    {
                      // required: 'This Field is required',
                    }
                  }
                  render={({field}) => (
                    <View>
                      <TextInput
                        name={question.trim() as string}
                        value={field.value}
                        onChangeTextFunction={value => {
                          field.onChange(value);
                          handleSearchPostCode(value);
                        }}
                      />
                    </View>
                  )}
                />
              </View>
            </View>
          </View>
        </View>
      );

    case QuestionType.RADIO:
      return (
        <View style={styles.mainContainer}>
          <View style={styles.card}>
            <Text style={styles.questionsText}>{question}</Text>
            <View style={styles.cardContent}>
              <View key={`${question}-${questionId}`}>
                <Controller
                  control={control}
                  name={question.trim() as never}
                  rules={{required: 'This Field is required'}}
                  render={({
                    field,
                    fieldState: {error: {message} = {}} = {},
                  }) => {
                    return (
                      <View>
                        <RadioButton.Group
                          value={field.value}
                          onValueChange={field.onChange}>
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
                        {message && (
                          <HelperText type="error">{message}</HelperText>
                        )}
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      );

    case QuestionType.CHECKBOX:
      return (
        <View style={styles.mainContainer}>
          <View style={styles.card}>
            <Text style={styles.questionsText}>{question}</Text>
            <View style={styles.cardContent}>
              <Controller
                control={control}
                name={question.trim() as never}
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
                                if (checked) {
                                  const updatedValue = values.filter(
                                    item => item !== value,
                                  );
                                  setValue(
                                    question as never,
                                    updatedValue as never,
                                    {
                                      shouldDirty: true,
                                      shouldValidate: true,
                                      shouldTouch: true,
                                    },
                                  );
                                } else {
                                  setValue(
                                    question as never,
                                    [...values, value] as never,
                                    {
                                      shouldDirty: true,
                                      shouldValidate: true,
                                      shouldTouch: true,
                                    },
                                  );
                                }
                              }}
                              color="#EDBB5F"
                            />
                            <Text style={styles.option}>{label}</Text>
                          </View>
                        );
                      })}
                      {message && (
                        <HelperText type="error">{message}</HelperText>
                      )}
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </View>
      );

    case QuestionType.AUTOCOMPLETE:
      return (
        <View style={styles.mainContainer}>
          <View style={styles.card}>
            <Text style={styles.questionsText}>{question}</Text>
            <View style={styles.cardContent}>
              <Autocomplete
                controllerName={question.trim() as never}
                options={options}
                key={`${question}_Key_`}
              />
            </View>
          </View>
        </View>
      );

    case QuestionType.SELECT:
      return (
        <View style={styles.mainContainer}>
          <View style={styles.card}>
            <Text style={styles.questionsText}>{question}</Text>
            <View style={styles.cardContent}>
              <View style={styles.selectQuestionContainer}>
                <Select
                  getValue={() => getValues(question.trim())}
                  options={options}
                  name={question.trim()}
                  hasSearch
                />
              </View>
            </View>
          </View>
        </View>
      );
    default:
      return <></>;
  }
};

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    RadioContainer: {
      flexDirection: 'row',
    },
    QuestionText: {
      fontWeight: 'bold',
      fontSize: 15,
    },
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
    cardContent: {
      marginRight: 15,
      width: '100%',
    },
    option: {
      fontSize: 16,
      paddingTop: 7,
    },
    selectQuestionContainer: {
      marginHorizontal: 10,
      marginVertical: 0,
    },
  });
export default Question;
