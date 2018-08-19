import React from 'react';
import { shallow, mount } from 'enzyme';
import DistrictCard from '../../Components/DistrictCard';

describe('DistrictCard', () => {
  let wrapper;
  let mockLocation = 'PARIS';
  let mockStats = {
    2004: 0.302
  };

  beforeEach(() => {
    wrapper = shallow(
      <DistrictCard
        key={'key'}
        location={'location'}
        stats={'stats'}
        retrieveCompare={jest.fn()}
        comparedCards={[]}
        removeCompareCard={jest.fn()}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change selected state to true when clicked once', () => {
    const mockState = {
      selected: true
    };

    wrapper.simulate('click');
    expect(wrapper.state()).toEqual(mockState);
  });

  it('should change selected state back to false when clicked a second time', () => {
    const expectedState = {
      selected: true
    };

    const expectedChangeState = {
      selected: false
    };

    wrapper.simulate('click');

    expect(wrapper.state()).toEqual(expectedState);

    wrapper.simulate('click');

    expect(wrapper.state()).toEqual(expectedChangeState);
  });

  it('should have a propert of low-stat if under 0.5 ', () => {
    let wrapperMount = mount(
      <DistrictCard location={mockLocation} stats={mockStats} />
    );

    expect(wrapper.find('div').every('p'));
  });
});
