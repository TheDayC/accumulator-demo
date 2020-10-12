import React from 'react';
import { useSelector } from 'react-redux';

import './styles.scss';
import selector from './selector';

const Score: React.FC = () => {
    const { homeName, awayName, status, homeGoals, awayGoals } = useSelector(selector);

    return (
        <div className="score">
            <div className="league">Premier League</div>
            <div className="details">
                <div className="teams">
                    <div className="home">
                        {homeName && <img src={`${process.env.PUBLIC_URL}/aston-villa.png`} alt="Aston Villa" />}
                        <p>{homeName}</p>
                    </div>
                    <div className="away">
                        {awayName && <img src={`${process.env.PUBLIC_URL}/liverpool.png`} alt="Liverpool" />}
                        <p>{awayName}</p>
                    </div>
                </div>
                <div className="phase">
                    <span>{status}</span>
                </div>
                <div className="scoreline">
                    <span className="background">
                        <span className="home">{homeGoals}</span>
                        <span className="away">{awayGoals}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Score;
