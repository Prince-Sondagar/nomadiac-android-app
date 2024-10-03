import React, {useContext} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {ThemeContext} from '../contexts/ThemeContext';

interface Props {
  goBack(): void;
}

export default function BackButton({goBack}: Props) {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles();
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <IconButton
        icon={'arrow-left'}
        iconColor={theme.colors.onSurface}
        size={24}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const useStyles = () =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      top: 10 + getStatusBarHeight(),
      left: 4,
    },
    image: {
      width: 24,
      height: 24,
      justifyContent: 'flex-start',
      display: 'flex',
      marginHorizontal: 0,
    },
  });
