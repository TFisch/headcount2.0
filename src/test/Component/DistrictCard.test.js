import React from "react";
import { shallow, mount } from 'enzyme';
import DistrictCard from '../../Components/DistrictCard';

describe('DistrictCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DistrictCard
      key={'key'}
      location={'location'}
      stats={'stats'}
      retrieveCompare={jest.fn()}
      comparedCards={[]}
      removeCompareCard={jest.fn()} />);
  })



  it.skip('should match the snapshot', () => {
    const wrapper = shallow(<DistrictCard
      key={'key'}
      location={'location'}
      stats={'stats'}
      retrieveCompare={jest.fn()}
      comparedCards={[]}
      removeCompareCard={jest.fn()} />);
  });

  it('should update a card/s selected state when clicked', () => {
    const mockState = {
      selected: true
    }

    wrapper.simulate('click');

    expect(wrapper.state()).toEqual(mockState);
  })
});