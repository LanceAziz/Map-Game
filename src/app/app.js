"use client"
import React from 'react'
import Score from './components/score/score'
import Map from './components/map/map'
import { useTeamsContext } from './context/teamContext'
import { useCountryContext } from './context/countryContext'

function App() {
    const { teams } = useTeamsContext()
    const { countries } = useCountryContext()

    return (teams.length === 0 || countries.length === 0) ?
        <h2>Loading...</h2>
        :
        <div className='w-100 d-flex'>
            <Score />
            <Map />
        </div>
}

export default App