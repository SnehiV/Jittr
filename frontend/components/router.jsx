import React from 'react';
import SessionContainer from './session_container';
import App from './app';
import { Router, Route, IndexRoute, hashHistroy } from 'react-router';
import Splash from './splash';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
  }

  _redirectIfLoggedIn(nextState, replace){
    if (this.props.currentUser){
      replace("/home");
    }
  }

  _ensureLoggedIn(nextState, replace){
    const currentUser = this.props.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  render(){
    return (
      <Router history={hashHistroy}>
        <Route path="/" component={Splash} onEnter={this._redirectIfLoggedIn} />
        <Route path="signup" component={SessionContainer} onEnter={this._redirectIfLoggedIn} />
        <Route path="login" component={SessionContainer} onEnter={this._redirectIfLoggedIn}/>
        <Route path="home" component={App} onEnter={this._ensureLoggedIn}/>
      </Router>
    );
  }
}

export default AppRouter;
