import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';

class Splash extends React.Component{
  constructor(props){
    super(props);
  }

  // const handleLogin = () => {
  //   router.push('/login');
  // };
  //
  // const handleSignUp = () => {
  //   router.push('/signup');
  // };

  // <button className="splash-link" onClick={handleLogin}>Log In</button>
  // <button className="splash-link" onClick={handleSignUp}>Sign Up</button>
  render(){
      return(
        <div className="splash-page">
          <div className="logo-buttons">
            <h1 className="field">Jittr</h1>
            <div className="input-fields">
              <Link to="/login" className="splash-link">Login</Link>
              <Link to="/signup" className="splash-link">Sign Up</Link>
            </div>
          </div>
          {this.props.children}
        </div>
      );
    }
  }

export default withRouter(Splash);
