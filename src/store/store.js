import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'

import { auth } from './slices';

const rootReducer = combineReducers({
    auth: auth.reducer,
    // add more slices here
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;