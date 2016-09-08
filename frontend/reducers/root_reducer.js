import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CheckInReducer from './checkIn_reducer';
import FriendshipReducer from './friendship_reducer';
import UserReducer from './user_reducer';
import DrinkReducer from './drink_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  checkIns: CheckInReducer,
  friendships: FriendshipReducer,
  users: UserReducer,
  drinks: DrinkReducer
});

export default RootReducer;
