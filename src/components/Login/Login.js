import React, {useEffect, useState} from 'react';
import './Style.css';
import Signup from '../Signup/Signup';
import {Link} from 'react-router-dom'

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
        <div className="container">
        <h1>SIGN IN</h1>
        <form id="login-form" name="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email or Username</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" name="pass" placeholder="*******" required />
            <button type="submit" className='btn login login-btn'>
                <Link to="/Home" className='login-btn'>Login</Link>
            </button>
        </form>
        <div className="btn-container">
            <a className='btn'>
                <Link to="/Signup">Don't have an account?</Link>
            </a>
            <a className='btn'>
              <Link to="/ForgotPassword">Forgot Password</Link>
            </a>
        </div>
        </div>
  );
};

export default Login;
