import React from "react";
import { Navigate } from "react-router-dom";
import { AuthState } from "./AuthState";

export const PrivateRoute = ({ children }) => {
  let {loggedIn,loading} = AuthState();
  if(loading){
    return <h1>Loading...</h1>
  }
  return loggedIn ? children : <Navigate to={"/login"} />;
};
