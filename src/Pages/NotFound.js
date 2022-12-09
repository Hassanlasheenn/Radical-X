import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import '../Styles/NotFound.css';

const NotFound = () => {
  return (
    <div className='container'>
      <Sidebar />
      <div className='errorCont'>
        {/* <h1 className='errorText'>Page is coming soon!</h1> */}
        <h2 className='pageNotFound'>Page is coming</h2>
        <p style={{ fontSize: '70px'}}>🔜</p>
      </div>
    </div>
  )
}

export default NotFound;
