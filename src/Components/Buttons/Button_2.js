import React from 'react';

const Button_2 = ({
    icon,
    onClick,
    children,
}) => {

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
      <button onClick={handleClick} className='continueBtnNavbar'>
          <span className='continueTextNavbar '>{children}</span>
          { icon && <img src={icon} alt=''/> }
      </button>
  )
}

export default Button_2;
