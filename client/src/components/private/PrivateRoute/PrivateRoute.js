import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  path: url,
  loggedIn,
  handleLogout,
  user,
  getUser
}) => {
  let session = sessionStorage.getItem("disco-panda");
  return (
    <Route
      path={url}
      render={props =>
        session ? (
          <Component
            handleLogout={handleLogout}
            user={user}
            getUser={getUser}
            {...props}
          />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
