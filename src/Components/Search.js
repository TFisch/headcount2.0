import React, { Component } from 'react';
import "../styling/Search.css"
import kinderData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from '../helper';


export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.searchDistricts(this.state.searchInput);
  }


  handleChange = (e) => {
    const searchInput = e.target.value;
    this.setState({ searchInput })
  }

  searchDistricts(districtEntry) {
    const caseAdjust = districtEntry.toUpperCase();
    const districtData = new DistrictRepository(kinderData);
    const districtKeys = Object.keys(districtData.stats);
    const matches = districtKeys.filter(key => districtData.stats[key].location === caseAdjust)
    console.log(matches)
  }


  render() {
    return (
      <div className="search-wrap">
        <form onSubmit={this.handleSubmit}>
          <input className="search-input" value={this.state.searchInput} onChange={this.handleChange} />
          <button>Search</button>
        </form>
      </div>
    )

  }

}