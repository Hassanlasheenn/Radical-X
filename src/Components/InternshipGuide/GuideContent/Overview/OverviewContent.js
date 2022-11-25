import React from 'react';

export const Content = ({ name, icon }) => {
  return (
        <div className='box'>
          <div className='boxComponent'>
            { icon && <img src={icon} alt='' /> }
            <span className='boxText'>{name}</span>
          </div>
        </div>
  )
}

