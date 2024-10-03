import React, {useEffect} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {MD3Theme, Text} from 'react-native-paper';
import {useContext, useState} from 'react';
import {AuthContext} from '../../../contexts/AuthContext';
import {
  PaginationInput,
  PaginationPayload,
  PointHistory,
  useFetchPanelistPointHistoryLazyQuery,
} from '../../../generated';
import {StyleSheet} from 'react-native';
import {Maybe} from 'yup';
import {GRAPHQL_QUERY_POLICY} from '../../../constants';
import {fetchPointHistoryHandler} from '../../../utils/surveyHandler';
import {formatDate} from '../../../utils';
import NoDataFoundComponent from '../../../components/NoDataFound';
import Pagination from '../../../components/Pagination';
import Loader from '../../../components/common/Loader';
import CustomHeader from '../../../components/common/CustomHeader';
import {ThemeContext} from '../../../contexts/ThemeContext';
import {INavigation} from '../../../interfaceTypes';

function PointHistoryTable({navigation}: {navigation: INavigation}) {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  const {currentPanelist} = useContext(AuthContext);
  const [paginationState, setPaginationState] = useState<PaginationInput>({
    limit: 10,
    page: 1,
  });
  const [pagination, setPagination] = useState<Maybe<PaginationPayload>>({});
  const [pointHistoryList, setPointHistoryList] = useState<PointHistory[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [fetchPointHistory, {loading}] = useFetchPanelistPointHistoryLazyQuery({
    ...(GRAPHQL_QUERY_POLICY as any),
    variables: fetchPointHistoryHandler(
      currentPanelist?.id || '',
      paginationState,
    ),
    onCompleted({fetchPanelistPointHistory}) {
      const list = fetchPanelistPointHistory?.pointHistory;
      setPointHistoryList(list as PointHistory[]);
      const paginationData = fetchPanelistPointHistory?.pagination;
      if (paginationData) {
        setPagination(paginationData);
      } else {
        setPagination(pagination);
      }
      setRefreshing(false);
    },
  });

  const onRefresh = () => {
    setRefreshing(true);
    fetchPointHistory();
  };

  useEffect(() => {
    fetchPointHistory();
  }, [fetchPointHistory]);

  return (
    <>
      <CustomHeader
        title="Point History"
        isHome={false}
        navigation={navigation}
      />
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {loading ? (
          <View style={styles.loaderContainer}>
            <Loader size={50} />
          </View>
        ) : (
          <>
            {pointHistoryList?.map((pointHistory, index) => {
              const {points, details, createdAt} = pointHistory || {};
              return (
                <View key={index} style={styles.card}>
                  <View style={styles.cardContent}>
                    <View>
                      <Text
                        style={{
                          fontSize: 24,
                          fontWeight: 'bold',
                          color: '#EDBB5F',
                        }}>
                        {points}
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: '600',
                          color: '#EDBB5F',
                        }}>
                        {details}
                      </Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}>
                      <Text style={styles.column}>
                        {formatDate(+createdAt)}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </>
        )}

        {!loading && !pointHistoryList?.length && (
          <View style={styles.noFoundComponentWrapper}>
            <NoDataFoundComponent />
          </View>
        )}
        {pointHistoryList.length &&
        pointHistoryList.length <= paginationState.limit ? (
          <Pagination
            pagination={pagination as PaginationPayload}
            paginationState={paginationState as PaginationInput}
            setPaginationState={setPaginationState}
          />
        ) : (
          ''
        )}
      </ScrollView>
    </>
  );
}

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 10,
      backgroundColor: theme.colors.background,
      marginBottom: 0,
    },
    card: {
      backgroundColor: theme.colors.background,
      borderRadius: 8,
      padding: 20,
      borderTopColor: '#EDBB5F',
      borderBottomColor: theme.colors.background,
      borderLeftColor: theme.colors.background,
      borderRightColor: theme.colors.background,
      borderWidth: 5,
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
    cardContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    column: {
      marginBottom: 0,
      color: '#EDBB5F',
      fontSize: 18,
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
  });

export default PointHistoryTable;
