import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Search from '../../Components/Search';


describe('Search', () => {




  it('should call the updateFilter method on change', () => {
    let updateFilterMock = jest.fn();
    let wrapper = mount(<Search updateFilter={updateFilterMock} />);
    wrapper.find('.search-input').simulate('change');
    expect(wrapper.props().updateFilter).toHaveBeenCalled();


  })
})