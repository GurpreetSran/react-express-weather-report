import { combineReducers } from 'redux'
import weatherReducer from './weather';
import themeReducer from './theme';
import errorsReducer from './errors';

const rootReducer = combineReducers({
    weather: weatherReducer,
    theme: themeReducer,
    errors: errorsReducer
});

export default rootReducer;