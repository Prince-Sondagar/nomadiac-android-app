import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  ViewProps,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import TextInput from '../components/TextInput';
import {NavigationProp} from '@react-navigation/native';
import {RootParamList} from '../App';
import Loader from '../components/common/Loader';
import API from '../utils/API';
import {MD3Theme} from 'react-native-paper';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import Button from '../components/Button';
import {FormProvider, useForm} from 'react-hook-form';
import {
  RegisterPanelistMobileInput,
  useCreateMobilePanelistMutation,
} from '../generated';
import {yupResolver} from '@hookform/resolvers/yup';
import {signupValidationSchema} from '../utils/yupSchema';
import {ThemeContext} from '../contexts/ThemeContext';
import {registerMobilePanelUserHandler} from '../utils/surveyHandler';
import {Toast} from '../contexts/ToastContext';
import DateTimePicker from '../components/DateTimePicker';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CountrySpellAdjustment} from '../utils';
import NotEligibleRespondent from '../components/NotEligibleRespondent';
import {RootScreenEnum} from '../constants';

interface Props extends ViewProps {
  navigation: NavigationProp<RootParamList>;
}

function SignupScreen({navigation}: Props) {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  const [country, setCountry] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const methods = useForm<RegisterPanelistMobileInput>({
    mode: 'all',
    resolver: yupResolver(signupValidationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      dob: null,
      zipCode: '',
      email: '',
    },
  });

  const {handleSubmit, getValues, reset} = methods;
  const [registerMobileUser, {loading: loginRegisterUser}] =
    useCreateMobilePanelistMutation({
      onError(error) {
        console.log('error', error);
        Toast.error(error.message);
      },
      onCompleted({createMobilePanelist}) {
        if (createMobilePanelist) {
          const {response} = createMobilePanelist;
          if (response) {
            navigation.navigate(RootScreenEnum.THANKS_DETAILS_SCREEN);
            reset();
          } else Toast.error('User not Created Successfully');
        }
      },
    });

  const getUserValidOrNot = async () => {
    try {
      setIsLoading(true);
      const response = await API.get('/survey/verifyCountry');
      const {data} = response || {};
      const {country, response: customResponse} = data || {};
      const {status} = customResponse || {};
      if (status === 200) {
        setCountry(CountrySpellAdjustment(String(country).toLowerCase()));
        setSuccess(true);
        setIsLoading(false);
      }
    } catch (error) {
      Toast.error('Error while fetch country');
      setSuccess(false);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserValidOrNot();
  }, []);

  const handleRegisterUser = async (fromData: RegisterPanelistMobileInput) => {
    if (!country) {
      Toast.error('Country not found');
      setSuccess(false);
    } else {
      await registerMobileUser({
        variables: registerMobilePanelUserHandler({...fromData, country}),
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <Loader />
        </View>
      ) : (
        <>
          {success ? (
            <KeyboardAwareScrollView
              keyboardShouldPersistTaps="always"
              contentContainerStyle={styles.scrollContainer}>
              <Background>
                <BackButton goBack={navigation.goBack} />
                <Logo />
                {loginRegisterUser && <Loader />}
                <FormProvider {...methods}>
                  <TextInput
                    label="First Name"
                    name="firstName"
                    returnKeyType="next"
                  />
                  <TextInput
                    label="Last Name"
                    name="lastName"
                    returnKeyType="next"
                  />
                  <TextInput label="Email" name="email" returnKeyType="next" />
                  <DateTimePicker
                    label="Date of Birth"
                    value={getValues('dob')}
                    name="dob"
                    locale={'en'}
                  />
                  <TextInput
                    label="Zip Code"
                    name="zipCode"
                    returnKeyType="next"
                  />
                  <Button
                    mode="contained"
                    onPress={handleSubmit(handleRegisterUser)}
                    disabled={loginRegisterUser}
                    isLoading={loginRegisterUser}>
                    Submit
                  </Button>
                  <View style={styles.row}>
                    <Text style={styles.bottomTitle}>
                      Already have an account?{' '}
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate(RootScreenEnum.LOGIN_SCREEN)
                      }>
                      <Text style={styles.link}>Sign In</Text>
                    </TouchableOpacity>
                  </View>
                </FormProvider>
              </Background>
            </KeyboardAwareScrollView>
          ) : (
            <NotEligibleRespondent />
          )}
        </>
      )}
    </SafeAreaView>
  );
}

export default SignupScreen;

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
    },
    safeArea: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24,
    },
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    forgot: {
      fontSize: 13,
      color: theme.colors.secondary,
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
    bottomTitle: {
      color: theme.colors.onSurface,
    },
    loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
  });
