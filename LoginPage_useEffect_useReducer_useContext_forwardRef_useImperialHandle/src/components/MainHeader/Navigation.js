import React, {useContext} from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../context/auth-context";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    //  Auth context consumer has a function and returns the entire component
    // <AuthContext.Consumer> -> As we will use useContext Hook so we remove it

    
      <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button onClick={ctx.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
      
    // </AuthContext.Consumer>
  );
};

export default Navigation;
