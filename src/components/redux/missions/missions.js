import axios from 'axios';

const MISSION_LIST = 'test/missions/MISSION_LIST';

const initialState = [];

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case MISSION_LIST:
      return action.payload;
    default:
      return state;
  }
};

const getMission = () => async (dispatch) => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  const newArray = response.data.map((info) => {
    const details = {
      name: info.mission_name,
      id: info.mission_id,
      description: info.description,
    };
    return details;
  });
  dispatch({
    type: MISSION_LIST,
    payload: newArray,
  });
};

export default missionReducer;
export { getMission };
