import React from "react";
import { Navigate } from "react-router-dom";
import { AuthState } from "./AuthState";
import { Spinner } from "./Spinner";

export const PrivateRoute = ({ children }) => {
  let {loggedIn,loading} = AuthState();
  if(loading){
    return <Spinner/>
  }
  return loggedIn ? children : <Navigate to={"/login"} />;
};
