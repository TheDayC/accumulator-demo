import React from 'react';
import astonVilla from '../../../../public/aston-villa.png';
import liverpool from '../../../../public/liverpool.png';

const score: React.FC = () => {
    return (
        <div className="score">
            <div className="league">Premier League</div>
            <div className="details">
                <div className="teams">
                    <div className="home">
                        <img src={astonVilla} alt="Aston Villa" />
                        <p>Aston Villa</p>
                    </div>
                    <div className="away">
                        <img src={liverpool} alt="Liverpool" />
                        <p>Liverpool</p>
                    </div>
                </div>
                <div className="phase"><span>FT</span></div>
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

export default score;
