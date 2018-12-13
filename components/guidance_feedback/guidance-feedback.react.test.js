import React from 'react';
import GuidanceFeedback from './guidance-feedback.react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// Snapshot 1
test('Show the relevant form elements when click on button NO or YES', () => {
  const component = renderer.create(
    <GuidanceFeedback />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.children[2].props.onClick();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.children[3].props.onClick();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

// Snapshot 2
test('Hide the form and button elements on submit', () => {
  const component = renderer.create(
    <GuidanceFeedback />
  );

  let submitEvent = { 
    preventDefault: () => {} 
  };

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.children[4].children[2].props.onClick(submitEvent);

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

// Unit testing using Enzyme
test('Check for the absence of the component', () => {
  const component = shallow(
    <GuidanceFeedback />
  );

  expect(component.exists()).toBeTruthy();
});