import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/auth/AuthContext';
import './login.css';
import axios from 'axios';

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });

      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
      console.log(error);
    }
  };

  return (
    <div className='login'>
      <span className='loginTitle'>LOGİN</span>

      <form className='loginForm' onSubmit={handleSubmit}>
        <label htmlFor='usernameInput'>Username</label>
        <input
          type='text'
          placeholder='Enter your username...'
          id='usernameInput'
          className='loginInput'
          ref={userRef}
        />

        <label htmlFor='passwordInput'>Password</label>
        <input
          type='password'
          placeholder='Enter your password...'
          id='passwordInput'
          className='loginInput'
          ref={passwordRef}
        />

        <button className='loginButton' type='submit' disabled={isFetching}>
          LOGIN
        </button>
      </form>

      <Link className='link' to='/register'>
        <button className='loginRegisterButton'>REGISTER</button>
      </Link>
    </div>
  );
};

export default Login;
