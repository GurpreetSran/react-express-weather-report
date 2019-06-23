import * as React from 'react';
import { shallow } from 'enzyme';

import ToggleButton from './index';
import { findByTestAtrr } from '../../../utils/testUtils';

const setUp = (props={}) => {
    const component = shallow(<ToggleButton {...props} />);
    return component;
}

describe('Toggle button', () => {

    let component;
    let onChangeFunc;
    let input; 

    beforeEach(()=> {
        onChangeFunc = jest.fn();
        
        const props = {
            onChange: onChangeFunc,
            isChecked: false,
            label: "Toggle Button"
        };
        const wrapper = setUp(props);
        component = findByTestAtrr(wrapper, 'toggleButton');
        input = component.find('input');
    });
    
    it('should render', () => {
        expect(component.length).toBe(1);
    }); 

    it('should call onChange', () => {
        input.simulate('change');
        expect(onChangeFunc).toHaveBeenCalled();
    });

    it('should be false by default', () => {
        const isChecked = input.prop('checked');
        expect(isChecked).toBe(false);
    });

    it('should update checked property on click', () => {
        // Check why this test doesn't work with input instance ?????
        const onChangeMock = jest.fn();
        const wrapper = shallow(<ToggleButton onChange={onChangeMock} isChecked={false}/>);
        wrapper.find('input').simulate('change');
        const isCheckedProp = wrapper.find('input').prop('checked');
        expect(isCheckedProp).toBe(true);
    });
});