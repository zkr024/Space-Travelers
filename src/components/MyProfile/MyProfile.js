import { useSelector } from 'react-redux';

import { FaRocket } from 'react-icons/fa';

import ListRocket from './ListRocket';
import ListMission from './ListMission';
import './style/myProfile.css';

const item = (value) => {
  const info = (
    <ListRocket
      id={value.id}
      name={value.name}
      key={value.id}
    />
  );
  return info;
};

const itemTwo = (value) => {
  const info = (
    <ListMission
      id={value.id}
      name={value.name}
      key={value.id}
    />
  );
  return info;
};

const MyProfile = () => {
  const data = useSelector((state) => state);
  const missions = data.mission.filter((task) => task.reserved === true);
  const rockets = data.space.filter((task) => task.reserved === true);

  return (
    <div className="Main_Container">
      <div className="Container">
        <h2>My Missions</h2>
        { missions.length === 0
          ? (
            <h3 className="noSelected">
              <FaRocket className="iconFa" />
              No missions selected
            </h3>
          )
          : (
            <div className="items">
              {missions.map((mission) => itemTwo(mission))}
            </div>
          )}
      </div>
      <div className="Container">
        <h2>My Rockets</h2>
        { rockets.length === 0
          ? (
            <h3 className="noSelected">
              <FaRocket className="iconFa" />
              No rockets reserved
            </h3>
          )
          : (
            <div className="items">
              {rockets.map((rockets) => item(rockets))}
            </div>
          )}
      </div>
    </div>
  );
};

export default MyProfile;
