import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  //  () => {} -> Function and Dependency List are the contents inside the useeffect
  // In this case we dont have anything inside list so it will not execute more than once, rather only once
  // It executes more than once when anything in dependency list changes
  useEffect(()=>{
    if(localStorage.getItem('isLoggedIn') === '1')
    setIsLoggedIn(true);

  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    
  };

  return (
    // <React.Fragment> -> If ur using auth context we can remove Fragments
    //  We Provide value in provider because the ctx in consumer will crash hence it is required
    // We update the context from the result of useState so it updates ctx object and all components listens will posses it
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler // Passing function in ctx
  }}>
      <MainHeader /* isAuthenticated={isLoggedIn} - > Handled in useContext*/  /* onLogout={logoutHandler} */ />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
    // </React.Fragment>
    
  );
}

export default App;
