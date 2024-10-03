// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useEffect, useContext, useRef} from 'react';
import {View, StyleSheet, ViewProps, Animated} from 'react-native';
import {ThemeContext} from '../contexts/ThemeContext';
import {MD3Theme} from 'react-native-paper';
import {CommonActions, NavigationProp} from '@react-navigation/native';
import {RootParamList} from '../App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AUTH_TOKEN, RootScreenEnum} from '../constants';

interface Props extends ViewProps {
  navigation: NavigationProp<RootParamList>;
}

function SplashScreen({navigation}: Props) {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // 1 second
      useNativeDriver: true,
    }).start(() => {
      setTimeout(fadeOut, 2000); // Wait for 2 seconds and start fading out
    });
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000, // 1 second
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      const tokens = await AsyncStorage.getItem(AUTH_TOKEN);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name:
                tokens == null
                  ? RootScreenEnum.START_SCREEN
                  : RootScreenEnum.DASHBOARD_SCREEN,
            },
          ],
        }),
      );
    }, 5000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./../assets/android/logo.png')}
        style={[styles.splashImage, {opacity: fadeAnim}]}
      />
    </View>
  );
}

export default SplashScreen;

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    splashImage: {
      width: '90%',
      resizeMode: 'contain',
      margin: 30,
    },
  });
