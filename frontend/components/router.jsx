import React from 'react';
import SessionContainer from './session_container';
import IndexContainer from './index_container';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Splash from './splash';
import CheckInItem from './check_in_item';
import UserContainer from './user_profile_container';
import App from './app';


class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
  }

  _redirectIfLoggedIn(nextState, replace){
    debugger
    if (this.props.currentUser){
      replace("/home");
    }
  }

  _ensureLoggedIn(nextState, replace){
    const currentUser = this.props.currentUser;
    if (!currentUser) {
      replace('/');
    }
  }
  // onEnter={this._redirectIfLoggedIn}

  render(){
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Splash} />
          <Route path="signup" component={SessionContainer} onEnter={this._redirectIfLoggedIn} />
          <Route path="login" component={SessionContainer} onEnter={this._redirectIfLoggedIn}/>
          <Route path="home" component={IndexContainer} onEnter={this._ensureLoggedIn}/>
          <Route path="users/:id" component={UserContainer} onEnter={this._ensureLoggedIn} />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
