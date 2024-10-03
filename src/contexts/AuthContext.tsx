import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {
  Panelist,
  ResponsePayload,
  User,
  useDeactivateUserMutation,
  useFetchPanelistByUserIdLazyQuery,
  useLoggedInUserLazyQuery,
} from '../generated';
import {Maybe} from 'yup';
import {ClearAsyncStorage, getToken} from '../utils';
import {useNavigation} from '@react-navigation/native';
import Loader from '../components/common/Loader';
import {GRAPHQL_QUERY_POLICY, RootScreenEnum} from '../constants';
import {INavigation} from '../interfaceTypes';
import {ThemeContext} from './ThemeContext';
import {MD3Theme} from 'react-native-paper';

interface Props extends ViewProps {}

type AuthContextTypes = {
  user: User | null;
  currentPanelist: Maybe<Panelist | undefined>;
  setCurrentPanelist: Dispatch<SetStateAction<Maybe<Panelist | undefined>>>;
  currentUser: Maybe<User>;
  isLoggedIn: boolean;
  isLoading: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<User | null>>;
  refreshPanelist: Function;
  onHandleLogout: () => void;
  onLeavePanelAndDeactivate: Function;
};

export const AuthContext = createContext<AuthContextTypes>({
  user: null,
  isLoggedIn: false,
  isLoading: false,
  setIsLoggedIn: () => {},
  setUser: () => {},
  refreshPanelist: () => {},
  currentUser: null,
  currentPanelist: null,
  setCurrentPanelist: () => {},
  onHandleLogout: () => {},
  onLeavePanelAndDeactivate: () => {},
});

function AuthProvider({children}: Props) {
  const [currentUser, setCurrentUser] = useState<Maybe<User>>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentPanelist, setCurrentPanelist] = useState<Maybe<Panelist>>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasToken, setHasToken] = useState<string>('');
  const navigation: INavigation = useNavigation();
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);

  const [fetchPanelist, {refetch: refreshPanelist}] =
    useFetchPanelistByUserIdLazyQuery({
      ...(GRAPHQL_QUERY_POLICY as any),
      onError() {
        setIsLoading(false);
      },

      onCompleted(data: {
        fetchPanelistByUserId: {panelist: Panelist; response: ResponsePayload};
      }) {
        const {
          fetchPanelistByUserId: {panelist, response},
        } = data;
        if (response.status === 200) {
          setCurrentPanelist(panelist);
        }
        setIsLoading(false);
      },
    });

  const [onLoggedInUser] = useLoggedInUserLazyQuery({
    ...(GRAPHQL_QUERY_POLICY as any),
    onError(error) {
      setIsLoading(false);
      if (error.message === 'Token Invalid') {
        setIsLoggedIn(false);
        setCurrentUser(null);
        setCurrentPanelist(null);
      }
    },

    onCompleted(data: {me: {user: User}}) {
      const {
        me: {user},
      } = data;
      if (user) {
        setCurrentUser(user as User);
        fetchPanelist({
          variables: {fetchPanelistByUserIdInput: {userId: user.id}},
        });
      }
      setIsLoggedIn(true);
      // setIsLoading(false);
    },
  });

  useEffect(() => {
    if (
      !isLoading &&
      currentPanelist &&
      !currentPanelist.signupSurveyResponse.length
    ) {
      navigation.navigate(RootScreenEnum.ONBOARDING_SCREEN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, currentPanelist]);

  useEffect(() => {
    getToken().then(data => {
      setHasToken(data || '');
      setIsLoggedIn(!!data);
    });
  }, [hasToken]);

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      onLoggedInUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, hasToken]);

  const onHandleLogout = async () => {
    await ClearAsyncStorage();
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const [deactivateUser] = useDeactivateUserMutation({
    ...(GRAPHQL_QUERY_POLICY as any),
    variables: {userInput: {userId: currentUser?.id}},
  });

  const onLeavePanelAndDeactivate = async () => {
    await deactivateUser();
    onHandleLogout();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        currentPanelist,
        setCurrentPanelist,
        currentUser,
        isLoggedIn,
        setIsLoggedIn,
        refreshPanelist,
        onHandleLogout,
        isLoading,
        onLeavePanelAndDeactivate,
      }}>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <Loader />
        </View>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
  });

export default AuthProvider;
