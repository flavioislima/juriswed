import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Home, Notifications, Comments} from '../../screens';

const Tab = createBottomTabNavigator();

const tabStyles = {
  showLabel: false,
  activeTintColor: '#FECC00',
  style: {
    backgroundColor: '#006AA7',
  },
};

const colorHandler = (isFocused: boolean) => {
  if (isFocused) {
    return '#FECC00';
  }

  return '#ffffff';
};

export const BottomNavigation = (): JSX.Element => {
  return (
    <Tab.Navigator tabBarOptions={tabStyles}>
      <Tab.Screen
        name="Sidebar"
        component={Comments}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon size={30} name="menu" color={colorHandler(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="Comments"
        component={Comments}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon size={30} name="message" color={colorHandler(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              size={30}
              name="notifications-active"
              color={colorHandler(focused)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon size={30} name="home" color={colorHandler(focused)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
