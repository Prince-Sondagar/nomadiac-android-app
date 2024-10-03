// package block
import React, {useContext} from 'react';
import {View, Text, StyleSheet, ViewProps} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
// custom values & component block
import {INavigation} from '../../../interfaceTypes';
import {ThemeContext} from '../../../contexts/ThemeContext';
import CustomHeader from '../../../components/common/CustomHeader';
import {RootScreenEnum} from '../../../constants';

interface LucidSurveyProps extends ViewProps {
  isDrawerSettingItem: boolean;
  navigation: INavigation;
}

const ExtraEarningOpportunities = ({
  isDrawerSettingItem,
  navigation,
}: LucidSurveyProps) => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  return (
    <>
      {isDrawerSettingItem && (
        <CustomHeader
          title="Lucid Survey"
          navigation={navigation}
          isHome={false}
        />
      )}
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Text style={styles.sectionHeading}>Extra Earning Opportunities</Text>
        </View>
        <View key={1} style={styles.card}>
          <View style={styles.internalCardWrapper}>
            <View style={styles.internalCardComponent}>
              <Text style={styles.internalCardTitle}>Points</Text>
              <Text style={styles.tableCell1}>{100}</Text>
            </View>
            <View style={styles.internalCardComponent}>
              <Text style={styles.internalCardTitle}> Survey Type</Text>
              <Text style={styles.tableCell2}>Additional Information</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate(
                  RootScreenEnum.ADDITIONAL_INFORMATION_SCREEN,
                )
              }>
              <Text style={styles.buttonTitle}>TAKE SURVEY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 10,
    },
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      borderTopColor: theme.colors.primary,
      borderBottomColor: '#FFFFFF',
      borderLeftColor: '#FFFFFF',
      borderRightColor: '#FFFFFF',
      borderWidth: 5,
      padding: 20,
      shadowColor: '#000000',
      margin: 10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 4,
    },
    internalCardWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    internalCardComponent: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    internalCardTitle: {fontWeight: '900', color: 'black'},
    row: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    columnHeader: {
      flex: 1,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    column: {
      justifyContent: 'space-around',
      textAlign: 'right',
    },
    loaderContainer: {
      marginTop: '50%',
    },
    noFoundComponentWrapper: {
      justifyContent: 'center',
      paddingBottom: 12,
      paddingTop: 5,
      marginTop: '50%',
    },
    button: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 10,
      borderRadius: 20,
      backgroundColor: '#FFFFFF',
      borderTopColor: theme.colors.primary,
      borderBottomColor: theme.colors.primary,
      borderLeftColor: theme.colors.primary,
      borderRightColor: theme.colors.primary,
      borderWidth: 2,
      padding: 10,
      shadowColor: '#000000',
    },
    buttonTitle: {
      color: theme.colors.primary,
      fontWeight: 'bold',
    },
    sectionHeading: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 15,
      borderBottomWidth: 2,
      borderColor: '#E5E5E5',
      paddingBottom: 2,
    },
    headerSection: {
      padding: 15,
      paddingBottom: 5,
    },
    tableCell1: {
      paddingTop: 8,
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
    },
    tableCell2: {
      paddingTop: 8,
      color: 'black',
    },
  });

export default ExtraEarningOpportunities;
