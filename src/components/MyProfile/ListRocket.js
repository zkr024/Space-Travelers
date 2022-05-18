import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { reserveRocket } from '../redux/rockets/rockets';

const ListRocket = (props) => {
  const { id, name } = props;

  const dispatch = useDispatch();

  const cancel = () => {
    dispatch(reserveRocket(id));
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

export default ListRocket;

ListRocket.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
