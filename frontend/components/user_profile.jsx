import React from 'react';
import CheckInFeed from './check_in_feed';



class UserProfile extends React.Component{
  constructor(props){
    super(props);
  }
  //
  componentWillMount(){
    let checkInParams = {checkIn: {filter: false}};
    this.props.fetchCheckIns(checkInParams);
  }
  // //
  userCheckIns(){
    let userId = parseInt(this.props.params.id);

    let checkIns = [];

    Object.keys(this.props.checkIns).forEach(checkInId => {
      if (this.props.checkIns[checkInId].user_id === userId){
        checkIns.push(this.props.checkIns[checkInId]);
      }
    });
    return checkIns;
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
    let userId = this.props.params.id;
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

  render(){
    let username;
    if (Object.keys(this.props.checkIns).length > 0){
      username = this.userCheckIns()[0].user.username;
    }

    if (this.props.friendships)
    return (
      <div className='user-profile'>
        <div className='profile-container'>
          <span className='cover-photo'>
            <h1 className='cover-username'>{username}</h1>
            {this.addFriendButton()}
          </span>
          <div className='profile-content'>
            <CheckInFeed checkIns={this.userCheckIns()}/>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
