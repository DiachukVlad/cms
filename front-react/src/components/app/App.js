//@flow

import './App.css';
import React, { Component, useEffect, useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from '../login/Login';
import NavBar from '../navbar/NavBar'
import Register from '../register/Register';
import Products from '../products/Products';
import Posts from '../posts/Posts';

export type Role = {
  name: string,
  type: string
}

export type User = {
  blocked: boolean,
  confirmed: boolean,
  email: string,
  username: string,
  role: Role,

}

export type UserData = {
  jwt: string,
  user: User
}

export type UserContextType = { userData: ?UserData, setUserData: ?UserData => void }

export const UserContext: React$Context<UserContextType> = React.createContext < UserContextType > ({})

function App(): React$Element<"div"> {
  const [user, setUser] = useState <? UserData > ()

  const contextData: UserContextType = { userData: user, setUserData: setUser }

  useEffect(() => {
    const userDataString: ?string = localStorage.getItem("UserData")
    if (userDataString != null) {
      const user: UserData = JSON.parse(userDataString)
      setUser(user)
    }
  }, [])

  return (
    <div className="App">
      <UserContext.Provider value={contextData}>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

          </Routes>

        </BrowserRouter>
      </UserContext.Provider>
    </div>

  );
}

export default App;
