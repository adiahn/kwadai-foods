import React, {useEffect, useState} from 'react';
import './Signup.css';
import Login from '../Login/Login';
import SetProfile from '../SetProfile/SetProfile';
import {Link} from 'react-router-dom'


const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
            <div className="container">
                <h1>SIGN UP</h1>
                <form id="signup-form" name="signup-form" onSubmit={handleSubmit}>
                    <label htmlFor="text">Full Name</label>
                    <input type="text" id="text" name="text" placeholder="Enter your full name" required />
                    <label htmlFor="email">Email or Username</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    <label htmlFor="pass">Password</label>
                    <input type="password" id="pass" name="pass" placeholder="*******" minLength="6" required />
                    <label htmlFor="confirm-pass">Confirm Password</label>
                    <input type="password" id="confirm-pass" name="confirm-pass" placeholder="*******" minLength="6" required />
                    <button type="submit" className='btn signup' href='/setProfile'>Sign up</button>
                </form>
                <div className="btn-container">
                    <a className='btn'>
                        <Link to="/Login">Already have an account</Link>
                    </a>
                </div>
            </div>
  );
};

export default Signup;
