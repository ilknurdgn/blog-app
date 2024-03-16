import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
      <span className='registerTitle'>REGISTER</span>

      <form className='registerForm'>
        <label htmlFor='usernameInput'>Username</label>
        <input
          type='text'
          placeholder='Enter your username...'
          id='usernameInput'
          className='registerInput'
        />

        <label htmlFor='emailInput'>Email</label>
        <input
          type='email'
          placeholder='Enter your email...'
          id='emailInput'
          className='registerInput'
        />

        <label htmlFor='passwordInput'>Password</label>
        <input
          type='password'
          placeholder='Enter your password...'
          id='passwordInput'
          className='registerInput'
        />

        <button className='registerButton'>REGISTER</button>
      </form>
      <Link className='link' to='/login'>
        <button className='registerLoginButton'>LOGIN</button>
      </Link>
    </div>
  );
};

export default Register;
