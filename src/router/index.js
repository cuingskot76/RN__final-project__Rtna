import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';

// Stack = buat navigasi antar screen
const Stack = createNativeStackNavigator();

// Tab = buat menu navigasi di bawah
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    // initialRouteName = screen pertama yang akan di tampilkan
    // harus sama dengan nama screen yang ada di <Stack.Screen />
    // "headerShown = false" = untuk menghilangkan header
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        options={{headerShown: false}}
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default Router;
