import React, {useState} from 'react';
import './Style.css';
import {Link} from 'react-router-dom'

const Login = ({handleLoginStatus}) => {
  const [loginStatus, setLoginStatus] = useState(false)
  // const email = email.value;
  // const handleLoginStatus = () => {
  //   setLoginStatus(true);
  //   if (password !== "1234" && email !== "user@user.com") {
  //     alert("Please rewrite your password")
  //   }
  // }
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email or Username</label>
          <input type="text" id="email" name="email" required placeholder='Email' />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password"  name="password" required placeholder='Password'/>
        </div>
        <Link to='/home'>
           <button className="btn btn-primary" onClick={handleLoginStatus}>Login</button>
        </Link>
      </form>
      <div className="login-options">
        <Link to='/signup'>Don't have an account?</Link>
        <Link to='/forgotpassword'>Forgot Password?</Link>
      </div>
    </div>
  );
};

export default Login;