import React from "react";
import ReactDom from 'react-dom';
import { shallow, mount } from 'enzyme';
import DistrictList from "../../Components/DistrictList";


describe('DistrictList', () => {
  let mockFn = jest.fn();
  let mockArray = [
    {
      locaton: "GERMANY",
      stats: { 2004: 0.29, 2005: 0.238, 2006: 0.369 }
    },
    {
      locaton: "FLORIDA",
      stats: { 2004: 0.24, 2005: 0.278, 2006: 0.337 }
    }
  ]



  it('should match the snapshot', () => {
    let wrapper = shallow(<DistrictList filteredDistricts={mockArray} comparedCards={[]} retrieveCompare={mockFn} removeCompareCard={mockFn} foundAverages={{}} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should render the comparedCards when there are two in the compared array', () => {
    let wrapper = shallow(<DistrictList filteredDistricts={mockArray} comparedCards={mockArray} retrieveCompare={mockFn} removeCompareCard={mockFn} foundAverages={{}} />);
    expect(wrapper).toMatchSnapshot();

  })

})

