import React from 'react';
import CheckInItem from './check_in_item';

class CheckInFeed extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    if (this.props.fetchCheckIns){
      this.props.fetchCheckIns();
    }
  }


  render(){
    let checkInItems = Object.keys(this.props.checkIns).reverse().map(checkInId => (
        <li><CheckInItem checkIn={this.props.checkIns[checkInId]} /></li>
      )
    );
    return(
      <ul>
        {checkInItems}
      </ul>
    );
  }
}

export default CheckInFeed;
