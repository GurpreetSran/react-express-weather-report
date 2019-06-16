import { combineReducers } from 'redux'
import weatherReducer from './weather';
import themeReducer from './theme';

const rootReducer = combineReducers({
    weather: weatherReducer,
    theme: themeReducer
});

export default rootReducer;