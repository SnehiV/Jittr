import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CheckInMiddleware from './checkIn_middleware';
import FriendshipMiddleware from './friendship_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CheckInMiddleware,
  FriendshipMiddleware
);

export default RootMiddleware;
