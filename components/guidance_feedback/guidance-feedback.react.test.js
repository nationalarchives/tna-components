import React from 'react';
import GuidanceFeedback from './guidance-feedback.react';
import renderer from 'react-test-renderer';

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