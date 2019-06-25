import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

import { RootReducer } from './reducers/';

const $history = createHistory({
    basename: '/',
});
const router = routerMiddleware($history);

const initialState: any = {
    items: new Map(),
    settings: {
        position: {},
        page: 1,
        update: {
            available: null,
            installed: null
        }
    }
}

const store = createStore(
    RootReducer,
    initialState,
    applyMiddleware(thunk, logger, router) 
);

export default store;
export let history = $history;