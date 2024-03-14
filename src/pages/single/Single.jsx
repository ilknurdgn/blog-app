import React from 'react';
import './single.css';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import SinglePost from '../../components/singlePost/SinglePost.jsx';

const Single = () => {
  return (
    <div className='single'>
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
