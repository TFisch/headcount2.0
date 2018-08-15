import React from 'react';
import '../styling/DistrictList.css';
import DistrictCard from './DistrictCard';



const DistrictList = ({ districts, searchEntered }) => {

  console.log(districts);
  if (searchEntered === false) {
    return null;
    const displayDistricts = Object.keys(districts.stats).map((district, i) => {
      return (
        <DistrictCard location={districts.stats[district].location} stats={districts.stats[district].stats} key={i} />)

    });
    return <div className="district-list">{displayDistricts}</div>;
  } else {

    return <div className="district-list district-searched">
      <DistrictCard location={districts.location} stats={districts.stats} />
    </div>
  }
};

export default DistrictList;
