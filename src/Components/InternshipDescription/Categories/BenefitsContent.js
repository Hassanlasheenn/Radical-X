import React, { useState } from 'react';
import '../../../Styles/BenefitsContent.css';

const BenefitsContent = () => {

  const [benefits, setBenefits] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setBenefits(e.target.value);
  }

  return (
    <div className='benefitsContent'>
        <span className='benefitsTitle'>Benefits</span>
        <div className='benefitsField'>
            <textarea 
              className='benefitsTextField'
              placeholder='Description'
              onChange={handleChange}
              value={benefits}
            />
        </div>
    </div>
  )
}

export default BenefitsContent;
