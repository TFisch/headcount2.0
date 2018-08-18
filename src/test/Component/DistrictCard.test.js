import React from "react";
import { shallow, mount } from 'enzyme';
import DistrictCard from '../../Components/DistrictCard';

describe('DistrictCard', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<DistrictCard />);
    expect(wrapper).toMatchSnapshot()
  });


});