import React from 'react';
import '../styling/DistrictList.css';
import DistrictCard from './DistrictCard';
import PropTypes from 'prop-types';

const DistrictList = ({ filteredDistricts, retrieveCompare, comparedCards }) => {
  const filteredDisplay = filteredDistricts.map((district) => {
    return (<DistrictCard
      key={district.location}
      location={district.location}
      stats={district.stats}
      retrieveCompare={retrieveCompare}
      comparedCards={comparedCards}
    />)
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
