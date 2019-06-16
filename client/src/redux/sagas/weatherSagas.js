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
    try {
        const weatherData = yield call(getWeather, city);
        yield put(fetchCityData(weatherData.data));
    } catch(err) {
        console.log(err);
        // todo: display to user 
    }
};

function * weatherSaga() {
    yield takeLatest(ADD_CITY, addNewCity)
}

export default weatherSaga;
