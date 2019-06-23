import React from 'react';
import { shallow } from 'enzyme';

import Form from './index';
import { findByTestAtrr } from '../../../utils/testUtils';

const setUp = (props={}) => {
  const component = shallow(<Form {...props} />);
  // console.log(component.debug());
  return component;
}

describe('Form', () => {

  let component;

  beforeEach(() => {
    component = setUp();
  });

  it('should render', () => {
    const form = findByTestAtrr(component, 'formComponent'); 
    expect(form.length).toBe(1);
  });

  it('should render input', () => {
    const inputElement = findByTestAtrr(component, 'inputField'); 
    expect(inputElement.length).toBe(1);
  });
}); 
