import React from 'react';
import '../styling/Search.css';
import PropTypes from 'prop-types';

const Search = ({ updateFilter }) => {
  this.handleChange = e => {
    updateFilter(e.target.value);
  };

  return (
    <div className="search-wrap">
      <input className="search-input" onChange={this.handleChange} />
    </div>
  );
};

Search.propTypes = {
  displaySearch: PropTypes.func
};

export default Search;
