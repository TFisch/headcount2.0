import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import kinderData from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper';

describe('App', () => {
  let wrapper;
  let districts;
  let filteredStats;
  let mockState;

  beforeEach(() => {
    wrapper = shallow(<App />);
    districts = new DistrictRepository(kinderData);
    filteredStats = districts.findAllMatches();

    mockState = {
      filteredDistricts: filteredStats,
      comparedCards: [],
      foundAverages: {},
      averagesSearched: false
    };
  })

  it('should intialize with state set as an empty filteredDistricts array, an empty comparedCards array, an empty foundAverages object, and averagesSearched set to false', () => {

    expect(wrapper.state().filteredDistricts.length).toEqual(181);
    expect(wrapper.state().comparedCards).toEqual([]);
    expect(wrapper.state().foundAverages).toEqual({});
    expect(wrapper.state().averagesSearched).toEqual(false);
  })

  it('should add a card into the comparedCard array when it is clicked', () => {
    let mockCard = {
      location: "SPACE",
      stats: { 2004: 0.24, 2005: 0.278, 2006: 0.337, 2007: 0.395, 2008: 0.536, 2009: 0.598, 2010: 0.64, 2011: 0.672, 2012: 0.695, 2013: 0.703, 2014: 0.741 }
    }

    expect(wrapper.state()).toEqual(mockState);
    wrapper.instance().retrieveCompare(mockCard);
    expect(wrapper.state().comparedCards.length).toEqual(1);
  })

  it('should ')

})