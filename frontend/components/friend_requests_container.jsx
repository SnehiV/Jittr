import { connect } from 'react-redux';
import FriendRequests from './friend_requests';
import { requestFriendshipData, respondToRequest } from '../actions/friendship_actions';

const mapStatetoProps = state => ({
  session: state.session,
  friendships: state.friendships
});

const mapDispatchToProps = dispatch => ({
  fetchFriendshipData: () => dispatch(requestFriendshipData()),
  requestResponse: (friendshipParams) => dispatch(respondToRequest(friendshipParams))
});


export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(FriendRequests);
