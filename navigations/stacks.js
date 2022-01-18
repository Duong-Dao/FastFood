import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FoodInfoScreen from '../screens/FoodInfoScreen'
import CartScreen from '../screens/CartScreen';
import Tabs from './tabs';
import User from '../screens/UserScreen';
import Login from '../screens/LoginScreen';
import Register from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export default function Home() {
   return (
      <NavigationContainer>
         <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
               headerShown: false,
            }}>
            <Stack.Screen name="TabHome" component={Tabs} />
            <Stack.Screen name="Info" component={FoodInfoScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="Register" component={Register} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
