import React, { Component } from 'react';
import './App.css';
import DistrictList from './Components/DistrictList';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
import Nav from './Components/Nav';
import { throws } from 'assert';
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
    if (this.state.comparedCards.length < 2) {
      this.setState({ comparedCards: [...this.state.comparedCards, card] });
    }
  }

  removeCompareCard = (card) => {

  }


  render() {
    return (
      <div className="wrapper">
        <Nav updateFilter={this.updateFilter} />
        <DistrictList
          districts={this.state.districts}
          filteredDistricts={this.state.filteredDistricts}
          retrieveCompare={this.retrieveCompare}
          comparedCards={this.state.comparedCards}
          removeCompareCard={this.removeCompareCard}
        />
      </div>
    );
  }
}

export default App;
