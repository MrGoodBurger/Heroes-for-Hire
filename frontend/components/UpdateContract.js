import React, { useState } from 'react';
import { View, Text, TextInputBase, TextInput, Button, StyleSheet } from 'react-native';
import { collection, updateDoc, doc } from 'firebase/firestore'
import { db } from '../config';

const UpdateContract = (id, name, price, description, summary) => {
    const updateContractFunction = async(id) => {
        const newFields = {name : name, price : price, description: description, summary: summary}
        const contractDoc = doc(db, 'contracts', id)
        await updateDoc(contractDoc, newFields)
    }   
    return(
        <Button
        title="Update Contract"
        onPress={updateContractFunction}/>

    );
};

export default UpdateContract;