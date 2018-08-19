import React from 'react';
import { shallow } from 'enzyme';
import CompareCard from '../../Components/CompareCard';

describe('CompareCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CompareCard
        locationOne={'locationOne'}
        locationTwo={'locationTwo'}
        foundAverages={jest.fn()}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
