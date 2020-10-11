import {FixtureActionTypes} from '../../enums/actions';
import { IActionWithPayload } from '../../types/actions';
import { IFixtures } from '../../types/fixtures';

// Actions
export const ACTION_STORE_FIXTURE = (payload: IFixtures) => {
    const action = {
        type: FixtureActionTypes.STORE_FIXTURES,
        payload
    };

    return action;
};

// Action Creators
export function storeFixture(payload: IFixtures): IActionWithPayload<FixtureActionTypes, IFixtures> {
    return ACTION_STORE_FIXTURE(payload);
}