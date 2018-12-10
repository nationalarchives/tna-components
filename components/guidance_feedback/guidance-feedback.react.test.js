import React from 'react';
import GuidanceFeedback from './guidance-feedback.react';
import renderer from 'react-test-renderer';

test('sdsds ', () => {
  const component = renderer.create(
    <GuidanceFeedback />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();

  
});