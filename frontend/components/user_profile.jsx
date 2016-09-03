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
    return (
      <div className='user=profile'>Hello
        <span className='cover-photo'>
          <h1 className='cover=username'></h1>
        </span>
        <CheckInFeed checkIns={this.userCheckIns()}/>
      </div>
    );
  }
}

export default UserProfile;
