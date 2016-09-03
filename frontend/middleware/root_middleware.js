import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CheckInMiddleware from './checkIn_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CheckInMiddleware
);

export default RootMiddleware;
