import React from 'react';
import { shallow, mount } from 'enzyme';
import Nav from '../../Components/Nav';

describe('Nav', () => {

  it('should match the snapshot', () => {
    let wrapper = shallow(<Nav />);


    expect(wrapper).toMatchSnapshot();
  });
});