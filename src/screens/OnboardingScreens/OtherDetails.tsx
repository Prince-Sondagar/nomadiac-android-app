import React, {FC, useContext, useState} from 'react';
import {
  INavigation,
  LucidFormType,
  OtherDetailsPropsType,
} from '../../interfaceTypes';
import {Alert, View, StyleSheet} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {
  OtherDetailsQuestionInitialValue,
  QuestionData,
} from '../../utils/questionData';
import {
  removeSurveyResponse,
  setSurveyResponseLocalStorage,
  setSurveyStep,
} from '../../utils';
import QuestionComponent from '../../components/QuestionComponent';
import {AuthContext} from '../../contexts/AuthContext';
import {
  UserGender,
  useCreateSignupSurveyResponsesMutation,
  useUpdatePanelistMutation,
} from '../../generated';
import Button from '../../components/Button';
import Loader from '../../components/common/Loader';
import {ThemeContext} from '../../contexts/ThemeContext';
import CustomOnboardingHeader from '../../components/common/CustomOnboardingHeader';
import {FormProvider, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {RootScreenEnum} from '../../constants';

const OtherDetails: FC<OtherDetailsPropsType> = ({
  surveyResponse,
  setStep,
  setSurveyResponse,
  // mobileNumberVerifyResponse,
}) => {
  const navigation: INavigation = useNavigation();
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  const [formCheck, setFormCheck] = useState<string[]>([]);
  const {responses} = surveyResponse || {};
  const {currentPanelist, setCurrentPanelist, refreshPanelist} =
    useContext(AuthContext);
  const {id} = currentPanelist || {};

  const methods = useForm<LucidFormType>({
    mode: 'all',
    defaultValues: {
      ...OtherDetailsQuestionInitialValue,
    },
  });

  const {handleSubmit, getValues} = methods;

  const onPreviousStep = () => {
    if (surveyResponse) {
      const data = getValues();
      const responses: any = Object.keys(data)?.map(question => ({
        question: question,
        answer: data[question],
      }));

      setSurveyResponseLocalStorage(
        JSON.stringify({...(surveyResponse || {}), responses}),
      );
      setSurveyResponse({...(surveyResponse || {}), responses});
    }

    setStep((step: number) => {
      setSurveyStep(String(step - 1));
      return step - 1;
    });
  };
  const [updatePanelist] = useUpdatePanelistMutation({
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
      onCompleted(data) {
        const {
          createSignupSurveyResponses: {panelist},
        } = data;
        const {signupSurveyResponse} = panelist || {};
        if (currentPanelist) {
          setCurrentPanelist({
            ...currentPanelist,
            signupSurveyResponse: signupSurveyResponse || [],
          });
        }
        Alert.alert('Profile Updated Successfully.');
      },
    });

  const handleProfileUpdate = async () => {
    if (surveyResponse && id) {
      setSurveyResponseLocalStorage(JSON.stringify(surveyResponse));
      const {city, phone, gender, state} = surveyResponse || {};
      await Promise.all([
        updatePanelist({
          variables: {
            updatePanelistInput: {
              id,
              city,
              phone,
              gender: gender as UserGender,
              state: state,
              // mobileCountryCode: mobileNumberVerifyResponse?.mobileCountryCode,
              // mobileNetworkCode: mobileNumberVerifyResponse?.mobileNetworkCode,
              // phoneNumberType: mobileNumberVerifyResponse?.phoneNumberType,
              // carrierName: mobileNumberVerifyResponse?.carrierName,
            },
          },
        }),
        createSignupSurveyResponse({
          variables: {
            createSignupSurveyResponses: {
              panelistId: id || '',
              responses: (responses || [])?.map(
                ({question, options, text}) => ({
                  question,
                  answer: [...options, ...(text ? [text] : [])].toString(),
                }),
              ),
            },
          },
        }),
      ]);
      setStep((step: number) => {
        setSurveyStep(String(step + 1));
        return step + 1;
      });

      navigation.navigate(RootScreenEnum.DASHBOARD_SCREEN);
      await removeSurveyResponse();
      await refreshPanelist();
    }
  };

  const isLoading = createSurveyResponseLoading;

  const [currentPage, setCurrentPage] = useState(0);
  const QuestionPerPage = 5;
  const startIndex = currentPage * QuestionPerPage;
  const endIndex = startIndex + QuestionPerPage;
  const QuestionToDisplay = QuestionData.slice(startIndex, endIndex);

  const handleNextQuestion = () => {
    if (!responses) return false;
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousQuestion = () => {
    if (!responses) return false;
    setCurrentPage(currentPage - 1);
  };

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
        title="Fusion Survey"
        handleBack={BackStepHandler}
      />
      <ScrollView>
        <View style={styles.contentContainer}>
          <FormProvider {...methods}>
            {QuestionToDisplay.map(questionItem => (
              <QuestionComponent
                key={questionItem.code}
                question={questionItem}
                surveyResponse={surveyResponse}
                setSurveyResponse={setSurveyResponse}
                formCheck={formCheck}
                setFormCheck={setFormCheck}
                sortedQuestionList={QuestionData}
              />
            ))}
          </FormProvider>
        </View>
      </ScrollView>

      <View style={styles.buttonWrapper}>
        {endIndex < QuestionData.length ? (
          <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={handleSubmit(handleNextQuestion)}>
              Next
            </Button>
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              onPress={handleSubmit(handleProfileUpdate)}>
              {isLoading ? <Loader /> : 'Submit'}
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

export default OtherDetails;
