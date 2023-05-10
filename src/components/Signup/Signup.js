import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dateOfBirth: '',
  });

  const [formError, setFormError] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dateOfBirth: '',
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, email, address, phone, password, confirmPassword, gender, dateOfBirth } = formData;
    let error = false;

    // Check for errors in the form data
    let formErrorCopy = { ...formError };
    if (name === '') {
      formErrorCopy.name = 'Name is required';
      error = true;
    } else {
      formErrorCopy.name = '';
    }
    if (email === '') {
      formErrorCopy.email = 'Email is required';
      error = true;
    } else {
      formErrorCopy.email = '';
    }
    if (address === '') {
      formErrorCopy.address = 'Address is required';
      error = true;
    } else {
      formErrorCopy.address = '';
    }
    if (phone === '') {
      formErrorCopy.phone = 'Phone is required';
      error = true;
    } else {
      formErrorCopy.phone = '';
    }
    if (password === '') {
      formErrorCopy.password = 'Password is required';
      error = true;
    } else {
      formErrorCopy.password = '';
    }
    if (confirmPassword !== password) {
      formErrorCopy.confirmPassword = 'Passwords do not match';
      error = true;
    } else {
      formErrorCopy.confirmPassword = '';
    }
    if (gender === '') {
      formErrorCopy.gender = 'Gender is required';
      error = true;
    } else {
      formErrorCopy.gender = '';
    }
    if (dateOfBirth === '') {
      formErrorCopy.dateOfBirth = 'Date of Birth is required';
      error = true;
    } else {
      formErrorCopy.dateOfBirth = '';
    }

    setFormError(formErrorCopy);

    // If there are no errors, submit the form
    if (!error) {
      console.log('Form submitted successfully!');
      // TODO: Add form submission logic here
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          {formError.name && <p className="error">{formError.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
          {formError.email && <p className="error">{formError.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required />
          {formError.address && <p className="error">{formError.address}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
          {formError.phone && <p className="error">{formError.phone}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
          {formError.password && <p className="error">{formError.password}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
          {formError.confirmPassword && <p className="error">{formError.confirmPassword}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {formError.gender && <p className="error">{formError.gender}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleInputChange} required />
          {formError.dob && <p className="error">{formError.dob}</p>}
        </div>
        <div className='form-group'>
          <button className="btn btn-primary" type="submit">Sign Up</button>
        </div>
      </form>
      <div className="login-options">
        <Link to='/login'>Already have an account?</Link>
      </div>
    </div>
  );
};

export default Signup;