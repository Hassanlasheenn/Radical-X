import React, { useState } from 'react';
import '../../../Styles/DescContent.css';

const DescContent = () => {

  const [desc, setDesc] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setDesc(e.target.value);
  }

  return (
    <>
    <div className='descContent'>
        <span className='descriptionTitle'>Description</span>
        <div className='descField'>
            <textarea rows= "4" cols= "3" 
            className='descriptionTextField' 
            placeholder='Description'
            onChange={handleChange}
            value={desc}
            />
        </div>
    </div>
    </>
  )
}

export default DescContent;
