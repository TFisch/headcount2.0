import React from 'react';
import '../styling/DistrictList.css';
import DistrictCard from './DistrictCard';
import PropTypes from 'prop-types';

const DistrictList = ({ districts, filteredDistricts, retrieveCompare }) => {
  const filteredDisplay = filteredDistricts.map((district, index) => {
    return (<DistrictCard key={district.location} location={district.location} stats={district.stats} retrieveCompare={retrieveCompare} />)
  });

  // const compareTwoDistricts = compareCards.map(card => {
  //   return null;
  // })

  return (

    <div className="district-list">
      {filteredDisplay}
    </div >

  )
};

DistrictList.PropTypes = {
  district: PropTypes.object,
  filteredResults: PropTypes.array
};

export default DistrictList;
