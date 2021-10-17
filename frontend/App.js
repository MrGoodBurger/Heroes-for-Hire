
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import { db } from './config';
import { collection, getDoc } from '@firebase/firestore';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUsers] = useState([]);
  const userReference = collection(db, "users")
  useEffect(() => {

    const getUsers = async () => {
      const data = await getDoc(userReference)
      console.log(data);


    ;}
      getUsers();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
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
