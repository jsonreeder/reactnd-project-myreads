import App from '../src/App';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders', () => {
    expect(wrapper).to.have.length(1);
  });
});
