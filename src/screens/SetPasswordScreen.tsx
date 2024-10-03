import React, { FC } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { RootParamList } from '../App';
import { ViewProps } from 'react-native/types';
import ResetPasswordComponent from '../components/ResetPassword';

interface Props extends ViewProps {
  navigation: NavigationProp<RootParamList>;
}

const SetPasswordScreen: FC<Props> = ({ navigation }) => <ResetPasswordComponent mode='Set Password' navigation={navigation} />

export default SetPasswordScreen