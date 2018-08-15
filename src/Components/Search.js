import React, { Component } from 'react';
import "../styling/Search.css"
import kinderData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from '../helper';




const Search = ({ displaySearch }) => {

  return (
    <div className="search-wrap">
      <input className="search-input" onChange={displaySearch} />
    </div>
  )
}

export default Search;