import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {ThemeContext} from '../contexts/ThemeContext';
import Logo from './Logo';
import { RootScreenEnum } from '../constants';
import { INavigation } from '../interfaceTypes';
import { useNavigation } from '@react-navigation/native';
import Button from './Button';

const NotEligibleRespondent = () => {
  const {theme} = useContext(ThemeContext);
  const navigation: INavigation = useNavigation();
  const styles = useStyles(theme);
  const clickHandle = async () => {
    navigation.navigate(RootScreenEnum.LOGIN_SCREEN);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.step1Wrapper}>
        <View style={styles.step1Panel}>
          <View style={styles.centered}>
            <Logo />
          </View>
          <Text style={styles.cardTitle}>Thank You!</Text>
          <Text style={styles.cardText}>
            We appreciate your interest in joining our panel. Unfortunately, we
            are currently looking for a different respondent type.
          </Text>
          <Button mode="contained" onPress={clickHandle} style={styles.button}>
            Go back to Login
          </Button>
        </View>
      </View>
    </View>
  );
};
export default NotEligibleRespondent;

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    mainContainer: {
      height: '100%',
      backgroundColor: theme.colors.background,
    },
    cardTitle: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 15,
      textAlign: 'center',
      color: theme.colors.onSurface,
    },
    cardText: {
      marginBottom: 10,
      alignItems: 'center',
      textAlign: 'center',
      color: theme.colors.onSurface,
    },
    button: {
      marginTop: 20,
    },
    step1Wrapper: {
      overflow: 'visible',
      marginTop: '50%',
    },
    step1Panel: {
      backgroundColor: theme.colors.background,
      elevation: 2,
      borderRadius: 10,
      padding: 15,
      margin: 20,
    },
    centered: {
      alignItems: 'center',
    },
  });
