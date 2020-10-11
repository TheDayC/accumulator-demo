import { Store } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { IAction, IActionWithPayload } from './actions';
import { IMatch } from './matches';

export type IStore = Store<IAppState> & { dispatch: IDispatch };

export type IDispatch = ThunkDispatch<IAppState, unknown, IActionWithPayload<string, unknown> | IAction<string>>;

export interface IAppState {
    matches: IMatchesState;
}

export interface IMatchesState {
    matches: IMatch[] | null;
}