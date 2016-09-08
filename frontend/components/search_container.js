import { connect } from 'react-redux';
import { requestUsers } from '../actions/user_actions';
import Search from './search';

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(requestUsers())
});

const mapStatetoProps = state => ({
  users: state.users
});


export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Search);
