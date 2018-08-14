import React from 'react';
import "../styling/DistrictCard.css"

const DistrictCard = ({ location, stats }) => {
  return <div className="district-card">
    <h3 className="location-header">{location}</h3>
    {Object.keys(stats).map(stat => <p className={stats[stat] < 0.5 ? 'lowStats' : 'yearStats'}>{stat} : {stats[stat]}</p>)}

  </div>

}

export default DistrictCard;


