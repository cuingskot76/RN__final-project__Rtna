import React from 'react';
import{StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile'
import AddScreen from '../screens/add';
import SearchScreen from '../screens/search';
import NotificationScreen from '../screens/notification';

const Tab = createBottomTabNavigator();
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...style.shadow
        }}>
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#e32f45'
        }}>
        </View>
    </TouchableOpacity>
const CustomTabBarButton = () => ();
const Tabs = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#ffff',
                borderRadius: 15,
                height: 90,
                ...style.shadow
            }}
        >
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10, }}>
                <Image>
                    source={require(''../../..public/assets/tab_icon/home.png;)}
                    resizeMode='contain'
                    style={{
                        width: 25,
                        height: 25,
                        tinColor: focused ? '#e32f45' : '#74Bc94'
                    }}
                    <Text 
                        style={{focused ? '#e32f45' : '#74Bc94', fontSize: 12}}>
                            HOME</Text>
                </Image>
            </View>
        ) 
        }}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10, }}>
                <Image>
                    source={require(''../../..public/assets/tab_icon/home.png;)}
                    resizeMode='contain'
                    style={{
                        width: 25,
                        height: 25,
                        tinColor: focused ? '#e32f45' : '#74Bc94'
                    }}
                    <Text 
                        style={{focused ? '#e32f45' : '#74Bc94', fontSize: 12}}>
                            Search</Text>
                </Image>
            </View>
        ) 
        }}/>
      <Tab.Screen name="Add" component={AddScreen} options={{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10, }}>
                <Image>
                    source={require(''../../..public/assets/tab_icon/home.png;)}
                    resizeMode='contain'
                    style={{
                        width: 25,
                        height: 25,
                        tinColor: focused ? '#e32f45' : '#74Bc94'
                    }}
                    <Text 
                        style={{focused ? '#e32f45' : '#74Bc94', fontSize: 12}}>
                            Add</Text>
                </Image>
            </View>
        ) 
        }}/>
      <Tab.Screen name="Notification" component={NotificationScreen} options={{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10, }}>
                <Image>
                    source={require(''../../..public/assets/tab_icon/home.png;)}
                    resizeMode='contain'
                    style={{
                        width: 25,
                        height: 25,
                        tinColor: focused ? '#e32f45' : '#74Bc94'
                    }}
                    <Text 
                        style={{focused ? '#e32f45' : '#74Bc94', fontSize: 12}}>
                            Notification</Text>
                </Image>
            </View>
        ) 
        }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10, }}>
                <Image>
                    source={require(''../../..public/assets/tab_icon/home.png;)}
                    resizeMode='contain'
                    style={{
                        width: 25,
                        height: 25,
                        tinColor: focused ? '#e32f45' : '#74Bc94'
                    }}
                    <Text 
                        style={{focused ? '#e32f45' : '#74Bc94', fontSize: 12}}>
                            HOME</Text>
                </Image>
            </View>
        ) 
        }}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOfset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5

    }
})

export default Tabs;