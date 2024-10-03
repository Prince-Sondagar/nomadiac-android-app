import React, {useContext} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MD3Theme, Text} from 'react-native-paper';
import {AuthContext} from '../../contexts/AuthContext';
import {ThemeContext} from '../../contexts/ThemeContext';

type HeaderProps = {
  title: string;
  handleBack?: () => void;
};

const CustomOnboardingHeader = ({title, handleBack}: HeaderProps) => {
  const {onHandleLogout} = useContext(AuthContext);
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          {handleBack && (
            <TouchableOpacity onPress={handleBack}>
              <MaterialCommunityIcons
                name="arrow-left"
                color={theme.colors.onSurface}
                size={26}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, styles.centerTitle]}>{title}</Text>
        </View>
        <TouchableOpacity onPress={onHandleLogout}>
          <MaterialCommunityIcons
            name="logout"
            color={theme.colors.onSurface}
            size={26}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.secondary,
      backgroundColor: theme.colors.background,
    },
    iconContainer: {
      height: 26,
      width: 26,
    },
    titleContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    centerTitle: {
      textAlign: 'left',
    },
  });

export default CustomOnboardingHeader;
