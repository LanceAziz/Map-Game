"use client"
import React from 'react'
import Score from './components/score/score'
import Map from './components/map/map'
import { useTeamsContext } from './context/teamContext'
import { useCountryContext } from './context/countryContext'
import Lottie from 'react-lottie';
import loading from './assets/loading.json'
import { Toaster } from 'react-hot-toast'

function App() {
    const { teams } = useTeamsContext()
    const { countries } = useCountryContext()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
            {(teams.length === 0 || countries.length === 0) ?
                <div className='w-100 d-flex justify-content-center align-items-center vh-100'>
                    <Lottie options={defaultOptions}
                        height={300}
                        width={300} />
                </div>
                :
                <div className='w-100 d-flex'>
                    <Toaster position="bottom-right" />
                    <Score />
                    <Map />
                </div>
            }
        </>
    )
}

export default App