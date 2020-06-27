import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import combinedReducer from '../reducer';

export const store = createStore(combinedReducer, applyMiddleware(thunk));