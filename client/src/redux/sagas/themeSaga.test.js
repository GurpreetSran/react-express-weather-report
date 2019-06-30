import { setTheme } from './themeSagas';
import {  put, select } from 'redux-saga/effects';
import { updateTheme } from '../actions/index';
import { getDefaultTheme } from '../selectors'

describe('theme saga', () => {
    it('should return correct state', () => {
        const state = {
            theme: {
                current: 'day'
            }
        }
        expect(getDefaultTheme(state)).toBe('day'); 
    });

    it('should set theme from action', () => {
        const generators = setTheme({theme: 'night'});
        expect(generators.next().value).toEqual(select(getDefaultTheme));
        expect(generators.next().value).toEqual(put(updateTheme('night')));
        
        generators.next() //setlocalstorage
        expect(localStorage.theme).toBe('night'); 
        expect(generators.next().done).toBe(true);
    });

    it('should set theme from localstorage', () => {
        const generators = setTheme(); // No theme passed in
        expect(generators.next().value).toEqual(select(getDefaultTheme));
        expect(generators.next().value).toEqual(put(updateTheme('night')));
        
        generators.next() //setlocalstorage
        expect(localStorage.theme).toBe('night'); 
        expect(generators.next().done).toBe(true);
    });
}); 