import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styling/DistrictCard.css';

class DistrictCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="district-card" >
        <h3 className="location-header">{this.props.location}</h3>
        <div className="stats-wrap">
          {Object.keys(this.props.stats).map(stat => (
            <p className={this.props.stats[stat] < 0.5 ? 'lowStats' : 'yearStats'}>
              {stat} : {this.props.stats[stat]}
            </p>
          ))}
        </div>
      </div>
    )
  }
};

DistrictCard.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.object
};

export default DistrictCard;
