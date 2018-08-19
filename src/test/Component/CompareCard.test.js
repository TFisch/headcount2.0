import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import CompareCard from '../../Components/CompareCard';

describe('CompareCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CompareCard locationOne={'locationOne'} locationTwo={'locationTwo'} foundAverages={jest.fn()}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});