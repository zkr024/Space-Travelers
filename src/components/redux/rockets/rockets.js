import axios from 'axios';

const SPACE_ROCKETS = 'test/rockets/SPACE_ROCKETS';

const initialState = [];

const spaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPACE_ROCKETS:
      return action.payload;
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
    };
    return details;
  });
  dispatch({
    type: SPACE_ROCKETS,
    payload: newArray,
  });
};

export default spaceReducer;
export { getList };
