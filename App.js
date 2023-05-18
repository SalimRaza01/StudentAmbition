import * as React from 'react';

import SplashScreen from './components/SplashScreen';
import Registration from './components/Registration';
import Login from './components/Login';
import SelectPre from './components/SelectPre';
import Lectures from './components/Lectures';
import DropdownPage from './components/DropdownPage';
import CompleteReg from './components/CompleteReg';
import AboutPage from './components/AboutPage';
import HomeScreen from './components/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SelectPre" component={SelectPre} />
        <Stack.Screen name="CompleteReg" component={CompleteReg} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AboutPage" component={AboutPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Lectures" component={Lectures} />
        <Stack.Screen name="DropdownPage" component={DropdownPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}