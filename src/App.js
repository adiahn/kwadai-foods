import React, {useState} from "react";
import {Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

const App = () => {
  return (
    <div className="App">
      <Routes>
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
