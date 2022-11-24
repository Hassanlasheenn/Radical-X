import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/InternshipDesc.css';

const InternshipDesc = () => {

  return (
    <div className='internshipBar'>
      <Link to={'/internships'} style={{ textDecoration: 'none' }}>
        <div className='internDesc'>
          <div  className='circleIconDesc' />
          <span className='descText'>Internship Description</span>
        </div>
      </Link>

      <Link to={'/internship-guide'} style={{ textDecoration: 'none' }}>
        <div className='internGuideDesc'>
          <div className='circleIcon' />
          <span className='guideText'>Internship Guide</span>
        </div>
      </Link>

        <Link to={'/surveys'} className='surveysDesc'>
          <div className='circleIcon' />
          <span className='surveysText'>Surveys</span>
        </Link>

        <Link to={'/settings'} className='settingsDesc'>
          <div className='circleIcon' />
          <span className='settingsText'>Settings</span>
        </Link>
    </div>
  )
}

export default InternshipDesc;