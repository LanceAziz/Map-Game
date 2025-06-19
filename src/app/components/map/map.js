"use client"
import React, { useState } from 'react';
import { styles } from './mapStyles';
import Label from '../label/label';
import { useCountryContext } from '@/app/context/countryContext';

function Map() {
    const { countries } = useCountryContext();
    const [labelBox, setLabelBox] = useState(true)
    const [labelPrice, setLabelPrice] = useState(false)
    const [currentCountryOption, setCurrentCountryOption] = useState(null);
    const [showallCountries, setShowAllCountries] = useState(true);

    const handelToggleLabelBox = () => {
        labelBox ? setLabelBox(false) : setLabelBox(true)
    }
    const handelToggleLabelPrice = () => {
        labelPrice ? setLabelPrice(false) : setLabelPrice(true)
    }

    return (
        <div className="col-lg-8 col-md-6 d-flex justify-content-center align-items-center" style={styles.container}>
            <div style={styles.countryContainer}>
                <div className='position-absolute'>
                    <div className=" ms-5 mt-4 d-flex align-items-center">
                        <input onChange={handelToggleLabelBox} className="form-check-input p-3 rounded rounded-5" type="checkbox" checked={labelBox} />
                        <label className="form-check-label fs-4 ps-2 btn-info">Show Label</label>
                    </div>
                    {labelBox &&
                        <div className="ms-5 mt-4 d-flex align-items-center">
                            <input onChange={handelToggleLabelPrice} className="form-check-input p-3 rounded rounded-5" type="checkbox" checked={labelPrice} />
                            <label className="form-check-label fs-4 ps-2 btn-info">Show Prices</label>
                        </div>}
                </div>
                {countries.map((country, index) => {
                    const CountryComponent = country.icon;
                    return (
                        <div key={index}>
                            <CountryComponent
                                style={styles.country(
                                    country.position.left,
                                    country.position.top,
                                    country.size,
                                    country.color
                                )}
                            />
                            {(showallCountries || currentCountryOption == country.id) &&
                                <div style={styles.labelContainer}>
                                    <Label labelBox={labelBox} labelPrice={labelPrice} country={country} setCurrentCountryOption={setCurrentCountryOption} setShowAllCountries={setShowAllCountries} />
                                </div>
                            }
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Map;
