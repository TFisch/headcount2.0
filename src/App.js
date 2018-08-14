import React, { Component } from 'react';
import './App.css';
import DistrictList from './Components/DistrictList';
import DistrictCard from './Components/DistrictCard';

class App extends Component {
  render() {
    return (
      <div>
        <DistrictList />
      </div>
    );
  }
}

export default App;
