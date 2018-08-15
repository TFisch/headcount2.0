import React, { Component } from 'react';
import "../styling/Search.css"
import kinderData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from '../helper';


export default class Search extends Component {
  constructor(props) {
    super(props)
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
    this.props.filterDistricts((districtData.findAllMatches(this.state.searchInput)))
  }

  searchDistricts(districtEntry) {
    const districtData = new DistrictRepository(kinderData);
    this.props.displaySearch((districtData.findByName(districtEntry)));
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