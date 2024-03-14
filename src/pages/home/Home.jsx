import React from 'react';
import './home.css';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
  return (
    <>
      <Header />
      <div className='home'>
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
