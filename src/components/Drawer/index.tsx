import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../../screens/DashboardScreens/ProfileScreens';
import TabNavigator from '../../screens/DashboardScreen';
import PointHistoryTable from '../../screens/DashboardScreens/WalletScreens/PointHistoryTable';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Tabs">
      <Drawer.Screen
        name="Tabs"
        component={TabNavigator}
        options={{drawerLabel: 'TabNavigator'}}
      />
      <Drawer.Screen
        name="payment Request"
        component={PointHistoryTable}
        options={{drawerLabel: 'Payment Request'}}
      />
      <Drawer.Screen
        name="paymenpointHistory"
        component={Profile}
        options={{drawerLabel: 'Point History'}}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
