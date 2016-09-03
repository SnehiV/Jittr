import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CheckInReducer from './checkIn_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  checkIns: CheckInReducer
});

export default RootReducer;
