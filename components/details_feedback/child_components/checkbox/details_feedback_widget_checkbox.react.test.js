import React from 'react';
import TestRenderer from 'react-test-renderer';
import renderer from 'react-test-renderer';
import Checkbox from './details_feedback_widget_checkbox.react';

let testRenderer, testRendererToJson;

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

// Unit test

describe("Check DOM element and it's attributes", () => {
  const items = ['Hello World', 'hello-world'];
  testRenderer = TestRenderer.create(
    <Checkbox labelText={items[0]} id={items[1]} />
  );

  testRendererToJson = testRenderer.toJSON();
  it('Should have an <div> tag', () => {
    expect(testRendererToJson.type).toBe('div');
    console.log(testRendererToJson.children[0].props);
  });
  it('Should have children tag', () => {
    expect(testRendererToJson.children[0].type).toBe('input');
    expect(testRendererToJson.children[1].type).toBe('label');
  });
});
