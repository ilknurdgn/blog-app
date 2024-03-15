import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className='login'>
      <span className='loginTitle'>LOGİN</span>

      <form className='loginForm'>
        <label htmlFor='emailInput'>Email</label>
        <input
          type='email'
          placeholder='Enter your email...'
          id='emailInput'
          className='loginInput'
        />

        <label htmlFor='passwordInput'>Password</label>
        <input
          type='password'
          placeholder='Enter your password...'
          id='passwordInput'
          className='loginInput'
        />

        <button className='loginButton'>Login</button>
      </form>
      <button className='loginRegisterButton'>Register</button>
    </div>
  );
};

export default Login;
