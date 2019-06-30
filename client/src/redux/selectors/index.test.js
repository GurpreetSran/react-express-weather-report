import { isDuplicateCity, getDefaultTheme } from './index';

const state = {
    theme: {
        current: 'night'
    },
    weather: {
        weather: [
            {
                name: 'London'
            },
            {
                name: 'Manchester'
            }
        ]
    }
}

describe('selectors', () => {
    describe('isDuplicateCity', () => {
        it('should return true', () => {
            expect(isDuplicateCity(state, 'london')).toBe(true);
        });

        it('should return false', () => {
            expect(isDuplicateCity(state, 'Folkestone')).toBe(false);
        });
    });

    describe('getDefaultTheme', () => {
        it('should return "night"', () => {
            expect(getDefaultTheme(state)).toBe('night');
        });
    });
});