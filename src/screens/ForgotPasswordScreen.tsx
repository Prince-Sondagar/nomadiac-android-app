import React, {useContext} from 'react';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import {NavigationProp} from '@react-navigation/native';
import {RootParamList} from '../App';
import {ViewProps} from 'react-native/types';
import {FormProvider, useForm} from 'react-hook-form';
import {useForgotPasswordMutation} from '../generated';
import {Toast} from '../contexts/ToastContext';
import {
  EMAIL_CHANGED_OR_NOT_VERIFIED_MESSAGE,
  FORBIDDEN_EXCEPTION,
  FORGET_PASSWORD_EMAIL_SENT,
  RootScreenEnum,
  WRONG_EMAIL_OR_PASSWORD,
} from '../constants';
import {AuthContext} from '../contexts/AuthContext';
import {forgetPasswordHandler} from '../utils/surveyHandler';
import {yupResolver} from '@hookform/resolvers/yup';
import {emailValidationSchema} from '../utils/yupSchema';
import * as yup from 'yup';

interface Props extends ViewProps {
  navigation: NavigationProp<RootParamList>;
}

export default function ForgotPasswordScreen({navigation}: Props) {
  const {setIsLoggedIn} = useContext(AuthContext);

  const [forgotPassword, {loading: forgetPasswordLoading}] =
    useForgotPasswordMutation({
      onError({message}) {
        if (message.toLowerCase() === FORBIDDEN_EXCEPTION) {
          return Toast.error(EMAIL_CHANGED_OR_NOT_VERIFIED_MESSAGE);
        }
      },
      onCompleted(data) {
        if (data) {
          const {
            forgotPassword: {response},
          } = data;

          if (response) {
            const {status} = response;
            setIsLoggedIn(false);

            if (status === 404) {
              return Toast.error(WRONG_EMAIL_OR_PASSWORD);
            }

            if (status === 200) {
              Toast.success(FORGET_PASSWORD_EMAIL_SENT);
              navigation.navigate(RootScreenEnum.LOGIN_SCREEN);
            }
          }
        }
      },
    });

  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(yup.object(emailValidationSchema)),
    defaultValues: {email: ''},
  });
  const {handleSubmit} = methods;

  const onsubmit = async (data: {email: string}) => {
    const {email} = data;
    await forgotPassword({variables: forgetPasswordHandler(email as string)});
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />

      <FormProvider {...methods}>
        <TextInput
          label="Email"
          name="email"
          returnKeyType="done"
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <Button
          mode="contained"
          disabled={forgetPasswordLoading}
          onPress={handleSubmit(onsubmit)}
          style={{marginTop: 16}}
          isLoading={forgetPasswordLoading}>
          Submit
        </Button>
      </FormProvider>
    </Background>
  );
}
