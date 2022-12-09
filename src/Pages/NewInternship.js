import React from 'react';

// components imports 
import Navbar from '../Components/InternshipDescription/Navbar';
import InternshipDesc from '../Components/InternshipDescription/InternshipDesc';
import Categories from '../Components/InternshipDescription/Categories';
import { Outlet, useNavigate } from 'react-router-dom';

// css & icons imports 
import arrowRightBtn from '../images/arrow-right-internships.svg';
// import addMoreSq from '../images/add-square-newInternship.svg';
import unTickCircle from '../images/untick-circle-newInternship.svg';
import tickCatIcon from '../images/tick-circle.svg';





const NewInternship = () => {

  const navigate = useNavigate();

  return (
    <>
        {/* passing props for the label of the button */}
        <Navbar title="Continue to Guide" link={'internship-guide'} back={'internships'} />


        <div className='internshipBar'>
          <InternshipDesc name='Internship Description' icon={unTickCircle} />
          <InternshipDesc name='Internship Guide' icon={unTickCircle} />
          <InternshipDesc name='Surveys' icon={unTickCircle} />
          <InternshipDesc name='Settings' icon={unTickCircle} />
        </div>

        <div className='categoryContCategory'>
          <Categories name='Category' icon={arrowRightBtn} onClick={() => navigate('category')} tick={tickCatIcon} />
          <Categories name='Description' icon={arrowRightBtn} onClick={() => navigate('description')} tick={tickCatIcon}/>
          <Categories name='Location' icon={arrowRightBtn} onClick={() => navigate('location')}  tick={tickCatIcon}/>
          <Categories name='Benefits' icon={arrowRightBtn} onClick={() => navigate('benefits')} tick={tickCatIcon}/>
          <Categories name='Intro Video' icon={arrowRightBtn} onClick={() => navigate('intro-video')} tick={tickCatIcon}/>
          <Categories name='Mentor Details' icon={arrowRightBtn} onClick={() => navigate('mentor-details')} tick={tickCatIcon}/>
          <Categories name='Recommended Roles' icon={arrowRightBtn} onClick={() => navigate('recommended-roles')} tick={tickCatIcon}/>
          <Categories name='Web Links & Resources' icon={arrowRightBtn} onClick={() => navigate('links')} tick={tickCatIcon} />

          {/* Add more bar */}
            <div className='assessmentBarContCategory'>
              <svg className='add' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.6665 10H13.3332" stroke="#793EF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 13.3332V6.6665" stroke="#793EF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.49984 18.3332H12.4998C16.6665 18.3332 18.3332 16.6665 18.3332 12.4998V7.49984C18.3332 3.33317 16.6665 1.6665 12.4998 1.6665H7.49984C3.33317 1.6665 1.6665 3.33317 1.6665 7.49984V12.4998C1.6665 16.6665 3.33317 18.3332 7.49984 18.3332Z" stroke="#793EF5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Add More
            </div>
        </div>

        <Outlet />
    </>
  )
}

export default NewInternship;
