import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai'

import App from '../lib/components/App.js';

describe('<MyComponent />', () => {

  it('renders a <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(App)).to.have.length(1);
  });


});
