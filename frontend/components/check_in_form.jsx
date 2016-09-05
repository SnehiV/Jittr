import React from 'react';
import {HoverRater} from './hover_rater';

class CheckInForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      drink_name: "",
      location: "",
      review: "",
      user_id: this.props.session.currentUser.id,
      username: this.props.session.currentUser.username,
      rating: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(){
    return (e) => {
      e.preventDefault();
      const checkInParams = {checkIn: this.state};
      this.props.newCheckIn(checkInParams);
      this.setState({drink_name: "", location: "", review: ""});
    };
  }

  handleHoverClick(rating){
    return (e) => {
      this.setState({rating: rating});
    };
  }


  render() {
    debugger
    // const errors = this.props.session.errors.map(msg => (
    //   <li>
    //     {msg}
    //   </li>
    // ));
          // <ul className='errors'>{errors}</ul>
    return(
      <form className="checkIn-form" onSubmit={this.handleSubmit()}>
        <input
          className="checkIn-input"
          type="text"
          placeholder="Drink"
          value={this.state.drink_name}
          onChange={this.update('drink_name')} />

        <input
          className="checkIn-input"
          placeholder="location"
          type="text"
          value={this.state.location}
          onChange={this.update('location')} />

        <textarea
            className="checkIn-input"
            placeholder="Review..."
            value={this.state.review}
            onChange={this.update('review')} />

        <HoverRater handleHoverClick={this.handleHoverClick.bind(this)} />

        <input type="hidden" value={this.props.session.currentUser.id} />

        <button className="check-in-button">Check In</button>

      </form>
    );
  }
}

export default CheckInForm;
