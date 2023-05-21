import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import ButtonTab from '../navigation/ButtonTab';
import Profile from '../screens/profile/Profile';
import Notification from '../screens/notification/Notification';
import Keep from '../screens/keep/Keep';
import Splash from '../components/Splash';
import DetailsNotification from '../components/DetailsNotification';

// Stack = buat navigasi antar screen
const Stack = createNativeStackNavigator();

// Tab = buat menu navigasi di bawah
const Tab = createBottomTabNavigator();

const ButtonTabs = () => {
  return (
    // tabBar = buat menampilkan menu navigasi di bawah
    // props = parameter yang akan di kirim ke file ButtonTab.js
    <Tab.Navigator tabBar={props => <ButtonTab {...props} />}>
      {/* headerShown = buat menghilangkan nama Tab'nya  */}
      <Tab.Screen name="Home" options={{headerShown: false}} component={Home} />
      <Tab.Screen name="Keep" options={{headerShown: false}} component={Keep} />
      <Tab.Screen
        name="Notification"
        options={{headerShown: false}}
        component={Notification}
        // passing parameter ke screen Notification
        // listener = buat mengarahkan ke screen Notification
        // tabPress = buat mengarahkan ke screen Notification
        listeners={({navigation}) => ({
          tabPress: event => {
            // event.preventDefault();
            navigation.navigate('Notification', {name: 'Notification'});
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        options={{headerShown: false}}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    // initialRouteName = screen pertama yang akan di tampilkan
    // harus sama dengan nama screen yang ada di <Stack.Screen />
    // "headerShown = false" = untuk menghilangkan header
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Main"
        options={{headerShown: false}}
        component={ButtonTabs}
      />
      {/* splash screen */}
      <Stack.Screen
        name="Splash"
        options={{headerShown: false}}
        component={Splash}
      />
      {/* screen notification */}
      <Stack.Screen
        name="DetailsNotification"
        options={{headerShown: false}}
        component={DetailsNotification}
      />
    </Stack.Navigator>
  );
};

export default Router;
