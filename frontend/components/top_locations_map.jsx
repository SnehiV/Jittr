import React from 'react';
import ReactDOM from 'react-dom';



class TopLocationsMap extends React.Component{
  constructor(props){
    super(props);

  }

  componentWillReceiveProps(nextProps){
    this.mapOptions = {
      center: nextProps.currentLocation,
      zoom: 11
    };
    this.venues = nextProps.venues;
  }

  distance(lat2, lng2){
    let lat1 = this.mapOptions.center.lat;
    let lng1 = this.mapOptions.center.lng;
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

  componentDidUpdate(){
    const mapDOMNode = this.refs.map;

    this.map = new google.maps.Map(mapDOMNode, this.mapOptions);

    this.marker = new google.maps.Marker({
      position: this.mapOptions.center,
    });

    this.marker.setMap(this.map);
    let bounds = new google.maps.LatLngBounds();
    const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    this.venues.forEach((venue, idx) => {
      let lat = parseFloat(venue.lat);
      let lng = parseFloat(venue.lng);
      let position = {lat: lat, lng: lng};
      bounds.extend(position);
      let label = labels[idx];
      let marker = new google.maps.Marker({
        position: position,
        label: label,
        map: this.map
      });
    });
    this.map.fitBounds(bounds);
  }

  render(){
    return(
      <div id='top-locations-map-container' ref='map'></div>
    );
  }
}

export default TopLocationsMap;
