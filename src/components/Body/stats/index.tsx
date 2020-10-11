import React, { CSSProperties } from 'react';
import {useSelector} from 'react-redux';
import { Phase } from '../../../enums/stats';

import './styles.scss';
import selector from './selector';
import { getStatByPhase } from '../../../helpers/stats';

interface IStatsProps {
    phase: Phase;
}

const Stats: React.FC<IStatsProps> = ({phase}) => {
    const {
        homePossession, 
        awayPossession,
        homeShots,
        awayShots,
        homeShotsOnTarget,
        awayShotsOnTarget,
        homeCorners,
        awayCorners,
        homeYellowCards,
        awayYellowCards
    } = useSelector(selector);

    if (!homePossession && !awayPossession){
        return null;
    }
    
    const homePossessionByPhase = getStatByPhase(homePossession, phase).toFixed(1);
    const awayPossessionByPhase = getStatByPhase(awayPossession, phase).toFixed(1);
    
    const homeShotsByPhase = getStatByPhase(homeShots, phase);
    const awayShotsByPhase = getStatByPhase(awayShots, phase);
    const totalShots = homeShotsByPhase + awayShotsByPhase;
    
    const homeShotsOnTargetByPhase = getStatByPhase(homeShotsOnTarget, phase);
    const awayShotsOnTargetByPhase = getStatByPhase(awayShotsOnTarget, phase);
    const totalShotsOnTarget = homeShotsOnTargetByPhase + awayShotsOnTargetByPhase;
    
    const homeCornersByPhase = getStatByPhase(homeCorners, phase);
    const awayCornersByPhase = getStatByPhase(awayCorners, phase);
    const totalCorners = homeCornersByPhase + awayCornersByPhase;

    const homeYellowCardsByPhase = getStatByPhase(homeCorners, phase);
    const awayYellowCardsByPhase = getStatByPhase(awayCorners, phase);

    return (
        <div className="stats">
            <div className="stat possession">
                <div className="titles">
                    <span className="homeStat">{homePossessionByPhase}%</span>
                    <span className="statTitle">Possession</span>
                    <span className="awayStat">{awayPossessionByPhase}%</span>
                </div>
                <div className="values">
                    <span className="valueContainer home">
                        <span className="valueFill" style={{ width: `${homePossessionByPhase}%` }} />
                    </span>
                    <span className="valueContainer away">
                        <span className="valueFill" style={{ width: `${awayPossessionByPhase}%` }} />
                    </span>
                </div>
            </div>
            
            <div className="stat shots">
                <div className="titles">
                    <span className="homeStat">{homeShotsByPhase}</span>
                    <span className="statTitle">Shots</span>
                    <span className="awayStat">{awayShotsByPhase}</span>
                </div>
                <div className="values">
                    <span className="valueContainer home">
                        <span className="valueFill" style={{ width: `${(homeShotsByPhase / totalShots) * 100}%`}} />
                    </span>
                    <span className="valueContainer away">
                        <span className="valueFill" style={{ width: `${(awayShotsByPhase / totalShots) * 100}%` }} />
                    </span>
                </div>
            </div>

            <div className="stat shotsOnTarget">
                <div className="titles">
                    <span className="homeStat">{homeShotsOnTargetByPhase}</span>
                    <span className="statTitle">Shots</span>
                    <span className="awayStat">{awayCornersByPhase}</span>
                </div>
                <div className="values">
                    <span className="valueContainer home">
                        <span className="valueFill" style={{ width: `${(homeShotsOnTargetByPhase / totalShotsOnTarget) * 100}%`}} />
                    </span>
                    <span className="valueContainer away">
                        <span className="valueFill" style={{ width: `${(awayCornersByPhase / totalShotsOnTarget) * 100}%` }} />
                    </span>
                </div>
            </div>
            
            <div className="stat shotsOnTarget">
                <div className="titles">
                    <span className="homeStat">{homeCornersByPhase}</span>
                    <span className="statTitle">Shots</span>
                    <span className="awayStat">{awayShotsOnTargetByPhase}</span>
                </div>
                <div className="values">
                    <span className="valueContainer home">
                        <span className="valueFill" style={{ width: `${(homeCornersByPhase / totalCorners) * 100}%`}} />
                    </span>
                    <span className="valueContainer away">
                        <span className="valueFill" style={{ width: `${(awayShotsOnTargetByPhase / totalCorners) * 100}%` }} />
                    </span>
                </div>
            </div>

            <div className="cards">
                <div className="team home">
                    <span className="card yellow">
                        <span className="icon" />
                        <span className="count">{homeYellowCardsByPhase}</span>
                    </span>
                    <span className="card red">
                        <span className="icon" />
                        <span className="count">0</span>
                    </span>
                </div>
                <div className="team away">
                    <span className="card yellow">                        
                        <span className="count">{awayYellowCardsByPhase}</span>
                        <span className="icon" />
                    </span>
                    <span className="card red">                        
                        <span className="count">0</span>
                        <span className="icon" />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Stats;
