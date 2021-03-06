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

  componentWillMount(){
    let checkInParams = {checkIn: {filter: 'friends'}};
    this.props.fetchCheckIns(checkInParams);
    this.props.fetchFriendshipData();
    this.props.fetchLocations();
  }

  render() {
    return(
      <div className="content">
        <div className="checkIn-content">
          <CheckInFeed checkIns={this.props.checkIns}
            fetchCheckIns={this.props.fetchCheckIns} />
        </div>
        <div className="nonCheckIn-content">
          <CheckInForm session={this.props.session}
            newCheckIn={this.props.newCheckIn}
            errors={this.props.errors}
            drinks={this.props.drinks}
            locations={this.props.locations} />
          <FriendRequestContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(Index);
