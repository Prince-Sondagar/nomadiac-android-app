import React, {useContext} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MD3Theme, Text} from 'react-native-paper';
import {AuthContext} from '../../contexts/AuthContext';
import {ThemeContext} from '../../contexts/ThemeContext';
import {INavigation} from '../../interfaceTypes';

type customHeaderProps = {
  title: string;
  isHome?: boolean;
  navigation: INavigation;
};

const CustomHeader = ({title, isHome, navigation}: customHeaderProps) => {
  const {onHandleLogout} = useContext(AuthContext);
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);

  const handleToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={isHome ? handleToggleDrawer : handleGoBack}
          style={styles.iconContainer}>
          {isHome !== undefined ? (
            isHome ? (
              <MaterialCommunityIcons
                name="menu"
                color={theme.colors.onSurface}
                size={26}
              />
            ) : (
              <MaterialCommunityIcons
                name="arrow-left"
                color={theme.colors.onSurface}
                size={26}
              />
            )
          ) : (
            ''
          )}
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, !isHome && styles.centerTitle]}>
            {title}
          </Text>
        </View>
        {(isHome || isHome === undefined) && (
          <TouchableOpacity
            onPress={onHandleLogout}
            style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="logout"
              color={theme.colors.onSurface}
              size={26}
            />
          </TouchableOpacity>
        )}
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
      marginRight: 16,
    },
    titleContainer: {
      flex: 1,
      alignItems: 'center',
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

export default CustomHeader;
