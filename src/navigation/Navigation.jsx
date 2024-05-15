import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        {/* <Stack.Screen name="home_screen" component={HomeScreen} /> */}
        <Stack.Screen name="bottom_tabs" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// initialRouteName='home_screen'