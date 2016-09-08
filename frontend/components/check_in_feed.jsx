import React from 'react';
import CheckInItem from './check_in_item';

class CheckInFeed extends React.Component{
  constructor(props){
    super(props);
  }
  //
  componentWillUpdate(nextProps, nextState){

  }
  // }
  //

  render(){
    // debugger
    let checkInItems = Object.keys(this.props.checkIns).reverse().map(checkInId => {
      console.log(checkInId);
      return (
        <li key={checkInId}><CheckInItem checkIn={this.props.checkIns[checkInId]} /></li>
      );
      }
    );
    // debugger
    return(
      <div className="checkIn-feed">
        <h3>Recent Activity</h3>
        <ul className="checkIn-feed">
          {checkInItems}
        </ul>
      </div>
    );
  }
}

export default CheckInFeed;
