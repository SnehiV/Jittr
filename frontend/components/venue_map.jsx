import React from 'react';
import ReactDOM from 'react-dom';



class VenueMap extends React.Component{
  constructor(props){
    super(props);

  }

  componentWillReceiveProps(nextProps){
    this.mapOptions = {
      center: nextProps.coords,
      zoom: 13
    };
  }

  componentDidUpdate(){
    const mapDOMNode = this.refs.map;

    this.map = new google.maps.Map(mapDOMNode, this.mapOptions);

    this.marker = new google.maps.Marker({
      position: this.mapOptions.center,
    });

    this.marker.setMap(this.map);
  }



  render(){
    return(
      <div id='map-container' ref='map'></div>
    );
  }
}

export default VenueMap;
