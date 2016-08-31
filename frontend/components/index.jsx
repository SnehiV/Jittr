import React from 'react';
import SessionContainer from './session_container';
import { withRouter } from 'react-router';


class Index extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps){
    // debugger
    if (nextProps.session.currentUser === null){
      this.props.router.replace("/");
    }
  }

  render() {
    // debugger
    return(
      <div>Home
        <button className="splash-button" onClick={this.props.handleLogout}>Log Out</button>
      </div>
    );
  }
}

export default withRouter(Index);
