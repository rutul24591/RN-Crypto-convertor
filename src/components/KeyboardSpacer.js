import React, { useState, useEffect } from "react";
import { View, Keyboard, Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        left: 0, 
        right: 0,
        bottom: 0
    }
});

export const KeyboardSpacer = ({ onToggle }) => {
    const [keyboardSpace, setKeyboardSpace ] = useState(0);
    useEffect(() => {
        const showListener = Keyboard.addListener('keyboardDidShow', event => {
            // eslint-disable-next-line no-console
            console.log(event);

            const screenHeight = Dimensions.get('window').height;
            const endY = event.endCoordinates.screenY;

            setKeyboardSpace(screenHeight - endY + 20);
            onToggle(true);
        });

        const hideListener = Keyboard.addListener('keyboardDidHide', () => {     
            setKeyboardSpace(0);
            onToggle(false);
        });

        return() => {
        showListener.remove();
        hideListener.remove();
        }
    },[]);

    return (
        <View styles={ [styles.container, { height: keyboardSpace} ]}/>
    ); 
}