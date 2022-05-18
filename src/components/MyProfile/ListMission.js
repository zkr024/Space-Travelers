import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { reserveMission } from '../redux/missions/missions';

const ListMission = (props) => {
  const { id, name } = props;

  const dispatch = useDispatch();

  const cancel = () => {
    dispatch(reserveMission(id));
  };

  return (
    <div
      key={id}
      className="panels"
    >
      <p>{name}</p>
      <button
        type="button"
        className="removeTask"
        onClick={cancel}
      >
        remove
      </button>
    </div>
  );
};

export default ListMission;

ListMission.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
