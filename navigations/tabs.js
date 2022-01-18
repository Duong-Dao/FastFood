import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import React from 'react';
import { Image } from 'react-native';
import { COLORS, icons } from '../constants';
import User from '../screens/UserScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();


export default function Tabs() {
   return (
      <Tab.Navigator
         screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
         }}
         initialRouteName="Home">
         <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
               tabBarIcon: ({ focused }) => (
                  <Image
                     source={icons.cutlery}
                     resizeMode="contain"
                     style={{
                        height: 25,
                        width: 25,
                        tintColor: focused ? COLORS.primary : COLORS.secondary,
                     }}></Image>
               ),
            }}
         />

         <Tab.Screen
            name="Like"
            component={CartScreen}
            options={{
               tabBarIcon: ({ focused }) => (
                  <Image
                     source={icons.like}
                     resizeMode="contain"
                     style={{
                        height: 25,
                        width: 25,
                        tintColor: focused ? COLORS.primary : COLORS.secondary,
                     }} />
               ),
            }}
         />
         <Tab.Screen
            name="User"
            component={User}
            options={{
               tabBarIcon: ({ focused }) => (
                  <Image
                     source={icons.user}
                     resizeMode="contain"
                     style={{
                        height: 25,
                        width: 25,
                        tintColor: focused ? COLORS.primary : COLORS.secondary,
                     }}></Image>
               ),
            }}
         />
      </Tab.Navigator>
   );
}
