import { UPDATE_THEME } from '../actions/types';

const initialState = {
    current: 'day'
}
const theme = (state = initialState, action = {}) => {
    switch(action.type) {
        case UPDATE_THEME: {
            return {
                ...state,
                current: action.theme,
            }
        }    
        default: 
            return state;
    }
}

export default theme;