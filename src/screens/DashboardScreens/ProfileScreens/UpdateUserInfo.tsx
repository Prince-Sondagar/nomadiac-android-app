import React, {useContext, useEffect} from 'react';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {Alert, ScrollView, StyleSheet, View} from 'react-native';
import {MD3Theme, Text} from 'react-native-paper';
import TextInput from '../../../components/TextInput';
import {yupResolver} from '@hookform/resolvers/yup';
import {User, useUpdateUserMutation} from '../../../generated';
import {updateUserSchema} from '../../../utils/yupSchema';
import {AuthContext} from '../../../contexts/AuthContext';
import Button from '../../../components/Button';
import CustomHeader from '../../../components/common/CustomHeader';
import {ThemeContext} from '../../../contexts/ThemeContext';
import {INavigation} from '../../../interfaceTypes';

type updateUserInfoProps = {
  isDrawerSettingItem: boolean;
  navigation: INavigation;
};

type UpdateUserInfoInput = {
  firstName: string;
  lastName: string;
  email: string;
};

const UpdateUserInfo = ({
  isDrawerSettingItem,
  navigation,
}: updateUserInfoProps) => {
  const {currentPanelist, refreshPanelist} = useContext(AuthContext);
  const refreshData = refreshPanelist as Function;
  const user = currentPanelist?.user;
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);

  const methods = useForm<UpdateUserInfoInput>({
    mode: 'all',
    resolver: yupResolver(updateUserSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  const {
    handleSubmit,
    reset,
    formState: {isDirty},
    setValue,
  } = methods;

  const [updateUser] = useUpdateUserMutation({
    onError() {
      return null;
    },
    onCompleted(data) {
      const {
        updateUser: {response},
      } = data;

      if (response) {
        const {status, message} = response;
        if (status && status === 200 && message) {
          Alert.alert(message);
          reset();
          refreshData();
        }
      }
    },
  });

  const onSubmit: SubmitHandler<any> = async data => {
    if (user && isDirty) {
      await updateUser({
        variables: {
          userInput: {
            id: data?.id,
            firstName: data?.firstName,
            lastName: data?.lastName,
            email: data?.email || '',
            emailVerified: data?.emailVerified,
          },
        },
      });
    }
  };

  useEffect(() => {
    if (!!user) {
      Object.keys(user as User)?.map((key: any) =>
        setValue(key, (user as any)[key]),
      );
    }
  }, [user, setValue]);

  return (
    <>
      {isDrawerSettingItem && (
        <CustomHeader
          title="Update Profile"
          navigation={navigation}
          isHome={true}
        />
      )}
      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <FormProvider {...methods}>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.sectionTitle}>Update Profile</Text>
              </View>
              <View style={styles.cardContent}>
                <View>
                  <TextInput label="First Name" name="firstName" />
                </View>
                <View>
                  <TextInput label="Last Name" name="lastName" />
                </View>
                <View>
                  <TextInput
                    label="Email"
                    name="email"
                    returnKeyType="next"
                    defaultValue={user?.email}
                    disabled
                  />
                </View>
                <Button
                  mode="contained"
                  style={styles.button}
                  onPress={handleSubmit(onSubmit)}>
                  SAVE
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
      paddingHorizontal: 16,
      paddingVertical: 10,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: '#E5E5E5',
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    cardContent: {
      padding: 16,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
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
      color: theme.colors.surface,
    },
  });
export default UpdateUserInfo;
