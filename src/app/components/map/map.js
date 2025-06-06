"use client"
import React from 'react';
import { Outline } from "../../assets/svgs";
import { styles } from './mapStyles';
import Label from '../label/label';
import { useCountryContext } from '@/app/context/countryContext';

function Map() {
    const { countries } = useCountryContext();

    return (
        <div className="col-lg-8 col-md-6 d-flex justify-content-center align-items-center" style={styles.container}>
            <div style={styles.outlineContainer}>
                <Outline style={styles.outline} />
            </div>
            <div style={styles.countryContainer}>
                {countries.map((country, index) => {
                    const CountryComponent = country.icon;
                    return (
                        <div key={index}>
                            <CountryComponent
                                onClick={() => handleCountryClick(country.id, "red")} // or toggle dynamically
                                style={styles.country(
                                    country.position.left,
                                    country.position.top,
                                    country.size,
                                    country.color
                                )}
                            />
                            <div style={styles.labelContainer}>
                                <Label country={country} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Map;
