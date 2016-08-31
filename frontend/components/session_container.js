import { connect } from 'react-redux';
import SessionForm from './session_form';
import {signUp, login} from '../actions/session_actions';

const mapStatetoProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  handleSignUp: (userParams) => dispatch(signUp(userParams)),
  handleLogin: (userParams) => dispatch(login(userParams))
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(SessionForm);
