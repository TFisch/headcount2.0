import React from 'react';
import '../styling/DistrictList.css';
import DistrictCard from './DistrictCard';

const DistrictList = ({ districts }) => {
  const displayDistricts = Object.keys(districts).map((district, i) => <DistrictCard location={district.location} stats={district.stats} key={i} />
  );

  return <div className="district-list">PlaceHolder</div>;
};

export default DistrictList;
