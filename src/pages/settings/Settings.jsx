import React from 'react';
import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';

const Settings = () => {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Account</span>
        </div>

        <form className='settingsForm'>
          <label>Profile Picture</label>

          <div className='settingsPP'>
            <img
              src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
            />
            <label htmlFor='fileInput'>
              <i className='settingsPPIcon fa-regular fa-circle-user'></i>
            </label>
            <input type='file' id='fileInput' style={{ display: 'none' }} />
          </div>

          <label htmlFor='usernameInput'>Username</label>
          <input type='text' placeholder='Username' id='usernameInput' />

          <label htmlFor='emailInput'>Email</label>
          <input type='email' placeholder='example@gmail.com' id='emailInput' />

          <label htmlFor='passwordInput'>Password</label>
          <input
            type='password'
            name='password'
            id='passwordInput'
            placeholder='Password'
          />

          <button className='settingsSubmitButton' type='submit'>
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
