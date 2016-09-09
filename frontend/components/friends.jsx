import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';
import FriendRequestContainer from './friend_requests_container';


class Friends extends React.Component{
  constructor(props){
    super(props);
    this.generateFriendLinks = this.generateFriendLinks.bind(this);
  }

  componentWillMount(){
    this.props.fetchFriendshipData();
  }

  removeFriend(id){
    return (e) => {
      e.preventDefault();
      let friendshipParams = {friendship: {user_id: id}};
      return this.props.deleteFriend(friendshipParams);
    };
  }

  generateFriendLinks(){
    let friends;
    let friendsList;
    if (this.props.friendships){
      friends = this.props.friendships.friends;
      friendsList = friends.map((friend => {
        let id = friend.id;
        let userRoute = `/users/${id}`;
        return(
          <li key={id} className="friend">
            <Link to={userRoute}>{friend.username}</Link>
            <button className="delete-friend"
              onClick={this.removeFriend(id)}>Remove Friend
            </button>
          </li>
        );
      }
    ));
    }
    return friendsList;
  }

  render(){
    return(
      <div className='friends-content'>
        <div className="friends-list-container">
          <h2>Friends</h2>
          <ul className="friends-list">
            {this.generateFriendLinks()}
          </ul>
        </div>
        <div className="friend-container">
          <FriendRequestContainer />
        </div>
      </div>
    );
  }
}

export default Friends;
