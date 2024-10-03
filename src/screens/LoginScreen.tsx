import React, {useContext} from 'react';
import {TouchableOpacity, StyleSheet, View, ViewProps} from 'react-native';
import {MD3Theme, Text} from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import {NavigationProp} from '@react-navigation/native';
import {RootParamList} from '../App';
import {ThemeContext} from '../contexts/ThemeContext';
import {FormProvider, useForm} from 'react-hook-form';
import {LoginUserInput, UserRole, useLoginMutation} from '../generated';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginValidationSchema} from '../utils/yupSchema';
import {
  EMAIL_CHANGED_OR_NOT_VERIFIED_MESSAGE,
  FORBIDDEN_EXCEPTION,
  GRAPHQL_QUERY_POLICY,
  RootScreenEnum,
  WRONG_EMAIL_OR_PASSWORD,
} from '../constants';
import {Toast} from '../contexts/ToastContext';
import {setToken} from '../utils';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from '../contexts/AuthContext';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface Props extends ViewProps {
  navigation: NavigationProp<RootParamList>;
}

export default function LoginScreen({navigation}: Props) {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  const methods = useForm<LoginUserInput>({
    mode: 'all',
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const {handleSubmit, reset} = methods;
  const {setIsLoggedIn} = useContext(AuthContext);

  const [login, {loading: loginLoading}] = useLoginMutation({
    ...(GRAPHQL_QUERY_POLICY as any),
    onError({message}) {
      if (message.toLowerCase() === FORBIDDEN_EXCEPTION)
        return Toast.error(EMAIL_CHANGED_OR_NOT_VERIFIED_MESSAGE);
    },

    onCompleted({login}) {
      if (login) {
        const {response, access_token, roles} = login;
        const checkPanelist = roles?.find(
          qs => qs?.role === UserRole?.Panelist,
        );
        if (response) {
          const {status} = response;
          if (status === 404) {
            return Toast.error(WRONG_EMAIL_OR_PASSWORD);
          }
          if (status === 200 && access_token) {
            if (!checkPanelist) {
              return Toast.toast('Only Panelist Can Access this Portal.');
            }
            setToken(access_token);
            reset();
            setIsLoggedIn(true);
          }
        }
      }
    },
  });

  const onLoginPressed = (data: LoginUserInput) => {
    login({variables: {loginUser: data}});
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={styles.scrollContainer}>
        <Background>
          <BackButton goBack={navigation.goBack} />
          <Logo />
          <FormProvider {...methods}>
            <TextInput
              label="Email"
              name="email"
              returnKeyType="next"
              autoCapitalize="none"
              textContentType="emailAddress"
              keyboardType="email-address"
            />
            <TextInput
              label="Password"
              name="password"
              returnKeyType="done"
              secureTextEntry
            />
            <View style={styles.forgotPassword}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(RootScreenEnum.FORGOT_PASSWORD_SCREEN)
                }>
                <Text style={styles.forgot}>Forgot your password?</Text>
              </TouchableOpacity>
            </View>
            <Button
              mode="contained"
              onPress={handleSubmit(onLoginPressed)}
              disabled={loginLoading}
              isLoading={loginLoading}>
              login
            </Button>
            <View style={styles.row}>
              <Text>Don’t have an account? </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(RootScreenEnum.SIGNUP_SCREEN)
                }>
                <Text style={styles.link}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </FormProvider>
        </Background>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    scrollContainer: {
      flexGrow: 1,
    },
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 8,
    },
    row: {
      flexDirection: 'row',
      marginTop: 3,
    },
    forgot: {
      fontSize: 13,
      color: theme.colors.secondary,
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
  });
