import React from 'react';
import { Medal1, Medal2, Medal3 } from '../../assets/svgs';
import { useTeamsContext } from '@/app/context/teamContext';
import { colorMapper } from '@/app/utils/colors';

function Card({ team }) {
    const { updateTeam } = useTeamsContext();

    const handleAdd = () => {
        // Simulate adding a country and increasing gold count
        const updatedScore = {
            ...team.score,
            gold: team.score.gold + 1, // just an example
        };

        const updatedTeam = {
            ...team,
            score: updatedScore,
        };

        updateTeam(updatedTeam);
    };

    const uiMapper = [
        { RankIcon: <Medal3 width={40} height={80} />, RanksNo: team.score.gold },
        { RankIcon: <Medal2 width={40} height={80} />, RanksNo: team.score.silver },
        { RankIcon: <Medal1 width={40} height={80} />, RanksNo: team.score.bronze },
    ];

    return (
        <div className={`rounded rounded-5 p-4 d-flex justify-content-center align-items-center m-3 w-100 ${colorMapper.bg[team.color]}`}>
            <div className='d-flex flex-column justify-content-center w-100'>
                <div className={`border-bottom rounded rounded-4 border-3 ${colorMapper.border[team.color]} bg-white d-flex justify-content-center mb-1`}>
                    <h2 className='fs-3'>{team.name}</h2>
                </div>
                <div className='d-flex flex-row px-1'>
                    {uiMapper.map((ui, key) => (
                        <div key={key} className='col-4 px-1'>
                            <div className={`bg-white m-1 border-bottom rounded rounded-4 border-3 ${colorMapper.border[team.color]} py-2 px-4 d-flex justify-content-center align-items-center`}>
                                {ui.RankIcon}
                                <h2 className='fs-1 text-dark ps-3'>{ui.RanksNo}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;