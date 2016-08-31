import React from 'react';
import { withRouter } from 'react-router';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    if (this.props.session.currentUser !== nextProps.session.currentUser){
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

  render() {
    return(
      <form className="sessionForm" onSubmit={this.handleSubmit()}>
        <label>Username:
          <input
              className="input"
              type="text"
              value={this.state.username}
              onChange={this.update('username')}  />
        </label>

        <label>Password:
          <input
              className="input"
              type="text"
              value={this.state.password}
              onChange={this.update('password')}  />
        </label>
        <button className="submit-button">Submit</button>
      </form>
    );
  }
}

export default withRouter(SessionForm);
