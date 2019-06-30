import { errors, clearErrors } from '../actions';

import errorsReducer from './errors';

describe('Errors reducer', () => {
    it('should not have any errors', () => {
        expect(errorsReducer()).toEqual([]);
    });

    it('should add errors', () => {
        expect(errorsReducer(undefined, errors(['Invalid Location']))).toEqual(['Invalid Location']);
        expect(errorsReducer(['Invalid Location'], errors(['Duplicate Location'])))
            .toEqual(['Duplicate Location', 'Invalid Location']);
    });

    it('should clear errors', () => {
        expect(errorsReducer([1,2,4], clearErrors())).toEqual([]);
    });
});