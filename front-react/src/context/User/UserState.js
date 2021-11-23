import React, { useReducer } from "react";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

const UserState = (props) => {
  const initialState = {
    blocked: false,
    confirmed: false,
    email: "",
    username: "",
    role: {
      name: "",
      type: "",
    },
    jwt: "",
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ ...state }}>
      {props.children}
    </UserContext.Provider>
  );
};
