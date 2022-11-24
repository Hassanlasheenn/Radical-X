import React from 'react';
import { Outlet } from 'react-router-dom';
import InternshipDesc from '../Components/InternshipDescription/InternshipDesc';
import Navbar from '../Components/InternshipDescription/Navbar';
import Guide from '../Components/InternshipGuide/Guide';

// css & icons imports
import unTickCircle from '../images/untick-circle-newInternship.svg';

const InternshipGuide = () => {
  return (
    <>
        <Navbar title="Continue to Next Step" link={'surveys'} back={'internships'} />

        <div className='internshipBar'>
          <InternshipDesc name='Internship Description' icon={unTickCircle} />
          <InternshipDesc name='Internship Guide' icon={unTickCircle} />
          <InternshipDesc name='Surveys' icon={unTickCircle} />
          <InternshipDesc name='Settings' icon={unTickCircle} />
        </div>
        
        <Guide />

        <Outlet />
    </>
  )
}

export default InternshipGuide;
