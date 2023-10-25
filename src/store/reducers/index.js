import { combineReducers } from 'redux';

import watchlistReducer from './watchlistReducer';
import movieReducer from './movieReducer';
export const reducers = combineReducers({
    watchlistReducer,
    movieReducer,
});
