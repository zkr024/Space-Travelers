import axios from 'axios';

const MISSION_LIST = 'test/missions/MISSION_LIST';
const JOIN = 'test/missions/JOIN';

const initialState = [];

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case MISSION_LIST:
      return action.payload;
    case JOIN: {
      const newState = state.map((mission) => {
        if (mission.id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: !mission.reserved };
      });
      return newState;
    }
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
      reserved: false,
    };
    return details;
  });
  dispatch({
    type: MISSION_LIST,
    payload: newArray,
  });
};

const reserveMission = (id) => ({
  type: JOIN,
  payload: id,
});

export default missionReducer;
export { getMission, reserveMission };
