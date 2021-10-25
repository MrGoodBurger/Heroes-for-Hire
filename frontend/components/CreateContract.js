//This component willcreate the forms that allows users to input thier info.

import React, { useState } from 'react';
import { View, Text, TextInputBase, TextInput, Button, StyleSheet } from 'react-native';
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../config';
import { useNavigation } from '@react-navigation/native';

const CreateContract = ({ navigation }) => {
    const [name, setName] = useState('')
    const [summary, setSummary] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    const contractsCollectionRef = collection(db, 'contracts')

    const createContractFunction = async () => {
        await addDoc(contractsCollectionRef, { name: name, summary: summary, price: price, description: description });
    };

    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Name</Text>
                <TextInput
                style={styles.input}
                onChangeText={setName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Summary</Text>
                <TextInput
                style={styles.input}
                onChangeText={setSummary}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Price</Text>
                <TextInput
                style={styles.input}
                onChangeText={setPrice}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Description</Text>
                <TextInput
                style={styles.input}
                onChangeText={setDescription}
                />
            </View>
            <Button
             title="Submit"
             onPress={
                 () => {createContractFunction(); navigation.navigate('Home'); }
             }
             />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#262626',
    },
    inputContainer:{
        width: '80%'
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    text: {
        color: 'white',
        fontSize: 21,
    }
})

export default CreateContract;