import React from 'react';

import squareIcon from '../../../images/add-square-newInternship.svg';

export const Content = ({ name1, name2, name3, icon }) => {
  return (
    <>
        <div className='box'>
          <div className='boxComponent'>
            { icon && <img src={icon} alt='' /> }
            <span className='boxText'>{name1}</span>
          </div>
        </div> 
        
        <div className='box'>
          <div className='boxComponent'>
            { icon && <img src={icon} alt='' /> }
            <span className='boxText'>{name2}</span>
          </div>
        </div>
        <div className='box'>
          <div className='boxComponent'>
            { icon && <img src={icon} alt='' /> }
            <span className='boxText'>{name3}</span>
          </div>
        </div>
        
        <div className='addMoreBox'>
              <div className='addMoreComponent'>
                <img src={squareIcon} alt='' />
                <span className='addMoreText'>Add More</span>
              </div>
          </div>
    </>
  )
}

