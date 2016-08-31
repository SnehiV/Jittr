import { connect } from 'react-redux';
import Index from './index';
import {logout} from '../actions/session_actions';


const mapStatetoProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(logout())
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Index);
