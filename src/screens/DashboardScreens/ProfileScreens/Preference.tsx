import React from 'react';
import {MD3Theme, Text} from 'react-native-paper';
import {StyleSheet, View, Switch} from 'react-native';
import {AuthContext} from '../../../contexts/AuthContext';
import {useContext, useEffect, useState} from 'react';
import {GRAPHQL_QUERY_POLICY} from '../../../constants';
import {useHandleBlockUnblockPromotionMainMutation} from '../../../generated';
import CustomHeader from '../../../components/common/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import {INavigation} from '../../../interfaceTypes';
import {ThemeContext} from '../../../contexts/ThemeContext';

type PreferenceProps = {
  isDrawerSettingItem: boolean;
};

const Preference = ({isDrawerSettingItem}: PreferenceProps) => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  const {currentPanelist} = useContext(AuthContext);
  const [preferenceSetting, setPreferenceSetting] = useState<{
    blockPromotions?: boolean;
  }>();
  const navigation: INavigation = useNavigation();

  const [onBlockPromotion, {loading}] =
    useHandleBlockUnblockPromotionMainMutation({
      ...(GRAPHQL_QUERY_POLICY as any),
    });

  const handlePromotion = async (e: boolean) => {
    await onBlockPromotion({
      variables: {
        updatePanelistInput: {
          id: currentPanelist?.id || '',
          blockPromotions: e === true,
        },
      },
    });
    setPreferenceSetting({
      ...preferenceSetting,
      blockPromotions: e === true,
    });
  };

  useEffect(() => {
    if (currentPanelist) {
      setPreferenceSetting({
        ...preferenceSetting,
        blockPromotions: currentPanelist?.blockPromotions ?? false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPanelist]);

  return (
    <>
      {isDrawerSettingItem && (
        <CustomHeader
          title="Preference"
          navigation={navigation}
          isHome={true}
        />
      )}
      <View style={isDrawerSettingItem ? styles.container : {}}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.sectionTitle}>Preferences</Text>
          </View>

          <View style={styles.cardContent}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.subSectionTitle}>
                Block Daily paid survey email(s)?
              </Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={
                  preferenceSetting?.blockPromotions ? '#f5dd4b' : '#f4f3f4'
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={value => handlePromotion(value)}
                value={preferenceSetting?.blockPromotions}
                disabled={loading}
              />
            </View>
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
      padding: 16,
      backgroundColor: theme.colors.background,
    },
    card: {
      backgroundColor: theme.colors.background,
      borderRadius: 8,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 4,
      marginTop: 16,
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: '#E5E5E5',
    },
    cardContent: {
      padding: 16,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    subSectionTitle: {
      fontSize: 14,
    },
    radioGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
    },
    radioButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 16,
    },
    radioButtonLabel: {
      marginLeft: 8,
    },
  });

export default Preference;
