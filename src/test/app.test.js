import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

const title = 'React with Webpack and Babel';

describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});

describe('App', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App title={title} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
