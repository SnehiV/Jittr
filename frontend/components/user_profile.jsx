import React from 'react';
import CheckInFeed from './check_in_feed';
import FriendRequestContainer from './friend_requests_container';



class UserProfile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      checkIns: [],
      userCheckIns: {}
    };
  }
  //
  componentWillMount(){
    this.props.fetchUsers();
    let checkInParams = {checkIn: {filter: 'all'}};
    this.props.fetchCheckIns(checkInParams);
  }

  componentWillReceiveProps(nextProps){
    // let checkInParams = {checkIn: {filter: 'user', id: `${nextProps.params.id}`}};
    // this.props.fetchCheckIns(checkInParams);
    this.setState({
      username: nextProps.users[parseInt(nextProps.params.id)].username,
      userCheckIns: this.userCheckIns(nextProps.checkIns, parseInt(nextProps.params.id))
    });
  }

  // //
  userCheckIns(checkIns, userId){
    let userCheckIns = {};
    Object.keys(checkIns).forEach(checkInId => {
      if (checkIns[checkInId].user_id === userId){
        userCheckIns[checkInId] = checkIns[checkInId];
      }
    });
    return userCheckIns;
  }

  handleFriendRequest(e){
    e.preventDefault();
    let userId = this.props.params.id;
    let friendshipParams = {friendship: {user_id: userId}};
    this.props.friendRequest(friendshipParams);
  }

  addFriendButton(){
    if (this.props.currentUser.id === parseInt(this.props.params.id)){
      return;
    }
    let buttonLabel;
    let userId = parseInt(this.props.params.id);
    Object.keys(this.props.friendships).map(type => {
      this.props.friendships[type].map(user => {
        if (user.id === userId) {
          buttonLabel = "Pending";
        }
      });
    });
    buttonLabel = "Add Friend";
    return <button className='add-friend'
      onClick={this.handleFriendRequest.bind(this)}>{buttonLabel}
    </button>;
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
            <h1 className='cover-username'>{this.state.username}</h1>
            {this.addFriendButton()}
          </span>
          <div className="profile-content-container">
            <div className='profile-content'>
              {this.state.userCheckIns[0] ? this.state.userCheckIns[0].user_id : ""}
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
