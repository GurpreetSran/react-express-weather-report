import { 
    SET_THEME, 
    UPDATE_THEME,
    ADD_CITY,
    FETCH_CITY_DATA,
    ERRORS,
    CLEAR_ERRORS
} from './types';


// Used to set theme on load
export const setTheme = (theme) => ({
    type: SET_THEME, 
    theme 
});

// saga worker
export const updateTheme = (theme) => ({
    type: UPDATE_THEME,
    theme
})


// Weather 
export const addCity = (city) => ({
    type: ADD_CITY,
    city
});

// saga worker
export const fetchCityData = (payload) => ({
    type: FETCH_CITY_DATA,
    payload
});

export const errors = (errors) => ({
    type: ERRORS,
    errors 
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});