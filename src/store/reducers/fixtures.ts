import { createFixtureState } from '../../helpers/store';
import { IActionWithPayload } from '../../types/actions';
import { FixtureActionTypes } from '../../enums/actions';
import { IFixtures } from '../../types/fixtures';

export function fixturesReducer(state: IFixtures | null = createFixtureState(), action: IActionWithPayload<FixtureActionTypes, any>): IFixtures | null {
    switch (action.type) {
        case FixtureActionTypes.STORE_FIXTURES:
            return action.payload;
        default:
            return state;
    }
}