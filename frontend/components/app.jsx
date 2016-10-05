import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';
import SearchContainer from './search_container';
import TopLocationsContainer from './top_locations_container';

class App extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    let currentUserProfileLink;
    let username;
    if (this.props.currentUser) {
      let currentUserRoute = `/users/${this.props.currentUser.id}`;
      currentUserProfileLink = <Link to={currentUserRoute}>Profile</Link>;
      username = this.props.currentUser.username;
    }
    return(
      <div className="app-container">
        <nav className="navbar">
          <h1 className="nav-logo">
            <Link to="/home" className="nav-logo-link">Jittr</Link>
          </h1>
          <ul className="nav-list">
            <li><Link to="/home">Recent Activity</Link></li>
            <li><Link to="/TopLocations">Top Locations</Link></li>
            <li><Link to="/friends">Friends</Link></li>
            <section className="search-bar"><SearchContainer /></section>
            <div className='dropdown'>
              <li className="dropbtn">{username}&nbsp;<i className="fa fa-angle-down" aria-hidden="true"></i></li>
                <ul className="dropdown-content">
                  {currentUserProfileLink}
                  <a onClick={this.props.handleLogout}>Logout</a>
                </ul>
            </div>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(App);
