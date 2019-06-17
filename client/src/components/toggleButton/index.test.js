import * as React from 'react';
import { shallow } from 'enzyme';
import ToggleButton from './index';

describe('Toggle button', () => {
    
    it('should render', () => {
        const wrapper = shallow( <ToggleButton />);
        expect(wrapper.find('div').first().hasClass('toggleButton')).toEqual(true);
    }); 

    it('should call onChange', () => {
        const onChangeMock = jest.fn();
        const wrapper = shallow(<ToggleButton onChange={onChangeMock}/>);
        wrapper.find('input').prop('onChange')();
        expect(onChangeMock).toHaveBeenCalled();
    });

    it('should update checked prop on click', () => {
        const onChangeMock = jest.fn();
        const wrapper = shallow(<ToggleButton onChange={onChangeMock} isChecked={false}/>);
        let isCheckedProp = wrapper.find('input').prop('checked');
        expect(isCheckedProp).toBe(false);
        wrapper.find('input').prop('onChange')();
        isCheckedProp = wrapper.find('input').prop('checked');
        expect(isCheckedProp).toBe(true);
    });
});