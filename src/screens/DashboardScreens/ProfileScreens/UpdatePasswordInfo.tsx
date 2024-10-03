import React, {useContext} from 'react';
import {MD3Theme, Text} from 'react-native-paper';
import {Alert, StyleSheet, View} from 'react-native';
import {AuthContext} from '../../../contexts/AuthContext';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useUpdatePasswordMutation} from '../../../generated';
import {updatePasswordSchema} from '../../../utils/yupSchema';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import CustomHeader from '../../../components/common/CustomHeader';
import {ThemeContext} from '../../../contexts/ThemeContext';
import {ScrollView} from 'react-native-gesture-handler';
import {INavigation} from '../../../interfaceTypes';

export type UpdatePasswordInput = {
  password: string;
  repeatPassword: string;
};

type Props = {
  isDrawerSettingItem: boolean;
  navigation: INavigation;
};

const UpdatePasswordInfo = ({isDrawerSettingItem, navigation}: Props) => {
  const {currentUser} = useContext(AuthContext);
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);

  const [updatePassword, {loading}] = useUpdatePasswordMutation({
    onError() {},

    onCompleted(data) {
      const {
        updatePassword: {response},
      } = data;

      if (response) {
        const {status, message} = response;

        if (status && status === 200 && message) {
          Alert.alert(message);
          reset();
        }
      }
    },
  });

  const methods = useForm<UpdatePasswordInput>({
    mode: 'all',
    resolver: yupResolver(updatePasswordSchema),
    defaultValues: {
      repeatPassword: '',
      password: '',
    },
  });

  const {handleSubmit, reset} = methods;
  const onSubmit: SubmitHandler<UpdatePasswordInput> = async ({
    password: newPassword,
  }) => {
    const {id} = currentUser || {};
    if (id) {
      await updatePassword({
        variables: {
          updatePasswordInput: {
            id,
            newPassword,
          },
        },
      });
    }
  };
  return (
    <>
      {isDrawerSettingItem && (
        <CustomHeader
          title="Update Password"
          navigation={navigation}
          isHome={true}
        />
      )}
      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <FormProvider {...methods}>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.sectionTitle}>Update Password</Text>
              </View>
              <View style={styles.cardContent}>
                <View style={styles.inputContainer}>
                  <TextInput label="Password" name="password" />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput label="Confirm Password" name="repeatPassword" />
                </View>
                <Button
                  disabled={loading}
                  mode="contained"
                  onPress={handleSubmit(onSubmit)}
                  isLoading={loading}>
                  RESET PASSWORD
                </Button>
              </View>
            </View>
          </FormProvider>
        </View>
      </ScrollView>
    </>
  );
};

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: theme.colors.background,
    },
    contentContainer: {
      padding: 16,
    },
    card: {
      backgroundColor: theme.colors.background,
      borderRadius: 8,
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
    inputContainer: {
      marginBottom: 4,
    },
  });

export default UpdatePasswordInfo;
