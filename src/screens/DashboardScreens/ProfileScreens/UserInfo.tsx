import {MD3Theme, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {useContext} from 'react';
import {AuthContext} from '../../../contexts/AuthContext';
import Button from '../../../components/Button';
import Icon from 'react-native-vector-icons/AntDesign';
import Preference from './Preference';
import {ThemeContext} from '../../../contexts/ThemeContext';

const UserInfo = () => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  const {currentPanelist, onLeavePanelAndDeactivate} = useContext(AuthContext);
  const user = currentPanelist?.user;
  const {firstName, lastName, email} = user || {};

  const onHandleLeavePanel = () => {
    onLeavePanelAndDeactivate();
  };

  return (
    <>
      <View style={styles.card}>
        <View style={styles.ProfileIconWrapper}>
          <Icon name="user" style={styles.ProfileIcon} />
        </View>
        <View style={styles.cardContent}>
          <View style={styles.cardBox}>
            <Text>Name</Text>
            <Text style={styles.fieldDesc}>
              {firstName} {lastName}
            </Text>
          </View>
          <View style={styles.cardBox}>
            <Text>Email</Text>
            <Text style={styles.textYellow}>{email}</Text>
          </View>
          <Button mode="contained" onPress={onHandleLeavePanel}>
            LEAVE PANEL AND DELETE ACCOUNT
          </Button>
        </View>
      </View>
      <Preference />
    </>
  );
};

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
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
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 10,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: '#E5E5E5',
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    cardContent: {
      padding: 16,
    },
    cardBox: {
      marginBottom: 16,
    },
    fieldDesc: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    textYellow: {
      color: '#edbb5f',
      fontWeight: '700',
    },
    button: {
      width: '100%',
      textAlign: 'right',
      alignContent: 'flex-end',
    },
    ProfileIconWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 12,
    },
    ProfileIcon: {
      padding: 15,
      borderRadius: 50,
      fontSize: 60,
      color: '#edbb5f',
    },
  });

export default UserInfo;
