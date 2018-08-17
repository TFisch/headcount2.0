import React from 'react';
import "../styling/CompareCard.css";


const CompareCard = ({ locationOne, locationTwo, foundAverages }) => {
  const averageKeys = (Object.values((foundAverages)));

  return (
    <div className="compareCard">
      <p className="locationHeading">{locationOne.location}</p>
      <p className="data">{averageKeys[0]}</p>
      <h4 className="locationHeading headingTwo">Compare</h4>
      <p className="data">{averageKeys[2]}</p>
      <p className="locationHeading headingTwo">{locationTwo.location}</p>
      <p className="data">{averageKeys[1]}</p>
    </div >
  )
}

export default CompareCard;