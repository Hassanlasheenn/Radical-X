import React, { useContext, useState } from 'react';
import { TickContext } from '../../../Context/useTickCircle';
import '../../../Styles/DescContent.css';

const DescContent = () => {

  const [desc, setDesc] = useState('');

  const { setTick } = useContext(TickContext); 

  const handleChange = (e) => {
    e.preventDefault();
    setDesc(e.target.value);

    if(desc.length > 0) {
      setTick("Description", true);
    }
    else {
      setTick("Description", false);
    }
  }

  return (
    <>
    <div className='descContent'>
        <p className='descriptionTitle'>Description</p>
          <textarea rows= "4" cols= "3" 
          className='descriptionTextField' 
          placeholder='Description'
          onChange={handleChange}
          value={desc}
          />
    </div>
    </>
  )
}

export default DescContent;
