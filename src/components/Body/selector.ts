import { createSelector } from 'reselect';

import { selectFixtures } from '../../selectors';

const selector = createSelector([selectFixtures], fixtures => ({
    hasMatch: fixtures ? Boolean(Object.prototype.hasOwnProperty.call(fixtures, 'match')) : false,
}));

export default selector;
