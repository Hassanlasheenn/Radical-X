import React from 'react';

// css & icon imports

import addLogo from '../../../images/add-square copy.svg';


const SurveyContent = ({ title }) => {
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
            <div className='questionAddCont'>
              <img src={addLogo} alt='' />
              <span className='questionText'>Add Question</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SurveyContent;
