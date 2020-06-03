import React from 'react';
import TestRenderer from 'react-test-renderer';
import Checkbox from './details_feedback_widget_checkbox.react';

let testRenderer, testRendererToJson;

// Snapshot test 1
it('renders the checkbox component correctly', () => {
  const items = ['Hello world', 'this-is-the-id'];
  const tree = TestRenderer.create(
    <Checkbox labelText={items[0]} id={items[1]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// Snapshot test 2
it('renders the checkbox component with optional props', () => {
  const items = [
    'Hello world',
    'this-is-the-id',
    () => console.log('Function test')
  ];
  const tree = TestRenderer.create(
    <Checkbox
      labelText={items[0]}
      id={items[1]}
      onClick={items[2]}
      autoFocus="autofocus"
    />
  ).toJSON();
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
  });
  it('Should have children tag', () => {
    expect(testRendererToJson.children.length).toEqual(2);
    expect(testRendererToJson.children[0].type).toBe('input');
    expect(testRendererToJson.children[1].type).toBe('label');
  });
  it('Should check the props for input', () => {
    expect(
      testRendererToJson.children[0].props.hasOwnProperty('type')
    ).toBeTruthy();
    expect(
      testRendererToJson.children[0].props.hasOwnProperty('id')
    ).toBeTruthy();
    expect(
      testRendererToJson.children[0].props.hasOwnProperty('value')
    ).toBeTruthy();
    expect(
      testRendererToJson.children[0].props.hasOwnProperty('onClick')
    ).toBeTruthy();
    expect(
      testRendererToJson.children[0].props.hasOwnProperty('autoFocus')
    ).toBeTruthy();
  });
  it('Should check the props for label', () => {
    expect(
      testRendererToJson.children[1].props.hasOwnProperty('for')
    ).toBeTruthy();
    expect(testRendererToJson.children[1].children.length).toBe(1);
  });
});
