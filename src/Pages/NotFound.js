import React from 'react';
import '../Styles/NotFound.css';

const NotFound = () => {
  return (
    <>
      <div className='errorCont'>
        <h1 className='errorText'>404</h1>
        <h2 className='pageNotFound'>Page Not Found</h2>
        <p style={{ fontSize: '80px'}}>🤦🏽‍♂️</p>
      </div>
    </>
  )
}

export default NotFound;
