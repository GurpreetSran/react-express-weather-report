import { allReducers } from './rootReducer';

describe('rootReducer', () => {
    it('should have 3 reducers', () => {
        expect(Object.keys(allReducers).length).toBe(3);
    });
});