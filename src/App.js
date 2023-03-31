import React, {useState} from "react";
import {Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import SetProfile from "./components/SetProfile/SetProfile";
import Home from "./components/Home/Home";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";




const App = () => {
  return (
    <div className="App">
      <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/SetProfile" element={<SetProfile />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/ForgotPassword" element={<ForgotPassword />} />

      </Routes>
    </div>
  );
}

export default App;