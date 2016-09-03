import { connect } from 'react-redux';
import Index from './index';
import {logout} from '../actions/session_actions';
import {requestCheckIns, newCheckIn} from '../actions/checkIn_actions';


const mapStatetoProps = state => ({
  session: state.session,
  checkIns: state.checkIns
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(logout()),
  fetchCheckIns: () => dispatch(requestCheckIns()),
  newCheckIn: (checkInParams) => dispatch(newCheckIn(checkInParams))

});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Index);
