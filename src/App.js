import React, { Component } from 'react';
import './App.css';
import DistrictList from './Components/DistrictList';
import DistrictCard from './Components/DistrictCard';
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
const district = new DistrictRepository(kinderData);



class App extends Component {
  constructor() {
    super()
    this.state = {
      districts: []
    }
  }




  render() {
    return (
      <div>
        <DistrictList districts={this.state.districts} />
      </div>
    );
  }
}

export default App;
