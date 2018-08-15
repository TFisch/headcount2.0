import React, { Component } from 'react';
import './App.css';
import DistrictList from './Components/DistrictList';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
import Nav from './Components/Nav'



class App extends Component {
  constructor() {
    super()
    this.state = {
      districts: new DistrictRepository(kinderData),
      filteredResults: [],
      searchEntered: false
    }
  }


  displaySearch = e => {
    const searchEntry = e.target.value;
    const filterMatches = this.state.districts.findAllMatches(searchEntry);
    this.setState({ filteredResults: filterMatches })
    console.log(this.state.filteredResults)

  }

  render() {
    return (
      <div className="wrapper">
        <Nav displaySearch={this.displaySearch} />
        <DistrictList districts={this.state.districts} searchEntered={this.state.searchEntered} filteredResults={this.state.filteredResults} />
      </div>
    );
  }
}

export default App;
