import { connect } from 'react-redux';
import {removeFriend, requestFriendshipData} from '../actions/friendship_actions';
import Friends from './friends';


export const mapStatetoProps = state => ({
  friendships: state.friendships
});


export const mapDispatchToProps = dispatch => ({
  deleteFriend: (friendshipParams) => dispatch(removeFriend(friendshipParams)),
  fetchFriendshipData: () => dispatch(requestFriendshipData()),
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Friends);
