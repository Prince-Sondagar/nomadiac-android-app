import React, {useContext} from 'react';
import {ImageBackground, StyleSheet, ViewProps, View} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {ThemeContext} from '../contexts/ThemeContext';

export default function Background({children}: ViewProps) {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);

  return (
    <ImageBackground
      source={require('../assets/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}>
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
}

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
      backgroundColor: theme.colors.surface,
    },
    container: {
      flex: 1,
      padding: 20,
      width: '100%',
      maxWidth: 340,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
