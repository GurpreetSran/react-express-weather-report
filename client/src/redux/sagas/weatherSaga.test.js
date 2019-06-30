import { call, put, select } from 'redux-saga/effects'; 
import { addNewCity, getWeather } from './weatherSagas';
import { fetchCityData, errors } from '../actions';
import { isDuplicateCity } from '../selectors';


describe('Weather Saga', () => {
    it('should fetch weather data for new city', () => {
        const payload = {
            city: 'London'
        };

        const generator = addNewCity(payload);
        expect(generator.next().value).toEqual(call(getWeather, payload.city));
        expect(generator.next().value).toEqual(select(isDuplicateCity, payload.city));
        expect(generator.next().value).toEqual(put(fetchCityData({})));
    });

    it('should throw an error', () => {
        const errMessage = 'Invalid Location';
        const generator = addNewCity({});
        generator.next();
        expect(generator.throw(errMessage).value)
            .toEqual(put(errors([errMessage])));
    });

    // it('should detect duplicate', () => {
    //     const payload = {
    //         city: 'London'
    //     };

    //     const errMessage = 'Duplicate Location';

    //     const generator = addNewCity(payload);
    //     expect(generator.next().value).toEqual(call(getWeather, payload.city));
    //     expect(generator.next().value).toEqual(select(isDuplicateCity, payload.city));
    //     console.log(generator.next().value);
    // });
});
