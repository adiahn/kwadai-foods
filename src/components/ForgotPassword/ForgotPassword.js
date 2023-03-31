import React, { useState } from 'react';
import './Style.css';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email to reset password
    console.log(`Email sent to ${email}`);
  };

  return (
    <div className="SetProfile">
      <h3>FORGOT PASSWORD</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Please Enter your email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="buttons">
          <button className="btn2" type="submit">
            Reset Password
          </button>
          <button className="btn1">
            <Link to="/Login">Back</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
