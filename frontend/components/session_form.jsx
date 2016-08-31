import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.props = props;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(){
    let self = this;
    return (e) => {
      e.preventDefault();
      const userParams = {user: this.state};
      this.props.handleSignUp(userParams);
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

export default SessionForm;
