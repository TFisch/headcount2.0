import React from "react";
import { shallow, mount } from 'enzyme';
import DistrictCard from '../../Components/DistrictCard';

describe('DistrictCard', () => {
  let wrapper;
  let removeCompareCard;

  beforeEach(() => {
    removeCompareCard = jest.fn();

    wrapper = shallow(<DistrictCard
      key={'key'}
      location={'location'}
      stats={'stats'}
      retrieveCompare={jest.fn()}
      comparedCards={[]}
      removeCompareCard={jest.fn()} />);
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





});

