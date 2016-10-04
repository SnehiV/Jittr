import React from 'react';
import Rating from 'react-rating';
import DrinkSearch from './drink_search';
import LocationSearch from './location_search';
import NativeListener from 'react-native-listener';

class CheckInForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      drink_name: "",
      location: "",
      review: "",
      user_id: this.props.session.currentUser.id,
      username: this.props.session.currentUser.username,
      rating: 0,
      initialRating: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }


  handleEnter(e){
    if (e.charCode == 13){
      return false;
    }
    if (e.keyCode == 13){
      return false;
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let checkInParams = {checkIn: {
      drink_name: this.state.drink_name,
      location_name: this.state.location,
      review: this.state.review,
      user_id: this.state.user_id,
      username: this.state.username,
      rating: this.state.initialRating
    }};
    if (window.drinkInput && window.venueInput){
      checkInParams = {checkIn: {
        drink_name: window.drinkInput.drink_name,
        drink_id: window.drinkInput.drink_id,
        location_name: window.venueInput.location_name,
        location_id: window.venueInput.location_id,
        review: this.state.review,
        user_id: this.state.user_id,
        username: this.state.username,
        rating: this.state.initialRating
      }};
    }

    this.props.newCheckIn(checkInParams);
    this.setState({drink_name: "", location: "", review: ""});
  }

  updateRating(rating){
        this.setState({rating: rating});
  }

  updateInitial(initialRating){
        this.setState({initialRating: initialRating});
  }


  render() {
    let greyCup = <div className="untoggled-cups">
                    <i className="fa fa-coffee" aria-hidden="true"></i>
                  </div>;
    let colorCup = <div className="toggled-cups">
                    <i className="fa fa-coffee" aria-hidden="true"></i>
                   </div>;
    const errors = this.props.errors.map(msg => (
      <li key={msg}>
        {msg}
      </li>
    ));
    return(
      <div className="checkIn-form-container">
        <h3>Check In</h3>
        <NativeListener  onKeyPress={this.handleEnter}>
          <form className="checkIn-form" onSubmit={this.handleSubmit}>
            <div className='inputSearches'>
              <DrinkSearch drinks={this.props.drinks} />

              <LocationSearch locations={this.props.locations} />
            </div>

            <textarea
              className="checkIn-input"
              placeholder="Review..."
              value={this.state.review}
              onChange={this.update('review')} />

            <div className="hover-rater">
              <h4>Rating:</h4>
              <Rating initialRate={this.state.initialRating}
                empty={greyCup} full={colorCup}
                placeholder={colorCup}
                onChange={this.updateRating.bind(this)}
                onClick={this.updateInitial.bind(this)}/>
            </div>

            <input type="hidden" value={this.props.session.currentUser.id} />

            <button className="check-in-button">Check In</button>

            <ul className='errors'>{errors}</ul>

          </form>
        </NativeListener>
      </div>
    );
  }
}

export default CheckInForm;
