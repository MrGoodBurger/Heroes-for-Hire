//This is the Landing page that the user sees after the Login/SignUp page. It will populate the user's notifications

//Features
//Only Renders its Children
// Header with Chat and Account Redirecting Icons
// Body has current Contracts, Open/New

import React from "react";
import Header from "./Header";
import { Button, TouchableOpacity, View, StyleSheet } from "react-native";
import Body from "./Body";
import { useNavigation } from "@react-navigation/native";

const Landing = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Body
            />
            <View>
                <Button
                title="Create Contract"
                onPress={() => navigation.navigate('Create Contract')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
},
})

export default Landing;