import React from 'react';


const Survey1 = () => {
  return (
    <>
      <div className='surveyContentContainer'>
        <div className='surveyFieldContainer'>
          <span className='surveyOneText'>Survey 1</span>
          <div className='surveyInputContainer'>
            <input 
              className='questionContainer'
              placeholder='Question'
              type='text'
            />
            <div className='questionAddCont'>
              <div className='addSquareLogo'/>
              <span className='questionText'>Add Question</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Survey1;
