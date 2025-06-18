"use client"
import React, { createContext, useContext, useState } from 'react';

const TeamsContext = createContext();

export const TeamsContextProvider = ({ children }) => {
    const [teams, setTeams] = useState([]);

    const updateTeam = (updatedTeam) => {
        setTeams(prev =>
            prev.map(team => team.id === updatedTeam.id ? updatedTeam : team)
        );
    };

    return (
        <TeamsContext.Provider value={{ teams, setTeams, updateTeam }}>
            {children}
        </TeamsContext.Provider>
    );
};

export const useTeamsContext = () => useContext(TeamsContext);
