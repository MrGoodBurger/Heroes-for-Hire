//This component creates the message description page
//Accepts props from the MessageContainer.js

//Features
//Image to the LEFT - INCOMPLETE-'
//Checkmark/X to the RIGHT - INCOMPLETE
//Message Description BELOW - COMPLETE

import React from "react";
import { View, Text, Image } from "react-native";
import UpdateContract from "./UpdateContract";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Message = ({ route }) => {
    const { id } = route.params;
    return(
        <View>
            <Image></Image>
            <Text></Text>
            <Text></Text>
            <View>
                <UpdateContract
                id ={id}/>
            </View>
        </View>

    );
}

export default Message;