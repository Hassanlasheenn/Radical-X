import React, { useState } from 'react';

// css & icon imports

import addLogo from '../../images/add-square copy.svg';


const SurveyQuestion = ({ title }) => {

  const[question, setQuestion] = useState('');

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

export default SurveyQuestion;
