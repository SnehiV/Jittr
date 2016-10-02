import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CheckInMiddleware from './checkIn_middleware';
import FriendshipMiddleware from './friendship_middleware';
import UserMiddleware from './user_middleware';
import DrinkMiddleware from './drink_middleware';
import LocationMiddleware from './location_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CheckInMiddleware,
  FriendshipMiddleware,
  UserMiddleware,
  DrinkMiddleware,
  LocationMiddleware
);

export default RootMiddleware;
