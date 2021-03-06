import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import NewScreen from './NewScreen';
import SettingsScreen from './SettingsScreen';
import React from 'react';
import {createDrawerNavigator } from '@react-navigation/native/drawer';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
 <Tab.Navigator>
   <Tab.Screen name="Home" component={HomeScreen}/>
   <Tab.Screen name="New" component={NewScreen}/>
   <Tab.Screen name="Settings" component={SettingsScreen}/>
 </Tab.Navigator>
    </NavigationContainer>
  );
}


