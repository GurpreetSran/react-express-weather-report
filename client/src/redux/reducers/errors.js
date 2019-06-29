import { ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = []


const errors = (state=initialState, action ={}) => {
    switch(action.type) {
        
        case ERRORS: {
            return [...action.errors, ...state]
        }

        case CLEAR_ERRORS: {
            return [];
        }
        
        default:
            return state;
    }
}

export default errors;