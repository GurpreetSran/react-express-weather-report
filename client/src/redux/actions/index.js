import { 
    SET_THEME, 
    TOGGLE_THEME, 
    UPDATE_THEME,
    ADD_CITY,
    FETCH_CITY_DATA
} from './types';


// Used to set theme on load
export const setTheme = (theme) => ({
    type: SET_THEME, 
    theme 
});

// On button press
export const toggleTheme  = () => ({
    type: TOGGLE_THEME
});

// from sagas 
export const updateTheme = (theme) => ({
    type: UPDATE_THEME,
    theme
})


// Weather 
export const addCity = (city) => ({
    type: ADD_CITY,
    city
});

export const fetchCityData = (payload) => ({
    type: FETCH_CITY_DATA,
    payload
});