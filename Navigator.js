import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './screens/LandingScreen/LandingScreen';
import SwipeableScreen from './screens/SwipeableScreen/SwipeableScreen';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Swipeable" component={SwipeableScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
