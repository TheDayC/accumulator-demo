import { createSelector } from 'reselect';

import { selectFixtures } from '../../../selectors';

const selector = createSelector([selectFixtures], fixtures => ({
    homeName: fixtures ? fixtures.match.contestant.find(c => c.position === 'home').name : null,
    awayName: fixtures ? fixtures.match.contestant.find(c => c.position === 'away').name : null,
    status: fixtures ? fixtures.match.status : null,
    homeGoals: fixtures ? fixtures.match.liveData.matchDetails.scores.total.home : null,
    awayGoals: fixtures ? fixtures.match.liveData.matchDetails.scores.total.away : null
}));

export default selector;
