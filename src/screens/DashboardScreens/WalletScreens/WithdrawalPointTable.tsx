import React, {useContext, useEffect, useState} from 'react';
import CustomHeader from '../../../components/common/CustomHeader';
import {MD3Theme, Text} from 'react-native-paper';
import {
  PaginationInput,
  PaginationPayload,
  PaymentWithdrawal,
  PaymentWithdrawalStatus,
  useFetchPaymentWithdrawalsLazyQuery,
} from '../../../generated';
import {Maybe} from 'yup';
import {GRAPHQL_QUERY_POLICY} from '../../../constants';
import {fetchWithdrawalPaymentHandler} from '../../../utils/surveyHandler';
import {AuthContext} from '../../../contexts/AuthContext';
import {StyleSheet, View} from 'react-native';
import {RefreshControl, ScrollView} from 'react-native-gesture-handler';
// import Pagination from '../../../components/Pagination';
import NoDataFoundComponent from '../../../components/NoDataFound';
import {
  capitalizeFirstLetter,
  formatDate,
  getColorBasedOnStatus,
} from '../../../utils';
import Loader from '../../../components/common/Loader';
import Pagination from '../../../components/Pagination';
import {ThemeContext} from '../../../contexts/ThemeContext';
import {INavigation} from '../../../interfaceTypes';

export function WithdrawalPointTable({navigation}: {navigation: INavigation}) {
  const {currentPanelist} = useContext(AuthContext);
  const [withdrawalPaymentList, setWithdrawalPaymentList] = useState<
    PaymentWithdrawal[]
  >([]);
  const [paginationState, setPaginationState] = useState<PaginationInput>({
    limit: 10,
    page: 1,
  });
  const [pagination, setPagination] = useState<Maybe<PaginationPayload>>({});
  const [refreshing, setRefreshing] = useState(false);
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);

  const [fetchPaymentWithdrawals, {loading: isLoading}] =
    useFetchPaymentWithdrawalsLazyQuery({
      ...(GRAPHQL_QUERY_POLICY as any),
      variables: fetchWithdrawalPaymentHandler(
        currentPanelist?.id || '',
        paginationState,
      ),
      onCompleted({fetchPaymentWithdrawals}) {
        const list = fetchPaymentWithdrawals?.paymentWithdrawals;
        setWithdrawalPaymentList(list as PaymentWithdrawal[]);

        const paginationData = fetchPaymentWithdrawals?.pagination;
        if (paginationData) setPagination(paginationData);
        else setPagination(pagination);
        setRefreshing(false);
      },
    });

  useEffect(() => {
    fetchPaymentWithdrawals();
  }, [fetchPaymentWithdrawals]);

  const onRefreshHandler = () => {
    setRefreshing(true);
    fetchPaymentWithdrawals();
  };
  return (
    <>
      <CustomHeader
        title="Payment Request"
        isHome={false}
        navigation={navigation}
      />
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
            {withdrawalPaymentList?.map((paymentRequest, index) => {
              const {status, points, createdAt} = paymentRequest || {};
              return (
                <View
                  key={index}
                  style={[
                    styles.card,
                    {
                      borderTopColor: getColorBasedOnStatus(
                        (status as PaymentWithdrawalStatus) ?? '',
                      ),
                    },
                  ]}>
                  <View style={styles.cardContent}>
                    <View>
                      <Text
                        style={[
                          styles.points,
                          {
                            backgroundColor: getColorBasedOnStatus(
                              (status as PaymentWithdrawalStatus) ?? '',
                            ),
                          },
                        ]}>
                        {points}
                      </Text>
                    </View>
                    <View style={{paddingLeft: 20}}>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        {capitalizeFirstLetter(status ?? '') ?? ''}
                      </Text>
                      <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                        Created: {formatDate(+createdAt)}
                      </Text>
                      <View></View>
                    </View>
                  </View>
                </View>
              );
            })}
          </>
        )}

        {!isLoading && !withdrawalPaymentList?.length && (
          <View style={styles.noFoundComponentWrapper}>
            <NoDataFoundComponent />
          </View>
        )}

        {withdrawalPaymentList.length &&
        withdrawalPaymentList.length <= paginationState.limit ? (
          <Pagination
            pagination={pagination as PaginationPayload}
            paginationState={paginationState as PaginationInput}
            setPaginationState={setPaginationState}
          />
        ) : null}
      </ScrollView>
    </>
  );
}

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 15,
      backgroundColor: theme.colors.background,
    },
    card: {
      borderBottomColor: theme.colors.background,
      borderLeftColor: theme.colors.background,
      borderRightColor: theme.colors.background,
      backgroundColor: theme.colors.background,
      borderWidth: 5,
      color: '#FFFFFF',
      borderRadius: 8,
      padding: 26,
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
      justifyContent: 'flex-start',
    },
    points: {
      color: 'white',
      fontSize: 20,
      borderRadius: 10,
      padding: 10,
      fontWeight: 'bold',
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
