import { createFixtureState } from '../../helpers/store';
import { IActionWithPayload } from '../../types/actions';
import { FixtureActionTypes } from '../../enums/actions';
import { IFixture } from '../../types/fixtures';

export function fixturesReducer(state: IFixture[] | null = createFixtureState(), action: IActionWithPayload<FixtureActionTypes, any>): IFixture[] | null {
    switch (action.type) {
        case FixtureActionTypes.STORE_FIXTURES:
            return action.payload;
        default:
            return state;
    }
}