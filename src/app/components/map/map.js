"use client"
import React, { useState } from 'react'
import { Outline } from "../../assets/svgs";
import { countries } from "../../data/data";
import { styles } from './mapStyles';

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
                            <div className={`position-absolute bg-light p-2 d-flex flex-column align-items-center rounded rounded-4 border-bottom border-3`} style={styles.label(country.position.left, country.position.top)}>
                                <h2 className='fs-6 bg-dark text-white px-1 rounded rounded-2'>{country.id}</h2>
                                <div className='d-flex' >
                                    <h3 className='fs-6 text-warning'>{country.price.gold}</h3>
                                    <h3 className='fs-6 text-dark'>{country.price.silver}</h3>
                                    <h3 className='fs-6' style={{ color: "#CD7F32" }}>{country.price.bronze}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Map