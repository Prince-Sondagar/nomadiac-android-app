// pckage block
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {MD3Theme, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RefreshControl, TouchableOpacity} from 'react-native-gesture-handler';

// custom components & values block
import SurveyLoaderPlaceHolder from '../../../components/SurveyLoaderPlaceHolder';
import NoDataFoundComponent from '../../../components/NoDataFound';
import {ThemeContext} from '../../../contexts/ThemeContext';
import {AuthContext} from '../../../contexts/AuthContext';
import {
  LucidSurvey,
  useFetchLucidSurveysLazyQuery,
  useValidateLucidSurveyMutation,
  Maybe,
} from '../../../generated';
import {
  GRAPHQL_QUERY_POLICY,
  NOT_FOUND,
  NOT_FOUND_EXCEPTION,
  RootScreenEnum,
  SURVEYS_NOT_AVAILABLE,
} from '../../../constants';
import {CPIRounding} from '../../../utils';
import {INavigation} from '../../../interfaceTypes';
export interface ValidLucidSurveyTablePropType {
  setIsLucidSurveyAvailable: Dispatch<SetStateAction<boolean>>;
}

const ValidLucidSurveyTable: FC<ValidLucidSurveyTablePropType> = ({
  setIsLucidSurveyAvailable,
}) => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  const navigation: INavigation = useNavigation();
  const {currentPanelist} = useContext(AuthContext);
  const {id, lucidProfileCompleted} = currentPanelist || {};
  const [lucidSurveys, setLucidSurveys] = useState<Maybe<LucidSurvey>[]>([]);
  const [selectedSurveyId, setSelectedSurveyId] = useState<string>('');
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const [fetchLucidSurveys, {loading: isLoading, refetch}] =
    useFetchLucidSurveysLazyQuery({
      ...(GRAPHQL_QUERY_POLICY as any),
      variables: {
        fetchLucidSurveysInput: {
          panelistId: id || '',
          paginationOptions: {
            page,
            limit: 10,
          },
        },
      },
      onError() {
        setIsLucidSurveyAvailable(false);
        setRefreshing(false);
      },
      onCompleted(data) {
        const {
          fetchLucidSurveys: {surveys: fetchedSurveys, pagination},
        } = data;
        const {totalPages} = pagination || {};

        setLucidSurveys([...lucidSurveys, ...fetchedSurveys]);
        if (
          [...lucidSurveys, ...fetchedSurveys].length < 10 &&
          page !== totalPages
        )
          setPage(page + 1);

        setRefreshing(false);
      },
    });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const [validateLucidSurvey] = useValidateLucidSurveyMutation({
    onError({message}) {
      if (
        message === NOT_FOUND ||
        message === NOT_FOUND_EXCEPTION ||
        message === SURVEYS_NOT_AVAILABLE
      ) {
        const updatedSurvey = lucidSurveys.filter(surveyItem => {
          const {surveyId} = surveyItem || {};
          return surveyId !== selectedSurveyId;
        });

        setLucidSurveys(updatedSurvey);
      }
    },

    onCompleted(data) {
      const {
        validateLucidSurvey: {local, url},
      } = data;

      const updatedSurvey = lucidSurveys.filter(surveyItem => {
        const {surveyId} = surveyItem || {};
        return surveyId !== selectedSurveyId;
      });

      setSelectedSurveyId('');
      setLucidSurveys(updatedSurvey);

      if (local) {
        return navigation.navigate(url as any);
      }
      navigation.navigate(RootScreenEnum.WEBVIEW_SCREEN, {url});
    },
  });

  const handleValidateSurvey = (surveyId: string) => {
    if (!lucidProfileCompleted) {
      return navigation.navigate(RootScreenEnum.ADDITIONAL_INFORMATION_SCREEN);
    }

    setSelectedSurveyId(surveyId);

    validateLucidSurvey({
      variables: {
        validateLucidSurveyInput: {
          panelistId: id || '',
          surveyId,
        },
      },
    });
  };

  const onRefreshHandler = () => {
    setRefreshing(true);
    fetchLucidSurveys();
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefreshHandler} />
      }>
      {lucidSurveys?.map((survey, index) => {
        const {cpi, surveyId, interviewLength} = survey || {};
        return (
          <View key={index} style={styles.card}>
            <View style={styles.internalCardWrapper}>
              <View style={styles.internalCardComponent}>
                <Text style={styles.internalCardTitle}>Points</Text>
                <Text style={styles.cpiRoundingCell}>
                  {CPIRounding(cpi || 0)}
                </Text>
              </View>
              <View style={styles.internalCardComponent}>
                <Text style={styles.internalCardTitle}>Survey ID</Text>
                <Text style={{paddingTop: 8}}>{surveyId}</Text>
              </View>
            </View>
            <View>
              <Text style={[styles.column, styles.interviewtimeCell]}>
                <Icon name="clock-o" size={18} color={theme.colors.primary} />{' '}
                {interviewLength} minute(s)
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleValidateSurvey(surveyId || '')}>
                <Text style={styles.buttonTitle}>TAKE SURVEY</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}

      {isLoading && <SurveyLoaderPlaceHolder />}

      {!isLoading && !lucidSurveys?.length && (
        <View style={styles.noFoundComponentWrapper}>
          <NoDataFoundComponent />
        </View>
      )}
    </ScrollView>
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
    cpiRoundingCell: {
      paddingTop: 8,
      fontSize: 18,
      fontWeight: 'bold',
    },
    interviewtimeCell: {
      fontSize: 17,
      fontWeight: 'bold',
      alignContent: 'center',
    },
  });

export default ValidLucidSurveyTable;
