import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { requestCheckIns } from '../actions/checkIn_actions';
import { requestFriend } from '../actions/checkIn_actions';


const mapStatetoProps = state => ({
  checkIns: state.checkIns.checkIns,
  currentUser: state.session.currentUser,
  friendships: state.friendships
});

const mapDispatchToProps = dispatch => ({
  fetchCheckIns: (checkInParams) => dispatch(requestCheckIns(checkInParams)),
  friendRequest: (friendshipParams) => dispatch(requestFriend(friendshipParams))
});



export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(UserProfile);
