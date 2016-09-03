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

  render() {
    const errors = this.props.session.errors.map(msg => (
      <li>
        {msg}
      </li>
    ));

    return(
      <div className="splash-page">
        <form className="sessionForm" onSubmit={this.handleSubmit()}>
            <h1 className="field">Jittr
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
              <ul className="errors">{errors}</ul>
            </div>
            </h1>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
