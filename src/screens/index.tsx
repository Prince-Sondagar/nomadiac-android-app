import React from 'react';
import {useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import StartScreen from './StartScreen';
import SignupScreen from './SignupScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import ResetPasswordScreen from './ResetPasswordScreen';
import {RootScreenEnum} from '../constants';
import OnboardingScreen from './OnboardingScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import DashboardScreen from './DashboardScreen';
import SetPasswordScreen from './SetPasswordScreen';
import SurveyResponseScreen from './SurveyResponseScreen';
import ThanksDetail from './OnboardingScreens/ThanksDetail';
import WebviewScreen from './WebviewScreen';
export {default as StartScreen} from './StartScreen';
export {default as LoginScreen} from './LoginScreen';
export {default as SignupScreen} from './SignupScreen';
export {default as ForgotPasswordScreen} from './ForgotPasswordScreen';
export {default as ResetPasswordScreen} from './ResetPasswordScreen';

const Stack = createNativeStackNavigator();

export const AuthFlowScreen = [
  {
    name: RootScreenEnum.START_SCREEN,
    component: StartScreen,
  },
  {
    name: RootScreenEnum.LOGIN_SCREEN,
    component: LoginScreen,
  },
  {
    name: RootScreenEnum.SURVEY_RESPONSE_SCREEN,
    component: SurveyResponseScreen,
  },
  {
    name: RootScreenEnum.SIGNUP_SCREEN,
    component: SignupScreen,
  },
  {
    name: RootScreenEnum.FORGOT_PASSWORD_SCREEN,
    component: ForgotPasswordScreen,
  },
  {
    name: RootScreenEnum.RESET_PASSWORD_SCREEN,
    component: ResetPasswordScreen,
  },
  {
    name: RootScreenEnum.SET_PASSWORD_SCREEN,
    component: SetPasswordScreen,
  },
  {
    name: RootScreenEnum.THANKS_DETAILS_SCREEN,
    component: ThanksDetail,
  },
];

export const AppFlowScreen = [
  {
    name: RootScreenEnum.DASHBOARD_SCREEN,
    component: DashboardScreen,
  },
  {
    name: RootScreenEnum.ONBOARDING_SCREEN,
    component: OnboardingScreen,
  },
  {
    name: RootScreenEnum.WEBVIEW_SCREEN,
    component: WebviewScreen,
  },
];

function AppScreens() {
  const {isLoggedIn} = useContext(AuthContext);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Stack.Navigator
        initialRouteName={
          !isLoggedIn
            ? RootScreenEnum.START_SCREEN
            : RootScreenEnum.DASHBOARD_SCREEN
        }
        screenOptions={{
          headerShown: false,
        }}>
        {!isLoggedIn
          ? AuthFlowScreen.map(({name, component}, index) => (
              <Stack.Screen name={name} component={component} key={index} />
            ))
          : AppFlowScreen.map(({name, component}, index) => (
              <Stack.Screen name={name} component={component} key={index} />
            ))}
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
}

export default AppScreens;
