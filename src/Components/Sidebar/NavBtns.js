import React from 'react';
import '../../Styles/Sidebar.css';

const NavBtns = ({ icon, name, isActive, onClick }) => {

  const handleNavBtns = () => {
    if(onClick) {
      onClick();
    }
  }
  return (
        <div className={ isActive ? 'active-btn' : 'not-active' } onClick={handleNavBtns}>
            <img src={icon} alt='Navigation Icon' />
            <p className={ isActive ? 'active-text' : 'not-active' }>{name}</p>
        </div>
  )
}

export default NavBtns;

