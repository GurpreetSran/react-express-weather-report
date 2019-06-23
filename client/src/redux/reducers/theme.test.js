import themeRecucer from './theme';

import { updateTheme } from '../actions';


describe('themeReducer', () => {
    it('should return default state', () => {
        expect(themeRecucer()).toEqual({
            current: 'day'
        });
    });

    it('should update theme', () => {
        expect(themeRecucer(undefined, updateTheme('night'))).toEqual({
            current: 'night'
        });
    });
})