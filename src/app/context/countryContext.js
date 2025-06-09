"use client";
import React, { createContext, useContext, useState } from 'react';
import { countries as initialCountries } from '../data/data';

const CountryContext = createContext();

export const CountryContextProvider = ({ children }) => {
    const [countries, setCountries] = useState(initialCountries);

    const updateCountryColor = (countryId, newColor) => {
        setCountries(prev =>
            prev.map(country =>
                country.id === countryId ? { ...country, color: newColor } : country
            )
        );
    };

    const updateCountry = (updatedCountry) => {
        setCountries(prev =>
            prev.map(country => country.id === updatedCountry.id ? updatedCountry : country)
        );
    };


    return (
        <CountryContext.Provider value={{ countries, setCountries, updateCountry, updateCountryColor }}>
            {children}
        </CountryContext.Provider>
    );
};

export const useCountryContext = () => useContext(CountryContext);
