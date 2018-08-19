import React from 'react';
import "../styling/Nav.css"
import Search from '../Components/Search'
import PropTypes from 'prop-types';
import '../images/grad.svg';

const Nav = ({ updateFilter }) => {
  return <div className="nav">
    <div className="left-wrapper">
      <img className="logo-icon" src={require('../images/grad.svg')} />
      <h3 className="logo">HeadCount 2.0</h3>
    </div>
    <Search updateFilter={updateFilter} />
  </div>
}

export default Nav;

Nav.propTypes = {
  updateFilter: PropTypes.func,
}