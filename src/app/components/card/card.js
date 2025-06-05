import React, { useState } from 'react'
import { Medal1, Medal2, Medal3 } from '../../assets/svgs'
import { countries } from '@/app/data/data'

function Card(props) {
    const { team } = props
    const [score, setScore] = useState(team.score)

    const handleAdd = () => {
        team.addCountry(countries[0]);
        // Clone the score to force re-render
        setScore({ ...team.score });
    };


    const colorMapper = {
        bg: {
            red: "bg-danger",
            blue: "bg-primary",
            green: "bg-success",
            yellow: "bg-warning"
        },
        border: {
            red: "border-danger-subtle",
            blue: "border-primary-subtle",
            green: "border-success-subtle",
            yellow: "border-warning-subtle"
        },
    }

    const uiMapper = [
        {
            RankIcon: <Medal3 width={40} height={80} />,
            RanksNo: score.gold
        },
        {
            RankIcon: <Medal2 width={40} height={80} />,
            RanksNo: score.silver
        },
        {
            RankIcon: <Medal1 width={40} height={80} />,
            RanksNo: score.bronze
        },
    ]

    return (
        <div className={`rounded rounded-5 p-4 d-flex justify-content-center align-items-center m-3 w-100 ${colorMapper.bg[team.color]}`}>
            <div className='d-flex flex-column justify-content-center w-100'>
                <div className={`border-bottom rounded rounded-4 border-3 ${colorMapper.border[team.color]} bg-white  d-flex justify-content-center mb-1`}>
                    <h2 className='fs-3'>{team.name}</h2>
                </div>
                <div className='d-flex flex-row px-1'>
                    {uiMapper.map((ui, key) => (
                        <div key={key} className='col-4 px-1'>
                            <div className={`bg-white m-1 border-bottom rounded rounded-4 border-3 ${colorMapper.border[team.color]} py-2 px-4 d-flex justify-content-center align-items-center`}>
                                <div>
                                    {ui.RankIcon}
                                </div>
                                <div className='ps-3'>
                                    <h2 className='fs-1 text-dark'>{ui.RanksNo}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className='d-flex justify-content-center align-items-center'>
                    <button className={`btn btn-light rounded rounded-4 px-5 border-bottom border-3 ${colorMapper.border[team.color]}`} onClick={handleAdd}>add</button>
                </div> */}
            </div>
        </div>
    )
}

export default Card