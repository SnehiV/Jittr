import { connect } from 'react-redux';
import { requestUsers } from '../actions/user_actions';
import { requestDrinks } from '../actions/drink_actions';
import Search from './search';

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(requestUsers()),
  fetchDrinks: () => dispatch(requestDrinks())
});

const mapStatetoProps = state => ({
  users: state.users,
  drinks: state.drinks.drinks
});


export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Search);
