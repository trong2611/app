import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import BottomTabs from './BottomTabs';
import LoginScreen from '../screens/LoginScreen';
import SearchScreen from '../screens/SearchScreen';
import StateScreen from '../screens/StateScreen';
import LoginComponent from '../components/login/LoginConponent';
import RegisterComponent from '../components/login/RegisterComponent';
import ForgetPassword from '../components/login/ForgetPassword';
import ForgetPasswordComponent from '../components/login/ForgetPassword';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        {/* <Stack.Screen name="home_screen" component={HomeScreen} /> */}
        <Stack.Screen name="bottom_tabs" component={BottomTabs} />
        <Stack.Screen name="login_screen" component={LoginScreen} />
        <Stack.Screen name="search_screen" component={SearchScreen} />
        <Stack.Screen name="state_screen" component={StateScreen} />
        <Stack.Screen name="login_component" component={LoginComponent} />
        <Stack.Screen name="register_component" component={RegisterComponent} />
        <Stack.Screen name="forgetpassword_component" component={ForgetPasswordComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// initialRouteName='home_screen'