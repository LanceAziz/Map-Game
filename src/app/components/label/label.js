import React, { useRef } from 'react';
import { styles } from './labelStyles';
import { useCountryContext } from '@/app/context/countryContext';

function Label(props) {
    const label = props.country.id;
    const price = props.country.price;
    const position = props.country.labelPosition;
    const color = props.country.color;

    const { updateCountryColor } = useCountryContext();

    // Store the previous color without causing re-renders
    const prevColorRef = useRef(color);

    const colors = {
        innerGold: "#ffc107",
        innerSilver: "#949494",
        innerBronze: "#8d3f00",
        outterGold: "#dfa805",
        outterSilver: "#757575",
        outterBronze: "#5e2b01",
    };

    const colorPicker = (type) => {
        switch (type) {
            case "gold":
                return { outter: colors.outterGold, inner: colors.innerGold };
            case "silver":
                return { outter: colors.outterSilver, inner: colors.innerSilver };
            case "bronze":
                return { outter: colors.outterBronze, inner: colors.innerBronze };
            default:
                return { outter: "#000", inner: "#000" };
        }
    };

    const coinUiComponent = (coinValue, type) => (
        <div style={styles.coinOutter(colorPicker(type).outter)}>
            <div style={styles.coinInner(colorPicker(type).inner)}>
                <span>{coinValue}</span>
            </div>
        </div>
    );

    const handleMouseEnter = () => {
        // Store the current color before changing it
        prevColorRef.current = props.country.color;
        updateCountryColor(label, "#ffffff");
    };

    const handleMouseLeave = () => {
        // Revert to previous color
        updateCountryColor(label, prevColorRef.current);
    };

    return (
        <div
            className="position-absolute bg-light p-1 d-flex flex-column align-items-center rounded rounded-3 border-bottom border-3"
            style={styles.label(position.left, position.top)}
        >
            <h2
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={styles.labelName}
            >
                {label}
            </h2>

            {false && (
                <div className="d-flex">
                    {coinUiComponent(price.gold, "gold")}
                    {coinUiComponent(price.silver, "silver")}
                    {coinUiComponent(price.bronze, "bronze")}
                </div>
            )}
        </div>
    );
}

export default Label;
