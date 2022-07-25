import React, { useState, createContext } from 'react';

export const ConversionContext = createContext();

export const ConversionContextProvider = ({ children }) => {
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [quoteCurrency, setQuoteCurrency] = useState('GBP');

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
        setQuoteCurrency
    }

    return(
        <ConversionContext.Provider value={ contextValue }>
            { children }
        </ConversionContext.Provider>
    );
}

