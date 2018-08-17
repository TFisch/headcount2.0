import React from 'react';


const CompareCard = ({ locationOne, locationTwo }) => {
  console.log(locationOne.location);

  return (
    <div>
      <p>{locationOne.location}</p>
      <p>{locationTwo.location}</p>

    </div>
  )
}

export default CompareCard;