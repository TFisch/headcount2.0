import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../../Components/Nav';

describe('Nav', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<Nav />);

    expect(wrapper).toMatchSnapshot();
  });
});
