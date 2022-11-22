import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TickContext } from '../../Context/useTickCircle';
import '../../Styles/InternshipDesc.css';

const InternshipDesc = () => {

  const { activeColor, setActiveColor, activePage } = useContext(TickContext);
  return (
    <div className='internshipBar'>
      <Link to={'/internships'} style={{ textDecoration: 'none' }}>
        <div className='internDesc'>
          <div  className='circleIconDesc'
                style={{ background: activePage ? 'url(../../images/tick-circle(1).png)' : <div className='circleDoneDesc' /> }}
          />
          <span className='descText' style={{ color: activeColor ? '#793EF5' : setActiveColor(false)}}>Internship Description</span>
        </div>
      </Link>

      <Link to={'/internship-guide'} style={{ textDecoration: 'none' }}>
        <div className='internGuideDesc' style={{ opacity: activeColor ? '1' : '0.3' }}>
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