import React from 'react';
import '../styling/DistrictList.css';
import DistrictCard from './DistrictCard';
import PropTypes from 'prop-types';

const DistrictList = ({ districts, filteredDistricts, compareCards }) => {
  const filteredDisplay = filteredDistricts.map((district, index) => {
    return (<DistrictCard key={district.location} location={district.location} stats={district.stats} />)
  });

  const compareTwoDistricts = compareCards.map(card => {
    return (<DistrictCard key={district.location} location={district.location} />)
  })


  return
  <React.Fragment>
    <div className="compare-cards">
      {compareTwoDistricts}
    </div>
    <div className="district-list">
      {filteredDisplay}
    </div >
  </React.Fragment>
};

DistrictList.PropTypes = {
  district: PropTypes.object,
  filteredResults: PropTypes.array
};

export default DistrictList;
