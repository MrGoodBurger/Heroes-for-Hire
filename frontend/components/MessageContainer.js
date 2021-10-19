//This component creates the template for the message container
//Accepts props from the Body component
import React from "react";
import { View, Text, Button} from 'react-native';


const MessageContainer = (contracts) => {
    console.log(contracts)
    return(
        <View>
            <Text>{contracts.contracts.name}</Text>
            <Text>{contracts.contracts.summary}</Text>
            <Button
            title="Open" />
        </View>
    )
}

export default MessageContainer;