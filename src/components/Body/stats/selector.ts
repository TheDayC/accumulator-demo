import { createSelector } from 'reselect';

import { selectFixtures } from '../../../selectors';
import { StatType } from '../../../enums/fixtures';

const selector = createSelector([selectFixtures], fixtures => ({
    homePossession: fixtures.match.liveData.lineups.home.stats.find(stat => stat.type === StatType.Possession) || null,
    awayPossession: fixtures.match.liveData.lineups.away.stats.find(stat => stat.type === StatType.Possession) || null,
    homeShots: fixtures.match.liveData.lineups.home.stats.find(stat => stat.type === StatType.Shots) || null,
    awayShots: fixtures.match.liveData.lineups.away.stats.find(stat => stat.type === StatType.Shots) || null,
    homeShotsOnTarget: fixtures.match.liveData.lineups.home.stats.find(stat => stat.type === StatType.ShotsOnTarget) || null,
    awayShotsOnTarget: fixtures.match.liveData.lineups.away.stats.find(stat => stat.type === StatType.ShotsOnTarget) || null,
    homeCorners: fixtures.match.liveData.lineups.home.stats.find(stat => stat.type === StatType.Corners) || null,
    awayCorners: fixtures.match.liveData.lineups.away.stats.find(stat => stat.type === StatType.Corners) || null,
    homeYellowCards: fixtures.match.liveData.lineups.home.stats.find(stat => stat.type === StatType.YellowCards) || null,
    awayYellowCards: fixtures.match.liveData.lineups.away.stats.find(stat => stat.type === StatType.YellowCards) || null
}));

export default selector;
