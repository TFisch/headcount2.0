import React from 'react';
import '../styling/DistrictList.css';
import DistrictCard from './DistrictCard';
import PropTypes from 'prop-types';

const DistrictList = ({ filteredDistricts, retrieveCompare, comparedCards, removeCompareCard }) => {
  const filteredDisplay = filteredDistricts.map((district) => {
    return (<DistrictCard
      key={district.location}
      location={district.location}
      stats={district.stats}
      retrieveCompare={retrieveCompare}
      comparedCards={comparedCards}
      removeCompareCard={removeCompareCard}
    />)
  })

  const displayTwoDistricts = comparedCards.map(district => {
    return (
      <DistrictCard
        key={district.location}
        location={district.location}
        stats={district.stats}
        retrieveCompare={retrieveCompare}
        comparedCards={comparedCards}
        removeCompareCard={removeCompareCard}
      />
    )
  })

  return (
    <div>
      <div className="district-list">
        {displayTwoDistricts}
      </div >
      <div className="district-list">
        {filteredDisplay}
      </div >
    </div>

  )
};

DistrictList.PropTypes = {
  district: PropTypes.object,
  filteredResults: PropTypes.array
};

export default DistrictList;
