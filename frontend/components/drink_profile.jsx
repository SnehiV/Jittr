import React from 'react';
import { withRouter, Link } from 'react-router';
import CheckInFeed from './check_in_feed';


class DrinkProfile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      drink: {},
      drinkId: 0,
      name: "",
      description: "",
      brewStyle: "",
      checkIns: {}
    };
  }

  componentWillMount(){
    let checkInParams = {checkIn: {filter: "all"}};
    this.props.fetchCheckIns(checkInParams);
    this.props.fetchUsers();
    this.props.fetchDrinks();
  }

  componentWillReceiveProps(nextProps){
    let currentDrinkId = parseInt(this.props.params.id);
    if (nextProps.drinks[currentDrinkId]) {
      this.setState({
        drink: nextProps.drinks[currentDrinkId],
        drinkId: currentDrinkId,
        name: nextProps.drinks[currentDrinkId].name,
        description: nextProps.drinks[currentDrinkId].description,
        brewStyle: nextProps.drinks[currentDrinkId].brew_style,
        checkIns: this.findRelatedCheckIns(nextProps.checkIns)
      });
    }
  }

  // selectDrink(){
  //   debugger
  //   const currentDrinkId = parseInt(this.props.params.id);
  //   return this.props.drinks[currentDrinkId];
  // }

  findRelatedCheckIns(checkIns){
    let relatedCheckIns = {};
    let drinkId = this.state.drinkId;
    Object.keys(checkIns).forEach(checkInId => {
      if (checkIns[checkInId].drink_id === drinkId) {
        relatedCheckIns[checkInId] = checkIns[checkInId];
      }
    });
    return relatedCheckIns;
  }

  relatedUsers(){
    const relatedUsers = [];
    // debugger
    if (this.state.checkIns) {
      Object.keys(this.state.checkIns).forEach((checkInId => {
        relatedUsers.push(this.state.checkIns[checkInId].user);
      }));
    }
    return relatedUsers;
  }

  render(){
    const Profile = (
      <div className="drink-profile">
        <div className="profile-header">
          <h2>{this.state.name}</h2>
          <h4>{this.state.brewStyle}</h4>
          <p>{this.state.description}</p>
        </div>
        <div className="drink-picture"></div>
      </div>
    );

    const UserList =
    // if this
      this.relatedUsers().map((user, idx) => {
        let userRoute = `/users/${user.id}`;
        return(
          <li key={idx}>
            <Link to={userRoute}>{user.username}</Link>    
          </li>
        );
      });

    return(
      <div className="drink-profile-container">
        <div className="drink-profile-content">
          {Profile}
          <CheckInFeed checkIns={this.state.checkIns} />
        </div>
        <div className="user-list-container">
          <h3>Users who drink {this.state.name}</h3>
          {UserList}
        </div>
      </div>
    );
  }
}

export default withRouter(DrinkProfile);
