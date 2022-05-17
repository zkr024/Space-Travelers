import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { reserveMission } from '../redux/missions/missions';

import './style/mission.css';

const Mission = (props) => {
  const {
    id, name, description, reserved,
  } = props;

  const dispatch = useDispatch();

  const accessMission = () => {
    dispatch(reserveMission(id));
  };

  return (
    <div
      id="missionContainer"
      key={id}
    >
      <div className="mission">
        <p>{ name }</p>
      </div>
      <div className="description">
        <p>{ description }</p>
      </div>
      <div className="status">
        {!reserved && (
          <div className="noMember">NOT A MEMBER</div>
        )}
        {reserved && (
          <div className="activeMember">Active Member</div>
        )}
      </div>
      <div className="join">
        {!reserved && (
          <button
            type="button"
            className="btnJoin"
            onClick={accessMission}
          >
            Join Mission
          </button>
        )}
        {reserved && (
          <button
            type="button"
            className="btnLeave"
            onClick={accessMission}
          >
            Leave Mission
          </button>
        )}
      </div>
    </div>
  );
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Mission;
