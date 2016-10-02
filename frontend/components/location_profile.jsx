import React from 'react';
import CheckInFeed from './check_in_feed';
import { RatingDisplay } from './rating';
import VenueMap from './venue_map';
import { withRouter, Link } from 'react-router';


class LocationProfile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      location: {},
      locationId: 0,
      name: "",
      address: "",
      lat: 0,
      lng: 0,
      checkIns: {}
    };
  }

  componentWillMount(){
    let checkInParams = {checkIn: {filter: "all"}};
    this.props.fetchCheckIns(checkInParams);
    this.props.fetchUsers();
    this.props.fetchLocations();
  }

  componentWillReceiveProps(nextProps){
    let currentLocationId = parseInt(nextProps.params.id);
    if (nextProps.venues[currentLocationId]) {
      this.setState({
        location: nextProps.venues[currentLocationId],
        locationId: currentLocationId,
        name: nextProps.venues[currentLocationId].name,
        address: nextProps.venues[currentLocationId].address,
        lat: nextProps.venues[currentLocationId].lat,
        lng: nextProps.venues[currentLocationId].lng,
        checkIns: this.findRelatedCheckIns(nextProps.checkIns)
      });
    }
  }

  findRelatedCheckIns(checkIns){
    let relatedCheckIns = {};
    let locationId = this.state.locationId;
    Object.keys(checkIns).forEach(checkInId => {
      if (checkIns[checkInId].location_id === locationId) {
        relatedCheckIns[checkInId] = checkIns[checkInId];
      }
    });
    return relatedCheckIns;
  }

  relatedUsers(){
    let relatedUsers = [];
    let usernames = [];
    if (this.state.checkIns) {
      Object.keys(this.state.checkIns).forEach((checkInId => {
        let user = this.state.checkIns[checkInId].user;
        if (!usernames.includes(user.username)){
          usernames.push(user.username);
          relatedUsers.push(this.state.checkIns[checkInId].user);
        }
      }));
    }

    return relatedUsers;
  }

  averageRating(){
    let total = 0;
    let count = 0;
    Object.keys(this.state.checkIns).forEach(checkInId => {
      total += this.state.checkIns[checkInId].rating;
      count += 1;
    });

    return Math.round((total / count)*2)/2;
  }

  render(){
    const Profile = (
      <div className="profile">
        <div className="profile-header">
          <h2>{this.state.name}</h2>
          <h4>{this.state.address}</h4>
          <RatingDisplay rating={this.averageRating()} />
        </div>
      </div>
    );

    const UserList  =
      this.relatedUsers().map((user, idx) => {
        let userRoute = `/users/${user.id}`;
        let key=`${user.username}${idx}`;
        return(
          <li key={key}>
            <Link to={userRoute}>{user.username}</Link>
          </li>
        );
      });

      return(
        <div className="location-profile-container">
          <div className="location-profile-content-left">
            {Profile}
            <CheckInFeed checkIns={this.state.checkIns} />
          </div>
          <div className="location-profile-content-right">
            <div className="user-list-container">
              <h3>Users who go to {this.state.name}</h3>
              <ul className='user-list'>
                {UserList}
              </ul>
            </div>
            <VenueMap coords={{lat: parseFloat(this.state.lat), lng: parseFloat(this.state.lng)}} />
          </div>
        </div>
      );
    }
  }

export default withRouter(LocationProfile);
