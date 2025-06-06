"use client"
import React from 'react';
import Card from "../card/card";
import { useTeamsContext } from '@/app/context/teamContext';

function Score() {
    const { teams } = useTeamsContext();

    return (
        <div className="col-lg-4 col-md-6 p-1">
            {teams.map((team) => (
                <Card key={team.id} team={team} />
            ))}
        </div>
    );
}

export default Score;