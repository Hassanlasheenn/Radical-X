import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import InternshipDesc from '../Components/InternshipDescription/InternshipDesc';
import Navbar from '../Components/InternshipDescription/Navbar';
import Guide from '../Components/InternshipGuide/Guide';

// css & icons imports
import unTickCircle from '../images/untick-circle-newInternship.svg';
import arrowIcon from '../images/arrow-right-internships.svg';
import addChapIcon from '../images/additem.svg';
import tickIntern from '../images/tick-circle-internship-finish.svg';

const InternshipGuide = () => {

  const click = useNavigate();

  return (
    <>
        <Navbar title="Continue to Next Step" link={'surveys'} back={'internships'} />

        <div className='internshipBar'>
          <InternshipDesc name='Internship Description' icon={tickIntern} />
          <InternshipDesc name='Internship Guide' icon={unTickCircle} />
          <InternshipDesc name='Surveys' icon={unTickCircle} />
          <InternshipDesc name='Settings' icon={unTickCircle} />
        </div>
        <div className='guideOverview'>

          <Guide title='Overview' icon={arrowIcon} onClick={() => click('overview')} />
          <Guide title='Schedule' icon={arrowIcon} onClick={() => click('schedule')} />
          <Guide title='Resources' icon={arrowIcon} onClick={() => click('resources')} />

          <div className='chapterContainer'>
            <div className='addChapterCont'>
              <img src={addChapIcon} alt='' />
              <span className='chapterText'>Add Chapter</span>
            </div>
          </div> 
        </div>

        <Outlet />
    </>
  )
}

export default InternshipGuide;
