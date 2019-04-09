import React from 'react';
import TestRenderer from 'react-test-renderer';
import Form from './form.react';

let testRenderer, testRendererJSON;

beforeAll(() => {
  testRenderer = TestRenderer.create(<Form />);
  testRendererJSON = testRenderer.toJSON();
});

describe('sdsd', () => {
  it('dsdsd', () => {
    expect(testRendererJSON.type).toBe('form');
  });
});
