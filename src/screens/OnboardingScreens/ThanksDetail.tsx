import React, {FC, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import {RootScreenEnum} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {MD3Theme} from 'react-native-paper';
import {ThemeContext} from '../../contexts/ThemeContext';
import {INavigation} from '../../interfaceTypes';

const ThanksDetail: FC = () => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  const navigation: INavigation = useNavigation();

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
            An email with the verification link has been sent to your registered
            email address. To complete the sign-up process, please check your
            email and click on the verification link. In case you don't see the
            email in your inbox, please don't forget to check your spam and junk
            folders as well.
          </Text>
          <Button mode="contained" onPress={clickHandle} style={styles.button}>
            Go back to Login
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ThanksDetail;

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
