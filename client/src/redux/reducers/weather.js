
import {FETCH_CITY_DATA} from '../actions/types'

const initialState = {
    weather: []
}

const weatherReducer = (state = initialState, action) => {
    
    switch(action.type) {

        case FETCH_CITY_DATA: {
            return {
                ...state,
                weather: [...action.payload, ...state.weather],
            }
        }

        default:
            return state
    }
}

export default weatherReducer;