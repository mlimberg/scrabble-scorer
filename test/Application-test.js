import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { assert, expect } from 'chai'

import App from '../lib/components/App.js';
import scoreWord from '../lib/helpers/scoreWord'

describe('<MyComponent />', () => {

  it('renders a <App /> component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(App)).to.have.length(1);
  });

  it('is a function', () => {
    assert.isFunction(scoreWord);
  });

  it('returns a number', () => {
    assert.isNumber(scoreWord('hello'));
  });

  it('returns a specific score for a word', () => {
    assert.equal(scoreWord('hello'), 8);
    assert.equal(scoreWord('BOX'), 12);
    assert.equal(scoreWord('supercalifragilisticexpialidocious'), 56);
  });

  it('should return 0 if an empty string or null is passed', () => {
    assert.equal(scoreWord(''), 0);
    assert.equal(scoreWord(null), 0)
  });

  it('should strip white space from the beginning and end', () => {
    assert.equal(scoreWord(' hello     '), 8);
  });

  it('should take an optional 2nd arg as a multiplier', () => {
    assert.equal(scoreWord('hello', 2), 16);
    assert.equal(scoreWord('BOX', 12), 144);
    assert.equal(scoreWord('supercalifragilisticexpialidocious', 1224), 68544);
  });

  it('should account for spaces in a string', () => {
    assert.equal(scoreWord('hel lo'), 8)
  })
});
