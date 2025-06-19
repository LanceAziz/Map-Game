"use client"
import React, { useRef, useState } from 'react';
import { styles } from './labelStyles';
import { useCountryContext } from '@/app/context/countryContext';
import { useTeamsContext } from '@/app/context/teamContext';
import { colorMapper } from '@/app/utils/colors';
import { getData, postData } from '@/app/api/apis';
import toast from 'react-hot-toast';

function Label(props) {
    const label = props.country.id;
    const price = props.country.price;
    const position = props.country.labelPosition;
    const color = props.country.color;
    const setCurrentCountryOption = props.setCurrentCountryOption;
    const setShowAllCountries = props.setShowAllCountries;

    const { updateCountryColor, updateCountry } = useCountryContext();
    const { teams, updateTeam } = useTeamsContext()
    const [isOptionsShown, setIsOptionShown] = useState(false)

    const prevColorRef = useRef(color);

    const colorPicker = (type) => {
        switch (type) {
            case "gold":
                return { outter: colorMapper.coin.outterGold, inner: colorMapper.coin.innerGold };
            case "silver":
                return { outter: colorMapper.coin.outterSilver, inner: colorMapper.coin.innerSilver };
            case "bronze":
                return { outter: colorMapper.coin.outterBronze, inner: colorMapper.coin.innerBronze };
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
        prevColorRef.current = props.country.color;
        updateCountryColor(label, "white");
    };

    const handleMouseLeave = () => {
        updateCountryColor(label, prevColorRef.current);
    };

    const toggleOptionsShowing = () => {
        if (isOptionsShown) {
            setIsOptionShown(false)
            setCurrentCountryOption(null);
            setShowAllCountries(true)
        }
        else {
            setIsOptionShown(true)
            setCurrentCountryOption(label);
            setShowAllCountries(false)
        }
    }

    const handleAssign = (team) => {
        const valid = team.addCountry(props.country)
        console.log("validity: ", valid);

        if (valid) {
            const data = postData(team, props.country)
            if (data) {
                updateTeam(team)
                updateCountry(props.country)
            } else {
                console.log("Error assigning country to team");
            }
            setIsOptionShown(false)
            setCurrentCountryOption(null);
            setShowAllCountries(true)
            toast.success("Country assigned successfully!");
        } else {
            toast.error("Assignment Faild!");
        }
    }

    const handleUnassign = async () => {
        // Find the team by name, matching the country's assignedTeam
        const assignedTeam = teams.find(team =>
            team.name === props.country.assignedTeam
        );
        console.log("assignedTeam:", assignedTeam);

        if (assignedTeam) {
            const updatedCountries = assignedTeam.countries.filter(c => c.id !== props.country.id);
            const updatedTeam = { ...assignedTeam, countries: updatedCountries };

            const updatedCountry = {
                ...props.country,
                assignedTeam: "",
                color: null,
            };

            const data = await postData(updatedTeam, updatedCountry);
            if (data) {
                updateTeam(updatedTeam);
                updateCountry(updatedCountry);
                await getData();
            } else {
                console.log("Error unassigning country from team");
            }
        } else {
            console.log("No assigned team found for this country.");
        }

        setIsOptionShown(false);
        setCurrentCountryOption(null);
        setShowAllCountries(true);
    };


    return (
        <div style={styles.container}>
            {isOptionsShown &&
                <div className="bg-light p-1 d-flex flex-column align-items-center rounded rounded-3 border-bottom border-3" style={styles.options(position.left, position.top)}>
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
