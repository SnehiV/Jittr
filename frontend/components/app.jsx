import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let currentUserProfileLink;
    if (this.props.currentUser) {
      let currentUserRoute = `/users/${this.props.currentUser.id}`;
      currentUserProfileLink = <li><Link to={currentUserRoute}>Profile</Link></li>;
    }

    return(
      <div>
        <nav>
          <h1><Link to="/home" className="nav-logo">Jittr</Link></h1>

          <ul className="nav-list">
            <li><Link to="/home" />Recent Activity</li>
            {currentUserProfileLink}
            <li><a onClick={this.props.handleLogout}>Logout</a></li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(App);
