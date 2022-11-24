import React, { useContext } from 'react';
import { TickContext } from '../../Context/useTickCircle';

// css & icon imports 
import '../../Styles/Categories.css';
import menuIcon from '../../images/menu.svg';
// import arrowRightBtn from '../../images/arrow-right-internships.svg';
// import searchIcon from '../../images/search-normal.svg';
// import closeIcon from '../../images/close.svg';

const Categories = ({ name, onClick, icon }) => {

  const { activeCateg, setActiveCateg } = useContext(TickContext);

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
            <div  className='tickCircle' 
                  style={{  background: !activeCateg ? 'url(../images/tick-circle.png)' : setActiveCateg(true) }} 
            />
          </div>
          {icon && <img src={icon} alt='' />}
        </div>
      </div>
    </>
    
  )
}

export default Categories;
