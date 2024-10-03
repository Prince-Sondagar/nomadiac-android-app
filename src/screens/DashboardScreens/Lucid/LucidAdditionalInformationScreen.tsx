import React, {useContext, useEffect, useRef, useState} from 'react';
import {Alert, BackHandler, StyleSheet, View, ViewProps} from 'react-native';
import {INavigation, LucidFormType} from '../../../interfaceTypes';
import CustomHeader from '../../../components/common/CustomHeader';
import {AuthContext} from '../../../contexts/AuthContext';
import {
  useCreateSignupSurveyResponsesMutation,
  useUpdatePanelistMutation,
} from '../../../generated';
import {
  RenderLucidQuestionsInitialValue,
  RenderQuestion,
  StateToDivision,
  StateToRegion,
  removeSurveyResponse,
} from '../../../utils';
import {MD3Theme} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {FormProvider, useForm} from 'react-hook-form';
import {ThemeContext} from '../../../contexts/ThemeContext';
import Question from './Question';
import Button from '../../../components/Button';
import {RootScreenEnum, UNITED_STATES} from '../../../constants';
import {USState} from '../../../utils/faqConstants';

interface Props extends ViewProps {
  navigation: INavigation;
}

function LucidAdditionalInformationScreen({navigation}: Props) {
  const {currentPanelist, setCurrentPanelist, refreshPanelist} =
    useContext(AuthContext);
  const {theme} = useContext(ThemeContext);
  const {id, country, state: currentPanelistState} = currentPanelist || {};
  const scrollViewRef = useRef<ScrollView | null>(null);
  const styles = useStyles(theme);
  const {label: stateValueToCompare} =
    USState.find(
      ({value, label}) =>
        value.toLowerCase() === currentPanelistState?.toLowerCase() ||
        label.toLowerCase() === currentPanelistState?.toLowerCase(),
    ) || {};

  const defaultValues =
    RenderLucidQuestionsInitialValue(country || '', true) || undefined;

  const methods = useForm<LucidFormType>({mode: 'all', defaultValues});
  const {handleSubmit} = methods;

  const [updatePanelist, {loading}] = useUpdatePanelistMutation();

  const [createSignupSurveyResponse, {loading: createSurveyResponseLoading}] =
    useCreateSignupSurveyResponsesMutation({
      onCompleted(data) {
        const {
          createSignupSurveyResponses: {panelist},
        } = data;
        const {signupSurveyResponse} = panelist || {};
        if (currentPanelist) {
          setCurrentPanelist({
            ...currentPanelist,
            lucidProfileCompleted: true,
            signupSurveyResponse: signupSurveyResponse || [],
          });
          removeSurveyResponse();
          navigation.navigate(RootScreenEnum.DASHBOARD_SCREEN);
        }
      },
    });

  const isLoading = loading || createSurveyResponseLoading;

  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 5;
  const QuestionData = RenderQuestion(country || '', true);
  const startIndex = currentPage * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const questionsToDisplay = QuestionData.slice(startIndex, endIndex);
  const totalQuestions = RenderQuestion(country || '', true).length;

  const onSubmit = async (data: LucidFormType) => {
    if (currentPage < Math.ceil(totalQuestions / questionsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      try {
        const surveyResponseData = {...data};

        if (country === UNITED_STATES) {
          surveyResponseData['What is your Division?'] = StateToDivision(
            stateValueToCompare || '',
          );
          surveyResponseData['What is your REGION?'] = StateToRegion(
            stateValueToCompare || '',
          );
        }

        await Promise.all([
          updatePanelist({
            variables: {
              updatePanelistInput: {
                id: id || '',
                lucidProfileCompleted: true,
              },
            },
          }),

          createSignupSurveyResponse({
            variables: {
              createSignupSurveyResponses: {
                panelistId: id || '',
                responses: Object.keys(surveyResponseData)?.map(question => ({
                  question,
                  answer: surveyResponseData[question]?.toString() || '',
                })),
              },
            },
          }),
        ]);

        if (currentPanelist) {
          setCurrentPanelist({...currentPanelist, lucidProfileCompleted: true});
          Alert.alert('Profile Updated Successfully.');
          navigation.navigate(RootScreenEnum.HOME_SCREEN as any);
          await removeSurveyResponse();
          await refreshPanelist();
        }
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      },
    );
    return () => backHandler.remove();
  });

  return (
    <View style={styles.container}>
      <CustomHeader title="Additional Lucid Surveys" navigation={navigation} />
      <View style={styles.contentContainer}>
        <ScrollView ref={scrollViewRef} style={styles.scrollView}>
          <View style={styles.formContainer}>
            <FormProvider {...methods}>
              {questionsToDisplay.map(questionItem => (
                <Question
                  key={questionItem.questionId}
                  questionItem={questionItem}
                />
              ))}
            </FormProvider>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonWrapper}>
        {endIndex < QuestionData.length ? (
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={handleSubmit(onSubmit)}
              disabled={!!isLoading}
              isLoading={!!isLoading}>
              Next
            </Button>
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={handleSubmit(onSubmit)}
              disabled={!!isLoading}
              isLoading={!!isLoading}>
              Submit
            </Button>
          </View>
        )}
      </View>
    </View>
  );
}

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: theme.colors.background,
    },
    contentContainer: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
    },
    formContainer: {
      padding: 22,
    },
    buttonWrapper: {
      borderTopWidth: 1,
      borderTopColor: theme.colors.secondary,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      marginBottom: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 3,
    },
    IconButton: {
      borderRadius: 10,
      backgroundColor: 'rgb(255, 217, 90)',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  });

export default LucidAdditionalInformationScreen;
