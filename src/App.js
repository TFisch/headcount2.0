import React, { Component } from 'react';
import './App.css';
import DistrictList from './Components/DistrictList';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
import Nav from './Components/Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      defaultDistricts: new DistrictRepository(kinderData),
      filteredDistricts: [],
      comparedCards: [],
      foundAverages: {},
      averagesSearched: false
    };
  }

  componentDidMount() {
    this.populateList();
  }

  componentDidUpdate() {
    if (this.state.comparedCards.length === 2 && !this.state.averagesSearched) {
      this.findDistrictAverages();
    }
  }

  populateList() {
    const filteredStats = this.state.defaultDistricts.findAllMatches();
    this.setState({ filteredDistricts: filteredStats });
  }

  updateFilter = searchEntry => {
    const filteredDistricts = this.state.defaultDistricts.findAllMatches(
      searchEntry
    );
    this.setState({ filteredDistricts });
  };

  retrieveCompare = card => {
    let comparedCards = [...this.state.comparedCards, card];
    this.setState({ comparedCards });
  };

  findDistrictAverages = () => {
    const locations = this.state.comparedCards.map(
      district => district.location
    );
    let [districtOne, districtTwo] = locations;
    const foundAverages = this.state.defaultDistricts.compareDistrictAverages(
      districtOne,
      districtTwo
    );
    this.setState({ foundAverages, averagesSearched: true });
  };

  removeCompareCard = cardSearch => {
    const currentComparedCards = this.state.comparedCards;
    const comparedCards = currentComparedCards.filter(
      card => card.location !== cardSearch
    );
    this.setState({ comparedCards, averagesSearched: false });
  };

  render() {
    const { filteredDistricts, comparedCards, foundAverages } = this.state;
    return (
      <div className="wrapper">
        <Nav updateFilter={this.updateFilter} />
        <DistrictList
          filteredDistricts={filteredDistricts}
          retrieveCompare={this.retrieveCompare}
          comparedCards={comparedCards}
          removeCompareCard={this.removeCompareCard}
          foundAverages={foundAverages}
        />
      </div>
    );
  }
}

export default App;
