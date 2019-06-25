import { call, put } from 'redux-saga/effects'; 
import { addNewCity, getWeather } from './weatherSagas';
import { fetchCityData, error } from '../actions';


describe('Weather Saga', () => {
    it('should fetch weather data for new city', () => {
        const payload = {
            city: 'London'
        };

        const generator = addNewCity(payload);
        expect(generator.next().value).toEqual(call(getWeather, payload.city));
        expect(generator.next().value).toEqual(put(fetchCityData({})));
    });

    it('should throw an error', () => {
        const errMessage = 'error fetching data';
        const generator = addNewCity({});
        generator.next();
        expect(generator.throw(errMessage).value).toEqual(put(error(errMessage)));
    });
});