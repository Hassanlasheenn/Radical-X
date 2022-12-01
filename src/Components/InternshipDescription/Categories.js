import React, { useContext } from 'react';
import { TickContext } from '../../Context/useTickCircle';

// css & icon imports 
import '../../Styles/Categories.css';
import menuIcon from '../../images/menu.svg';
// import tickCatIcon from '../../images/tick-circle.svg';


const Categories = ({ name, onClick, icon, tick }) => {

  const { active } = useContext(TickContext);

  const handleCategories = () => {
      if (onClick) {
        onClick();
      }
  }
  
  return (
    <>
    <div className='categoryBarCategory'>
        <img src={menuIcon} alt='' />
        <div onClick={handleCategories} className='categoryBarContCategory'>
          <div className='textContCategory'>
            <span>{name}</span>
            { active && 
            <span>{ tick && <img src={tick} alt='' /> }</span> }
          </div>
          {icon && <img src={icon} alt='' />}
        </div>
      </div>
    </>
    
  )
}

export default Categories;
