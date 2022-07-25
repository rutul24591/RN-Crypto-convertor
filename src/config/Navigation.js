import React from "react";
//Named import
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';

import Home from'../screens/Home';
import Options from '../screens/Options';
import CurrencyList from "../screens/CurrencyList";
import colors from '../constants/colors';
import { ConversionContextProvider } from "../utils/ConversionContext";

// Configure stack navigator
const MainStack = createStackNavigator();

const MainStackScreen = () => (
    //headerMode: none is deprecated in favor of headerShown
    <MainStack.Navigator 
        // screenOptions={{ headerShown: false }} 
        // initialRouteName="CurrencyList"
    >
        <MainStack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
        <MainStack.Screen name="Options" component={Options} />
        {/* <MainStack.Screen 
            name="CurrencyList" 
            component={CurrencyList} 
            // `route` is similar to `navigation` which react navigation provides, 
            // which allows access to information about that route(namely parameters that are passed)
            options={({ route }) => ({
                title: route?.params?.title,    // route.params && route.params.title
            })}
        /> */}
    </MainStack.Navigator>
);

// NOTE: 
// For the Modal Stack to displayed above the other screens it needs to be parent.
// Top most thing will always render over its children components.
// So we will add the MainStack as a Screen to ModalStack

const ModalStack = createStackNavigator();

const ModalStackScreen = () => (
    <ModalStack.Navigator screenOptions={{ presentation: 'modal'}}>
        <ModalStack.Screen 
            name="Main"
            component={ MainStackScreen }
            // Without the headerShown set to false for MainStack, the `Main` header will be shown above a seperate
            // `Home` or `Options` headers.
            options={{ headerShown: false }} 
        />
        <ModalStack.Screen 
            name="CurrencyList" 
            component={CurrencyList} 
            // `route` is similar to `navigation` which react navigation provides, 
            // which allows access to information about that route(namely parameters that are passed)
            options={({ route, navigation }) => ({
                title: route?.params?.title,    // route.params && route.params.title
                headerLeft: null,
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.pop()} style={{ paddingHorizontal: 10 }}>
                        <Entypo name='cross' size={30} color={colors.blue} />
                    </TouchableOpacity>
                )
            })}
        />
    </ModalStack.Navigator>
);
    
/** Export default using implicit returns */
// eslint-disable-next-line react/display-name
export default () => (
    <NavigationContainer>
        <ConversionContextProvider>
            <ModalStackScreen />
        </ConversionContextProvider>
    </NavigationContainer>
);
