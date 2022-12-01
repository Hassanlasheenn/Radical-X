import React from 'react';
import './button.css';


const Button = ({ icon, onClick, children }) => {

    const handleClick = () => {
        if (onClick) {
          onClick();
        }
      };
      
  return (
    <button onClick={handleClick} className='createInternshipContCreate'>
        { icon && <img src={icon} alt=''/> }
        <span className='btnTextCreate '>{children}</span>
    </button>
  )
}

export default Button;
