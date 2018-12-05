// __tests__/CheckboxWithLabel-test.js

import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CheckboxWithLabel from '../../components/checkbox/checkbox.react';

Enzyme.configure({ adapter: new Adapter() });

test('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});

test('Check sum', () => {
  const wrap = shallow(<CheckboxWithLabel/>);
  expect(wrap.instance().sum(2,2)).toBe(4);
});