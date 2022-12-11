import React, { useContext, useState } from 'react';
import { TickContext } from '../../Context/useTickCircle';

// css & icon imports

import addLogo from '../../images/add-square copy.svg';

const Question1 = ({ title }) => {

    const[question, setQuestion] = useState('');

    const { setTick } = useContext(TickContext);
  
    const handleChange = (e) => {
      e.preventDefault();
      setQuestion(e.target.value);
      
      if(question.trim().length === 0 ) {
        setTick("Survey 1", true);  
      }
      return;
    }

  return (
    <>
      <div className='surveyContentContainer'>
        <div className='surveyFieldContainer'>
          <span className='surveyOneText' style={{ fontSize: '19px'}}>{title}</span>
          <div className='surveyInputContainer'>
            <input 
              className='questionContainer'
              placeholder='Question'
              type='text'
              value={question}
              onChange={handleChange}
            />
            <div className='questionAddCont' style={{ cursor: 'pointer' }}>
              <img src={addLogo} alt=''/>
              <span className='questionText'>Add Question</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Question1;
