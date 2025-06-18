"use client"
import { useEffect } from "react";
import { useTeamsContext } from "@/app/context/teamContext";
import { useCountryContext } from "@/app/context/countryContext";
import { mergeCountryBackendData, countries } from "@/app/data/data";
import { getData } from "@/app/api/apis";
import { Team } from "@/app/models/team";


export default function DataInitializer({ children }) {
    const { setTeams } = useTeamsContext();
    const { setCountries } = useCountryContext();

    useEffect(() => {
        getData().then(data => {
            if (data && data.teams) {
                // Convert plain objects to Team instances if needed
                setTeams(data.teams.map(
                    t => new Team(t.id, t.name, t.color, t.score, t.countries)
                ));
            }
        });
    }, [setTeams]);

    useEffect(() => {
        mergeCountryBackendData().then(() => {
            setCountries([...countries]); // Spread to trigger state update
        });
    }, [setCountries]);

    return children;
}