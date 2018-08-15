import React from 'react';
import "../styling/Search.css"


const Search = ({ displaySearch }) => {

  return (
    <div className="search-wrap">
      <input className="search-input" onChange={displaySearch} />
    </div>
  )
}

export default Search;