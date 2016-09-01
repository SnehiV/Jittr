import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router';

const Splash = ({router, children}) => {

  const handleLogin = () => {
    router.push('/login');
  };

  const handleSignUp = () => {
    router.push('/signup');
  };
  // <button className="splash-link" onClick={handleLogin}>Log In</button>
  // <button className="splash-link" onClick={handleSignUp}>Sign Up</button>


  return(
    <div className="splash-page">
      <div className="logo-buttons">
        <div className="field"></div>
        <div className="splash-links">
          <Link to="/login" className="splash-link">Log In</Link>
          <Link to="/signup" className="splash-link">Sign Up</Link>
          {children}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Splash);
