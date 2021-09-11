import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DetailProductScreen from '../screens/DetailProductScreen';
import CartScreen from '../screens/CartScreen';
import Tabs from './tabs';
import User from '../screens/UserScreen';
import Login from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TabHome" component={Tabs} />
        <Stack.Screen name="Detail" component={DetailProductScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
