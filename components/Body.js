//This component will render the Messages on the landing page,


//Features
//Passes Props into MessageContainer -INCOMPLETE
//Button that allows user to make new messages - INCOMPLETE

import React from 'react';
import { Button, ScrollView } from 'react-native';
import MessageContainer from './MessageContainer';


const Body = () => {
    return(
        <ScrollView>
            <MessageContainer
                />
            <Button></Button>
        </ScrollView>
        
    );
}

export default Body;