import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';


class FriendRequests extends React.Component{
  constructor(props){
    super(props);
    this.handleRequestResponse = this.handleRequestResponse.bind(this);
  }


  handleRequestResponse(userId, response){
    return e => {
      let friendshipParams = {friendship: {user_id: userId,
        request_response: response}};

      return this.props.requestResponse(friendshipParams);
    };
  }

  render(){
    let requestedFriends;
    let userRoute = `/users/${this.userId}`;
    if (this.props.friendships.requested_friends){
        requestedFriends = this.props.friendships.requested_friends.map(requestFriend => {
          let userId = requestFriend.id;
          let username = requestFriend.username;

          return (
            <li>
              <div>
                <Link to={userRoute}>{username}</Link>
                <button className="accept-request" onClick={this.handleRequestResponse(userId, 1)}>Accept
                </button>
                <button className="decline-request" onClick={this.handleRequestResponse(userId, 0)}>Decline
                </button>
              </div>
            </li>
          );
        }
      );
    }
    if (requestedFriends === undefined || requestedFriends.length === 0) {
      requestedFriends = <p>No Requests</p>;
    }

    return(
      <div className="friend-requests-container">
        <h3>Friend Requests</h3>
        <div className="friend-requests">
          <ul className="request-list">
            {requestedFriends}
          </ul>
        </div>
      </div>

    );
  }
}



export default withRouter(FriendRequests);
