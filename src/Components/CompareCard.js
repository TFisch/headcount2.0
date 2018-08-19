import React from 'react';
import "../styling/CompareCard.css";


const CompareCard = ({ locationOne, locationTwo, foundAverages }) => {
  console.log(locationOne);
  const averageKeys = (Object.values((foundAverages)));

  return (
    <div className="compare-card">
      <p className="location-heading">{locationOne.location}</p>
      <p className="data">{averageKeys[0]}</p>
      <h4 className="location-heading heading-two compare-head">COMPARE</h4>
      <p className="data">{averageKeys[2]}</p>
      <p className="location-heading heading-two">{locationTwo.location}</p>
      <p className="data">{averageKeys[1]}</p>
    </div >
  );
};

export default CompareCard;