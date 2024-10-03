import React, {useContext, useState} from 'react';
import {StyleSheet, ScrollView, View, SafeAreaView, Image} from 'react-native';

import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {DrawerItemsMainType} from '../../screens/DashboardScreen';
import {List, MD3Theme, Text} from 'react-native-paper';
import {ThemeContext} from '../../contexts/ThemeContext';

interface Props extends DrawerContentComponentProps {
  drawerItems: DrawerItemsMainType[];
}

type routeType = {
  nav?: string;
  routeName?: string;
  title?: string;
};

function CustomDrawerContent({navigation, drawerItems}: Props) {
  const [activeRoute, setActiveRoute] = useState('');
  const {theme, mode} = useContext(ThemeContext);
  const styles = useStyles(theme);
  return (
    <ScrollView style={styles.drawerContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.centered}>
          <Image
            source={
              mode === 'light'
                ? require('../../assets/logo.png')
                : require('../../assets/logo-white.png')
            }
            style={styles.logo}
          />
        </View>
        <View>
          {drawerItems.map((parent, index) => (
            <React.Fragment key={index + 1}>
              {parent?.routes?.length > 0 ? (
                <List.Section key={index} style={styles.listStyle}>
                  <List.Accordion
                    style={styles.listStyle}
                    title={parent?.title}
                    titleStyle={[styles.title]}>
                    {parent?.routes?.map(
                      (route: routeType, subIndex: number) => (
                        <List.Item
                          key={subIndex}
                          title={route?.title}
                          titleStyle={[
                            styles.subListItem,
                            activeRoute === route.routeName &&
                              styles.activeSubListItem,
                          ]}
                          onPress={() => {
                            navigation.navigate(route?.nav || '', {
                              screen: route?.routeName || '',
                            });
                            setActiveRoute(route.routeName || '');
                          }}
                        />
                      ),
                    )}
                  </List.Accordion>
                </List.Section>
              ) : (
                <List.Section key={index} style={styles.listStyle}>
                  <List.Item
                    title={
                      <View style={styles.titleContainer}>
                        <Text style={styles.title}>{parent?.title}</Text>
                      </View>
                    }
                    onPress={() => {
                      navigation.navigate(parent.nav, {
                        screen: parent.routeName,
                      });
                      setActiveRoute(parent?.routeName);
                    }}
                  />
                </List.Section>
              )}
            </React.Fragment>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const useStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    headerContainer: {
      height: 100,
      flexDirection: 'row',
      paddingVertical: 28,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 100,
      height: 75,
    },
    drawerContainer: {
      backgroundColor: theme.colors.background,
    },
    container: {
      flex: 1,
      zIndex: 1000,
    },
    centered: {
      alignItems: 'center',
    },
    title: {
      fontWeight: 'bold',
      color: theme.colors.onSurface,
      textAlign: 'left',
    },
    subListItem: {
      paddingLeft: 10,
      fontWeight: '600',
      color: theme.colors.onSurface,
    },
    activeSubListItem: {
      color: 'rgb(255, 217, 90)',
      fontWeight: 'bold',
    },
    activeTitle: {
      backgroundColor: 'yellow',
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    listStyle: {
      paddingVertical: 0,
      marginVertical: 0,
    },
  });

export default CustomDrawerContent;
