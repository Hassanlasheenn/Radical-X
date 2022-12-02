/* eslint-disable no-restricted-globals */
import React, { useContext } from 'react';
import { TickContext } from '../../Context/useTickCircle';

const Button_2 = ({
    icon,
    onClick,
    children,
}) => {

  const { active } = useContext(TickContext);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <>
      {active[children] ?
        <button onClick={handleClick} className="continueBtnNavbarActive">
            <span className='continueTextNavbarActive'>{children}</span>
            { icon && <img src={icon} alt=''/> }
        </button>
        :
        <button onClick={handleClick} className="continueBtnNavbar">
            <span className='continueTextNavbar'>{children}</span>
            { icon && <img src={icon} alt=''/> }
        </button>
      }
    </>

  )
}

export default Button_2;
