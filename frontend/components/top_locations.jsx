import React from 'react';
import TopLocationsMap from './top_locations_map';
import { RatingDisplay } from './rating';
import { withRouter, Link } from 'react-router';

class TopLocations extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      filter: 'nearby',
      venues: [],
      venueRatings: [],
      currentLocation: {lat: 37.773972, lng: -122.431297},
    };

    this.venueRatings = [];

  }

  componentWillMount(){
    this.props.fetchLocations();
    let checkInParams = {checkIn: {filter: "all"}};
    this.props.fetchCheckIns(checkInParams);
    const self = this;
    navigator.geolocation.getCurrentPosition(pos => {
      self.setState({
        currentLocation: {lat: pos.coords.latitude, lng: pos.coords.longitude}
      });
    });
  }

  componentWillReceiveProps(nextProps){
    if (Object.keys(nextProps.checkIns).length > 0){
      this.setState({
        venues: this.sortByRating(nextProps.checkIns, nextProps.venues)
      });
    } else {
      this.setState({
        venues: this.sortByDistance(nextProps.venues)
      });
    }
  }

  distance(lat2, lng2){
    let lat1 = this.state.currentLocation.lat;
    let lng1 = this.state.currentLocation.lng;
    lat2 = parseFloat(lat2);
    lng2 = parseFloat(lng2);
    let R = 6371; // Radius of the earth in km
    Number.prototype.toRad = function() {
      return this * Math.PI / 180;
    };

    let dLat = (lat2-lat1).toRad();  // Javascript functions in radians
    let dLon = (lng2-lng1).toRad();
    let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    let distance = R * c; // Distance in km
    return distance;
  }

  sortByDistance(locations){
    const compareDistance = (location1, location2) => {
      let location1Distance = this.distance(location1.lat, location1.lng);
      let location2Distance = this.distance(location2.lat, location2.lng);
      if (location1Distance < location2Distance){
        return -1;
      }
      if (location1Distance === location2Distance){
        return 0;
      }
      if (location1Distance > location2Distance){
        return 1;
      }
    };
    let venues = Object.keys(locations).map(key => locations[key]);
    const sortedVenues = venues.sort(compareDistance);
    return sortedVenues.slice(0, 10);
  }

  findRelatedCheckIns(checkIns, locationId){
    let relatedCheckIns = {};
    Object.keys(checkIns).forEach(checkInId => {
      if (parseInt(checkIns[checkInId].location_id) === locationId) {
        relatedCheckIns[checkInId] = checkIns[checkInId];
      }
    });
    return relatedCheckIns;
  }

  averageRating(checkIns){
    let total = 0;
    let count = 0;
    Object.keys(checkIns).forEach(checkInId => {
      total += checkIns[checkInId].rating;
      count += 1;
    });



    return Math.round((total / count)*2)/2;
  }

  sortByRating(checkIns, locations){
    const compareRating = (location1, location2) => {


      if (location1[1] < location2[1]) {
        return -1;
      }

      if (location1[1] === location2[1]) {
        return 0;
      }

      if (location1[1] > location2[1]) {
        return 1;
      }
    };
    let venues = Object.keys(locations).map(key => locations[key]);
    let filteredVenues = venues.filter(venue => {
      let relatedCheckIns = this.findRelatedCheckIns(checkIns, venue.id);
      return ((Object.keys(relatedCheckIns).length !== 0) && (this.distance(venue.lat, venue.lng) < 50));
    });
    filteredVenues.forEach(venue => {
      let relatedCheckIns = this.findRelatedCheckIns(checkIns, venue.id);
      let rating = parseFloat(this.averageRating(relatedCheckIns));
      this.venueRatings.push(rating);
    });
    // console.log(this.venueRatings);
    // console.log(venues);
    const sortedLocations = filteredVenues.sort(compareRating);
    return sortedLocations.slice(0, 10);
  }

  calculateVenueRatings(checkIns, locations){
    return locations.map(location => {
        let locationCheckIns = this.findRelatedCheckIns(checkIns, location.id);
        return this.averageRating(locationCheckIns);
    });
  }

  locationsList(){
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return this.state.venues.map((venue, idx) => {
      let venueRoute = `/locations/${venue.id}`;
      return (
        <l1 className='location-list-item' key={`${venue.id}${idx}`}>
          <div className='location-label'>{`${labels[idx]}.`}</div>
          <div className='location-profile'>
            <Link className='top-location-label' to={venueRoute}>{venue.name}</Link>
            <div>{venue.address}</div>
            <RatingDisplay rating={this.venueRatings[idx]} />
          </div>
        </l1>
      );
    });
  }



  render(){
    return(
      <div className='top-locations'>
          <div className='location-list-container'>
            <h3 className='top-locations-label'>Top Locations Near You</h3>
            <ul className='location-list'>
              {this.locationsList()}
            </ul>
          </div>
          <TopLocationsMap venues={this.state.venues} currentLocation={this.state.currentLocation} />
      </div>
    );
  }
}

export default withRouter(TopLocations);
