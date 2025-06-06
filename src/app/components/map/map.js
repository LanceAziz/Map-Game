"use client"
import React, { useState } from 'react'
import { Outline } from "../../assets/svgs";
import { countries } from "../../data/data";
import { styles } from './mapStyles';
import Label from '../label/label';

function Map() {
    const [countryColors, setCountryColors] = useState({});

    // Step 2: Handle click
    const handleCountryClick = (id, color) => {
        console.log(id);
        setCountryColors((prev) => ({
            ...prev,
            [id]: color,
        }));
    };

    return (
        <div className="col-lg-8 col-md-6 d-flex justify-content-center align-items-center" style={styles.container}>
            <div style={styles.outlineContainer}>
                <Outline style={styles.outline} />
            </div>
            <div style={styles.countryContainer}>
                {countries.map((country, index) => {
                    const currentColor = countryColors[country.id] || country.color;
                    const CountryComponent = country.icon
                    return (
                        <div key={index}>
                            <CountryComponent onClick={() => handleCountryClick(country.id, "red")} style={styles.country(country.position.left, country.position.top, country.size, currentColor)} />
                            <Label country={country}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Map