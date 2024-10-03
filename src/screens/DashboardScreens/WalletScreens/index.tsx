import React, {useEffect} from 'react';
import {Divider, MD3Theme, Text, TextInput} from 'react-native-paper';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import Button from '../../../components/Button';
import {useContext, useState} from 'react';
import {AuthContext} from '../../../contexts/AuthContext';
import Icon from 'react-native-vector-icons/AntDesign';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {
  PaginationInput,
  PaymentWithdrawalStatus,
  useCreateWithdrawalRequestMutation,
  useFetchPaymentWithdrawalsLazyQuery,
} from '../../../generated';
import {GRAPHQL_QUERY_POLICY} from '../../../constants';
import {
  fetchWithdrawalPaymentHandler,
  withdrawPointsHandler,
} from '../../../utils/surveyHandler';
import {ThemeContext} from '../../../contexts/ThemeContext';

const Wallet = () => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  const {currentPanelist, refreshPanelist} = useContext(AuthContext);
  const [withdrawalPoint, setWithdrawalPoint] = useState<string>('');
  const [havePendingRequest, setHavePendingRequest] = useState<boolean>(false);
  const [paginationState] = useState<PaginationInput>({
    limit: 10,
    page: 1,
  });

  const {availablePoints = 0, id} = currentPanelist || {};
  const error = parseInt(withdrawalPoint) > availablePoints;

  const refreshData = refreshPanelist as Function;

  const [withdrawalRequest, {loading: withDrawLoading}] =
    useCreateWithdrawalRequestMutation({
      ...(GRAPHQL_QUERY_POLICY as any),
      onError(errors) {
        if (errors) {
          const {message} = errors;
          return Alert.alert(message);
        }
      },
      onCompleted(data) {
        if (data) {
          const {
            createWithdrawalRequest: {response},
          } = data;
          const {status} = response || {};

          if (status === 200) {
            setHavePendingRequest(true);
            setWithdrawalPoint('');
            Alert.alert(response?.message as string);
          }
        }
      },
    });

  const [fetchPaymentWithdrawals] = useFetchPaymentWithdrawalsLazyQuery({
    ...(GRAPHQL_QUERY_POLICY as any),
    variables: fetchWithdrawalPaymentHandler(
      currentPanelist?.id,
      paginationState,
    ),
    onCompleted({fetchPaymentWithdrawals}) {
      const list = fetchPaymentWithdrawals?.paymentWithdrawals;
      const havingPendingStatus = list.some(
        item => item?.status === PaymentWithdrawalStatus.Requested,
      );
      setHavePendingRequest(havingPendingStatus);
    },
  });

  const clickHandle = async () => {
    await withdrawalRequest({
      variables: withdrawPointsHandler(id || '', withdrawalPoint),
    });
    await refreshData();
  };

  useEffect(() => {
    fetchPaymentWithdrawals();
  }, [fetchPaymentWithdrawals]);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.card}>
          <View style={styles.WalletIconWrapper}>
            <Icon name="wallet" style={styles.WalletIcon} />
          </View>
          <View style={styles.approvedTextCard}>
            <View style={{paddingHorizontal: 16, width: '100%'}}>
              <View style={styles.approvedText}>
                <Text>APPROVED</Text>
                <Text>{currentPanelist?.pointsWithdrawn}</Text>
              </View>
              <Divider />
              <View style={styles.availablePointsWrapper}>
                <Text>AVAILABLE POINTS</Text>
                <Text>{currentPanelist?.availablePoints}</Text>
              </View>
            </View>
          </View>
          <View style={styles.myPointsWrapper}>
            <View style={{flex: 1}}>
              <View style={{position: 'relative', marginBottom: 8}}>
                <ProgressBar
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={availablePoints / 500}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent:
                      currentPanelist?.availablePoints < 500
                        ? 'space-between'
                        : 'flex-end',
                  }}>
                  {currentPanelist?.availablePoints < 500 ? (
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#939393',
                        fontWeight: 'bold',
                      }}>
                      {500 - currentPanelist?.availablePoints} POINTS UNTIL
                      PAYOUT
                    </Text>
                  ) : null}
                  <Text style={{color: '#edbb5f', fontWeight: 'bold'}}>
                    {currentPanelist?.availablePoints}
                    <Text style={{color: '#939393'}}>/500</Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              paddingBottom: 24,
              marginHorizontal: 16,
            }}>
            <TextInput
              style={styles.withdrawlPointInput}
              label="Withdraw Points"
              value={withdrawalPoint}
              disabled={
                currentPanelist?.availablePoints < 500 ||
                havePendingRequest ||
                withDrawLoading
              }
              onChangeText={value => setWithdrawalPoint(value)}
              error={error}
              mode="outlined"
            />
            <Button
              disabled={
                currentPanelist?.availablePoints < 500 ||
                +withdrawalPoint < 500 ||
                havePendingRequest ||
                withDrawLoading ||
                error
              }
              onPress={clickHandle}
              mode="contained"
              loading={withDrawLoading}>
              Payout
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
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
      marginBottom: 16,
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
    cardTitle: {
      fontSize: 20,
    },
    withdrawlPointInput: {
      borderColor: '#939393',
      marginBottom: 10,
    },
    WalletIconWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 12,
    },
    WalletIcon: {
      padding: 15,
      borderRadius: 50,
      fontSize: 50,
      color: '#edbb5f',
    },
    approvedTextCard: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 12,
    },
    approvedText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 8,
    },
    availablePointsWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 8,
    },
    myPointsWrapper: {
      padding: 16,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

export default Wallet;
