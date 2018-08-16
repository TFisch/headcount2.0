import React from 'react';
import "../styling/Search.css"
import PropTypes from 'prop-types'



const Search = ({ displaySearch }) => {

  return (
    <div className="search-wrap">
      <input className="search-input" onChange={displaySearch} />
    </div>
  )
}

Search.propTypes = {
  displaySearch: PropTypes.func
}


export default Search;