import React from 'react';
import { shallow } from 'enzyme';

import Errors from './index';
import { findByTestAtrr } from '../../../utils/testUtils';

const setUp = (props ={}) => {
    return shallow(<Errors {...props} />);
}

describe('Erros', () => {
    describe('without errors', () => {
        let component; 

        beforeEach(() => {
            component = setUp({errors: []});
        });

        it('should render without errors', () => {
            const errorsWrapper = findByTestAtrr(component, 'errorsComponent');
            expect(errorsWrapper.length).toBe(1);
        });
    });

    describe('with errors', () => {
        let component; 

        beforeEach(() => {
            component = setUp(
                {
                    errors: ['Invalid Location', 'Duplicate Location']
                }
            );
        });

        it('should render with two errors', () => {
            const errors = findByTestAtrr(component, 'error');
            expect(errors.length).toBe(2);
        });
    });
});