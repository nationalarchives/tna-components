import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from './details_feedback_widget_checkbox.react';

//let testRenderer, testRendererToJson;

// Snapshot test 1
it('renders the checkbox component correctly', () => {
  const items = ['Hello world', 'this-is-the-id'];
  const tree = renderer
    .create(<Checkbox labelText={items[0]} id={items[1]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// Snapshot test 2
it('renders the checkbox component with optional props', () => {
  const items = [
    'Hello world',
    'this-is-the-id',
    () => console.log('Function test')
  ];
  const tree = renderer
    .create(
      <Checkbox
        labelText={items[0]}
        id={items[1]}
        onClick={items[2]}
        autoFocus="autofocus"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
