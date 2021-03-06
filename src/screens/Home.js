
import React, { useState, useContext } from 'react';
import { 
  View, 
  StyleSheet, 
  StatusBar, 
  Dimensions, 
  Image, 
  Text, 
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { format } from 'date-fns';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../constants/colors';
import { ConversionInput } from '../components/ConversionInput';
import { Button } from '../components/Button';
import { KeyboardSpacer } from '../components/KeyboardSpacer';
import { ConversionContext } from '../utils/ConversionContext';

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
  /** Both of the below lines moved to utils/ConversionContext.js to make use of context  */
  // const [baseCurrency, setBaseCurrency] = useState('USD');
  // const [quoteCurrency, setQuoteCurrency] = useState('GBP');
  const [value, setValue] = useState('1');

  const {
    baseCurrency,
    quoteCurrency,
    swapCurrencies,
    date,
    rates,
    isLoading
  } = useContext(ConversionContext);

  const conversionRate = rates && rates[quoteCurrency];

  // eslint-disable-next-line no-console
  console.log("Conversion Rate: ", conversionRate);

  /** Below function moved to utils/ConversionContext.js to make use of context  */
  // const swapCurrencies = () => {
  //   setBaseCurrency(quoteCurrency);
  //   setQuoteCurrency(baseCurrency);
  // }

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

          { isLoading ? (
              <ActivityIndicator color={colors.white} size='large'/> 
            ) : (
                <>
                  <ConversionInput
                    text={baseCurrency}
                    value={ value }
                    // Drilling down props
                    onButtonPress={() => 
                      navigation.push('CurrencyList', { 
                        title: 'Base Currency', 
                        // activeCurrency : baseCurrency, 
                        // onChange: (currency) => setBaseCurrency(currency),
                        isBaseCurrency: true
                      })
                    }  
                    keyboardType="numeric"
                    // eslint-disable-next-line no-console
                    onChangeText={(text) => setValue(text)}
                  />
                  <ConversionInput
                    text={quoteCurrency}
                    value={ 
                      value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
                    }
                    // Drilling down props
                    onButtonPress={() => 
                      navigation.push('CurrencyList', { 
                        title: 'Quote Currency', 
                        // activeCurrency : quoteCurrency, 
                        // onChange: (currency) => setQuoteCurrency(currency), 
                        isBaseCurrency: false
                      })
                    } 
                    // eslint-disable-next-line no-console
                    onChangeText={(text) => console.log('text', text)}
                    editable={false}
                  />
                  <Text style={styles.text}>
                    {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${date && format(new Date(date), 'MMMM do, yyyy')}`}
                  </Text>

                  <Button text="Reverse currencies" onPress={() => swapCurrencies()}></Button>
                </>
              )
          }
          {/* <View style={{ height :  screen.height}}/> */}
          <KeyboardSpacer onToggle={(keyboardIsVisible) => setScrollEnabled(keyboardIsVisible)}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;