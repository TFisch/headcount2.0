import React from 'react';


const CompareCard = ({ locationOne, locationTwo, foundAverages }) => {

  return (

    <div>
      {Object.values(foundAverages).map(average => <p>{average}</p>)}
    </div>
  )
}

export default CompareCard;