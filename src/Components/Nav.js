import React from 'react';
import "../styling/Nav.css"
import Search from '../Components/Search'


const Nav = () => {
  return <div className="nav">
    <h3 className="logo">HeadCount 2.0</h3>
    <Search />
  </div>
}

export default Nav;