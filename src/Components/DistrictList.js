import React from 'react';
import '../styling/DistrictList.css';
import DistrictCard from './DistrictCard';

const DistrictList = ({ districts }) => {
  const displayDistricts = districts.map(district => (
    <DistrictCard {...district} />
  ))

  return <div className="district-list">PlaceHolder</div>;
};

export default DistrictList;
