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
      districts: new DistrictRepository(kinderData),
      filteredDistricts: [],
      comparedCards: [],
      foundAverages: {},
      AveragesSearched: false
    };
  }


  componentDidMount() {
    this.populateList();
  }

  componentDidUpdate() {
    if (this.state.comparedCards.length === 2 && !this.state.AveragesSearched) {
      this.findDistrictAverages();
    }
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

  findDistrictAverages = () => {
    const locations = this.state.comparedCards.map(district => district.location);
    let [districtOne, districtTwo] = locations;
    const districts = new DistrictRepository(kinderData);
    const foundAverages = districts.compareDistrictAverages(districtOne, districtTwo);
    this.setState({ foundAverages, AveragesSearched: true })
  }


  // removeCompareCard = (card) => {

  // }


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
          foundAverages={this.state.foundAverages}
        />
      </div>
    );
  }
}

export default App;
