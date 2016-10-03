import { connect } from 'react-redux';
import { requestLocations } from '../actions/location_actions';
import { requestCheckIns } from '../actions/checkIn_actions';
import TopLocations from './top_locations';


const mapStateToProps = state => ({
  venues: state.venues.locations,
  checkIns: state.checkIns.checkIns
});

const mapDispatchToProps = dispatch => ({
  fetchLocations: () => dispatch(requestLocations()),
  fetchCheckIns: (checkInParams) => dispatch(requestCheckIns(checkInParams))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopLocations);
