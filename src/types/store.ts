import { Store } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { IAction, IActionWithPayload } from './actions';
import { IFixtures } from './fixtures';

export type IStore = Store<IAppState> & { dispatch: IDispatch };

export type IDispatch = ThunkDispatch<IAppState, unknown, IActionWithPayload<string, unknown> | IAction<string>>;

export interface IAppState {
    fixtures: IFixtures | null;
}