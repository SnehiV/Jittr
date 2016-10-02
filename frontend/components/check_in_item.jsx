  import React from 'react';
import { RatingDisplay } from './rating';
import { withRouter } from 'react-router';
import { Link } from 'react-router';
import DrinkProfileContainer from './drink_profile_container';


class CheckInItem extends React.Component{
  constructor(props){
    super(props);
      this.username = this.props.checkIn.username;
      this.userId = this.props.checkIn.user_id;
      this.drinkName = this.props.checkIn.drink_name;
      this.location_name = this.props.checkIn.location_name;
      this.review = this.props.checkIn.review;
      this.rating = this.props.checkIn.rating;
  }




  render(){
    let drinkRoute = '/home';
    if (this.props.checkIn.drink_id){
      this.drinkId = this.props.checkIn.drink_id;
      drinkRoute = `/drinks/${this.drinkId}`;
    }

    let userRoute = `/users/${this.userId}`;

    let locationRoute = '/home';
    if (this.props.checkIn.location_id){
      this.locationId = this.props.checkIn.location_id;
      locationRoute = `/locations/${this.locationId}`;
    }
    console.log(locationRoute);
    return(
      <div className="checkIn-item">
        <h4>
          <div className="checkIn-text">
            <p>
              <Link to={userRoute}>{this.username}</Link> is sipping on a <Link to={drinkRoute}>{this.drinkName}</Link> at <Link to={locationRoute}>{this.location_name}</Link>
            </p>
          </div>
        </h4>
        <div className="review-container">
          <h4>Review:</h4>
          <div className="checkIn-review">
            <p>{this.review}</p>
            <RatingDisplay rating={this.rating} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CheckInItem);
