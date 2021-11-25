import React, { useEffect, useReducer, useState } from "react";
import { types } from "./types";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

const UserState = (props) => {
  let initialState = {
    blocked: false,
    confirmed: false,
    email: "",
    username: "",
    loggedIn: false,
    role: {
      name: "",
      type: "",
    },
    jwt: "",
  };

  const [state, dispatch] = useReducer(
    UserReducer,
    localStorage.getItem("userState")
      ? JSON.parse(localStorage.getItem("userState"))
      : initialState
  );

  useEffect(() => {
    localStorage.setItem("userState", JSON.stringify(state));
  }, [state]);

  const handleLogin = (user, jwt) => {
    dispatch({ type: types.HANDLE_LOGIN, user, jwt });
  };

  return (
    <UserContext.Provider value={{ ...state, handleLogin }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
