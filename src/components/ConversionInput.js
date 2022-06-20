// import React from "react";
// import {
//   View,
//   TouchableOpacity,
//   StyleSheet,
//   Text,
//   TextInput,
// } from "react-native";
// import colors from "../constants/colors";

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.white,
//     marginVertical: 10,
//     marginHorizontal: 20,
//     borderRadius: 5,
//     flexDirection: "row",
//   },
//   button: {
//     padding: 15,
//     borderColor: colors.border,
//     borderWidth: 1,
//     borderTopLeftRadius: 5,
//     borderBottomLeftRadius: 5,
//     backgroundColor: colors.white,
//   },
//   buttonText: {
//     fontSize: 18,
//     color: colors.blue,
//     fontWeight: "bold",
//   },
//   input: {
//     padding: 10,
//     fontSize: 16,
//     backgroundColor: "red",
//     color: colors.textLight,
//     flex: 1,
//   },
// });

// export const ConversionInput = ({ text, onButtonPress, ...props }) => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button} onPress={onButtonPress}>
//         <Text style={styles.buttonText}>{text}</Text>
//       </TouchableOpacity>
//       <TextInput styles={styles.input} {...props} />
//     </View>
//   );
// };

// With out this eslint throws error `'value' is missing in props validation`
// ConversionInput.propTypes = {
// 	text: PropTypes.number,
// 	value: PropTypes.number,
// 	onButtonPress: PropTypes.func,
// };

// OR

// in eslint.rc
//  add "react/prop-types": 0 (in rules) to ignore this error


import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 5,
  },
  button: {
    padding: 15,
    borderRightColor: colors.border,
    borderRightWidth: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: colors.textLight,
  },
});

export const ConversionInput = ({ text, onButtonPress, ...props }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...props} />
    </View>
  );
}