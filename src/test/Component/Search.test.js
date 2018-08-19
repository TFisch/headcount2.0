import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../../Components/Search';


describe('Search', () => {

  it('should match the snapshot', () => {
    let wrapper = shallow(<Search />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call the updateFilter method on change', () => {
    let updateFilterMock = jest.fn();
    let wrapper = mount(<Search updateFilter={updateFilterMock} />);

    wrapper.find('.search-input').simulate('change');

    expect(wrapper.props().updateFilter).toHaveBeenCalled();
  });
});