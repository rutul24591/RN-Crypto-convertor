import React from "react";
//Named import
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Home from'../screens/Home';
import Options from '../screens/Options';
import CurrencyList from "../screens/CurrencyList";

// Configure stack navigator
const MainStack = createStackNavigator();

const MainStackScreen = () => (
    //headerMode: none is deprecated in favor of headerShown
    <MainStack.Navigator 
        // screenOptions={{ headerShown: false }} 
        // initialRouteName="Options"
    >
        <MainStack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
        <MainStack.Screen name="Options" component={Options} />
        <MainStack.Screen name="CurrencyList" component={CurrencyList}/>
    </MainStack.Navigator>
);
    
/** Export default using implicit returns */

// eslint-disable-next-line react/display-name
export default () => (
    <NavigationContainer>
        <MainStackScreen />
    </NavigationContainer>
);
