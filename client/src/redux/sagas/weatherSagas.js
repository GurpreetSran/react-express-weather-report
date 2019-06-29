import { takeLatest, put, call, delay, select } from 'redux-saga/effects';
import axios from 'axios';

import { fetchCityData, errors, clearErrors } from '../actions';
import {ADD_CITY} from '../actions/types';
import { isDuplicateCity } from '../selectors';

const DISPLAY_ERROR_TIME = 5000;

export function getWeather(city = 'London') {
    return axios.post('/api/weather', {
        city
    });
}

export function * addNewCity({city}) {
    try {
        const weatherData = yield call(getWeather, city);
        const isDuplicateLocation = yield select(isDuplicateCity, city);
    
        if(!isDuplicateLocation) {
            yield put(fetchCityData((weatherData && weatherData.data) || {}));
        } else {
            yield put(errors(['Duplicate Location']));
            yield delay(DISPLAY_ERROR_TIME);
            yield put(clearErrors());
        }
    } catch(err) {
        yield put(errors(['Invalid Location']));
        yield delay(DISPLAY_ERROR_TIME);
        yield put(clearErrors());
    }
};

function * weatherSaga() {
    yield takeLatest(ADD_CITY, addNewCity)
}

export default weatherSaga;
