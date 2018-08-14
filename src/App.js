import React, { Component } from 'react';
import './App.css';
import DistrictList from './Components/DistrictList';
import DistrictCard from './Components/DistrictCard';

class App extends Component {
  constructor() {
    super()
    this.state = {
      districts: []
    }
  }
  render() {
    return (
      <div>
        <DistrictList />
      </div>
    );
  }
}

export default App;
