/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './Splash/Splash';
// import Landing from './Screen/Menu';
// import About from './Screen/About';
// import Login from './Screen/Login';
import Home from './Screen/Home';
import Menu from './Screen/Menu';
// import Profil from './Screen/Profil';
// import Feature from './Screen/Feature';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          title: 'Splash',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: 'transparent',
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          title: 'Menu',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: 'transparent',
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: 'bold',
            alignContent: 'center',
          },
        }}
      />
      {/* <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: 'transparent',
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      /> */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#D6E6F2',
          },
          headerTintColor: '#769FCD',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      {/* <Stack.Screen
        name="Feature"
        component={Feature}
        options={{
          title: 'Feature',
          headerStyle: {
            backgroundColor: '#D6E6F2',
          },
          headerTintColor: '#769FCD',
          // headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      /> */}
      {/* <Stack.Screen
        name="About"
        component={About}
        options={{
          title: 'About',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: 'transparent',
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Profil"
        component={Profil}
        options={{
          title: 'Profil',
          headerStyle: {
            backgroundColor: '#D6E6F2',
          },
          headerTintColor: '#769FCD',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default Router;
