//This component willcreate the forms that allows users to input thier info.

import React, { useState } from 'react';
import { View, Text, TextInputBase, TextInput, Button, StyleSheet } from 'react-native';
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../config';

const CreateContract = () => {
    const [name, setName] = useState('')
    const [summary, setSummary] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    const contractsCollectionRef = collection(db, 'contracts')

    const createContractFunction = async () => {
        await addDoc(contractsCollectionRef, { name: name, summary: summary, price: price, description: description });
    };

    return(
        <View>
            <Text>Name</Text>
            <TextInput
            style={styles.input}
            onChangeText={setName}
            />
            <Text>Summary</Text>
            <TextInput
            style={styles.input}
            onChangeText={setSummary}
            />
            <Text>Price</Text>
            <TextInput
            style={styles.input}
            onChangeText={setPrice}
            />
            <Text>Description</Text>
            <TextInput
            style={styles.input}
            onChangeText={setDescription}
            />
            <Button
             title="Submit"
             onPress={createContractFunction}/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default CreateContract;