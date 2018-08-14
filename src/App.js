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
      districts
    }
  }




  render() {
    return (
      <div className="wrapper">
        <DistrictList districts={this.state.districts} />
      </div>
    );
  }
}

export default App;
