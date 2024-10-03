import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Button from '../components/Button';
import {ViewProps} from 'react-native/types';
import {NavigationProp} from '@react-navigation/native';
import {RootParamList} from '../App';
import {RootScreenEnum} from '../constants';

interface Props extends ViewProps {
  navigation: NavigationProp<RootParamList>;
}

export default function StartScreen({navigation}: Props) {
  return (
    <Background>
      <Logo />
      <Button
        mode="contained"
        onPress={() => navigation.navigate(RootScreenEnum.LOGIN_SCREEN)}>
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate(RootScreenEnum.SIGNUP_SCREEN)}>
        Sign Up
      </Button>
    </Background>
  );
}
