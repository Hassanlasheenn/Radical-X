import React from 'react';
import '../../Styles/InternshipDesc.css';

const InternshipDesc = ({ icon, name, onClick }) => {

  const handleDesc = () => {
    if(onClick) {
      onClick()
    }
  }

  return (
    <>
      <div onClick={handleDesc}>
        <div className='internDesc'>
          { icon && <img src={icon} alt='' /> }
          <span className='descText'>{name}</span>
        </div>
      </div>
    </>
  )
}

export default InternshipDesc;