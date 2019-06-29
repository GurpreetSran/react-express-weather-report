export const isDuplicateCity = (state, city) => {
    return state.weather.weather.some(location => location.name.toLowerCase() === city.toLowerCase());
}
