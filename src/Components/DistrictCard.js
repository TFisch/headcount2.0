import React from 'react';

const DistrictCard = ({ location, stats }) => {
  return <div>
    <h3>{location}</h3>
    {Object.keys(stats).map(stat => <p>{stat} : {stats[stat]}</p>)}

  </div>

}

export default DistrictCard;


