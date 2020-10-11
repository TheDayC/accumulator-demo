import React from 'react';

import './styles.scss';

const Score: React.FC = () => {
    return (
        <div className="score">
            <div className="league">Premier League</div>
            <div className="details">
                <div className="teams">
                    <div className="home">
                        <img src={`${process.env.PUBLIC_URL}/aston-villa.png`} alt="Aston Villa" />
                        <p>Aston Villa</p>
                    </div>
                    <div className="away">
                        <img src={`${process.env.PUBLIC_URL}/liverpool.png`} alt="Liverpool" />
                        <p>Liverpool</p>
                    </div>
                </div>
                <div className="phase">
                    <span>FT</span>
                </div>
                <div className="scoreline">
                    <span className="background">
                        <span className="home">7</span>
                        <span className="away">2</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Score;
