import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          src='https://images.pexels.com/photos/8820041/pexels-photo-8820041.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt=''
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <Link className='link' to='/posts?cat=Life'>
              Life
            </Link>
          </li>
          <li className='sidebarListItem'>
            <Link className='link' to='/posts?cat=music'>
              Music
            </Link>
          </li>
          <li className='sidebarListItem'>
            <Link className='link' to='/posts?cat=style'>
              Style
            </Link>
          </li>
          <li className='sidebarListItem'>
            <Link className='link' to='/posts?cat=sport'>
              Sport
            </Link>
          </li>
          <li className='sidebarListItem'>
            <Link className='link' to='/posts?cat=tech'>
              Tech
            </Link>
          </li>
          <li className='sidebarListItem'>
            <Link className='link' to='/posts?cat=cinema'>
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <div className='sidebarTitle'>FOLLOW US</div>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fab fa-facebook-square'></i>
          <i className='sidebarIcon fab fa-instagram-square'></i>
          <i className='sidebarIcon fab fa-pinterest-square'></i>
          <i className='sidebarIcon fab fa-twitter-square'></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
