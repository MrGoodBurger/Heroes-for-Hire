//This component creates the message description page
//Accepts props from the MessageContainer.js

//Features
//Image to the LEFT - INCOMPLETE-'
//Checkmark/X to the RIGHT - INCOMPLETE
//Message Description BELOW - COMPLETE

import React from "react";
import { View, Text, Image } from "react-native";
import UpdateContract from "./UpdateContract";

const Message = () => {
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