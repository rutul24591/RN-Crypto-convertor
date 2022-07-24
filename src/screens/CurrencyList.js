import React from "react";
import { View, StatusBar, FlatList, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from '@expo/vector-icons';

import colors  from '../constants/colors';
import currencies from '../data/currencies.json';
import { RowItem, RowSeparator } from "../components/RowItem";

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        backgroundColor: colors.blue,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const CurrencyList = ({ navigation, route= {} }) => {
    // useSafeArea is deprecated
    const insets = useSafeAreaInsets();
    const params = route?.params || {};

    return (
        <View style={{ backgroundColor: colors.white }}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
            <FlatList
                data={currencies}
                // item here is part of object using object destructuring
                renderItem={({item}) => {
                    const selected = params.activeCurrency === item;
                    return(
                        <RowItem 
                            title= { item }
                            onPress={() => {
                                params?.onChange(item)
                                navigation.pop()
                            }}
                            rightIcon = {
                                selected && (
                                    <View style={ styles.icon }>
                                        <Entypo name='check' size={20} color={colors.white} />
                                    </View>
                                )                        
                            }
                        />
                    );
                }}
                // item here is an argument unlike above
                keyExtractor={(item) => item }
                ItemSeparatorComponent={() => <RowSeparator />}
                ListFooterComponent={() => <View style={{ paddingBottom: insets.bottom }} />}
            />
        </View>
    );
}

export default CurrencyList;