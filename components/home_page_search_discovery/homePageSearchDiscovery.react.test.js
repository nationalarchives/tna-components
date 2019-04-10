import React from 'react';
import TestRenderer from 'react-test-renderer';
import HomePageSearchDiscovery from './homePageSearchDiscovery.react';
import Headline from './child_components/headline.react';

let testRenderer, testInstance, testRendererJSON;

beforeAll(() => {
  testRenderer = TestRenderer.create(<HomePageSearchDiscovery />);
  testInstance = testRenderer.root;
  testRendererJSON = testRenderer.toJSON();
});

describe('HomePageSearchDiscovery component', () => {
  it('=> Prop H1 got the right content', () => {
    expect(testInstance.findByType(Headline).props.mainhead).toBe(
      'Search The National Archives and over 2,500 archives across the UK'
    );
  });
});
