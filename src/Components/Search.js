import React, { Component } from 'react';
import "../styling/Search.css"


export default class Search extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="search-wrap">
        <input className="search-input" />
        <button>Search</button>

      </div>
    )

  }

}