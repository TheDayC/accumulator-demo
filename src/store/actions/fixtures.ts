import {FixtureActionTypes} from '../../enums/actions';

// Actions
export const ACTION_GET_FIXTURES = (payload: string) => {
    const action = {
        type: FixtureActionTypes.GET_FIXTURES,
        payload
    };

    return action;
};