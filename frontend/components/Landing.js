//This is the Landing page that the user sees after the Login/SignUp page. It will populate the user's notifications

//Features
//Only Renders its Children
// Header with Chat and Account Redirecting Icons
// Body has current Contracts, Open/New

import React from "react";
import Header from "./Header";


const Landing = () => {
    return(
        <View>
            <Header
            />
            <Body
            />
        </View>
    );
}

export default Landing;