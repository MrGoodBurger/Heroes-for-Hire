//This component will render the Messages on the landing page,


//Features
//Passes Props into MessageContainer -COMPLETE
//Button that allows user to make new messages - INCOMPLETE

import React, { useState, useEffect } from 'react';
import { Button, ScrollView, View } from 'react-native';
import MessageContainer from './MessageContainer';
import { db } from '../config'
import { collection, getDocs } from '@firebase/firestore';


const Body = () => {
    const [contracts, showContracts] = useState([]);
    const contractReference = collection(db, "contracts")
    useEffect(() => {
      const getContracts = async () => {
        // console.log(userReference)
        const data = await getDocs(contractReference);
        showContracts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      ;}
        getContracts();
    }, []);

    return(
        <View>
            {contracts.map((contracts, idx) => {
                return(
                        <MessageContainer
                        contracts={contracts} key={idx}/>
                )
            })}
            {/* <Button
            title="Create New Contract?"
            onPress */}
        </View>
        
    );
}

export default Body;