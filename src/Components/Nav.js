import React from 'react';
import "../styling/Nav.css"
import Search from '../Components/Search'
import PropTypes from 'prop-types';

const Nav = ({ updateFilter }) => {
  return <div className="nav">
    <h3 className="logo">HeadCount 2.0</h3>
    <Search updateFilter={updateFilter} />
  </div>
}

export default Nav;

Nav.propTypes = {
  updateFilter: PropTypes.func,
}