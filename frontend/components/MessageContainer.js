//This component creates the template for the message container
//Accepts props from the Body component
import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { db } from "../config";
import { deleteDoc, doc } from "@firebase/firestore";




const MessageContainer = ({ contract, id }) => {
    const deleteContract = async(id) => {
        const currentContract = doc(db, "contracts", id);
        deleteDoc(currentContract);
    }
    return(
        <View style={styles.container}
        >
            <View style={styles.nameTextContainer}>
                <Text style={styles.text}>${contract.price}</Text>
            </View>
            <View style={styles.summaryTextContainer}>
                <Text style={styles.text}>{contract.summary}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                title="Delete" 
                onPress={() => deleteContract(id)}
                />
                <View/>
                <Button
                title="Edit"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderColor: 'grey'
    },
    nameTextContainer: {
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    summaryTextContainer:{
        justifyContent: 'flex-start',

    },
    buttonContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text : {
        color: 'white',
        fontSize: 21,
    }
})

export default MessageContainer;