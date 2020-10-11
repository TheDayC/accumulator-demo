import { createMatchState } from '../../helpers/store';
import { IActionWithPayload } from '../../types/actions';
import { IMatchesState } from '../../types/store';
import { MatchActionTypes } from '../../enums/actions';

export function matchesReducer(state: IMatchesState = createMatchState(), action: IActionWithPayload<MatchActionTypes, any>): IMatchesState {
    switch (action.type) {
        default:
            return state;
    }
}