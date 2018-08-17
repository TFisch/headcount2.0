import React from 'react';
import '../styling/DistrictList.css';
import DistrictCard from './DistrictCard';
import PropTypes from 'prop-types';
import CompareCard from './CompareCard';

const DistrictList = ({ filteredDistricts, retrieveCompare, comparedCards, removeCompareCard, foundAverages }) => {
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

  if (comparedCards.length === 2) {

    const locationOne = comparedCards[0];
    const locationTwo = comparedCards[1];
    return (
      <CompareCard locationOne={locationOne} locationTwo={locationTwo} foundAverages={foundAverages} />
    )
  }

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
