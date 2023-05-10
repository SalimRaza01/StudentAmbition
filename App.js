import * as React from 'react';

import SplashScreen from './components/SplashScreen';
import Registration from './components/Registration';
import Login from './components/Login';
import SelectPre from './components/SelectPre';
// import SubjectCS2 from './components/SubjectCS2';
// import SubjectCS3 from './components/SubjectCS3';
// import SubjectCS4 from './components/SubjectCS4';
import Lectures from './components/Lectures';
import DropdownPage from './components/DropdownPage';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Lectures" component={Lectures} />
      <Stack.Screen name="DropdownPage" component={DropdownPage} />
        <Stack.Screen name="SelectPre" component={SelectPre} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}