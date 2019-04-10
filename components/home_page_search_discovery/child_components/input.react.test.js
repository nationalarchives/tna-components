import React from 'react';
import TestRenderer from 'react-test-renderer';
import Input from './input.react';

let testRenderer, testRendererJSON;

beforeAll(() => {
  testRenderer = TestRenderer.create(<Input />);
  testRendererJSON = testRenderer.toJSON();
});

describe('something', () => {
  it('sadasd', () => {
    expect(testRendererJSON[0].type).toBe('label');
    expect(testRendererJSON[1].type).toBe('input');
  });
});
