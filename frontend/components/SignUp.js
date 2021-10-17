//This is the SignUp component, it allows the user to input their information and create thier user profile

//Features
//Create backend input - INCOMPLETE
//Input Forms - INCOMPLETE

import React from "react";
import { View, Text, TextInput, StyleSheet} from 'react-native';

const SignUp = () => {
    return(
        <View>
            <Text>Name</Text>
            <TextInput
            style={styles.input}
            defaultValue="Username"
            />
            <Text>Password</Text>
            <TextInput
            style={styles.input}
            defaultValue="Password"
            />
            <Text>Confirm Password</Text>
            <TextInput
            style={styles.input}
            defaultValue="Password"
            />
        </View>

    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default SignUp;