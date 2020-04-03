import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {BottomNavigation} from './BottomNavigation';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          name="Tabs"
          component={BottomNavigation}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
