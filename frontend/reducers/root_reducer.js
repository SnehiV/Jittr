import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CheckInReducer from './checkIn_reducer';
import FriendshipReducer from './friendship_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  checkIns: CheckInReducer,
  friendships: FriendshipReducer
});

export default RootReducer;
