import React, { FC, useContext } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { NavigationProp, RouteProp, useRoute } from '@react-navigation/native';
import { RootParamList } from '../App';
import { ViewProps } from 'react-native/types';
import { FormProvider, useForm } from 'react-hook-form';
import { useResetPasswordMutation, useVerifyPanelistEmailAndSetPasswordMutation } from '../generated';
import { Toast } from '../contexts/ToastContext';
import {
  FORBIDDEN_EXCEPTION, NOT_FOUND_EMAIL_MESSAGE, RESET_PASSWORD_SUCCESS,
  RootScreenEnum, USER_ALREADY_EXIST, WRONG_EMAIL_OR_PASSWORD,
} from '../constants';
import { AuthContext } from '../contexts/AuthContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { updatePasswordSchema } from '../utils/yupSchema';
import { UpdatePasswordInput } from '../screens/DashboardScreens/ProfileScreens/UpdatePasswordInfo';


interface Props extends ViewProps {
  navigation: NavigationProp<RootParamList>;
  mode: "Set Password" | "Reset Password"
}

const ResetPasswordComponent: FC<Props> = ({ navigation, mode }): JSX.Element => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const route = useRoute<RouteProp<RootParamList, RootScreenEnum.RESET_PASSWORD_SCREEN>>();
  const { params } = route || {};
  const { token = "" } = params || {}

  const methods = useForm<UpdatePasswordInput>({
    mode: 'all',
    resolver: yupResolver(updatePasswordSchema),
    defaultValues: {
      repeatPassword: '',
      password: '',
    },
  });

  const { handleSubmit, reset } = methods;

  const [resetPassword, {loading: resetPasswordLoading}] =
    useResetPasswordMutation({
      onError({message}) {
        if (message.toLowerCase() === FORBIDDEN_EXCEPTION)
          return Toast.error('Reset password failed');
      },

      onCompleted(data) {
        if (data) {
          const {
            resetPassword: {response},
          } = data;

          if (response) {
            const {status} = response;

            if (status === 404) {
              setIsLoggedIn(false);
              return Toast.error(WRONG_EMAIL_OR_PASSWORD);
            }

            if (status === 200) {
              Toast.success(RESET_PASSWORD_SUCCESS);
              reset();
              navigation.navigate(RootScreenEnum.LOGIN_SCREEN);
            }
          }
        }
      },
    });

  const [verifyEmailAndSetPassword, {loading: setPasswordLoading}] =
    useVerifyPanelistEmailAndSetPasswordMutation({
      onError({message}) {
        if (message.toLowerCase() === FORBIDDEN_EXCEPTION)
          return Toast.error(USER_ALREADY_EXIST);
      },

      onCompleted(data) {
        if (data) {
          const {
            verifyPanelistEmailAndSetPassword: {response},
          } = data;

          if (response) {
            const {status} = response;

            if (status === 404) {
              return Toast.error(NOT_FOUND_EMAIL_MESSAGE);
            }

            if (status === 200) {
              Toast.success('Password set successfully');
              navigation.navigate(RootScreenEnum.LOGIN_SCREEN);
            }
          }
        }
      },
    });

  const onSubmit = async (data: UpdatePasswordInput) => {
    const {password} = data;

    if (mode === 'Set Password')
      await verifyEmailAndSetPassword({
        variables: {
          verifyPanelistEmailAndSetPasswordInput: {
            password,
            token,
          },
        },
      });

    if (mode === 'Reset Password')
      await resetPassword({
        variables: {
          resetPassword: {
            token,
            password,
          },
        },
      });
  };

  const loading = resetPasswordLoading || setPasswordLoading;

  return (
    <Background>
      <Logo />

      <FormProvider {...methods}>
        <TextInput
          label="Password"
          name="password"
          returnKeyType="done"
          secureTextEntry
        />

        <TextInput
          label="Confirm Password"
          name="repeatPassword"
          returnKeyType="done"
          secureTextEntry
        />

        <Button
          mode="contained"
          disabled={loading}
          onPress={handleSubmit(onSubmit)}
          style={{marginTop: 16}}
          isLoading={loading}>
          Submit
        </Button>
      </FormProvider>
    </Background>
  );
};

export default ResetPasswordComponent;
