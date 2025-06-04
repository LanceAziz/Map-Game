import React from 'react'
import { Outline } from "../../assets/svgs";
import { countries } from "../../data/data";
import { styles } from './mapStyles';

function Map() {
    return (
        <div className="col-lg-8 col-md-6 d-flex justify-content-center align-items-center" style={styles.container}>
            <div style={styles.outlineContainer}>
                <Outline style={styles.outline} />
            </div>
            <div style={styles.countryContainer}>
                {countries.map((country, index) => {
                    const CountryComponent = country.icon
                    return (
                        <CountryComponent key={index} style={styles.country(country.position.left, country.position.top, country.size, country.color)} />
                    )
                })}
            </div>
        </div>
    )
}

export default Map