import React, {useContext} from 'react';
import WalletScreen from './DashboardScreens/WalletScreens';
import ProfileScreen from './DashboardScreens/ProfileScreens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View} from 'react-native';
import CustomHeader from '../components/common/CustomHeader';
import PointHistoryTable from './DashboardScreens/WalletScreens/PointHistoryTable';
import {WithdrawalPointTable} from './DashboardScreens/WalletScreens/WithdrawalPointTable';
import CustomDrawerContent from '../components/Drawer/CustomerDrawer';
import Preference from './DashboardScreens/ProfileScreens/Preference';
import UpdatePasswordInfo from './DashboardScreens/ProfileScreens/UpdatePasswordInfo';
import {
  PROFILE_TAB,
  PROFILE_TAB_SCREEN,
  RootScreenEnum,
  SURVEY_TAB,
  SURVEY_TAB_SCREEN,
  WALLET_TAB,
  WALLET_TAB_SCREEN,
} from '../constants';
import UpdateUserInfo from './DashboardScreens/ProfileScreens/UpdateUserInfo';
import SurveyScreen from './DashboardScreens/SurveyScreens';
import ExtraEarningOpportunities from './DashboardScreens/SurveyScreens/ExtraEarningOpportunities';
import {ThemeContext} from '../contexts/ThemeContext';
import LucidAdditionalInformationScreen from './DashboardScreens/Lucid/LucidAdditionalInformationScreen';

export type DrawerItemsMainType = {
  key: string;
  title: string;
  nav: string;
  routeName: string;
  routes: {
    nav?: string;
    routeName?: string;
    title?: string;
  }[];
};

type TabNavigatorType = {
  name: string;
  component: React.ComponentType<{}>;
  tabBarLabel: string;
  tabBarIconName: string;
};

export const TabNavigatorScreen: TabNavigatorType[] = [
  {
    name: SURVEY_TAB,
    component: SurveyTab,
    tabBarLabel: 'Survey',
    tabBarIconName: 'note-edit',
  },
  {
    name: PROFILE_TAB,
    component: ProfileTab,
    tabBarLabel: 'Profile',
    tabBarIconName: 'user',
  },
  {
    name: WALLET_TAB,
    component: WalletTab,
    tabBarLabel: 'Wallet',
    tabBarIconName: 'wallet',
  },
];

export const drawerItemsMain: DrawerItemsMainType[] = [
  {
    key: 'Point History',
    title: 'Point History',
    nav: RootScreenEnum.DASHBOARD_SCREEN,
    routeName: RootScreenEnum.POINT_HISTORY_SCREEN,
    routes: [],
  },
  {
    key: 'Payment Request',
    title: 'Payment Request(s)',
    nav: RootScreenEnum.DASHBOARD_SCREEN,
    routeName: RootScreenEnum.PAYMENT_REQUEST_SCREEN,
    routes: [],
  },
  {
    key: 'Settings',
    title: 'Settings',
    nav: '',
    routeName: '',
    routes: [
      {
        nav: RootScreenEnum.DASHBOARD_SCREEN,
        routeName: RootScreenEnum.UPDATE_PASSWORD_SCREEN,
        title: 'Update Password',
      },
      {
        nav: RootScreenEnum.DASHBOARD_SCREEN,
        routeName: RootScreenEnum.EDIT_PROFILE_SCREEN,
        title: 'Edit Profile',
      },
    ],
  },
];

const SurveyStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const WalletStack = createNativeStackNavigator();

function SurveyTab() {
  return (
    <SurveyStack.Navigator initialRouteName={SURVEY_TAB_SCREEN}>
      <SurveyStack.Screen
        name={SURVEY_TAB_SCREEN}
        component={SurveyScreen}
        options={({navigation}) => ({
          header: () => (
            <CustomHeader
              title="Survey"
              isHome={true}
              navigation={navigation}
            />
          ),
        })}
      />
    </SurveyStack.Navigator>
  );
}

function ProfileTab() {
  return (
    <ProfileStack.Navigator initialRouteName={PROFILE_TAB_SCREEN}>
      <SurveyStack.Screen
        name={PROFILE_TAB_SCREEN}
        component={ProfileScreen}
        options={({navigation}) => ({
          header: () => (
            <CustomHeader
              title="Profile"
              isHome={true}
              navigation={navigation}
            />
          ),
        })}
      />
    </ProfileStack.Navigator>
  );
}

function WalletTab() {
  return (
    <WalletStack.Navigator initialRouteName={WALLET_TAB_SCREEN}>
      <SurveyStack.Screen
        name={WALLET_TAB_SCREEN}
        component={WalletScreen}
        options={({navigation}) => ({
          header: () => (
            <CustomHeader
              title="Wallet"
              isHome={true}
              navigation={navigation}
            />
          ),
        })}
      />
    </WalletStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  const {theme} = useContext(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {TabNavigatorScreen?.map((tabMenu, index: number) => {
        const {name, component, tabBarLabel, tabBarIconName} = tabMenu;
        return (
          <Tab.Screen
            key={index}
            name={name}
            component={component}
            options={{
              tabBarLabel,
              tabBarStyle: {
                backgroundColor: theme.colors.surface,
              },
              tabBarIcon: ({color}) =>
                name === PROFILE_TAB ? (
                  <FontAwesomeIcons
                    name={tabBarIconName}
                    color={color}
                    size={26}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name={tabBarIconName}
                    color={color}
                    size={26}
                  />
                ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DashboardScreen() {
  return (
    <View style={{flex: 1}}>
      <Drawer.Navigator
        initialRouteName={RootScreenEnum.HOME_SCREEN}
        screenOptions={{headerShown: false}}
        drawerContent={props => (
          <CustomDrawerContent {...props} drawerItems={drawerItemsMain} />
        )}>
        <Drawer.Screen
          name={RootScreenEnum.HOME_SCREEN}
          component={TabNavigator}
        />
        <Drawer.Screen
          name={RootScreenEnum.POINT_HISTORY_SCREEN}
          component={PointHistoryTable}
        />
        <Drawer.Screen
          name={RootScreenEnum.PAYMENT_REQUEST_SCREEN}
          component={WithdrawalPointTable}
        />
        <Drawer.Screen name={RootScreenEnum.EDIT_PROFILE_SCREEN}>
          {props => <UpdateUserInfo {...props} isDrawerSettingItem={true} />}
        </Drawer.Screen>

        <Drawer.Screen name={RootScreenEnum.UPDATE_PASSWORD_SCREEN}>
          {props => (
            <UpdatePasswordInfo {...props} isDrawerSettingItem={true} />
          )}
        </Drawer.Screen>
        <Drawer.Screen name={RootScreenEnum.PREFERENCE_SCREEN}>
          {props => <Preference {...props} isDrawerSettingItem={true} />}
        </Drawer.Screen>

        <Drawer.Screen name={RootScreenEnum.LUCID_SURVEY_TABLE_SCREEN}>
          {props => (
            <ExtraEarningOpportunities {...props} isDrawerSettingItem={true} />
          )}
        </Drawer.Screen>
        <Drawer.Screen
          name={RootScreenEnum.ADDITIONAL_INFORMATION_SCREEN}
          component={LucidAdditionalInformationScreen}
        />
      </Drawer.Navigator>
    </View>
  );
}

export default DashboardScreen;
