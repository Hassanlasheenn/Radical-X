import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import InternshipDesc from '../Components/InternshipDescription/InternshipDesc';
import Navbar from '../Components/InternshipDescription/Navbar';
import BoxContainer from '../Components/InternshipGuide/BoxContainer';

// css & icons imports
import unTickCircle from '../images/untick-circle-newInternship.svg';
import arrowIcon from '../images/arrow-right-internships.svg';
import addChapIcon from '../images/additem.svg';

const InternshipGuide = () => {

  const click = useNavigate();

  return (
    <>
        <Navbar title="Continue to Surveys" link={'surveys'} back={'new-internships'} />

        <div className='internshipBar'>
          <InternshipDesc name='Internship Description' icon={unTickCircle} />
          <InternshipDesc name='Internship Guide' icon={unTickCircle} />
          <InternshipDesc name='Surveys' icon={unTickCircle} />
          <InternshipDesc name='Settings' icon={unTickCircle} />
        </div>

        <div className='guideOverview'>
          <BoxContainer title='Overview' icon={arrowIcon} onClick={() => click('overview')} name1='Brief' name2='Requirements' name3='Milestones' />
          <BoxContainer title='Schedule' icon={arrowIcon} onClick={() => click('schedule')} name1='Duration' name2='Timeline' name3='Deliverables' />
          <BoxContainer title='Resources' icon={arrowIcon} onClick={() => click('resources')} name1='Curated Resources' name2='Events' />

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
