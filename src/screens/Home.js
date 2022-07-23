
import React,{ useState } from 'react';
import { 
  View, 
  StyleSheet, 
  StatusBar, 
  Dimensions, 
  Image, 
  Text, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import { format } from 'date-fns';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../constants/colors';
import { ConversionInput } from '../components/ConversionInput';
import { Button } from '../components/Button';
import { KeyboardSpacer } from '../components/KeyboardSpacer';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    // justifyContent: 'center',
    // paddingTop: screen.height * 0.2
  },
  content: {
    paddingTop: screen.height * 0.1
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: colors.white,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    marginVertical: 20
  },
  text: {
    color: colors.white,
    fontSize: 13,
    textAlign: 'center',
  },
  header: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
  }
});


// eslint-disable-next-line react/display-name
// export default () => {}

const Home = ({ navigation }) => {
  const baseCurrency = 'USD',
        quoteCurrency = 'GBP';
  
  const conversionRate = 0.8435;
  const date = new Date();

  const [scrollEnabled, setScrollEnabled ] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={ scrollEnabled }>
        <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push('Options')}>
            <Entypo name='cog' size={32} color={colors.white}/>
          </TouchableOpacity>         
        </SafeAreaView>
        
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/background.png')}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.textHeader}>Currency Convertor</Text>

          <ConversionInput
            text={baseCurrency}
            value="123"
            onButtonPress={() => alert('todo!')}
            keyboardType="numeric"
            // eslint-disable-next-line no-console
            onChangeText={(text) => console.log('text', text)}
          />
          <ConversionInput
            text={quoteCurrency}
            value="123"
            onButtonPress={() => alert('todo!')}
            // eslint-disable-next-line no-console
            onChangeText={(text) => console.log('text', text)}
            editable={false}
          />
          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(date, 'MMMM do, yyyy')}`}
          </Text>

          <Button text="Convert" onPress={() => alert("Button Pressed")}></Button>

          {/* <View style={{ height :  screen.height}}/> */}
          <KeyboardSpacer onToggle={(keyboardIsVisible) => setScrollEnabled(keyboardIsVisible)}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;