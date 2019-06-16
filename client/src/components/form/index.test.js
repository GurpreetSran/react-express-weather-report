import React from 'react';
import { shallow } from 'enzyme';
import Form from './index';

it('Should shallow render', () => {
  const wrapper = shallow(<Form />);
  expect(wrapper.find('form').hasClass('formElement')).toEqual(true);
});