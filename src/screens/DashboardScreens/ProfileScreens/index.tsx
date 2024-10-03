import {ScrollView, StyleSheet} from 'react-native';
import UserInfo from './UserInfo';
import {useContext} from 'react';
import {ThemeContext} from '../../../contexts/ThemeContext';
import {MD3Theme} from 'react-native-paper';

const Profile = () => {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <UserInfo />
      </ScrollView>
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
  });

export default Profile;
