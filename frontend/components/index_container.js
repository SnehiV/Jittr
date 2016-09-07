import { connect } from 'react-redux';
import Index from './index';
import {logout} from '../actions/session_actions';
import {requestCheckIns, newCheckIn} from '../actions/checkIn_actions';
import { requestFriendshipData, respondToRequest } from '../actions/friendship_actions';



const mapStatetoProps = state => ({
  session: state.session,
  checkIns: state.checkIns.checkIns,
  friendships: state.friendships,
  errors: state.checkIns.errors
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(logout()),
  fetchCheckIns: () => dispatch(requestCheckIns()),
  newCheckIn: (checkInParams) => dispatch(newCheckIn(checkInParams)),
  fetchFriendshipData: () => dispatch(requestFriendshipData()),
  requestResponse: (friendshipParams) => dispatch(respondToRequest(friendshipParams))
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Index);
