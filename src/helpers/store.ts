import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { IAppState, IStore } from '../types/store';
import { fixturesReducer } from '../store/reducers/fixtures';
import { IFixtures } from '../types/fixtures';

// Set up an over writable version of store so we can persist state for at least this session.
let storeInstance: IStore;

// Combine our reducers using the supplied map.
const appReducer = combineReducers<IAppState>({
    fixtures: fixturesReducer
});

// Create initial state
export function createInitialState(): IAppState {
    return {
        fixtures: createFixtureState()
    };
}


export function configureStore(): IStore {
    return createStore(appReducer, createInitialState(), composeWithDevTools(applyMiddleware(thunk)));
}

export function getStoreInstance(): IStore {
    if (storeInstance) {
        return storeInstance;
    } else {
        return (storeInstance = configureStore());
    }
}

export function createFixtureState(): IFixtures | null {
    return null;
}