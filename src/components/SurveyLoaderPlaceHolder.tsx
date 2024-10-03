import {FC, useContext, Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import Animated from 'react-native-reanimated';
import {ThemeContext} from '../contexts/ThemeContext';

const SurveyLoaderPlaceHolder: FC = (): JSX.Element => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);

  return (
    <Fragment>
      {new Array(10).fill(1).map((_, index) => {
        return (
          <View style={styles.card} key={index}>
            <View style={styles.internalCardWrapper}>
              <View style={styles.internalCardComponent}>
                <Animated.View style={styles.skeletonText} />
                <Animated.View style={styles.skeletonText} />
              </View>
              <View style={styles.internalCardComponent}>
                <Animated.View style={styles.skeletonText} />
                <Animated.View style={styles.skeletonText} />
                <View>
                  <Animated.View style={styles.skeletonText} />
                </View>
              </View>
            </View>

            <View>
              <Animated.View
                style={[styles.skeletonText, styles.skeletonButton]}
              />
            </View>
          </View>
        );
      })}
    </Fragment>
  );
};

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    card: {
      // backgroundColor: '#FFFFFF',
      backgroundColor: theme.colors.background,
      borderRadius: 8,
      borderTopColor: theme.colors.primary,
      // borderBottomColor: '#FFFFFF',
      borderBottomColor: theme.colors.background,
      borderLeftColor: theme.colors.background,
      borderRightColor: theme.colors.background,
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

    skeletonButton: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 10,
      borderRadius: 20,
      padding: 20,
    },

    interviewtimeCell: {
      fontSize: 17,
      fontWeight: 'bold',
      alignContent: 'center',
    },
    skeletonText: {
      width: '100%',
      height: 7, // 0.7rem
      marginBottom: 5, // 0.5rem
      borderRadius: 2.5, // 0.25rem
      backgroundColor: 'hsl(200, 20%, 80%)', // default color
      minWidth: 50,
    },
    skeletonTextBody: {
      width: '75%',
    },
    skeletonFooter: {
      width: '30%',
    },
    skeletonImage: {
      width: '40%',
      height: 50,
      backgroundColor: 'hsl(200, 20%, 80%)',
    },
  });

export default SurveyLoaderPlaceHolder;
