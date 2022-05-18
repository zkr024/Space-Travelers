import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { reserveRocket } from '../redux/rockets/rockets';

import './style/rocket.css';

const Rocket = (props) => {
  const {
    id, name, description, image, reserved,
  } = props;

  const dispatch = useDispatch();

  const reserveShip = () => {
    dispatch(reserveRocket(id));
  };

  return (
    <div className="ShipContainer" key={id}>
      <div className="imageContainer">
        <img
          className="image"
          src={image}
          alt={id}
        />
      </div>
      <div className="dataContainer">
        <p className="name">{ name }</p>
        <p className="details">
          {reserved && (
            <span
              className="done"
            >
              Reserved
            </span>
          )}
          { description }
        </p>
        {!reserved && (
          <button
            className="reserve"
            onClick={reserveShip}
            type="button"
          >
            Reserve Rocket
          </button>
        )}
        {reserved && (
          <button
            className="cancel"
            onClick={reserveShip}
            type="button"
          >
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default Rocket;
