import React from 'react';
import TestRenderer from 'react-test-renderer';
import ModalWrapper from './modal_wrapper.react';

let testRenderer, testRendererToJson;

// Snapshot test 1
it('renders the checkbox component correctly', () => {
  const items = [
    'someId',
    'button',
    true,
    () => console.log('Function test'),
    'someClass'
  ];
  const tree = TestRenderer.create(
    <ModalWrapper
      id={items[0]}
      role={items[1]}
      ariaModal={items[2]}
      onClick={items[3]}
      className={items[4]}>
      <h1>Hello World</h1>
    </ModalWrapper>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// Unit test
describe("Check DOM element and it's attributes", () => {
  const items = [
    'someId',
    'button',
    true,
    () => console.log('Function test'),
    'someClass'
  ];
  testRenderer = TestRenderer.create(
    <ModalWrapper
      id={items[0]}
      role={items[1]}
      ariaModal={items[2]}
      onClick={items[3]}
      className={items[4]}>
      <h1>Hello World</h1>
    </ModalWrapper>
  );

  testRendererToJson = testRenderer.toJSON();

  it('Should have a parent <div> tag', () => {
    expect(testRendererToJson.type).toBe('div');
  });
  it('Should have parent level props', () => {
    expect(testRendererToJson.props).toHaveProperty('id');
    expect(testRendererToJson.props).toHaveProperty('role');
    expect(testRendererToJson.props).toHaveProperty('aria-modal');
  });
  it('Should have children properties', () => {
    expect(testRendererToJson.children.length).toEqual(1);
    expect(testRendererToJson.children[0]).toHaveProperty('type');
    expect(testRendererToJson.children[0]).toHaveProperty('props');
    expect(testRendererToJson.children[0]).toHaveProperty('children');
  });
  it('Should have parent have children properties', () => {
    expect(testRendererToJson.children.length).toEqual(1);
    expect(testRendererToJson.children[0]).toHaveProperty('type');
    expect(testRendererToJson.children[0]).toHaveProperty('props');
    expect(testRendererToJson.children[0]).toHaveProperty('children');
  });
  it('Should check for children properties', () => {
    expect(testRendererToJson.children[0].props).toHaveProperty('className');
    expect(testRendererToJson.children[0].props).toHaveProperty('onClick');
  });
  it('Should if children have children properties', () => {
    expect(testRendererToJson.children[0].children[0]).toHaveProperty(
      'children'
    );
  });
});
