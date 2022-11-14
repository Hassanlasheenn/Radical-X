import React from 'react';
import '../Styles/InternshipDesc.css';

const InternshipDesc = () => {
  return (
    <div className='internshipBar'>

        <div className='internDesc'>
          <div className='circleIconDesc' />
          <span className='descText'>Internship Description</span>
        </div>

        <div className='internGuideDesc'>
          <div className='circleIconDesc' />
          <span className='guideText'>Internship Guide</span>
        </div>

        <div className='surveysDesc'>
          <div className='circleIconDesc' />
          <span className='surveysText'>Surveys</span>
        </div>

        <div className='settingsDesc'>
          <div className='circleIconDesc' />
          <span className='settingsText'>Settings</span>
        </div>
    </div>
  )
}

export default InternshipDesc;
