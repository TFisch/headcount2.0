import React, { Component } from 'react';
import './App.css';
import DistrictList from './Components/DistrictList';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
import Nav from './Components/Nav';
const districts = new DistrictRepository(kinderData);


class App extends Component {
  constructor() {
    super();
    this.state = {
      districts,
      compareCards: [],
      filteredDistricts: []
    };
  }


  componentDidMount() {
    this.populateList();
  }

  populateList() {
    const districts = new DistrictRepository(kinderData);
    const filteredStats = districts.findAllMatches();
    this.setState({ filteredDistricts: filteredStats });
  }


  updateFilter = searchEntry => {
    const districts = new DistrictRepository(kinderData);
    const filteredDistricts = districts.findAllMatches(searchEntry);
    this.setState({ filteredDistricts });

  };

  render() {
    return (
      <div className="wrapper">
        <Nav updateFilter={this.updateFilter} />
        <DistrictList
          districts={this.state.districts}
          filteredDistricts={this.state.filteredDistricts}
          compareCards={this.state.compareCards}
        />
      </div>
    );
  }
}

export default App;
