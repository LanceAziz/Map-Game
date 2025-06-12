"use client"
import React, { useRef, useState } from 'react';
import { styles } from './labelStyles';
import { useCountryContext } from '@/app/context/countryContext';
import { useTeamsContext } from '@/app/context/teamContext';
import { colorMapper } from '@/app/utils/colors';
import { postTeam } from '@/app/api/apis';

function Label(props) {
    const label = props.country.id;
    const price = props.country.price;
    const position = props.country.labelPosition;
    const color = props.country.color;

    const { updateCountryColor, updateCountry } = useCountryContext();
    const { teams, updateTeam } = useTeamsContext()
    const [isOptionsShown, setIsOptionShown] = useState(false)

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

    const toggleOptionsShowing = () => {
        if (isOptionsShown) setIsOptionShown(false)
        else setIsOptionShown(true)
    }

    const handleAssign = (team) => {
        team.addCountry(props.country)
        updateTeam(team)
        updateCountry(props.country)
        setIsOptionShown(false)
    }

    const handleUnassign = () => {
        // Loop over all teams and remove the country if it exists in their countries list
        teams.forEach(team => {
            // Assuming team.removeCountry exists and removes the country from team.countries
            team.removeCountry(props.country);
            // After removal, update the team in your context or state
            updateTeam(team);
        });

        // Update the country to remove its assigned team & color
        updateCountry({
            ...props.country,
            assignedTeam: null,
            color: null,
        });

        setIsOptionShown(false);
    };


    return (
        <div style={styles.container}>
            {isOptionsShown &&
                <div className="bg-light p-1 d-flex flex-column align-items-center rounded rounded-3 border-bottom border-3" style={styles.options(position.left, position.top)}>
                    <h2 onClick={postTeam} style={styles.labelName}>Un-Assign</h2>
                    {teams.map((team) => {
                        return <h2 key={team.id} onClick={() => handleAssign(team)} className={`${colorMapper.bg[team.color]} ${colorMapper.border[team.color]}`} style={styles.labelName}>{team.name}</h2>
                    })}
                </div>}

            {props.labelBox &&
                <div className="bg-light p-1 d-flex flex-column align-items-center rounded rounded-3 border-bottom border-3" style={styles.label(position.left, position.top)}>
                    <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={toggleOptionsShowing} onAbort={toggleOptionsShowing} style={styles.labelName}>
                        {label}
                    </h2>

                    {props.labelPrice && (
                        <div className="d-flex">
                            {coinUiComponent(price.gold, "gold")}
                            {coinUiComponent(price.silver, "silver")}
                            {coinUiComponent(price.bronze, "bronze")}
                        </div>
                    )}
                </div>
            }
        </div>

    );
}

export default Label;
