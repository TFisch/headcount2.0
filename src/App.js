import React, { Component } from 'react';
import './App.css';
import DistrictList from './Components/DistrictList';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
import Nav from './Components/Nav'
const districts = new DistrictRepository(kinderData);



class App extends Component {
  constructor() {
    super()

    this.state = {
      districts,
      searchEntered: false
    }
  }


  displaySearch = match => {
    this.setState({ districts: match, searchEntered: true })
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
