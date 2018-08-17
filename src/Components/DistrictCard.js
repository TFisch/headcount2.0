import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styling/DistrictCard.css';

class DistrictCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  handleClick = () => {
    if (this.props.comparedCards.length < 2) {
      let selected = this.state.selected;
      selected = !selected;
      this.setState({ selected });
      this.props.retrieveCompare(this.props);
    }
  }






  render() {
    return (
      <div className={!this.state.selected ? 'district-card' : 'district-card selected'} onClick={this.handleClick}>
        <h3 className="location-header">{this.props.location}</h3>
        <div className="stats-wrap">
          {Object.keys(this.props.stats).map((stat, index) => (
            <p key={index} className={this.props.stats[stat] < 0.5 ? 'lowStats' : 'yearStats'}>
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
