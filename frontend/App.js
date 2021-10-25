
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Landing from './components/Landing';
import Message from './components/Message';
import SignUp from './components/SignUp';
import CreateContract from './components/CreateContract';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={SignUp}/>
        <Stack.Screen name="Home"  component={Landing}/>
        <Stack.Screen name="Contract" component={Message}/>
        <Stack.Screen name="Create Contract" component={CreateContract}/>
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
