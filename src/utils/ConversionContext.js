import React, { useState, createContext, useEffect } from 'react';
import { Alert } from 'react-native';
import { api } from './api';

export const ConversionContext = createContext();
const DEFAULT_BASE_CURRENCY = 'USD';
const DEFAULT_QUOTE_CURRENCY = 'GBP';

export const ConversionContextProvider = ({ children }) => {
    const [baseCurrency, _setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY);
    const [quoteCurrency, setQuoteCurrency] = useState(DEFAULT_QUOTE_CURRENCY);
    const [date, setDate] = useState();
    const [rates, setRates] = useState();
    const [isLoading, setIsLoading] = useState(true);

    //Override 
    const setBaseCurrency = async (currency) => {
        setIsLoading(true);
        return api(`/latest?base=${currency}`)
            .then((response) => {
                // eslint-disable-next-line no-console
                console.log('Response: ', response);
                _setBaseCurrency(currency);
                setDate(response.date);
                setRates(response.rates);
            })
            .catch((error) => {
                // eslint-disable-next-line no-console
                console.log('Error: ', error);
                Alert.alert('Sorry, something went wrong!', error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const swapCurrencies = () => {
        setBaseCurrency(quoteCurrency);
        setQuoteCurrency(baseCurrency);
    }

    // Creating an object of data to create context and then access it across the application
    const contextValue = {
        baseCurrency,
        quoteCurrency,
        swapCurrencies,
        setBaseCurrency,
        setQuoteCurrency,
        date,
        rates,
        isLoading
    }

    useEffect(() => {
        setBaseCurrency(DEFAULT_BASE_CURRENCY);
    },[]);

    return(
        <ConversionContext.Provider value={ contextValue }>
            { children }
        </ConversionContext.Provider>
    );
}

