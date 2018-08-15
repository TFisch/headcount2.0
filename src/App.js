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
      searchEntered: false
    }
  }


  displaySearch = e => {
    const searchEntry = e.target.value;
  }

  render() {
    return (
      <div className="wrapper">
        <Nav displaySearch={this.displaySearch} />
        <DistrictList districts={this.state.districts} searchEntered={this.state.searchEntered} />
      </div>
    );
  }
}

export default App;
