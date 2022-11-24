import React from 'react'

const Back_Button = ({
    icon,
    onClick,
    children,
}) => {
    const handleClick = () => {
        if(onClick) {
            onClick();
        }
    }
  return (
    <button onClick={handleClick} className='backBtnNavbar'>
      { icon && <img src={icon} alt='' /> }
      <span className='backTextNavbar'>{children}</span>
    </button>
  )
}

export default Back_Button;
