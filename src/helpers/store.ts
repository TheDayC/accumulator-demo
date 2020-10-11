import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { IAppState, IMatchesState, IStore } from '../types/store';
import { matchesReducer } from '../store/reducers/matches';

// Set up an over writable version of store so we can persist state for at least this session.
let storeInstance: IStore;

// Combine our reducers using the supplied map.
const appReducer = combineReducers<IAppState>({
    matches: matchesReducer
});

// Create initial state
export function createInitialState(): IAppState {
    return {
        matches: createMatchState()
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

export function createMatchState(): IMatchesState {
    return {
        matches: null
    };
}