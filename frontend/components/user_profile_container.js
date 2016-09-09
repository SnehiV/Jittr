import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { requestCheckIns } from '../actions/checkIn_actions';
import { requestFriend, removeFriend, requestFriendshipData } from '../actions/friendship_actions';
import { requestUsers } from '../actions/user_actions';


const mapStatetoProps = state => ({
  checkIns: state.checkIns.checkIns,
  currentUser: state.session.currentUser,
  friendships: state.friendships,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  fetchCheckIns: (checkInParams) => dispatch(requestCheckIns(checkInParams)),
  friendRequest: (friendshipParams) => dispatch(requestFriend(friendshipParams)),
  deleteFriend: (friendshipParams) => dispatch(removeFriend(friendshipParams)),
  fetchUsers: () => dispatch(requestUsers()),
  fetchFriendshipData: () => dispatch(requestFriendshipData())
});



export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(UserProfile);
