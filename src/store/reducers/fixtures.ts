import { createMatchState } from '../../helpers/store';
import { IActionWithPayload } from '../../types/actions';
import { IFixturesState } from '../../types/store';
import { FixtureActionTypes } from '../../enums/actions';

export function fixturesReducer(state: IFixturesState = createMatchState(), action: IActionWithPayload<FixtureActionTypes, any>): IFixturesState {
    switch (action.type) {
        default:
            return state;
    }
}