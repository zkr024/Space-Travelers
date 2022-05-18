import axios from 'axios';

const SPACE_ROCKETS = 'test/rockets/SPACE_ROCKETS';
const RESERVE = 'test/rockets/RESERVE';

const initialState = [];

const spaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPACE_ROCKETS:
      return action.payload;
    case RESERVE: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
      return newState;
    }
    default:
      return state;
  }
};

const getList = () => async (dispatch) => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  const newArray = response.data.map((info) => {
    const details = {
      name: info.rocket_name,
      id: info.id,
      description: info.description,
      image: info.flickr_images,
      reserved: false,
    };
    return details;
  });
  dispatch({
    type: SPACE_ROCKETS,
    payload: newArray,
  });
};

const reserveRocket = (id) => ({
  type: RESERVE,
  payload: id,
});

export default spaceReducer;
export { getList, reserveRocket };
