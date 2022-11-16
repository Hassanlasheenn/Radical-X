import React, { useContext, useState } from 'react';
import { TickContext } from '../Context/useTickCircle';
import '../Styles/DescContent.css';

const DescContent = () => {

  const { setActiveDesc } = useContext(TickContext);

  const [desc, setDesc] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setDesc(e.target.value);
    setActiveDesc(true)
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
