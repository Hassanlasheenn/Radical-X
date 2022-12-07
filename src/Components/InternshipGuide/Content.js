import React, { useContext } from 'react';
import { TickContext } from '../../Context/useTickCircle';

import squareIcon from '../../images/add-square-newInternship.svg';


export const Content = ({ name1, name2, name3, icon, tick }) => {

  const { active } = useContext(TickContext);

  return (
    <>
        <div className='box'>
          <div className='boxComponent'>
            { icon && <img src={icon} alt='' /> }
            <span className='boxText'>{name1}</span>
            { active[name1] && 
            <span>{ tick && <img src={tick} alt=''/> }</span>}
          </div>
        </div> 
        
        <div className='box'>
          <div className='boxComponent'>
            { icon && <img src={icon} alt='' /> }
            <span className='boxText'>{name2}</span>
            { active[name2] && 
            <span>{ tick && <img src={tick} alt=''/> }</span>}
          </div>
        </div>
        { name3 ? <div className='box'>
          <div className='boxComponent'>
            { icon && <img src={icon} alt='' /> }
            <span className='boxText'> {name3}</span>
            { active[name3] && 
            <span>{ tick && <img src={tick} alt=''/> }</span>}
          </div>
        </div> 
        : null }
        
        <div className='addMoreBox'>
              <div className='addMoreComponent'>
                <img src={squareIcon} alt='' />
                <span className='addMoreText'>Add More</span>
              </div>
          </div>
    </>
  )
}

