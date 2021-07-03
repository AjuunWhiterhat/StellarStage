import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyPicsScreen from './screens/DailyPicsScreen';
import HomeScreen from './screens/HomeScreen';
import SpaceCraftScreen from './screens/SpaceCraftScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>

        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen}/>
        <Stack.Screen name="DailyPic" component={DailyPicsScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
