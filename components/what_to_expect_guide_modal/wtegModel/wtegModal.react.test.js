import React from 'react';
import WTEGModal from './wtegModal.react';
import TestRenderer, {create} from 'react-test-renderer';

// Snapshot 1
it('renders correctly', () => {
  const items = ['someSource', 'altImageDes', 'someClass'];
  const tree = TestRenderer.create(
    <WTEGModal
      src={items[0]}
      alt={items[1]}
      className={items[2]}
      imgDsc={items[1]}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// Unit test
describe('Test state for showModal', () => {
  const items = ['someSource', 'altImageDes', 'someClass'];
  const component = create(
    <WTEGModal
      src={items[0]}
      alt={items[1]}
      className={items[2]}
      imgDsc={items[1]}
    />
  );
  const instance = component.getInstance();
  const {showModal} = instance.state;
  it('checking the initial state', () => {
    expect(showModal).toBeFalsy();
  });
});

describe('Test state for closeWindow object', () => {
  const items = ['someSource', 'altImageDes', 'someClass'];
  const component = create(
    <WTEGModal
      src={items[0]}
      alt={items[1]}
      className={items[2]}
      imgDsc={items[1]}
    />
  );
  const instance = component.getInstance();
  const {Data} = instance.state;

  it('checking close window object', () => {
    expect(Data.gtm.closeWindow.event).toBe('Popup');
    expect(Data.gtm.closeWindow.eventCategory).toBe(
      'What to expect guide popup image'
    );
    expect(Data.gtm.closeWindow.eventAction).toBe('Close window');
  });
});

describe('Test state for closeWindow object', () => {
  const items = ['someSource', 'altImageDes', 'someClass'];
  const component = create(
    <WTEGModal
      src={items[0]}
      alt={items[1]}
      className={items[2]}
      imgDsc={items[1]}
    />
  );
  const instance = component.getInstance();
  const {Data} = instance.state;

  it('checking close window object', () => {
    expect(Data.gtm.closeWindow.event).toBe('Popup');
    expect(Data.gtm.closeWindow.eventCategory).toBe(
      'What to expect guide popup image'
    );
    expect(Data.gtm.closeWindow.eventAction).toBe('Close window');
  });
});

describe('Test state for escKey object', () => {
  const items = ['someSource', 'altImageDes', 'someClass'];
  const component = create(
    <WTEGModal
      src={items[0]}
      alt={items[1]}
      className={items[2]}
      imgDsc={items[1]}
    />
  );
  const instance = component.getInstance();
  const {Data} = instance.state;

  it('checking escape key object', () => {
    expect(Data.gtm.escKey.event).toBe('Popup');
    expect(Data.gtm.escKey.eventCategory).toBe(
      'What to expect guide popup image'
    );
    expect(Data.gtm.escKey.eventAction).toBe('Esc key pressed');
  });
});

describe('Test state for clicks away object', () => {
  const items = ['someSource', 'altImageDes', 'someClass'];
  const component = create(
    <WTEGModal
      src={items[0]}
      alt={items[1]}
      className={items[2]}
      imgDsc={items[1]}
    />
  );
  const instance = component.getInstance();
  const {Data} = instance.state;

  it('checking escape key object', () => {
    expect(Data.gtm.clicksAway.event).toBe('Popup');
    expect(Data.gtm.clicksAway.eventCategory).toBe(
      'What to expect guide popup image'
    );
    expect(Data.gtm.clicksAway.eventAction).toBe('Clicked outside window');
  });
});
