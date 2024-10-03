import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {WebView, WebViewMessageEvent} from 'react-native-webview';
import {MD3Theme} from 'react-native-paper';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ThemeContext} from '../contexts/ThemeContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import {INavigation} from '../interfaceTypes';
import CustomHeader from '../components/common/CustomHeader';
import {RootParamList} from '../App';
import {RootScreenEnum} from '../constants';

export default function WebviewScreen() {
  const {theme} = useContext(ThemeContext);
  const styles = useStyles(theme);
  const route =
    useRoute<RouteProp<RootParamList, RootScreenEnum.WEBVIEW_SCREEN>>();
  const {url} = route?.params || {};
  const navigation: INavigation = useNavigation();

  const onMessageReceived = (event: WebViewMessageEvent) => {
    const message = event.nativeEvent.data;
    if (message === 'WebButtonClick') {
      navigation.navigate(RootScreenEnum.DASHBOARD_SCREEN);
    }
  };
  return (
    <>
      <SafeAreaView style={styles.container} edges={['bottom']}>
        <CustomHeader
          title="Take Survey"
          isHome={false}
          navigation={navigation}
        />
        <WebView
          source={{uri: url || ''}}
          onMessage={onMessageReceived}
          style={styles.webViewContainer}
        />
      </SafeAreaView>
    </>
  );
}

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: theme.colors.background,
    },
    webViewContainer: {
      backgroundColor: theme.colors.background,
    },
  });
