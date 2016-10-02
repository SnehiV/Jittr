import { connect } from 'react-redux';
import LocationProfile from './location_profile';
import { requestCheckIns } from '../actions/checkIn_actions';
import { requestUsers } from '../actions/user_actions';
import { requestLocations } from '../actions/location_actions';

const mapStatetoProps = state => ({
  venues: state.venues.locations,
  checkIns: state.checkIns.checkIns,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  fetchCheckIns: (checkInParams) => dispatch(requestCheckIns(checkInParams)),
  fetchUsers: () => dispatch(requestUsers()),
  fetchLocations: () => dispatch(requestLocations())
});



export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(LocationProfile);
