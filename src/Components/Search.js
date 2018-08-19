import React from 'react';
import '../styling/Search.css';
import PropTypes from 'prop-types';

const Search = ({ updateFilter }) => {
  const handleChange = e => {
    updateFilter(e.target.value);
  };

  return (
    <div className="search-wrap">
      <input className="search-input" placeholder="Search for a School District" onChange={handleChange} />
    </div>
  );
};

Search.propTypes = {
  updateFilter: PropTypes.func
};

export default Search;
