import { connect } from 'react-redux';
import Index from './index';
import {logout} from '../actions/session_actions';
import {requestCheckIns, newCheckIn} from '../actions/checkIn_actions';
import { requestFriendshipData, respondToRequest } from '../actions/friendship_actions';
import { requestLocations } from '../actions/location_actions';



const mapStatetoProps = state => ({
  session: state.session,
  checkIns: state.checkIns.checkIns,
  friendships: state.friendships,
  errors: state.checkIns.errors,
  drinks: state.drinks.drinks,
  locations: state.venues.locations
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(logout()),
  fetchCheckIns: (checkInParams) => dispatch(requestCheckIns(checkInParams)),
  newCheckIn: (checkInParams) => dispatch(newCheckIn(checkInParams)),
  fetchFriendshipData: () => dispatch(requestFriendshipData()),
  requestResponse: (friendshipParams) => dispatch(respondToRequest(friendshipParams)),
  fetchLocations: () => dispatch(requestLocations())
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Index);
