import React, { useContext } from 'react';
import { TickContext } from '../../Context/useTickCircle';

// css & icon imports 
import '../../Styles/Categories.css';
import menuIcon from '../../images/menu.svg';
import tickCatIcon from '../../images/tick-circle.svg';


const Categories = ({ name, onClick, icon }) => {

  const { active, setActive } = useContext(TickContext);

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
            <span className='categoryTextCategory'>{name}</span>
            <span className='tickCircle' 
            style={{ background: active ? <img src={tickCatIcon} alt='' style={{ width: '24px', height: '24px' }} /> : setActive(false) }}  
            />
          </div>
          {icon && <img src={icon} alt='' />}
        </div>
      </div>
    </>
    
  )
}

export default Categories;
