import React from 'react';
import SessionContainer from './session_container';
import { withRouter } from 'react-router';
import CheckInFeed from './check_in_feed';
import CheckInForm from './check_in_form';
import FriendRequestContainer from './friend_requests_container';


class Index extends React.Component{
  constructor(props){
    super(props);
  }
  // componentWillReceiveProps(nextProps){
  //   debugger
  //   if (nextProps.session.currentUser === null){
  //     this.props.router.replace("/");
  //   }
  // }

  componentWillMount(){
    this.props.fetchCheckIns();
    this.props.fetchFriendshipData();
  }

          // <CheckInItem checkIn={this.props.checkIns[1]} />

  render() {
    return(
      <div>Home
        <button className="splash-button" onClick={this.props.handleLogout}>Log Out</button>
        <CheckInForm session={this.props.session} newCheckIn={this.props.newCheckIn} />
        <CheckInFeed checkIns={this.props.checkIns} fetchCheckIns={this.props.fetchCheckIns} />
        <FriendRequestContainer />
      </div>
    );
  }
}

export default withRouter(Index);
