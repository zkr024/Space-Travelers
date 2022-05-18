import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import spaceReducer from './rockets/rockets';
import missionReducer from './missions/missions';

const reducers = combineReducers({
  space: spaceReducer,
  mission: missionReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store;

export { reducers };
