import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import InternshipDesc from '../Components/InternshipDescription/InternshipDesc';
import Navbar from '../Components/InternshipDescription/Navbar';
import SurveysContent from '../Components/Surveys/SurveysContent';

// css & icons imports
import unTickCircle from '../images/untick-circle-newInternship.svg';
import addChapIcon from '../images/additem.svg';
import tickCatIcon from '../images/tick-circle.svg';

const Surveys = () => {

  const click = useNavigate();

  return (
    <>
        <Navbar title="Continue to Settings" link={'settings'} back={'internship-guide'}/>

        <div className='internshipBar'>
          <InternshipDesc name='Internship Description' icon={unTickCircle} />
          <InternshipDesc name='Internship Guide' icon={unTickCircle} />
          <InternshipDesc name='Surveys' icon={unTickCircle} />
          <InternshipDesc name='Settings' icon={unTickCircle} />
        </div>

        <div className='surveysContainer'>
          <SurveysContent title='Survey 1' onClick={() => click('1')} tick={tickCatIcon} />
          <SurveysContent title='Survey 2' onClick={() => click('2')} tick={tickCatIcon} />

          <div className='assessmentContainer'>
                <div className='textContainerAssess'>
                    <img src={addChapIcon} alt='' />
                    <span className='addSurveyText'>Add Survey</span>
                </div>
            </div>
        </div>

        <Outlet />
    </>
  )
}

export default Surveys;
