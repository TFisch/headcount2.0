import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../../Components/Search';

describe('Search', () => {
  let wrapper;
  let updateFilter;

  beforeEach(() => {
    updateFilter = jest.fn();
    wrapper = shallow(<Search />);
  })

  it('should call the updateFilter method on change', () => {


  })
})