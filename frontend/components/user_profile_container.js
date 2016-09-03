import { connect } from 'react-redux';
import UserProfile from './user_profile';
import {requestCheckIns} from '../actions/checkIn_actions';


const mapStatetoProps = state => ({
  checkIns: state.checkIns
});

const mapDispatchToProps = dispatch => ({
  fetchCheckIns: () => dispatch(requestCheckIns())
});



export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(UserProfile);
