import { connect } from 'react-redux';
import Splash from './splash';
import { login } from '../actions/session_actions';

const mapDispatchToProps = dispatch => ({
  handleLogin: (userParams) => dispatch(login(userParams))
});


export default connect(
  null,
  mapDispatchToProps
)(Splash);
