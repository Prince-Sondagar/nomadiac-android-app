// package block
import React, {useContext, useEffect, useState} from 'react';
import {MD3Theme, Text} from 'react-native-paper';
import Config from 'react-native-config';
import {Maybe} from 'yup';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RefreshControl, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

// Context block
import {ThemeContext} from '../../../contexts/ThemeContext';
import {AuthContext} from '../../../contexts/AuthContext';

// Query block
import {
  FusionSurveyType,
  useFetchPanelistFusionSurveyLazyQuery,
} from '../../../generated';

// common components & values block
import {
  FORBIDDEN_EXCEPTION,
  GRAPHQL_QUERY_POLICY,
  RootScreenEnum,
} from '../../../constants';
import Loader from '../../../components/common/Loader';
import {CPIRounding} from '../../../utils';
import NoDataFoundComponent from '../../../components/NoDataFound';
import {RootParamList} from '../../../App';

const FusionSurveys = () => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const {currentPanelist} = useContext(AuthContext);
  const [surveys, setSurveys] = useState<Array<Maybe<FusionSurveyType>> | []>(
    [],
  );
  const navigation: NavigationProp<RootParamList> = useNavigation();

  const updateLink = (
    link: string,
    cpi: number,
    transactionId?: string,
  ): void => {
    const url = `${
      Config.BACKEND_BASE_API_URL
    }/survey/validateFusionApiSurvey?panelistId=${
      currentPanelist && currentPanelist.id
    }&cpi=${cpi}&transactionId=${transactionId}&surveyUrl=${encodeURIComponent(
      link,
    )}`;
    setSurveys(surveys.filter(sr => sr?.surveyId !== transactionId));
    navigation.navigate(RootScreenEnum.WEBVIEW_SCREEN, {url});
  };

  const [fetchFusionSurveys, {loading: isLoading}] =
    useFetchPanelistFusionSurveyLazyQuery({
      ...(GRAPHQL_QUERY_POLICY as any),
      onError({message}) {
        setRefreshing(false);
        if (message.toLowerCase() === FORBIDDEN_EXCEPTION)
          return Alert.alert('something went wrong');

        if (message.toLowerCase() === FORBIDDEN_EXCEPTION) setRefreshing(false);
        return Alert.alert('something went wrong');
      },
      onCompleted(data) {
        let surveysData = data?.fetchPanelistFusionSurvey?.surveys;
        if (surveysData) {
          setSurveys(surveysData);
        } else {
          setSurveys([]);
        }
        setRefreshing(false);
      },
    });

  useEffect(() => {
    if (currentPanelist?.id) {
      fetchFusionSurveys({
        variables: {
          fetchFusionSurveyInput: {
            panelistId: currentPanelist?.id || '',
          },
        },
      });
    }
  }, [currentPanelist, fetchFusionSurveys]);

  const onRefreshHandler = () => {
    setRefreshing(true);
    fetchFusionSurveys();
  };
  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefreshHandler}
          />
        }>
        {isLoading ? (
          <View style={styles.loaderContainer}>
            <Loader size={50} />
          </View>
        ) : (
          <>
            {surveys?.map((item, index) => {
              const {cpi, entryLink, estimatedLoi, surveyId} = item || {};
              return (
                <View key={index} style={styles.card}>
                  <View style={styles.internalCardWrapper}>
                    <View style={styles.internalCardComponent}>
                      <Text style={styles.internalCardTitle}>Points</Text>
                      <Text
                        style={{
                          paddingTop: 8,
                          fontSize: 18,
                          fontWeight: 'bold',
                        }}>
                        {CPIRounding(cpi || 0)}
                      </Text>
                    </View>
                    <View style={styles.internalCardComponent}>
                      <Text style={styles.internalCardTitle}>Survey ID</Text>
                      <Text style={{paddingTop: 8}}>{surveyId}</Text>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.column,
                        {
                          fontSize: 17,
                          fontWeight: 'bold',
                          alignContent: 'center',
                        },
                      ]}>
                      <Icon
                        name="clock-o"
                        size={18}
                        color={theme.colors.primary}
                      />{' '}
                      {estimatedLoi} minute(s)
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() =>
                        updateLink(entryLink || '', cpi || 0, surveyId)
                      }>
                      <Text style={styles.buttonTitle}>TAKE SURVEY</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </>
        )}

        {!isLoading && !surveys?.length && (
          <View style={styles.noFoundComponentWrapper}>
            <NoDataFoundComponent />
          </View>
        )}
      </ScrollView>
    </>
  );
};

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 10,
      backgroundColor: theme.colors.background,
    },
    card: {
      backgroundColor: theme.colors.background,
      borderRadius: 8,
      borderTopColor: theme.colors.primary,
      borderBottomColor: theme.colors.background,
      borderLeftColor: theme.colors.background,
      borderRightColor: theme.colors.background,
      borderWidth: 5,
      padding: 20,
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
    internalCardTitle: {fontWeight: '900'},
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
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
      backgroundColor: theme.colors.primary,
      borderTopColor: theme.colors.primary,
      borderBottomColor: theme.colors.primary,
      borderLeftColor: theme.colors.primary,
      borderRightColor: theme.colors.primary,
      borderWidth: 2,
      padding: 10,
      shadowColor: '#000000',
    },
    buttonTitle: {
      color: theme.colors.surface,
      fontWeight: 'bold',
    },
  });

export default FusionSurveys;
