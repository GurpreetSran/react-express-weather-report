import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchCityData } from '../actions/index';
import {ADD_CITY} from '../actions/types';
import axios from 'axios';

function getWeather(city = 'London') {
    return axios.post('/api/weather', {
        city
    });
}

function * addNewCity({city}) {
    const weatherData = yield call(getWeather, city);
    yield put(fetchCityData(weatherData.data));
};

function * weatherSaga() {
    yield takeLatest(ADD_CITY, addNewCity)
}

export default weatherSaga;
