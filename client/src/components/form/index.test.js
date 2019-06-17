import React from 'react';
import { shallow } from 'enzyme';
import Form from './index';

describe('Form', () => {
  it('should render', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find('form').hasClass('formElement')).toEqual(true);
  });
});
