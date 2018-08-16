import React from 'react';
import PropTypes from 'prop-types'
import "../styling/DistrictCard.css"

const DistrictCard = ({ location, stats }) => {
  return <div className="district-card">
    <h3 className="location-header">{location}</h3>
    <div className="stats-wrap">
      {Object.keys(stats).map(stat => <p className={stats[stat] < 0.5 ? 'lowStats' : 'yearStats'}>{stat} : {stats[stat]}</p>)}
    </div>
  </div>

}

DistrictCard.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.object
}


export default DistrictCard;


