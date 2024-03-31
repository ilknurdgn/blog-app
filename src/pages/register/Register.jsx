import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    try {
      const res = await axios.post('/auth/register', {
        username,
        email,
        password,
      });

      res.data && window.location.replace('/login');
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className='register'>
      <span className='registerTitle'>REGISTER</span>

      <form className='registerForm' onSubmit={handleSubmit}>
        <label htmlFor='usernameInput'>Username</label>
        <input
          type='text'
          placeholder='Enter your username...'
          id='usernameInput'
          className='registerInput'
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor='emailInput'>Email</label>
        <input
          type='email'
          placeholder='Enter your email...'
          id='emailInput'
          className='registerInput'
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor='passwordInput'>Password</label>
        <input
          type='password'
          placeholder='Enter your password...'
          id='passwordInput'
          className='registerInput'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className='registerButton'>REGISTER</button>
      </form>
      <Link className='link' to='/login'>
        <button className='registerLoginButton'>LOGIN</button>
        {error && (
          <span style={{ color: 'red', marginTop: '10px' }}>
            Something went wrong!
          </span>
        )}
      </Link>
    </div>
  );
};

export default Register;
