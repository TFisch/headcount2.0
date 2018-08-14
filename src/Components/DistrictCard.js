import React from 'react';

const DistrictCard = (location, stats) => {
  return <div>
    <h3>{location}</h3>
    <ul>
      {stats}
    </ul>
  </div>

}

export default DistrictCard;


