import { defaultTheme, setTheme } from './themeSagas';
import {  put, select } from 'redux-saga/effects';
import { updateTheme } from '../actions/index';

describe('theme saga', () => {
    it('should return correct state', () => {
        const state = {
            theme: {
                current: 'day'
            }
        }
        expect(defaultTheme(state)).toBe('day'); 
    });

    it('should set theme', () => {
        const generators = setTheme({theme: 'night'});
        expect(generators.next().value).toEqual(select(defaultTheme));
        expect(generators.next().value).toEqual(put(updateTheme('night')));
        
        generators.next() //setlocalstorage
        expect(localStorage.theme).toBe('night'); 
        expect(generators.next().done).toBe(true);
    });
}); 