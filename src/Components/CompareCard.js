import React from 'react';


const CompareCard = ({ locationOne, locationTwo, foundAverages }) => {
  console.log(foundAverages);
  const averageKeys = (Object.values((foundAverages)));

  return (

    <div className="compareCard">
      <p className="locationHeading">{locationOne.location}</p>
      <p className="data">{averageKeys[0]}</p>
      <p className="data">{averageKeys[2]}</p>
      <p className="locationHeading">{locationTwo.location}</p>
      <p className="data">{averageKeys[1]}</p>

    </div >
  )
}

export default CompareCard;