import React from 'react'

function Card(props) {
    const { team } = props
    return (
        <div className={`card p-3 d-flex justify-content-center align-items-center ${team.color}`}>
            <div className='d-flex flex-column'>
                <h2>{team.name}</h2>
                <h2>Ranks:</h2>
                <ul>
                    <li>Generals: {team.ranks.general}</li>
                    <li>Commanders: {team.ranks.commander}</li>
                    <li>Soldier: {team.ranks.soldier}</li>
                </ul>
            </div>
        </div>
    )
}

export default Card