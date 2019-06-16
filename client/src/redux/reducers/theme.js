const initialState = {
    current: 'day'
}
const theme = (state = initialState, action) => {
    switch(action.type) {
        case 'TOGGLE_THEME': {
            return {
                ...state,
                current: state.current === 'day' ? 'night' : 'day',
            }
        }
        case 'UPDATE_THEME': {
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