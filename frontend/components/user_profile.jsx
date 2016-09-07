import React from 'react';
import CheckInFeed from './check_in_feed';



class UserProfile extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchCheckIns();
  }
  //
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

  render(){
    let username;
    if (Object.keys(this.props.checkIns).length > 0){
      username = this.userCheckIns()[0].user.username;
    }
    return (
      <div className='user-profile'>
        <div className='profile-container'>
          <span className='cover-photo'>
            <h1 className='cover-username'>{username}</h1>
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
