import { useSelector } from 'react-redux';

const item = (t) => (
  <div key={t.name}>{t.name}</div>
);

const MyProfile = () => {
  const data = useSelector((state) => state);
  const missions = data.mission.filter((task) => task.reserved === true);
  const rockets = data.space.filter((task) => task.reserved === true);
  return (
    <div className="Main_Container">
      <div className="Container">
        <h2>My Missions</h2>
        <div className="items">
          {missions.map((mission) => item(mission))}
        </div>
      </div>
      <div className="Container">
        <h2>My Rockets</h2>
        <div className="items">
          {rockets.map((rocket) => item(rocket))}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
