import React from 'react';
import { withRouter } from 'react-router';

const Splash = ({router, children}) => {

  const handleLogin = () => {
    router.push('/login');
  };

  const handleSignUp = () => {
    router.push('/signup');
  };

  return(
    <div className="splash-buttons">
      <button className="splash-button" onClick={handleLogin}>Log In</button>
      <button classNAme="splash-button" onClick={handleSignUp}>Sign Up</button>
      {children}
    </div>
  );
};

export default withRouter(Splash);
