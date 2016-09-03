import React from 'react';
import { Rating } from './rating';
import { withRouter } from 'react-router';
import { Link } from 'react-router';


class CheckInItem extends React.Component{
  constructor(props){
    super(props);
      this.username = this.props.checkIn.username;
      this.userId = this.props.checkIn.user_id;
      this.drinkName = this.props.checkIn.drink_name;
      this.location = this.props.checkIn.location;
      this.review = this.props.checkIn.review;
      this.rating = this.props.checkIn.rating;
  }




  render(){
    let userRoute = `/users/${this.userId}`;
    return(
      <div className="checkIn-item">
        <h4>
          <div className="checkIn-text">
            <p><Link to={userRoute}>{this.username}</Link> is sipping on a {this.drinkName} at {this.location}</p>
          </div>
        </h4>
        <div className="checkIn-content">
          <p>{this.review}</p>
          <Rating rating={this.rating} />
        </div>

      </div>
    );
  }
}

export default withRouter(CheckInItem);
