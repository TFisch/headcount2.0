import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import kinderData from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper';
import { wrap } from 'module';

describe('App', () => {
  let wrapper;
  let filteredStats;
  let mockCardOne;
  let mockCardTwo;

  beforeEach(() => {
    wrapper = shallow(<App />);
    mockCardOne = {
      location: "SPACE",
      stats: { 2004: 0.24 }
    };

    mockCardTwo = {
      location: "Paris",
      stats: { 2004: 0 }
    };

  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })


  it('should intialize with state set as an empty filteredDistricts array, an empty comparedCards array, an empty foundAverages object, and averagesSearched set to false', () => {
    expect(wrapper.state().filteredDistricts.length).toEqual(181);
    expect(wrapper.state().comparedCards).toEqual([]);
    expect(wrapper.state().foundAverages).toEqual({});
    expect(wrapper.state().averagesSearched).toEqual(false);
  })

  it('should add a card into the comparedCard array when it is clicked', () => {
    expect(wrapper.state().comparedCards.length).toEqual(0);
    wrapper.instance().retrieveCompare(mockCardOne);
    expect(wrapper.state().comparedCards.length).toEqual(1);
  })

  it('should update the filteredDistricts array based on the searchEntry', () => {
    let mockSearchEntry = "Ag"

    wrapper.instance().updateFilter(mockSearchEntry);
    expect(wrapper.state().filteredDistricts.length).toEqual(4);
  })

  it('should remove the selected card from the comparedCards state when selected', () => {
    wrapper.instance().retrieveCompare(mockCardOne);
    wrapper.instance().removeCompareCard("SPACE");
    expect(wrapper.state().comparedCards.length).toEqual(0);
  })

  // it('should find the district averages when two cards are entered to compare array', () => {
  //   wrapper.instance().retrieveCompare(mockCardOne);
  //   wrapper.setState({ comparedCards: mockCardOne });

  // })



})