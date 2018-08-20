import React from 'react';
import { shallow, mount } from 'enzyme';
import DistrictCard from '../../Components/DistrictCard';

describe('DistrictCard', () => {
  let wrapper;

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

  it('should have a list item with a class of lowStats if under .5', () => {
    const lowMockStats = { 2004: 0.3 };
    let wrapper = mount(
      <DistrictCard
        key={'key'}
        location={'Paris'}
        stats={lowMockStats}
        retrieveCompare={jest.fn()}
        comparedCards={[]}
        removeCompareCard={jest.fn()}
      />
    );

    expect(wrapper.find('.stats-wrap').children().hasClass('lowStats')).toEqual(true);

  });

  it('should have a list item with a class of yearStats if over .5', () => {
    const lowMockStats = { 2004: 0.6 };
    let wrapper = mount(
      <DistrictCard
        key={'key'}
        location={'Paris'}
        stats={lowMockStats}
        retrieveCompare={jest.fn()}
        comparedCards={[]}
        removeCompareCard={jest.fn()}
      />
    );

    expect(wrapper.find('.stats-wrap').children().hasClass('yearStats')).toEqual(true);

  });
});
