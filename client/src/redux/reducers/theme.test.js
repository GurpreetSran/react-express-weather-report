import themeReducer from './theme';

import { updateTheme } from '../actions';


describe('themeReducer', () => {
    it('should return default state', () => {
        expect(themeReducer()).toEqual({
            current: 'day'
        });
    });

    it('should update theme', () => {
        expect(themeReducer(undefined, updateTheme('night'))).toEqual({
            current: 'night'
        });
    });
})