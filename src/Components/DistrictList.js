import React from 'react';
import '../styling/DistrictList.css';
import DistrictCard from './DistrictCard';
import PropTypes from 'prop-types';

const DistrictList = ({ districts, filteredDistricts }) => {
  const filteredDisplay = filteredDistricts.map((district, index) => {

    return (<DistrictCard key={district.location} location={district.location} stats={district.stats} />)


  });

  return
  < div className="district-list">
    {filteredDisplay}
  </div >;
};

DistrictList.PropTypes = {
  district: PropTypes.object,
  filteredResults: PropTypes.array
};

export default DistrictList;
