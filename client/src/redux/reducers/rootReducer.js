import { combineReducers } from 'redux'
import weatherReducer from './weather';
import themeReducer from './theme';
import errorsReducer from './errors';

export const allReducers = {
    weather: weatherReducer,
    theme: themeReducer,
    errors: errorsReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;