import { isDuplicateCity } from './index';

const state = {
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
});