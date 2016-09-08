import React from 'react';
import Rating from 'react-rating';

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

  handleSubmit(){
    return (e) => {
      e.preventDefault();

      const checkInParams = {checkIn: {
        drink_name: this.state.drink_name,
        location: this.state.location,
        review: this.state.review,
        user_id: this.state.user_id,
        username: this.state.username,
        rating: this.state.initialRating
      }};

      this.props.newCheckIn(checkInParams);
      this.setState({drink_name: "", location: "", review: ""});
    };
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
        <form className="checkIn-form" onSubmit={this.handleSubmit()}>
          <input
            className="checkIn-input"
            type="text"
            placeholder="Drink..."
            value={this.state.drink_name}
            onChange={this.update('drink_name')} />

          <input
            className="checkIn-input"
            placeholder="Location..."
            type="text"
            value={this.state.location}
            onChange={this.update('location')} />

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
      </div>
    );
  }
}

export default CheckInForm;
