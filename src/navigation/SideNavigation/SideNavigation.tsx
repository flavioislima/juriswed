import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import {Home, Notifications, Comments} from '../../screens';

const Drawer = createDrawerNavigator();

export const SideNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Comments" component={Comments} />
        <Drawer.Screen name="Notifications" component={Notifications} />
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
