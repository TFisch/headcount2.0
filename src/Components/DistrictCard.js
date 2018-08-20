import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styling/DistrictCard.css';

class DistrictCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  handleClick = () => {
    if (this.state.selected) {
      let selected = this.state.selected;
      selected = !selected;
      this.setState({ selected });
      this.props.removeCompareCard(this.props.location);
    }

    if (this.props.comparedCards.length < 2) {
      let selected = this.state.selected;
      selected = !selected;
      this.setState({ selected });
      this.props.retrieveCompare(this.props);
      if (this.state.selected) {
        selected = !selected;
        this.props.removeCompareCard(this.props.location);
      }
    }
  };

  render() {
    return (
      <div
        className={
          !this.state.selected ? 'district-card' : 'district-card selected'
        }
        onClick={this.handleClick}
      >
        <h3 className="location-header">{this.props.location}</h3>
        <ul className="stats-wrap">
          {Object.keys(this.props.stats).map((stat, index) => (
            <li
              key={index}
              className={
                this.props.stats[stat] < 0.5 ? 'lowStats' : 'yearStats'
              }
            >
              {stat} : {this.props.stats[stat]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

DistrictCard.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.object,
  retrieveCompare: PropTypes.func,
  comparedCards: PropTypes.array,
  removeCompareCard: PropTypes.func
};

export default DistrictCard;
