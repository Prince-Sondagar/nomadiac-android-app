// package block
import React, {FC, useContext, useEffect, useRef, useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {MD3Theme} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {Alert, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// interface block
import {
  CustomCreateBulkSignupSurveyResponseInput,
  INavigation,
  IPostCodeDependentQue,
  LucidFormType,
  LucidSurveyPropsType,
} from '../../../interfaceTypes';
// Context block
import {AuthContext} from '../../../contexts/AuthContext';
import {ThemeContext} from '../../../contexts/ThemeContext';
// Query block
import {
  UserGender,
  useCreateSignupSurveyResponsesMutation,
  useUpdatePanelistMutation,
} from '../../../generated';
// common components & values block
import {
  RenderLucidQuestionsInitialValue,
  RenderQuestion,
  getSurveyPostCodeQueStep,
  removeSurveyResponse,
  setPostCodeDependentQueLocalStorage,
  setSurveyResponseLocalStorage,
  setSurveyStep,
} from '../../../utils';
import Question from './Question';
import Button from '../../../components/Button';
import {
  RootScreenEnum,
  UNITED_KINGDOM,
  UNITED_STATES,
} from '../../../constants';
import {USState} from '../../../utils/faqConstants';
import CustomOnboardingHeader from '../../../components/common/CustomOnboardingHeader';
import axiosClient from '../../../utils/API';

const LucidSurveyScreen: FC<LucidSurveyPropsType> = ({
  surveyResponse,
  setSurveyResponse,
  setStep,
  step,
  // mobileNumberVerifyResponse,
}) => {
  const navigation: INavigation = useNavigation();
  const scrollViewRef = useRef<ScrollView | null>(null);
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  const {currentPanelist, setCurrentPanelist, refreshPanelist} =
    useContext(AuthContext);
  const [postCodeDependentQue, setPostCodeDependentQue] = useState<
    IPostCodeDependentQue[]
  >([]);
  const {id, country, zipCode} = currentPanelist || {};
  const {state, gender, phone, address, city} = surveyResponse || {};
  // Note: Now we are storing the label so, need value here
  const {value: stateValue} = USState.find(({label}) => label === state) || {};

  useEffect(() => {
    getSurveyPostCodeQueStep().then((data: string | null) => {
      setPostCodeDependentQue(JSON.parse(data ?? '[]'));
    });
  }, []);

  const defaultValues =
    RenderLucidQuestionsInitialValue(country || '') || undefined;
  const methods = useForm<LucidFormType>({
    mode: 'all',
    defaultValues,
  });

  const {handleSubmit, setValue, getValues} = methods;

  const [updatePanelist, {loading}] = useUpdatePanelistMutation({
    onError({message}) {
      Alert.alert(message || '');
    },

    onCompleted() {},
  });

  const [createSignupSurveyResponse, {loading: createSurveyResponseLoading}] =
    useCreateSignupSurveyResponsesMutation({
      onError({message}) {
        Alert.alert(message || '');
      },

      onCompleted() {},
    });

  const onSubmit = async (data: LucidFormType) => {
    try {
      if (currentPage < Math.ceil(totalQuestions / questionsPerPage) - 1) {
        setCurrentPage(currentPage + 1);
        scrollViewRef?.current?.scrollTo({y: 0, animated: true});
      } else {
        const surveyResponseData = {...data};

        const surveyResArray = Object.keys(surveyResponseData)?.map(
          question => ({
            question,
            answer: surveyResponseData[question]?.toString() || '',
          }),
        );

        if (country === UNITED_STATES) {
          const ZipCodeInput = zipCode?.split(' ')[0];
          const res = await axiosClient.get(
            `/user/getVerifiedUSAZipCodeData?zipCode=${ZipCodeInput}`,
          );
          const responseData = await res.data;
          const {response, validZipCodeData} = responseData;
          if (response.status === 200 && validZipCodeData) {
            const {state: stateVal, region, division} = validZipCodeData;
            const dependentFields = [
              {question: 'What is your state?', answer: stateVal},
              {question: 'What is your Division?', answer: division},
              {question: 'What is your REGION?', answer: region},
            ];
            surveyResArray.push(...dependentFields);
          }
        }
        if (country === UNITED_KINGDOM) {
          const postcodeQueIndex = surveyResArray.findIndex(
            surveyQue =>
              surveyQue.question ===
              'Please enter the first half of your postcode below',
          );
          surveyResArray.splice(
            +postcodeQueIndex + 1,
            0,
            ...postCodeDependentQue,
          );
        }

        await Promise.all([
          updatePanelist({
            variables: {
              updatePanelistInput: {
                id: id || '',
                lucidProfileCompleted: true,
                city,
                phone,
                gender: gender as UserGender,
                state: stateValue,
                address,
                // mobileCountryCode:
                //   mobileNumberVerifyResponse?.mobileCountryCode,
                // mobileNetworkCode:
                //   mobileNumberVerifyResponse?.mobileNetworkCode,
                // phoneNumberType: mobileNumberVerifyResponse?.phoneNumberType,
                // carrierName: mobileNumberVerifyResponse?.carrierName,
              },
            },
          }),

          createSignupSurveyResponse({
            variables: {
              createSignupSurveyResponses: {
                panelistId: id || '',
                responses: surveyResArray,
              },
            },
          }),
        ]);
        if (currentPanelist) {
          setCurrentPanelist({...currentPanelist, lucidProfileCompleted: true});
          Alert.alert('Profile Updated Successfully.');
          setStep((step: number) => {
            setSurveyStep(String(step + 1));
            return step + 1;
          });

          navigation.navigate(RootScreenEnum.DASHBOARD_SCREEN);
          await removeSurveyResponse();
          await refreshPanelist();
        }
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const isLoading = loading || createSurveyResponseLoading;

  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 5;
  const QuestionData = RenderQuestion(country || '');
  const startIndex = currentPage * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const questionsToDisplay = QuestionData.slice(startIndex, endIndex);
  const totalQuestions = RenderQuestion(country || '').length;

  const handlePreviousQuestion = () => {
    setCurrentPage(currentPage - 1);
  };

  const onPreviousStep = () => {
    if (surveyResponse) {
      const data = getValues();
      const responses: CustomCreateBulkSignupSurveyResponseInput[] =
        Object.keys(data)?.map(question => ({
          question,
          answer: data[question],
        }));

      setSurveyResponseLocalStorage(
        JSON.stringify({...(surveyResponse || {}), responses}),
      );
      setPostCodeDependentQueLocalStorage(JSON.stringify(postCodeDependentQue));
      setSurveyResponse({...(surveyResponse || {}), responses});
    }

    setStep((step: number) => {
      setSurveyStep(String(step - 1));
      return step - 1;
    });
  };

  useEffect(() => {
    const {responses} = surveyResponse || {};
    responses?.map(({question, answer}) => {
      return setValue(question, answer);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValue, step]);

  const BackStepHandler = () => {
    if (currentPage === 0) {
      onPreviousStep();
    } else {
      handlePreviousQuestion();
    }
  };

  return (
    <View style={styles.container}>
      <CustomOnboardingHeader
        title="Lucid Survey"
        handleBack={BackStepHandler}
      />
      <View style={styles.contentContainer}>
        <ScrollView ref={scrollViewRef} style={styles.scrollView}>
          <View style={styles.formContainer}>
            <FormProvider {...methods}>
              {questionsToDisplay.map(questionItem => (
                <Question
                  key={questionItem.questionId}
                  questionItem={questionItem}
                  setPostCodeDependentQue={setPostCodeDependentQue}
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
};

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

export default LucidSurveyScreen;
