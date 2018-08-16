import React from 'react';
import '../styling/DistrictList.css';
import DistrictCard from './DistrictCard';
import PropTypes from 'prop-types';

const DistrictList = ({ districts, filteredResults }) => {
  const filteredDisplay = filteredResults.map((district, i) => {
    return (
      <DistrictCard
        location={district}
        stats={districts.stats[district].stats}
        key={i}
      />
    );
  });

  const displayAllDistricts = Object.keys(districts.stats).map(
    (district, i) => {
      return (
        <DistrictCard
          location={district}
          stats={districts.stats[district].stats}
          key={i}
        />
      );
    }
  );

  if (filteredResults.length) {
    return <div className="district-list filtered">{filteredDisplay}</div>;
  }
  return <div className="district-list">{displayAllDistricts}</div>;
};

DistrictList.PropTypes = {
  district: PropTypes.object,
  filteredResults: PropTypes.array
};

export default DistrictList;
