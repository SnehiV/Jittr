import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps({session}) {
    // debugger
    if (this.props.session.currentUser !== session.currentUser){
      this.props.router.replace("/home");
    }
  }

  checkLoggedIn(currentSession){
    if (this.props.session.currentUser !== currentSession.currentUser){
      this.props.router.replace("/home");
    }
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  dispatch(userParams) {
    if (this.props.location.pathname === "/login"){
      return this.props.handleLogin(userParams);
    } else if (this.props.location.pathname === "/signup") {
      return this.props.handleSignUp(userParams);
    }
  }

  handleSubmit(){
    return (e) => {
      e.preventDefault();
      const userParams = {user: this.state};
      this.dispatch(userParams);
      this.setState({username: "", password: ""});
    };
  }

  handleGuestLogin(){
    return (e) => {
      e.preventDefault();
      let userParams = {user: {username: "Guest", password: "password"}};
      this.props.handleLogin(userParams);
    };
  }

  render() {
    let errors;
    if (this.props.session.errors){
      errors = this.props.session.errors.map(msg => (
        <li>
          {msg}
        </li>
      ));
    } else {
      errors = [<li></li>];
    }

    return(
      <div className="splash-page">
        <form className="sessionForm" onSubmit={this.handleSubmit()}>
            <h1 className="field"><Link to="/" className="logo">Jittr</Link></h1>
            <div className="splash-links">
              <input
                className="input1"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}  />

              <input
                className="input1"
                placeholder="Password"
                type="text"
                value={this.state.password}
                onChange={this.update('password')}  />
            </div>
            <div className="submit-button">
              <button className="button1">Submit</button>
            </div>
            <ul className="errors">{errors}</ul>
            <a className="demo-login" onClick={this.handleGuestLogin()}>Demo Login</a>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
