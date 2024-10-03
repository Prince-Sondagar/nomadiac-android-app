import React, {FC, useEffect, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HelperText, MD3Theme, RadioButton} from 'react-native-paper';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Controller, FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  BasicDetailPropsType,
  BasicInformationType,
  RegisterPanelistWithLucidJoiner,
} from '../../interfaceTypes';
import {
  CountryToStates,
  setSurveyResponseLocalStorage,
  setSurveyStep,
} from '../../utils';
import {createPanelistPersonalInfoSchema} from '../../utils/yupSchema';
import Button from '../../components/Button';
import Select from '../../components/Select';
import TextInput from '../../components/TextInput';
import {genderList} from '../../utils/faqConstants';
import Logo from '../../components/Logo';
import {ThemeContext} from '../../contexts/ThemeContext';
import {AuthContext} from '../../contexts/AuthContext';
import CustomOnboardingHeader from '../../components/common/CustomOnboardingHeader';
// import {useVerifyTwilioMobileNumberMutation} from '../../generated';

const BasicDetails: FC<BasicDetailPropsType> = ({
  surveyResponse,
  setSurveyResponse,
  setStep,
  step,
  setSurveyResponseFusion,
  // setMobileNumberVerifyResponse,
}) => {
  const {theme} = useContext(ThemeContext);
  const {currentPanelist} = useContext(AuthContext);
  const styles = useStyles(theme);
  const data = surveyResponse as RegisterPanelistWithLucidJoiner;
  const {city, address, gender, phone, state, responses} = data || {};
  const {country} = currentPanelist || {};

  const methods = useForm<BasicInformationType>({
    mode: 'all',
    resolver: yupResolver(createPanelistPersonalInfoSchema),
    defaultValues: {
      state: '',
      phone: '',
      city: '',
      address: '',
      gender: '',
    },
  });

  const {handleSubmit, setValue, getValues, control} = methods;

  useEffect(() => {
    setValue('city', city || '');
    setValue('address', address || '');
    setValue('state', state || '');
    setValue('phone', phone || '');
    setValue('gender', gender || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValue, step, city, address, country, gender, phone, state]);

  // const [VerifyTwilioMobileNumber] = useVerifyTwilioMobileNumberMutation({
  //   onError() {
  //     setError('phone', {
  //       type: 'manual',
  //       message: 'Invalid Mobile Number',
  //     });
  //   },

  //   onCompleted(data) {
  //     const {
  //       verifyTwilioMobileNumber: {response, verificationResponse},
  //     } = data;

  //     if (response?.status === 200 && verificationResponse) {
  //       // eslint-disable-next-line @typescript-eslint/no-shadow
  //       setMobileNumberVerifyResponse(verificationResponse);
  //       setStep((step: number) => {
  //         setSurveyStep(String(step + 1));
  //         return step + 1;
  //       });
  //     } else {
  //       setError('phone', {
  //         type: 'manual',
  //         message: 'Invalid Mobile Number',
  //       });
  //     }
  //   },
  // });

  const onSubmit = async (data: BasicInformationType) => {
    setSurveyResponse({...(surveyResponse || {}), ...data, responses});
    setSurveyResponseFusion(oldData => ({...oldData, ...data}));
    // await VerifyTwilioMobileNumber({
    //   variables: {
    //     mobileNumber: {
    //       mobileNumber: `${
    //         getTelePhoneCodeToCountry(country ?? 'United States') + data.phone
    //       }`,
    //     },
    //   },
    // });
    setStep((step: number) => {
      setSurveyStep(String(step + 1));
      return step + 1;
    });
    setSurveyResponseLocalStorage(
      JSON.stringify({...(surveyResponse || {}), ...data}),
    );
  };

  return (
    <View style={styles.mainContainer}>
      <CustomOnboardingHeader title="Basic Details" />
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.cardContainer}>
            <View style={{alignItems: 'center'}}>
              <Logo />
            </View>
            <FormProvider {...methods}>
              <Select
                name="state"
                options={CountryToStates(country || '')}
                label="Select State"
                getValue={() => getValues('state')}
                isDisabled={!country}
                hasSearch
              />

              <TextInput
                label="Town/City"
                name="city"
                returnKeyType="done"
                autoCapitalize="none"
              />
              <TextInput
                label="Phone"
                name="phone"
                returnKeyType="done"
                keyboardType="number-pad"
              />

              <View style={styles.radioGroupContainer}>
                <Text style={styles.radioGroupLabel}>What is your gender?</Text>
                <Controller
                  rules={{required: true}}
                  control={control}
                  name="gender"
                  render={({field: {onChange, value}, fieldState: {error}}) => (
                    <View>
                      <RadioButton.Group onValueChange={onChange} value={value}>
                        {genderList.map((genderItem, index: number) => {
                          const {value, label} = genderItem;
                          return (
                            <React.Fragment key={index}>
                              <TouchableOpacity
                                onPress={() => onChange(value)}
                                style={styles.radioButtonContainer}>
                                <RadioButton
                                  value={value}
                                  color="#EDBB5F"
                                  uncheckedColor="#EDBB5F"
                                />
                                <Text style={styles.radioButtonLabel}>
                                  {label}
                                </Text>
                              </TouchableOpacity>
                            </React.Fragment>
                          );
                        })}
                      </RadioButton.Group>
                      {error && (
                        <HelperText type="error">{error.message}</HelperText>
                      )}
                    </View>
                  )}
                />
              </View>

              <TextInput
                label="Address"
                multiline
                numberOfLines={4}
                name="address"
                returnKeyType="done"
                autoCapitalize="none"
              />
            </FormProvider>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnWrapper}>
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={handleSubmit(onSubmit)}>
            Next
          </Button>
        </View>
      </View>
    </View>
  );
};

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.colors.background,
      height: '100%',
    },
    contentContainer: {
      flex: 1,
      padding: 22,
    },
    cardContainer: {
      backgroundColor: theme.colors.background,
      borderRadius: 10,
      padding: 20,
      elevation: 4,
      marginTop: 10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    btnWrapper: {
      borderTopWidth: 1,
      borderTopColor: theme.colors.secondary,
      paddingHorizontal: 20,
      marginBottom: 5,
    },
    radioGroupContainer: {
      marginLeft: 1,
    },
    radioGroupLabel: {
      marginBottom: 5,
      color: theme.colors.onSurface,
    },
    radioButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    radioButtonLabel: {
      color: theme.colors.onSurface,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 3,
    },
  });
export default BasicDetails;
