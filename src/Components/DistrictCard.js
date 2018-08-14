import React from 'react';
import "../styling/DistrictCard.css"

const DistrictCard = ({ location, stats }) => {
  return <div className="district-card">
    <h3>{location}</h3>
    {Object.keys(stats).map(stat => <p className="yearStats">{stat} : {stats[stat]}</p>)}

  </div>

}

export default DistrictCard;


