"use client"
import React from 'react'
import { teams } from "../../data/data";
import Card from "../card/card";

function Score() {
    return (
        <div className="col-lg-4 col-md-6 p-1">
            {teams.map((team) => {
                return <Card key={team.id} team={team} />
            })}
        </div>
    )
}

export default Score