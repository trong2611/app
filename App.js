import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, Text, View } from 'react-native';  
import { t, color } from 'react-native-tailwindcss';
import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import Navigation from './src/navigation/Navigation';

export default function App() {
   return (
    // <WelcomeScreen/>
    // <HomeScreen/>
    <Navigation />
    // <HomeScreen/>
  );
}

