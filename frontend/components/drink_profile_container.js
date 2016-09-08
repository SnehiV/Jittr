import { connect } from 'react-redux';
import DrinkProfile from './drink_profile';
import { requestCheckIns } from '../actions/checkIn_actions';
import { requestUsers } from '../actions/user_actions';
import { requestDrinks } from '../actions/drink_actions';

const mapStatetoProps = state => ({
  drinks: state.drinks.drinks,
  checkIns: state.checkIns.checkIns,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  fetchCheckIns: (checkInParams) => dispatch(requestCheckIns(checkInParams)),
  fetchUsers: () => dispatch(requestUsers()),
  fetchDrinks: () => dispatch(requestDrinks())
});



export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(DrinkProfile);
