import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ThemeContext} from '../contexts/ThemeContext';

const NoDataFoundComponent = () => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);

  return (
    <View style={styles.componentWrapper}>
      <View style={{alignItems: 'center'}}>
        <Icon name="folder" size={120} color="#E3EEFA" />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.nofoundText}>No data found</Text>
      </View>
    </View>
  );
};

export default NoDataFoundComponent;

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    componentWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    nofoundText: {
      color: theme.colors.secondary,
    },
  });
