import React from 'react';
import { Outlet } from 'react-router-dom';
import InternshipDesc from '../Components/InternshipDescription/InternshipDesc';
import Navbar from '../Components/InternshipDescription/Navbar';
import SurveysContent from '../Components/Surveys/SurveysContent';

// css & icons imports
import unTickCircle from '../images/untick-circle-newInternship.svg';

const Surveys = () => {
  return (
    <>
        <Navbar title="Continue to Next Step" link={'settings'} back={'internship-guide'}/>

        <div className='internshipBar'>
          <InternshipDesc name='Internship Description' icon={unTickCircle} />
          <InternshipDesc name='Internship Guide' icon={unTickCircle} />
          <InternshipDesc name='Surveys' icon={unTickCircle} />
          <InternshipDesc name='Settings' icon={unTickCircle} />
        </div>
        <SurveysContent />

        <Outlet />
    </>
  )
}

export default Surveys;
