//This is the Login Page. The Login page is designed to allow to user to input their creditianls to enter the app.

//Features
//User Authentication - INCOMPLETE
//Remember Me - INCOMPLETE
//Redirect to SignUp - INCOMPLETE

import React from "react";
import { Text, TextInput, View, StyleSheet, Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Login = () => {
    return(
        <View>
            <Text>Welcome to Heroes For Hire!</Text>
            <Text>Login</Text>
            <TextInput
            style={styles.input}
            defaultValue="Username"
            />
            <Text>Password</Text>
            <TextInput
            style={styles.input}
            defaultValue="Password"
            />
            <Text>Not A Member?</Text>
            <Button/>
        </View>
        
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default Login;