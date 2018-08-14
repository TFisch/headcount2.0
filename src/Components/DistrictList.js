import React from 'react';
import '../styling/DistrictList.css';
import DistrictCard from './DistrictCard';



const DistrictList = ({ districts }) => {
  const displayDistricts = Object.keys(districts.stats).map((district, i) => {
    return (
      <DistrictCard location={districts.stats[district].location} stats={districts.stats[district].stats} key={i} />)

  });
  return <div className="district-list">{displayDistricts}</div>;
};

export default DistrictList;
