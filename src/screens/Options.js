import React from "react";
import { SafeAreaView, ScrollView, Linking, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import { RowItem, RowSeparator } from "../components/RowItem";

// eslint-disable-next-line no-console
console.log("hello");

const openLink = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert("Sorry! Something went wrong.", "Please try again later");
  });
};

// eslint-disable-next-line react/display-name
export default () => {
  {
    /*SafeAreaView is used to place content in mobile screen view and not make it appear out of bound*/
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*ScrollView is used to provide scroll bar to view content.
      [NOTE] Dont use ScrollView if you have 10000 items, but 10-20 items is good.*/}
      <ScrollView>
        <RowItem
          title="Themes"
          onPress={() => alert("todo!")}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />

        <RowItem
          title="React Native Basics"
          onPress={() =>
            openLink(
              "https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter"
            )}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeparator />

        <RowItem
          title="React Native by Example132"
          onPress={() => openLink("https://reactnativebyexample.com")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
