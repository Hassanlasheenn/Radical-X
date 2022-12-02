import React, { useContext, useState } from 'react';
import { TickContext } from '../../../Context/useTickCircle';
import '../../../Styles/BenefitsContent.css';

const BenefitsContent = () => {

  const [benefits, setBenefits] = useState('');

  const { setTick } = useContext(TickContext); 

  const handleChange = (e) => {
    e.preventDefault();
    setBenefits(e.target.value);

    if(benefits.length > 0) {
      setTick("Benefits", true);
    }
    else {
      setTick("Benefits", false);
    }
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
