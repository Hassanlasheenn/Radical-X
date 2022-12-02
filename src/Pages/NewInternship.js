import React from 'react';

// components imports 
import Navbar from '../Components/InternshipDescription/Navbar';
import InternshipDesc from '../Components/InternshipDescription/InternshipDesc';
import Categories from '../Components/InternshipDescription/Categories';
import { Outlet, useNavigate } from 'react-router-dom';

// css & icons imports 
import arrowRightBtn from '../images/arrow-right-internships.svg';
import addMoreSq from '../images/add-square-newInternship.svg';
import unTickCircle from '../images/untick-circle-newInternship.svg';
import tickCatIcon from '../images/tick-circle.svg';
import tickIntern from '../images/tick-circle-internship-finish.svg';




const NewInternship = () => {

  const navigate = useNavigate();

  return (
    <>
        {/* passing props for the label of the button */}
        <Navbar title="Continue to Next Step" link={'internship-guide'} back={'home'} />


        <div className='internshipBar'>
          <InternshipDesc name='Internship Description' icon={tickIntern} />
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
          <div className='assessmentBarCategory'>
            <div className='assessmentBarContCategory'>
              <img src={addMoreSq} alt='' />
              <span className='addTextCategory'>Add More</span> 
            </div>
          </div> 
        </div>

        <Outlet />
    </>
  )
}

export default NewInternship;
