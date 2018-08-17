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
      filteredDistricts: [],
      comparedCards: []
    };
  }


  componentDidMount() {
    this.populateList();
  }

  componentDidUpdate() {
    console.log(this.state.comparedCards);

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

  retrieveCompare = (card) => {
    this.setState({ comparedCards: [...this.state.comparedCards, card] });

  }


  render() {
    return (
      <div className="wrapper">
        <Nav updateFilter={this.updateFilter} />
        <DistrictList
          districts={this.state.districts}
          filteredDistricts={this.state.filteredDistricts}
          retrieveCompare={this.retrieveCompare}
        />
      </div>
    );
  }
}

export default App;
