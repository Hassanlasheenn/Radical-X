import React from 'react';
import '../Styles/LocationContent.css'

const LocationContent = () => {
  return (
    <div className='locationCont'>
        <span className='locationTitle'>Location</span>
        <div className='locationField'>
            <div className='locationLogo' />
            <span className='locFieldText'>Select Location</span>
            <div className='locationArrowDown' />
        </div>
    </div>
  )
}

export default LocationContent;
