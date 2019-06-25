import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchCityData, error } from '../actions';
import {ADD_CITY} from '../actions/types';
import axios from 'axios';

export function getWeather(city = 'London') {
    return axios.post('/api/weather', {
        city
    });
}

export function * addNewCity({city}) {
    try {
        const weatherData = yield call(getWeather, city);
        yield put(fetchCityData((weatherData && weatherData.data) || {}));
    } catch(err) {
        yield put(error(err));
        console.log(err);
        // todo: display to user 
    }
};

function * weatherSaga() {
    yield takeLatest(ADD_CITY, addNewCity)
}

export default weatherSaga;
