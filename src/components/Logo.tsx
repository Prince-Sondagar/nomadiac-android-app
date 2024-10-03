import React, {useContext} from 'react';
import {Image, StyleSheet} from 'react-native';
import {ThemeContext} from '../contexts/ThemeContext';

export default function Logo() {
  const styles = useStyles();
  const {mode} = useContext(ThemeContext);
  return (
    <Image
      source={
        mode === 'light'
          ? require('../assets/logo.png')
          : require('../assets/logo-white.png')
      }
      style={styles.image}
    />
  );
}

const useStyles = () =>
  StyleSheet.create({
    image: {
      width: 110,
      height: 110,
      marginBottom: 6,
    },
  });
