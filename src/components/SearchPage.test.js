import React from 'react';
import SearchPage from './SearchPage';
import { shallow } from 'enzyme';

describe('SearchPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchPage />);
  });

  it('renders', () => {
    expect(wrapper).toBeDefined();
  });

  describe('the user populates the input', () => {
    const query = 'Clockwork';

    beforeEach(() => {
      const input = wrapper.find('input').first();
      input.simulate('change', {
        target: { value: query },
      });
    });

    it('should update the state to `query`', () => {
      expect(wrapper.state().query).toEqual(query);
    });
  });
});
