import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ThemeContext from './contexts/ThemeContext';
import AppScreens from './screens';
import AuthProvider from './contexts/AuthContext';
import {ApolloProvider} from '@apollo/client';
import client from './apollo';
import ToastProvider from './contexts/ToastContext';
import {RootScreenEnum} from './constants';

const linking = {
  prefixes: ['nomadicapp://'],
  config: {
    screens: {
      ResetPasswordScreen: {
        path: 'ResetPasswordScreen/:token',
      },
      SetPasswordScreen: {
        path: 'SetPasswordScreen/:token',
      },
    },
  },
};

export type RootParamList = {
  SplashScreen?: {};
  [RootScreenEnum.START_SCREEN]?: {};
  [RootScreenEnum.LOGIN_SCREEN]?: {};
  [RootScreenEnum.FORGOT_PASSWORD_SCREEN]?: {};
  [RootScreenEnum.SIGNUP_SCREEN]?: {};
  [RootScreenEnum.DASHBOARD_SCREEN]?: {};
  [RootScreenEnum.POINT_HISTORY_SCREEN]?: {};
  [RootScreenEnum.UPDATE_PASSWORD_SCREEN]?: {};
  [RootScreenEnum.PREFERENCE_SCREEN]?: {};
  [RootScreenEnum.EDIT_PROFILE_SCREEN]?: {};
  [RootScreenEnum.RESET_PASSWORD_SCREEN]?: {token: string};
  [RootScreenEnum.SET_PASSWORD_SCREEN]: {token: string};
  [RootScreenEnum.PRIVACY_POLICY_SCREEN]?: {};
  [RootScreenEnum.ONBOARDING_SCREEN]?: {};
  [RootScreenEnum.ADDITIONAL_INFORMATION_SCREEN]?: {};
  [RootScreenEnum.WEBVIEW_SCREEN]?: {url: string};
  [RootScreenEnum.SURVEY_RESPONSE_SCREEN]: {status: string};
  [RootScreenEnum.THANKS_DETAILS_SCREEN]?: {};
};

function App(): JSX.Element {
  return (
    <ThemeContext>
      <ToastProvider>
        <ApolloProvider client={client}>
          <NavigationContainer linking={linking}>
            <AuthProvider>
              <StatusBar />
              <AppScreens />
            </AuthProvider>
          </NavigationContainer>
        </ApolloProvider>
      </ToastProvider>
    </ThemeContext>
  );
}

export default App;
