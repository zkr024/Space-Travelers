import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Mission from './Mission';
import { getMission } from '../redux/missions/missions';

import './style/mission.css';

const missionList = (data) => {
  const list = (
    <Mission
      id={data.id}
      name={data.name}
      description={data.description}
      key={data.id}
      reserved={data.reserved}
    />
  );
  return list;
};

const Missions = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.mission.length === 0) {
      dispatch(getMission());
    }
  });

  return (
    <div className="mainContainer">
      <div className="sections">
        <h3 className="sectionOne">Mission</h3>
        <h3 className="sectionTwo">Description</h3>
        <h3 className="sectionThree">Status</h3>
      </div>
      {data.mission.map((i) => missionList(i))}
    </div>
  );
};

export default Missions;
