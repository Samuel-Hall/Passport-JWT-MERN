import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  path: url,
  handleLogout,
  user,
  modUser,
  getUser
}) => {
  // Get JWT from local storage.
  const token = localStorage.getItem("token");

  return (
    <Route
      path={url}
      render={props =>
        token ? (
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
