import React from 'react';
import CheckInFeed from './check_in_feed';
import FriendRequestContainer from './friend_requests_container';



class UserProfile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      userCheckIns: {},
      status: false
    };
  }
  //
  componentWillMount(){
    this.props.fetchUsers();
    this.props.fetchFriendshipData();
    let checkInParams = {checkIn: {filter: 'all'}};
    this.props.fetchCheckIns(checkInParams);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      username: nextProps.users[parseInt(nextProps.params.id)].username,
      userCheckIns: this.userCheckIns(nextProps.checkIns, parseInt(nextProps.params.id)),
      status: this.updateFriendStatus(nextProps.friendships)
    });
  }

  updateFriendStatus(friendships){
    let userId = parseInt(this.props.params.id);
    let status = false;
    Object.keys(friendships).forEach(type => {
      friendships[type].forEach(user => {
        if (user.id === userId) {
          status = type;
        }
      });
    });
    return status;
  }

  userCheckIns(checkIns, userId){
    let userCheckIns = {};
    Object.keys(checkIns).forEach(checkInId => {
      if (checkIns[checkInId].user_id === userId){
        userCheckIns[checkInId] = checkIns[checkInId];
      }
    });
    return userCheckIns;
  }

  handleRequest(e, requestType){
    e.preventDefault();
    let userId = this.props.params.id;
    let friendshipParams = {friendship: {user_id: userId}};
    if (requestType === "add"){
      this.props.friendRequest(friendshipParams);

    } else if (requestType === "remove") {
      this.props.deleteFriend(friendshipParams);
    }
  }

  addFriendButton(){
    if (this.props.currentUser.id === parseInt(this.props.params.id)) {
      return;
    }

    let buttonLabel;
    let disabled = false;
    let clickHandle = () => {};
    if (this.state.status === "requested_friends"){
      buttonLabel = "Awaiting Response";
      disabled = true;
    } else if (this.state.status === "pending_friends"){
      buttonLabel = "Pending";
      disabled = true;
    } else if (this.state.status === "friends"){
      buttonLabel = "Remove Friend";
      clickHandle = (e) => this.handleRequest.bind(this)(e, "remove");
    } else {
      buttonLabel = "Add Friend";
      clickHandle = (e) => this.handleRequest.bind(this)(e, "add");
    }
    return (
      <button className='friend-button' disabled={disabled}
        onClick={clickHandle}>{buttonLabel}
      </button>
    );
  }

  currentUserFriendRequests(){
    if (this.props.currentUser.id === parseInt(this.props.params.id)){
      return <FriendRequestContainer />;
    } else {
      return;
    }
  }

  render(){
    return (
      <div className='user-profile'>
        <div className='profile-container'>
          <span className='cover-photo'>
            {this.addFriendButton()}
            <h1 className='cover-username'>{this.state.username}</h1>
          </span>
          <div className="profile-content-container">
            <div className='profile-content'>
              <CheckInFeed checkIns={this.state.userCheckIns} />
            </div>
            {this.currentUserFriendRequests()}
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
